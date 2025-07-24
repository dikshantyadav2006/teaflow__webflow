import React from 'react'

const PrivacyPolicyContent = () => {
  return (
    <div className="w-full min-h-screen px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="uppercase font-['font4'] text-[8vw] sm:text-[6vw] lg:text-[4vw] font-black text-gray-900 mb-4">
            PRIVACY POLICY
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: January 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to TeaFlow ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Register for an account</li>
                <li>Make a purchase</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us with inquiries</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Information Automatically Collected</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect certain information when you visit our website, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Processing and fulfilling your orders</li>
                <li>Providing customer service and support</li>
                <li>Sending you marketing communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with third-party service providers who perform services on our behalf, such as payment processing, shipping, email marketing, and website analytics.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use industry-standard encryption protocols and regularly update our security practices to ensure the highest level of protection for your data.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When we transfer your information internationally, we ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We encourage you to review the privacy policies of any third-party sites you visit through links on our website.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last updated" date at the top of this policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@teaflow.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Tea Street, Brew City, BC 12345</p>
                <p className="text-gray-700"><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM PST</p>
              </div>
            </section>

            {/* Effective Date */}
            <section className="border-t pt-8 mt-8">
              <p className="text-sm text-gray-500 text-center">
                This Privacy Policy is effective as of January 1, 2024, and was last updated on January 15, 2024.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyContent
