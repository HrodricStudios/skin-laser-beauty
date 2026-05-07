import './globals.css'

export const metadata = {
  title: 'SkinLaser & Beauty | Premium Laser & Beauty Clinic',
  description: 'Experience the perfect blend of advanced laser technology and luxurious beauty treatments at SkinLaser & Beauty.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}