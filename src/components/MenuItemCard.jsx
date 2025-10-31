export default function MenuItemCard({ item, isSelected, onToggle, type }) {
  const priceText =
    type === 'meat'
      ? `$${item.pricePerPound.toFixed(2)}/lb`
      : `$${item.pricePerServing.toFixed(2)}/serving`;

  return (
    <button
      onClick={onToggle}
      className={`p-3 rounded-lg text-left transition-colors ${
        isSelected
          ? 'bg-orange-500 text-white'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="font-medium text-sm truncate">{item.name}</h4>
            {isSelected && (
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <p
            className={`text-xs line-clamp-2 mb-1 ${
              isSelected ? 'text-white/80' : 'text-gray-600'
            }`}
          >
            {item.description}
          </p>
          <p
            className={`text-xs font-semibold ${
              isSelected ? 'text-white' : 'text-orange-600'
            }`}
          >
            {priceText}
          </p>
        </div>
      </div>
    </button>
  );
}

