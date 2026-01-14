import { Link } from 'react-router-dom';

export default function DIYGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Disclaimer Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
            <p className="text-yellow-700 text-sm leading-relaxed">
              This guide is for informational purposes only and does not constitute legal advice. 
              Procedures and requirements may change. Always verify current requirements with the 
              FBI and relevant authorities before submitting your application. We are not responsible 
              for any errors, omissions, or consequences resulting from the use of this information.
            </p>
          </div>
        </div>
      </div>

      <article>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Do-It-Yourself FBI Fingerprint Guide
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Step-by-step instructions for submitting your own fingerprints for an FBI Identity History Summary 
          (background check) for apostille and visa purposes.
        </p>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              The FBI Identity History Summary (commonly called an FBI background check) is often required 
              for visa applications, work permits, and apostille services. While you can have your 
              fingerprints taken at a police station or authorized agency, you can also submit them 
              yourself directly to the FBI.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This guide walks you through the process of obtaining and submitting your own fingerprints 
              for an FBI Identity History Summary request.
            </p>
          </div>
        </section>

        {/* FD-258 Download Section */}
        <section className="mb-12 bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
          <div className="flex items-start mb-4">
            <svg className="w-8 h-8 text-indigo-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Download FD-258 Fingerprint Card</h2>
              <p className="text-gray-700 mb-4">
                The FD-258 is the official FBI fingerprint card required for Identity History Summary requests. 
                Download the form below or get it directly from the FBI website.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a
                  href="/fd-258.pdf"
                  download="fd-258-fingerprint-card.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download FD-258 PDF
                </a>
                <a
                  href="https://www.fbi.gov/file-repository/standard-fingerprint-form-fd-258-1.pdf/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Official FBI Link
                </a>
              </div>
              <p className="text-sm text-gray-600 italic mb-2">
                <strong>Note:</strong> If the download button doesn't work, the PDF file may not be in the public folder yet. 
                Use the "Official FBI Link" button to download directly from the FBI website, or add the FD-258.pdf file to the <code className="bg-white px-1 py-0.5 rounded">/public</code> folder.
              </p>
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="text-sm text-gray-700 font-medium mb-2">Important Printing Instructions:</p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside ml-2">
                  <li>Print on standard cardstock (not regular paper) - 8" x 8" size</li>
                  <li>Use 100% scale - do not resize or fit to page</li>
                  <li>Ensure the card is not cut off or distorted</li>
                  <li>Use high-quality printer settings for best results</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Need</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>FD-258 fingerprint card (standard FBI fingerprint card)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Valid passport or government-issued photo ID</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fingerprint ink pad or electronic fingerprint scanner access</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Completed FBI Identity History Summary request form</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Payment method (check, money order, or credit card)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Self-addressed envelope for return (if mailing)</span>
            </li>
          </ul>
        </section>

        {/* Step-by-Step Instructions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Instructions</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="border-l-4 border-indigo-600 pl-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-indigo-600 mr-3">1</span>
                <h3 className="text-2xl font-semibold text-gray-900">Obtain an FD-258 Fingerprint Card</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>
                  The FD-258 is the standard fingerprint card used by the FBI. You can:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Download and print the card using the download link above (must be printed on cardstock)</li>
                  <li>Order official cards from the FBI or authorized vendors</li>
                  <li>Obtain one from a local police station (may charge a small fee)</li>
                </ul>
                <p className="text-sm text-gray-600 italic">
                  Note: The card must be printed on standard cardstock (not regular paper) and meet specific size requirements (8" x 8").
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-indigo-600 pl-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-indigo-600 mr-3">2</span>
                <h3 className="text-2xl font-semibold text-gray-900">Complete the Fingerprint Card</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p className="font-medium">Fill out all required information:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Full name (as it appears on your passport)</li>
                  <li>Date of birth</li>
                  <li>Place of birth</li>
                  <li>Social Security Number (if applicable)</li>
                  <li>Reason for fingerprinting (e.g., "Identity History Summary for visa/apostille")</li>
                  <li>Your signature</li>
                </ul>
                <p className="font-medium mt-4">Take your fingerprints:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Use a fingerprint ink pad or electronic scanner</li>
                  <li>Roll each finger from nail to nail, ensuring clear prints</li>
                  <li>Include all 10 fingers plus both thumbs</li>
                  <li>Ensure prints are clear, not smudged, and within the designated boxes</li>
                </ul>
                <p className="text-sm text-gray-600 italic">
                  Tip: Practice on a piece of paper first. Clear, readable fingerprints are essential for processing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-indigo-600 pl-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-indigo-600 mr-3">3</span>
                <h3 className="text-2xl font-semibold text-gray-900">Complete the FBI Request Form</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>
                  Download and complete the FBI Identity History Summary request form from the official FBI website. 
                  You'll need to provide:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Personal information matching your fingerprint card</li>
                  <li>Purpose of the request</li>
                  <li>Delivery preference (mail or electronic)</li>
                  <li>Payment information</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-indigo-600 pl-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-indigo-600 mr-3">4</span>
                <h3 className="text-2xl font-semibold text-gray-900">Prepare Your Submission Package</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>Include the following in your submission:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Completed FD-258 fingerprint card</li>
                  <li>Completed FBI Identity History Summary request form</li>
                  <li>Copy of valid government-issued photo ID (passport recommended)</li>
                  <li>Payment (check, money order, or credit card information)</li>
                  <li>Self-addressed, stamped envelope (if requesting mail delivery)</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="border-l-4 border-indigo-600 pl-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-indigo-600 mr-3">5</span>
                <h3 className="text-2xl font-semibold text-gray-900">Submit Your Request</h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p className="font-medium">You can submit via:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Mail:</strong> Send to the FBI CJIS Division address (check current address on FBI website)</li>
                  <li><strong>Online:</strong> Submit electronically through the FBI's eDO system (if available)</li>
                </ul>
                <p className="text-sm text-gray-600 italic mt-3">
                  Processing times vary but typically take 2-4 weeks. Expedited services may be available for an additional fee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12 bg-indigo-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Success</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Ensure all information matches exactly across all documents (name spelling, dates, etc.)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Take your time with fingerprints - quality is more important than speed</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Keep copies of all documents you submit</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Verify current fees and mailing addresses on the official FBI website before submitting</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>If fingerprints are rejected, you may need to have them taken professionally</span>
            </li>
          </ul>
        </section>

        {/* Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Official Resources</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong className="text-gray-900">FBI Identity History Summary:</strong> 
                <span className="ml-2">Visit the official FBI website for current forms, fees, and submission instructions</span>
              </li>
              <li>
                <strong className="text-gray-900">FD-258 Fingerprint Card:</strong> 
                <span className="ml-2">Available for download on the FBI website or through authorized vendors</span>
              </li>
              <li>
                <strong className="text-gray-900">Contact FBI CJIS Division:</strong> 
                <span className="ml-2">Check the FBI website for current contact information and mailing addresses</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-4">
              Always verify information on official government websites as procedures and requirements may change.
            </p>
          </div>
        </section>

        {/* Alternative Options */}
        <section className="mb-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Alternative: Professional Services</h2>
          <p className="text-gray-700 mb-4">
            If you prefer not to do it yourself, you can have your fingerprints taken at:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
            <li>Local police stations (see our <Link to="/" className="text-indigo-600 hover:underline">location finder</Link>)</li>
            <li>Private fingerprinting agencies</li>
            <li>Embassies or consulates (for citizens of that country)</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Professional services can ensure higher quality fingerprints and may reduce the risk of rejection.
          </p>
        </section>

        {/* Final Disclaimer */}
        <section className="bg-red-50 border-l-4 border-red-400 p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Legal Disclaimer</h3>
          <div className="text-red-700 text-sm space-y-2">
            <p>
              This guide is provided for informational purposes only and does not constitute legal, 
              professional, or official advice. The information contained herein is based on general 
              procedures and may not reflect current requirements, fees, or processes.
            </p>
            <p>
              Always consult official government sources, including the FBI website and relevant 
              embassies or consulates, for the most current and accurate information. Requirements, 
              fees, and procedures are subject to change without notice.
            </p>
            <p>
              We are not responsible for any errors, omissions, delays, rejections, or other 
              consequences resulting from the use of this information. Users are solely responsible 
              for ensuring their submissions comply with all current requirements.
            </p>
            <p>
              If you have questions or concerns about the fingerprinting or background check process, 
              consult with a qualified legal professional or contact the relevant government agencies directly.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

