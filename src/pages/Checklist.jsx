import { useState } from 'react';

export default function Checklist() {
  const checklists = [
    {
      title: "FBI Background Check",
      items: [
        "Valid passport (original and copy)",
        "Alien Registration Card (ARC) or visa documentation",
        "Completed fingerprint card (FD-258) - usually provided at location",
        "Application form (if required)",
        "Processing fee (varies by location, typically 10,000-20,000 KRW)",
        "Proof of residence in Korea (utility bill, rental agreement, etc.)"
      ]
    },
    {
      title: "Visa Application",
      items: [
        "Valid passport (original and copy)",
        "Completed visa application form",
        "Passport-sized photos (usually 2-4 photos, check specific requirements)",
        "Fingerprint card (if required for your visa type)",
        "Supporting documents (varies by visa type)",
        "Application fee",
        "Proof of financial means (bank statements, employment contract, etc.)"
      ]
    },
    {
      title: "Apostille Services",
      items: [
        "Original document to be apostilled",
        "Valid passport (original and copy)",
        "Alien Registration Card (ARC) or visa documentation",
        "Completed application form",
        "Processing fee",
        "Translation of document (if original is not in Korean or English)",
        "Notarized copy (if required)"
      ]
    }
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (checklistIndex, itemIndex) => {
    const key = `${checklistIndex}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Document Checklist</h1>
        <p className="text-xl text-gray-600">
          Make sure you have everything you need before visiting
        </p>
      </div>

      <div className="space-y-8">
        {checklists.map((checklist, checklistIndex) => (
          <div key={checklistIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{checklist.title}</h2>
            <ul className="space-y-3">
              {checklist.items.map((item, itemIndex) => {
                const key = `${checklistIndex}-${itemIndex}`;
                const isChecked = checkedItems[key] || false;
                return (
                  <li key={itemIndex} className="flex items-start">
                    <button
                      onClick={() => toggleItem(checklistIndex, itemIndex)}
                      className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center mr-3 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-indigo-600 border-indigo-600'
                          : 'border-gray-300 hover:border-indigo-400'
                      }`}
                    >
                      {isChecked && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <span className={`flex-1 text-gray-700 ${isChecked ? 'line-through text-gray-400' : ''}`}>
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Reminders</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• Requirements may vary by location - call ahead to confirm</li>
              <li>• Bring both originals and copies of all documents</li>
              <li>• Fees are typically paid in cash (KRW)</li>
              <li>• Processing times vary - ask about expected wait times</li>
              <li>• Some locations may require appointments - check before visiting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

