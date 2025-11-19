'use server'

// 1. योग्य Imports
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// 2. createClient फंक्शन योग्यरित्या इम्पोर्ट करा
// (तुमच्याकडे src/lib/supabase/server.ts ही फाईल आहे ना? आपण ती आधी बनवली होती)
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  // 3. createClient ला await करणे
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: 'लॉगिन अयशस्वी: ' + error.message }
  }

  // 4. यशस्वी झाल्यास
  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signUp({
    email,
    password,
    // टीप: ईमेल कन्फर्मेशन बंद केले असेल तरच हे थेट लॉगिन होईल
  })

  if (error) {
    console.error("Signup Error:", error.message)
    return { error: 'साइन अप अयशस्वी: ' + error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

// Google Login चे काम आपण Client Side (page.tsx) मधून करत आहोत,
// त्यामुळे इथे त्याची गरज नाही.