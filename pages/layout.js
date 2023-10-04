"use client"
export const metadata = {
  title: 'Suja Driving School Booking',
  description: 'Booking form for Suja Driving School',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
