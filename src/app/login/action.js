"use server"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export async function doLogin(credentials) {
    const encryptedSessionData = JSON.stringify(credentials) // Encrypt your session data
    cookies().set('session', encryptedSessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // One week
      path: '/',
    });
    redirect("/admin")
}