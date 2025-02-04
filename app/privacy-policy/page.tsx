import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Introduction</h2>
          <p>Welcome to R.A.S.A.D. We respect your privacy and are committed to protecting your personal data.</p>
          
          <h2>2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
          <ul>
            <li>Identity Data</li>
            <li>Contact Data</li>
            <li>Financial Data</li>
            <li>Transaction Data</li>
            <li>Technical Data</li>
            <li>Profile Data</li>
            <li>Usage Data</li>
            <li>Marketing and Communications Data</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>To provide our services to you</li>
            <li>To process your payments</li>
            <li>To manage our relationship with you</li>
            <li>To improve our website and services</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

          <h2>5. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct, erase, restrict, transfer, or object to the processing of your personal data.</p>

          <h2>6. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@rasad.com.</p>
        </CardContent>
      </Card>
    </div>
  )
}

