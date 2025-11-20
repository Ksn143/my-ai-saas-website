'use server'

// 1. योग्य Imports
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// 2. createClient फंक्शन योग्यरित्या इम्पोर्ट करा
// (तुमच्याकडे src/lib/supabase/server.ts ही फाईल आहे ना? आपण ती आधी बनवली होती)
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  console.log("Login attempt for:", email); // लॉग 1

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error("Login Error from Supabase:", error.message); // लॉग 2
    return { error: 'लॉगिन अयशस्वी: ' + error.message }
  }

  console.log("Login Success! Redirecting..."); // लॉग 3
  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // 1. We need 'data' to check for the session
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // This ensures that after clicking the link, they come back to your live site
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/callback`, 
    }
  })

  if (error) {
    console.error("Signup Error:", error.message)
    return { error: 'Signup failed: ' + error.message }
  }

  // 2. CRITICAL CHECK: 
  // If "Confirm Email" is ON, data.session will be null.
  // If "Confirm Email" is OFF, data.session will exist.
  if (data.session) {
    revalidatePath('/', 'layout')
    redirect('/dashboard')
  } else {
    // 3. Redirect to a page telling them to check their email
    redirect('/verify-email')
  }
}