import { useMemo } from 'react';
import { BBQ_RULES, EventMultipliers } from '../data/constants.js';

export default function ResultsView({
  numberOfPeople,
  eventType,
  selectedBBQPlace,
  selectedMeats,
  selectedSides,
  onClose,
}) {
  const { meatItems, sideItems, totalCost } = useMemo(() => {
    const multiplier = EventMultipliers[eventType];

    const meatItems = selectedBBQPlace.meats
      .filter((meat) => selectedMeats.has(meat.id))
      .map((meat) => {
        const amount = BBQ_RULES.MEAT_PER_PERSON * numberOfPeople * multiplier;
        const cost = amount * meat.pricePerPound;
        return { ...meat, amount, cost };
      });

    const sideItems = selectedBBQPlace.sides
      .filter((side) => selectedSides.has(side.id))
      .map((side) => {
        const servingsPerPerson = BBQ_RULES.SIDE_SERVINGS_PER_PERSON[side.category];
        const amount = servingsPerPerson * numberOfPeople * multiplier;
        const cost = amount * side.pricePerServing;
        return { ...side, amount, cost };
      });

    const totalCost = [...meatItems, ...sideItems].reduce((sum, item) => sum + item.cost, 0);

    return { meatItems, sideItems, totalCost };
  }, [numberOfPeople, eventType, selectedBBQPlace, selectedMeats, selectedSides]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold">Order Summary</h2>
            <p className="text-sm text-gray-600 mt-1">
              {selectedBBQPlace.name} • {numberOfPeople} {numberOfPeople === 1 ? 'person' : 'people'} • {eventType} event
            </p>
          </div>
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* BBQ Place Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Selected BBQ Place</h3>
            <div className="p-4 bg-gray-100 rounded-xl">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{selectedBBQPlace.name}</h4>
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
                    <p className="text-sm text-gray-600">{selectedBBQPlace.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">{selectedBBQPlace.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Your Order</h3>

            {/* Meats */}
            {meatItems.length > 0 && (
              <div className="mb-6">
                <h4 className="text-base font-semibold text-orange-600 mb-3">Meats</h4>
                <div className="space-y-3">
                  {meatItems.map((meat) => (
                    <div key={meat.id} className="p-4 bg-gray-100 rounded-xl">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h5 className="font-semibold mb-1">{meat.name}</h5>
                          <p className="text-sm text-gray-600 line-clamp-2">{meat.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-orange-600 mb-1">
                            {meat.amount.toFixed(1)} lbs
                          </p>
                          <p className="text-sm font-medium text-green-600">
                            ${meat.cost.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sides */}
            {sideItems.length > 0 && (
              <div>
                <h4 className="text-base font-semibold text-orange-600 mb-3">Sides</h4>
                <div className="space-y-3">
                  {sideItems.map((side) => (
                    <div key={side.id} className="p-4 bg-gray-100 rounded-xl">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h5 className="font-semibold mb-1">{side.name}</h5>
                          <p className="text-sm text-gray-600 line-clamp-2">{side.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-orange-600 mb-1">
                            {side.amount.toFixed(1)} servings
                          </p>
                          <p className="text-sm font-medium text-green-600">
                            ${side.cost.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Total Cost */}
          <div className="pt-6 border-t">
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
              <span className="text-2xl font-bold">Total Cost</span>
              <span className="text-3xl font-bold text-orange-600">
                ${totalCost.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Additional Recommendations */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Additional Recommendations</h3>
            <div className="space-y-3">
              <RecommendationCard
                icon="⏰"
                title="Order Timing"
                description="Place your order 24-48 hours in advance for large groups"
              />
              <RecommendationCard
                icon="🚚"
                title="Pickup/Delivery"
                description="Confirm pickup time and location with the restaurant"
              />
              <RecommendationCard
                icon="🥗"
                title="Sides & Drinks"
                description="Consider adding more sides if you have big eaters"
              />
              <RecommendationCard
                icon="💳"
                title="Payment"
                description="Ask about group discounts or payment options"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
      <span className="text-2xl">{icon}</span>
      <div>
        <h5 className="font-semibold text-sm mb-1">{title}</h5>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
}

