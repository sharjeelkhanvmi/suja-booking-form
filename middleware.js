import { NextResponse } from 'next/server'
import decodeToken from "jwt-decode";
export function middleware(request) {
    let cookie = request.cookies.get('token')
    let userData = false
    if(cookie)
    {
        userData = decodeToken(cookie.value)
    }
    if ((request.nextUrl.pathname.startsWith('/admin')) && (!cookie) ) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    else if ((request.nextUrl.pathname.startsWith('/admin')) && (cookie) ) {
        if(userData && !(userData.role == 'admin'))
        {
            return NextResponse.redirect(new URL('/'+userData.role, request.url))
        }
    }
    if ((request.nextUrl.pathname.startsWith('/customer')) && (!cookie) ) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    else if ((request.nextUrl.pathname.startsWith('/customer')) && (cookie) ) {
        if(userData && !(userData.role == 'customer'))
        {
            return NextResponse.redirect(new URL('/'+userData.role, request.url))
        }
    }
    if ((request.nextUrl.pathname.startsWith('/login')) && (cookie) ) { 
        return NextResponse.redirect(new URL('/admin', request.url))
    }
}
