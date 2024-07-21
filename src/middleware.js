import { cookies } from 'next/headers'

export function middleware(request) {
  const encryptedSessionData = cookies().get('session')?.value
  const sessionData = encryptedSessionData ? JSON.parse(encryptedSessionData) : null;

  const currentUser = sessionData;
  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/admin/(.*)'],
}