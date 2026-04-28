import { NextResponse } from "next/server";
import { auth } from "./utils/auth";
// import { headers } from "next/headers";

export async function proxy(request) {
    // return NextResponse.redirect(new URL('/login', request.url))
    console.log(request, "request")
    // return NextResponse.next();
    const session = await auth.api.getSession({
        // headers: await headers()
        headers: request.headers
    });
    console.log(session, "session")
    // console.log("Full session object:", JSON.stringify(session, null, 2));
    // const isLoggedIn = false;
    // if (isLoggedIn) {
    //     return NextResponse.next();
    // }
    // return NextResponse.redirect(new URL('/login', request.url))
    // if--else
    if (session) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    // matcher: ['/career', '/about'],
    matcher: ['/career', '/news/:path*'],
}

/* 

import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: '/about/:path*',
}

*/