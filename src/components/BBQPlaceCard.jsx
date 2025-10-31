export default function BBQPlaceCard({ place, onClear, onSelect, compact = false }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(place);
    }
  };

  const handleClearClick = (e) => {
    e.stopPropagation();
    if (onClear) {
      onClear();
    }
  };

  const cardClass = compact
    ? 'p-4 bg-white rounded-xl shadow-sm'
    : 'p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer';

  return (
    <div onClick={handleClick} className={cardClass}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{place.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-gray-600">{place.location}</p>
          </div>
        </div>

        {!compact ? (
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">{place.rating.toFixed(1)}</span>
            </div>
            <p className="text-xs text-gray-500">
              {place.meats.length} meats • {place.sides.length} sides
            </p>
          </div>
        ) : (
          <button
            onClick={handleClearClick}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Clear selection"
          >
            <svg
              className="w-5 h-5"
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
        )}
      </div>

      {place.specialties && place.specialties.length > 0 && !compact && (
        <div className="flex flex-wrap gap-2 mt-2">
          {place.specialties.map((specialty, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-lg"
            >
              {specialty}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

