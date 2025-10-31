import { BBQ_RULES, EventMultipliers, SideCategory } from '../data/constants.js';

export default function BBQCalculationExplanationView({ onClose }) {
  const getCategoryIcon = (category) => {
    const icons = {
      [SideCategory.VEGETABLES]: '🥕',
      [SideCategory.STARCHES]: '🍚',
      [SideCategory.SALADS]: '🥗',
      [SideCategory.BREADS]: '🍞',
      [SideCategory.DESSERTS]: '🍰',
    };
    return icons[category] || '🥗';
  };

  const getCategoryDescription = (category) => {
    const descriptions = {
      [SideCategory.VEGETABLES]: 'Vegetables are lighter sides that complement the meat well.',
      [SideCategory.STARCHES]: 'Starches like rice and potatoes are filling and popular with most people.',
      [SideCategory.SALADS]: 'Salads provide freshness and balance to the rich BBQ flavors.',
      [SideCategory.BREADS]: 'Bread is inexpensive and helps guests fill up without breaking the budget.',
      [SideCategory.DESSERTS]: 'Desserts are optional treats that round out the meal experience.',
    };
    return descriptions[category] || '';
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold">How We Calculate</h2>
            <p className="text-sm text-gray-600 mt-1">
              Understanding our BBQ portion calculations
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
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Meat Calculation */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Meat Portions</h3>
            <div className="space-y-3">
              <CalculationRuleCard
                icon="🥩"
                title="Base Rule: ½ Pound Per Person"
                description="We calculate 0.5 pounds of meat per person as the standard serving size for BBQ."
                example="For 10 people: 10 × 0.5 = 5 pounds total"
              />
              <CalculationRuleCard
                icon="🎉"
                title="Event Multipliers"
                description="We adjust portions based on your event type to ensure everyone has enough."
                details={[
                  'Casual: 1.0× (standard portions)',
                  'Party: 1.2× (20% more for social eating)',
                  'Celebration: 1.5× (50% more for special occasions)',
                ]}
              />
            </div>
          </div>

          {/* Side Calculation */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Side Portions</h3>
            <div className="space-y-3">
              {Object.values(SideCategory).map((category) => {
                const servings = BBQ_RULES.SIDE_SERVINGS_PER_PERSON[category];
                return (
                  <CalculationRuleCard
                    key={category}
                    icon={getCategoryIcon(category)}
                    title={`${category}: ${servings.toFixed(2)} servings per person`}
                    description={getCategoryDescription(category)}
                    example={`For 10 people: 10 × ${servings.toFixed(2)} = ${(servings * 10).toFixed(1)} servings`}
                  />
                );
              })}
            </div>
          </div>

          {/* Examples */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Real Examples</h3>
            <div className="space-y-3">
              <ExampleCard
                people={8}
                eventType="Casual"
                meatAmount={BBQ_RULES.MEAT_PER_PERSON * 8 * EventMultipliers['Casual']}
                sideAmount={
                  BBQ_RULES.SIDE_SERVINGS_PER_PERSON[SideCategory.STARCHES] *
                  8 *
                  EventMultipliers['Casual']
                }
              />
              <ExampleCard
                people={15}
                eventType="Party"
                meatAmount={BBQ_RULES.MEAT_PER_PERSON * 15 * EventMultipliers['Party']}
                sideAmount={
                  BBQ_RULES.SIDE_SERVINGS_PER_PERSON[SideCategory.STARCHES] *
                  15 *
                  EventMultipliers['Party']
                }
              />
              <ExampleCard
                people={25}
                eventType="Celebration"
                meatAmount={BBQ_RULES.MEAT_PER_PERSON * 25 * EventMultipliers['Celebration']}
                sideAmount={
                  BBQ_RULES.SIDE_SERVINGS_PER_PERSON[SideCategory.STARCHES] *
                  25 *
                  EventMultipliers['Celebration']
                }
              />
            </div>
          </div>

          {/* Tips */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Pro Tips</h3>
            <div className="space-y-3">
              <TipCard
                icon="💡"
                title="Mix Your Meats"
                description="Order different types of meat to give guests variety. Consider 2-3 different meats for groups over 10 people."
              />
              <TipCard
                icon="🥗"
                title="Balance Your Sides"
                description="Include a mix of starches, vegetables, and salads. Starches are most popular, so order more of those."
              />
              <TipCard
                icon="📞"
                title="Call Ahead"
                description="For large orders, call the restaurant 24-48 hours in advance to ensure availability."
              />
              <TipCard
                icon="🍞"
                title="Don't Forget Bread"
                description="Bread is cheap and helps stretch the meal. Consider ordering extra bread for big eaters."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalculationRuleCard({ icon, title, description, example, details }) {
  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      <div className="flex items-start gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          {example && (
            <div className="inline-block px-3 py-1.5 bg-orange-100 text-orange-600 text-xs font-medium rounded-lg">
              {example}
            </div>
          )}
          {details && (
            <ul className="mt-2 space-y-1">
              {details.map((detail, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function ExampleCard({ people, eventType, meatAmount, sideAmount }) {
  const multiplier = EventMultipliers[eventType];

  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold">
          {people} People • {eventType} Event
        </h4>
        <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded">
          Multiplier: {multiplier.toFixed(1)}×
        </span>
      </div>
      <div className="flex gap-8">
        <div>
          <p className="text-sm font-medium mb-1">Meat</p>
          <p className="text-2xl font-bold text-orange-600">{meatAmount.toFixed(1)} lbs</p>
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Sides (example)</p>
          <p className="text-2xl font-bold text-green-600">{sideAmount.toFixed(1)} servings</p>
        </div>
      </div>
    </div>
  );
}

function TipCard({ icon, title, description }) {
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

