import { useState } from 'react';
import BBQPlaceCard from './BBQPlaceCard.jsx';
import { BBQ_PLACES } from '../data/bbqPlaces.js';

export default function BBQPlacesListView({ selectedBBQPlace, onSelect, onClose }) {
  const [searchText, setSearchText] = useState('');

  const filteredPlaces = BBQ_PLACES.filter((place) => {
    if (!searchText.trim()) return true;
    const search = searchText.toLowerCase();
    return (
      place.name.toLowerCase().includes(search) ||
      place.location.toLowerCase().includes(search) ||
      place.specialties.some((s) => s.toLowerCase().includes(search))
    );
  });

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">BBQ Places</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search BBQ places..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Places List */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="space-y-3">
            {filteredPlaces.map((place) => (
              <BBQPlaceCard
                key={place.id}
                place={place}
                onSelect={onSelect}
                compact={false}
              />
            ))}
            {filteredPlaces.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>No BBQ places found matching "{searchText}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

