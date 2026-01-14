import { Link } from 'react-router-dom';
import { locations } from '../data/locations';

export default function SEOPage({ type }) {
  const seoContent = {
    fbi: {
      title: "FBI Background Check Fingerprinting in Korea",
      description: "Find locations for FBI background check fingerprinting in Korea. Complete guide to police stations and immigration offices offering fingerprint services for FBI checks.",
      h1: "FBI Background Check Fingerprinting Locations in Korea",
      intro: "Getting an FBI background check while living in Korea requires fingerprinting at an authorized location. This guide helps you find the right police station or immigration office for your FBI background check needs.",
      locations: locations.filter(loc => loc.purposes.includes("FBI background check")),
      steps: [
        "Find a location that offers FBI background check fingerprinting",
        "Bring your passport, ARC, and required documents",
        "Complete the FD-258 fingerprint card at the location",
        "Submit your fingerprints for FBI processing"
      ]
    },
    visa: {
      title: "Visa Fingerprinting Services in Korea",
      description: "Locate fingerprinting services for visa applications in Korea. Find police stations and immigration offices that provide fingerprinting for visa processing.",
      h1: "Visa Fingerprinting Services in Korea",
      intro: "Many visa applications require fingerprinting services. Find authorized locations in Korea where you can get your fingerprints taken for visa processing.",
      locations: locations.filter(loc => loc.purposes.includes("Immigration")),
      steps: [
        "Identify which visa type requires fingerprinting",
        "Find a location offering visa fingerprinting services",
        "Prepare all required visa documents",
        "Complete fingerprinting and submit your visa application"
      ]
    },
    apostille: {
      title: "Apostille Fingerprinting Services in Korea",
      description: "Find fingerprinting locations for apostille services in Korea. Guide to getting fingerprints for document authentication and apostille processing.",
      h1: "Apostille Fingerprinting Services in Korea",
      intro: "Apostille services often require fingerprinting for document authentication. This guide helps you find locations in Korea that offer fingerprinting for apostille purposes.",
      locations: locations.filter(loc => loc.purposes.includes("Apostille")),
      steps: [
        "Determine if your apostille requires fingerprinting",
        "Find a location offering apostille fingerprinting services",
        "Gather original documents and copies",
        "Complete fingerprinting and submit for apostille processing"
      ]
    }
  };

  const content = seoContent[type] || seoContent.fbi;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{content.h1}</h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">{content.intro}</p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {content.locations.map(location => (
              <div key={location.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-2">{location.address}</p>
                <p className="text-sm text-gray-500 mb-3">{location.city}, {location.district}</p>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{location.phone}</span>
                </div>
                <p className="text-sm text-gray-600">{location.hours}</p>
                {location.notes && (
                  <p className="text-sm text-gray-500 italic mt-2">{location.notes}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Process Overview</h2>
          <ol className="space-y-4">
            {content.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold mr-4">
                  {index + 1}
                </span>
                <span className="text-gray-700 text-lg pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-indigo-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-6">
            Use our location search tool to find the nearest fingerprinting location, check our document checklist to ensure you have everything you need, and review our how-it-works guide for detailed instructions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Search Locations
            </Link>
            <Link
              to="/checklist"
              className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              View Checklist
            </Link>
            <Link
              to="/how-it-works"
              className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </section>

        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What documents do I need?</h3>
              <p className="text-gray-700">
                Typically, you'll need your passport, Alien Registration Card (ARC) or visa documentation, and any specific forms required for your service type. Check our <Link to="/checklist" className="text-indigo-600 hover:underline">document checklist</Link> for complete details.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I need an appointment?</h3>
              <p className="text-gray-700">
                Most locations accept walk-ins, but some may require appointments. It's best to call ahead, especially for smaller locations or during busy periods.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Is English support available?</h3>
              <p className="text-gray-700">
                English support varies by location. Major locations like Seoul Central Police Station typically have English-speaking staff, while smaller locations may have limited English support. Consider bringing a Korean speaker if possible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How long does it take?</h3>
              <p className="text-gray-700">
                Wait times vary by location and time of day. Popular locations can have 30-60 minute waits, while smaller locations may be faster. Arriving early in the day is recommended.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

