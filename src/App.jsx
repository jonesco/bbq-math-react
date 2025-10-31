import { useState } from 'react';
import ContentView from './components/ContentView.jsx';
import BBQPlacesListView from './components/BBQPlacesListView.jsx';
import ResultsView from './components/ResultsView.jsx';
import BBQCalculationExplanationView from './components/BBQCalculationExplanationView.jsx';

function App() {
  const [numberOfPeople, setNumberOfPeople] = useState(4);
  const [eventType, setEventType] = useState('Casual');
  const [selectedBBQPlace, setSelectedBBQPlace] = useState(null);
  const [selectedMeats, setSelectedMeats] = useState(new Set());
  const [selectedSides, setSelectedSides] = useState(new Set());
  const [showResults, setShowResults] = useState(false);
  const [showBBQPlaces, setShowBBQPlaces] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleMeat = (meat) => {
    const newSelected = new Set(selectedMeats);
    if (newSelected.has(meat.id)) {
      newSelected.delete(meat.id);
    } else {
      newSelected.add(meat.id);
    }
    setSelectedMeats(newSelected);
  };

  const toggleSide = (side) => {
    const newSelected = new Set(selectedSides);
    if (newSelected.has(side.id)) {
      newSelected.delete(side.id);
    } else {
      newSelected.add(side.id);
    }
    setSelectedSides(newSelected);
  };

  const handleBBQPlaceSelect = (place) => {
    setSelectedBBQPlace(place);
    setSelectedMeats(new Set());
    setSelectedSides(new Set());
    setShowBBQPlaces(false);
  };

  const handleClearSelection = () => {
    setSelectedBBQPlace(null);
    setSelectedMeats(new Set());
    setSelectedSides(new Set());
  };

  return (
    <>
      <ContentView
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
        eventType={eventType}
        setEventType={setEventType}
        selectedBBQPlace={selectedBBQPlace}
        selectedMeats={selectedMeats}
        selectedSides={selectedSides}
        onToggleMeat={toggleMeat}
        onToggleSide={toggleSide}
        onShowResults={() => setShowResults(true)}
        onShowBBQPlaces={() => setShowBBQPlaces(true)}
        onShowExplanation={() => setShowExplanation(true)}
        onClearSelection={handleClearSelection}
      />
      
      {showBBQPlaces && (
        <BBQPlacesListView
          selectedBBQPlace={selectedBBQPlace}
          onSelect={handleBBQPlaceSelect}
          onClose={() => setShowBBQPlaces(false)}
        />
      )}
      
      {showResults && selectedBBQPlace && (
        <ResultsView
          numberOfPeople={numberOfPeople}
          eventType={eventType}
          selectedBBQPlace={selectedBBQPlace}
          selectedMeats={selectedMeats}
          selectedSides={selectedSides}
          onClose={() => setShowResults(false)}
        />
      )}
      
      {showExplanation && (
        <BBQCalculationExplanationView
          onClose={() => setShowExplanation(false)}
        />
      )}
    </>
  );
}

export default App;
