import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Find Fingerprinting Locations in Korea
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Your complete guide to FBI background checks, visa fingerprinting, and apostille services 
          for foreigners working and living in Korea.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/locations"
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-lg"
          >
            Find Locations
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 border-2 border-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors text-lg"
          >
            How It Works
          </Link>
        </div>
      </div>

      {/* Who Needs FBI Fingerprinting Section */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-8 h-8 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Working in Korea: Which Visas Require FBI Fingerprinting?
        </h2>
        <div className="text-gray-700 space-y-4">
          {/* Nationality Requirements */}
          <div className="bg-white rounded-lg p-5 border-2 border-indigo-300 shadow-sm mb-6">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
              <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Who Needs FBI Fingerprinting?
            </h3>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              FBI fingerprinting (FBI Identity History Summary) is required for:
            </p>
            <ul className="text-sm text-gray-700 space-y-2 ml-4 list-disc">
              <li><strong>US Citizens:</strong> All US citizens applying for work visas in Korea typically need an FBI background check</li>
              <li><strong>Non-US Citizens who lived in the US:</strong> If you have lived in the United States for 6 months or more (cumulative), you may need an FBI background check</li>
              <li><strong>Dual Citizens:</strong> If you hold US citizenship (even if you also hold another nationality), you will need an FBI background check</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-4 pt-4 border-t border-gray-200">
              <strong>Note:</strong> If you are not a US citizen and have never lived in the US, you typically need a background check from your home country's authorities, not the FBI.
            </p>
          </div>

          <p className="text-lg font-medium text-gray-900">
            If you're planning to work in Korea and fall into one of the categories above, you may need an FBI Identity History Summary (background check) 
            depending on your visa type and employer requirements. Here are the common work visas that may require FBI fingerprinting:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg p-5 border border-indigo-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                E-2 Visa (English Teaching)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Many English teaching positions, especially in public schools (EPIK, GEPIK) and some private academies, 
                require an FBI background check with apostille. This is typically required for the visa application process.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-indigo-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                E-1 Visa (Specialty Occupation)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Professionals in specialized fields may need FBI background checks depending on the industry. 
                Common for positions in technology, finance, consulting, and other professional services.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-indigo-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                E-7 Visa (Specific Activities)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Workers in specific professional fields may require background checks. Requirements vary by employer 
                and industry sector. Common in healthcare, engineering, and technical fields.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-indigo-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                F-2/F-5 Visas (Resident/Permanent)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Long-term residents and those applying for permanent residency may need FBI background checks 
                as part of the application process, especially when converting from other visa types.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border border-indigo-200 shadow-sm mt-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
              <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Employer-Specific Requirements
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Some employers, regardless of visa type, may require FBI background checks as part of their 
              hiring process. This is common in education, healthcare, government contracts, and positions 
              working with children or vulnerable populations.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mt-6">
            <p className="text-sm text-gray-700 mb-3">
              <strong className="text-yellow-800">Important:</strong> Requirements can change and vary by employer, 
              visa type, and Korean immigration policies. Always verify current requirements with:
            </p>
            <ul className="text-sm text-gray-700 ml-4 list-disc space-y-1">
              <li>Your prospective employer or recruiter</li>
              <li>The Korean embassy or consulate in your country</li>
              <li>Immigration offices in Korea (HiKorea website)</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-4 pt-4 border-t border-yellow-200">
              Most FBI background checks for Korea require apostille authentication. The document is typically valid 
              for 6 months to 1 year, so plan your timing accordingly.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link
          to="/locations"
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Find Locations</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Search for fingerprinting locations by city, type, and service. Filter by appointment requirements.
          </p>
        </Link>

        <Link
          to="/checklist"
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Document Checklist</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Make sure you have everything you need before visiting a location. Interactive checklists for all services.
          </p>
        </Link>

        <Link
          to="/how-it-works"
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">How It Works</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Step-by-step guide to the fingerprinting process. Learn what to expect and how to prepare.
          </p>
        </Link>
      </div>
    </div>
  );
}

