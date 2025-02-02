import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-3xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using R.A.S.A.D.'s services, you agree to be bound by these Terms of Service.</p>
          
          <h2>2. Description of Service</h2>
          <p>R.A.S.A.D. provides an online platform for booking flights and related travel services.</p>

          <h2>3. User Accounts</h2>
          <p>You may be required to create an account to use certain features of our service. You are responsible for maintaining the confidentiality of your account information.</p>

          <h2>4. User Conduct</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms of Service.</p>

          <h2>5. Booking and Cancellation</h2>
          <p>All bookings are subject to availability and acceptance. Cancellation policies may vary depending on the specific booking.</p>

          <h2>6. Pricing and Payment</h2>
          <p>All prices are subject to change without notice. You agree to pay all charges at the prices then in effect for your purchases.</p>

          <h2>7. Limitation of Liability</h2>
          <p>R.A.S.A.D. shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the services.</p>

          <h2>8. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Your continued use of our services constitutes agreement to such modifications.</p>

          <h2>9. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction].</p>

          <h2>10. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at terms@rasad.com.</p>
        </CardContent>
      </Card>
    </div>
  )
}

