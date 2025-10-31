// Event Types
export const EventType = {
  CASUAL: 'Casual',
  PARTY: 'Party',
  CELEBRATION: 'Celebration',
};

export const EventTypeOptions = Object.values(EventType);

// Event Type Multipliers
export const EventMultipliers = {
  [EventType.CASUAL]: 1.0,
  [EventType.PARTY]: 1.2,
  [EventType.CELEBRATION]: 1.5,
};

// Meat Categories
export const MeatCategory = {
  BEEF: 'Beef',
  CHICKEN: 'Chicken',
  PORK: 'Pork',
  FISH: 'Fish',
  SAUSAGE: 'Sausage',
  LAMB: 'Lamb',
  SPECIALTY: 'Specialty',
};

// Side Categories
export const SideCategory = {
  VEGETABLES: 'Vegetables',
  STARCHES: 'Starches',
  SALADS: 'Salads',
  BREADS: 'Breads',
  DESSERTS: 'Desserts',
};

// BBQ Calculation Rules
export const BBQ_RULES = {
  MEAT_PER_PERSON: 0.5, // 1/2 pound per person
  SIDE_SERVINGS_PER_PERSON: {
    [SideCategory.VEGETABLES]: 0.5,
    [SideCategory.STARCHES]: 0.75,
    [SideCategory.SALADS]: 0.5,
    [SideCategory.BREADS]: 1.0,
    [SideCategory.DESSERTS]: 0.25,
  },
};

