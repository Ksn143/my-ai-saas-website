'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // फॉर्ममधून डेटा घेणे
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: 'लॉगिन अयशस्वी: ' + error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard') // यशस्वी झाल्यावर डॅशबोर्डवर जा
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('fullName') as string

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName, // युजरचे नाव डेटाबेसमध्ये सेव्ह करण्यासाठी
      },
    },
  })

  if (error) {
    return { error: 'साइन अप अयशस्वी: ' + error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}