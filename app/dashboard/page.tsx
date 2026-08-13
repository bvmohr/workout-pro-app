'use client';

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import WorkoutEditor from './components/WorkoutEditor';

interface SubSplitExercises {
  [exerciseKey: string]: string;
}

interface SplitDetails {
  [subSplitName: string]: SubSplitExercises;
}

export default function Dashboard() {
  const [splits, setSplits] = useState<string[]>([]);
  const [selectedSplit, setSelectedSplit] = useState<string>('');
  const [splitDetails, setSplitDetails] = useState<SplitDetails | null>(null);
  const [activeSubSplit, setActiveSubSplit] = useState<string>('');
  
  // Interactive checklist tracking
  // Key format: "splitName-subSplitName-exerciseKey"
  const [checkedExercises, setCheckedExercises] = useState<{ [key: string]: boolean }>({});
  const [exerciseNotes, setExerciseNotes] = useState<{ [key: string]: string }>({});

  const [loadingSplits, setLoadingSplits] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Fetch available splits on mount
  useEffect(() => {
    fetch('/api/workouts/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch splits');
        return res.json();
      })
      .then((data) => {
        setSplits(data);
        if (data.length > 0) {
          setSelectedSplit(data[0]); // Select first split by default
        }
      })
      .catch((err) => {
        setErrorMsg('Error loading workout splits. Please refresh the page.');
        console.error(err);
      })
      .finally(() => {
        setLoadingSplits(false);
      });
  }, []);

  // Fetch details when selected split changes
  useEffect(() => {
    if (!selectedSplit) return;

    setLoadingDetails(true);
    setSplitDetails(null);
    setActiveSubSplit('');

    fetch(`/api/workouts/${selectedSplit}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch split details');
        return res.json();
      })
      .then((data: SplitDetails) => {
        setSplitDetails(data);
        const subSplits = Object.keys(data);
        if (subSplits.length > 0) {
          setActiveSubSplit(subSplits[0]); // Select first sub-split by default
        }
      })
      .catch((err) => {
        setErrorMsg(`Failed to load details for split: ${selectedSplit}`);
        console.error(err);
      })
      .finally(() => {
        setLoadingDetails(false);
      });
  }, [selectedSplit]);

  const handleToggleCheck = (key: string) => {
    setCheckedExercises(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleNoteChange = (key: string, value: string) => {
    setExerciseNotes(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Your Gym Routine</h1>
        <p>Pick a workout split, customize your sets, and log your progress live.</p>
      </header>

      {errorMsg && <div className="alert alert-error">{errorMsg}</div>}

      {loadingSplits ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Loading splits...</p>
        </div>
      ) : (
        <div className="dashboard-layout">
          {/* Sidebar - Choose Split */}
          <Sidebar
            splits={splits}
            selectedSplit={selectedSplit}
            onSelectSplit={setSelectedSplit}
          />

          {/* Main Dashboard Area */}
          <main className="dashboard-main">
            {loadingDetails ? (
              <div className="loader-container">
                <div className="loader"></div>
                <p>Fetching exercise list...</p>
              </div>
            ) : splitDetails && activeSubSplit ? (
              <WorkoutEditor
                selectedSplit={selectedSplit}
                splitDetails={splitDetails}
                activeSubSplit={activeSubSplit}
                onSetActiveSubSplit={setActiveSubSplit}
                checkedExercises={checkedExercises}
                onToggleCheck={handleToggleCheck}
                exerciseNotes={exerciseNotes}
                onNoteChange={handleNoteChange}
              />
            ) : (
              <div className="empty-dashboard">
                <p>No active routines found. Please select a split routine from the left panel.</p>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
