import { useState, useMemo } from 'react';
import { locations, cities, locationTypes, purposes } from '../data/locations';
import LocationCard from '../components/LocationCard';

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedLocationType, setSelectedLocationType] = useState('All');
  const [selectedPurpose, setSelectedPurpose] = useState('All');
  const [appointmentRequired, setAppointmentRequired] = useState('All');

  const filteredLocations = useMemo(() => {
    return locations.filter(location => {
      // Search filter
      const matchesSearch = 
        searchQuery === '' ||
        location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.district.toLowerCase().includes(searchQuery.toLowerCase());
      
      // City filter
      const matchesCity = selectedCity === 'All' || location.city === selectedCity;
      
      // Location type filter
      const matchesLocationType = selectedLocationType === 'All' || location.locationType === selectedLocationType;
      
      // Purpose filter
      const matchesPurpose = selectedPurpose === 'All' || location.purposes.includes(selectedPurpose);
      
      // Appointment required filter
      const matchesAppointment = appointmentRequired === 'All' || 
        (appointmentRequired === 'Yes' && location.appointmentRequired === true) ||
        (appointmentRequired === 'No' && location.appointmentRequired === false);

      return matchesSearch && matchesCity && matchesLocationType && matchesPurpose && matchesAppointment;
    });
  }, [searchQuery, selectedCity, selectedLocationType, selectedPurpose, appointmentRequired]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Fingerprinting Locations
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Search and filter police stations, private agencies, and embassies for FBI background checks, 
          immigration, and apostille services.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
            
            <div className="space-y-6">
              {/* City / Region Filter */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City / Region
                </label>
                <select
                  id="city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Location Type Filter */}
              <div>
                <label htmlFor="locationType" className="block text-sm font-medium text-gray-700 mb-2">
                  Location Type
                </label>
                <select
                  id="locationType"
                  value={selectedLocationType}
                  onChange={(e) => setSelectedLocationType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  {locationTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Purpose Filter */}
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                  Purpose
                </label>
                <select
                  id="purpose"
                  value={selectedPurpose}
                  onChange={(e) => setSelectedPurpose(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  <option value="All">All</option>
                  {purposes.map(purpose => (
                    <option key={purpose} value={purpose}>{purpose}</option>
                  ))}
                </select>
              </div>

              {/* Appointment Required Filter */}
              <div>
                <label htmlFor="appointment" className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Required
                </label>
                <select
                  id="appointment"
                  value={appointmentRequired}
                  onChange={(e) => setAppointmentRequired(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  <option value="All">All</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, address, or district..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-gray-600">
              Found <span className="font-semibold text-gray-900">{filteredLocations.length}</span> location{filteredLocations.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Location Cards */}
          {filteredLocations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredLocations.map(location => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500 text-lg">No locations found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
