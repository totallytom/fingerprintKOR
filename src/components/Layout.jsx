import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FK</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Fingerprint Korea</span>
            </Link>
            <div className="flex space-x-6">
              <Link
                to="/locations"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/locations') 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                Locations
              </Link>
              <Link
                to="/how-it-works"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/how-it-works') 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                How It Works
              </Link>
              <Link
                to="/checklist"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/checklist') 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                Checklist
              </Link>
              <Link
                to="/diy-fbi-fingerprint-guide"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/diy-fbi-fingerprint-guide') 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                DIY Guide
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 text-sm">
            © 2026 Fingerprint Korea. Helping foreigners navigate fingerprinting services in Korea.
          </p>
        </div>
      </footer>
    </div>
  );
}

