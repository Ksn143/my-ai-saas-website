'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { headers } from "next/headers"; // Import this

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
export async function forgotPassword(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const origin = (await headers()).get("origin"); // Get the current domain automatically

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    // This ensures the user is redirected to a page where they can type a new password
    redirectTo: `${origin}/auth/callback?next=/update-password`,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

// 2. Action to SAVE the new password
export async function updatePassword(formData: FormData) {
  const supabase = await createClient();
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}