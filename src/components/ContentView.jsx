import { useState } from 'react';
import BBQPlaceCard from './BBQPlaceCard.jsx';
import MenuItemCard from './MenuItemCard.jsx';
import { EventTypeOptions } from '../data/constants.js';

export default function ContentView({
  numberOfPeople,
  setNumberOfPeople,
  eventType,
  setEventType,
  selectedBBQPlace,
  selectedMeats,
  selectedSides,
  onToggleMeat,
  onToggleSide,
  onShowResults,
  onShowBBQPlaces,
  onShowExplanation,
  onClearSelection,
}) {
  const canCalculate = selectedBBQPlace && (selectedMeats.size > 0 || selectedSides.size > 0);

  const handleMeatToggle = (meat) => {
    onToggleMeat(meat);
  };

  const handleSideToggle = (side) => {
    onToggleSide(side);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <svg
                className="w-12 h-12 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="text-4xl font-bold">BBQ Math</h1>
            </div>

            <button
              onClick={onShowExplanation}
              className="text-2xl text-blue-600 hover:text-blue-700"
              aria-label="Show explanation"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>

          <p className="text-gray-600 text-base">
            Choose a BBQ place and calculate the perfect amount for your gathering
          </p>
        </div>

        {/* Input Section */}
        <div className="space-y-6">
          {/* Number of People */}
          <div className="input-section">
            <label className="block text-lg font-semibold mb-2">
              Number of People
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              >
                <span className="text-xl">-</span>
              </button>
              <span className="text-2xl font-semibold flex-1 text-center">
                {numberOfPeople} {numberOfPeople === 1 ? 'person' : 'people'}
              </span>
              <button
                onClick={() => setNumberOfPeople(Math.min(100, numberOfPeople + 1))}
                className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              >
                <span className="text-xl">+</span>
              </button>
            </div>
          </div>

          {/* Event Type */}
          <div className="input-section">
            <label className="block text-lg font-semibold mb-3">
              Event Type
            </label>
            <div className="flex gap-2">
              {EventTypeOptions.map((type) => (
                <button
                  key={type}
                  onClick={() => setEventType(type)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    eventType === type
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* BBQ Place Selection */}
          <div className="input-section">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-lg font-semibold">
                Choose BBQ Place
              </label>
              <button
                onClick={onShowBBQPlaces}
                className="text-orange-600 font-medium hover:text-orange-700"
              >
                Browse Places
              </button>
            </div>

            {selectedBBQPlace ? (
              <BBQPlaceCard
                place={selectedBBQPlace}
                onClear={onClearSelection}
                compact
              />
            ) : (
              <button
                onClick={onShowBBQPlaces}
                className="w-full py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center gap-2 text-orange-600 font-semibold transition-colors"
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Select a BBQ Place
              </button>
            )}
          </div>

          {/* Menu Selection */}
          {selectedBBQPlace && (
            <div className="input-section">
              <h3 className="text-lg font-semibold mb-4">Select Items from Menu</h3>

              {/* Meat Selection */}
              {selectedBBQPlace.meats && selectedBBQPlace.meats.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-700">Meats</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedBBQPlace.meats.map((meat) => (
                      <MenuItemCard
                        key={meat.id}
                        item={meat}
                        isSelected={selectedMeats.has(meat.id)}
                        onToggle={() => handleMeatToggle(meat)}
                        type="meat"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Side Selection */}
              {selectedBBQPlace.sides && selectedBBQPlace.sides.length > 0 && (
                <div>
                  <h4 className="text-base font-semibold mb-3 text-gray-700">Sides</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedBBQPlace.sides.map((side) => (
                      <MenuItemCard
                        key={side.id}
                        item={side}
                        isSelected={selectedSides.has(side.id)}
                        onToggle={() => handleSideToggle(side)}
                        type="side"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Calculate Button */}
        <button
          onClick={onShowResults}
          disabled={!canCalculate}
          className="btn-primary w-full mt-6 mb-8"
        >
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zM7 8a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z" />
            </svg>
            Calculate BBQ Amounts
          </div>
        </button>
      </div>
    </div>
  );
}

