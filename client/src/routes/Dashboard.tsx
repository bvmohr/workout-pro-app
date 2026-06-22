import { useState, useEffect } from 'react';
import '../assets/css/routes.css';

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

  // Helper to format exercise label
  const formatLabel = (camelCase: string): string => {
    const result = camelCase.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  // Calculate workout completion statistics
  const getCompletionStats = () => {
    if (!splitDetails || !activeSubSplit) return { total: 0, checked: 0, percent: 0 };
    const exercises = Object.keys(splitDetails[activeSubSplit] || {});
    const total = exercises.length;
    
    let checked = 0;
    exercises.forEach(exKey => {
      const uniqueKey = `${selectedSplit}-${activeSubSplit}-${exKey}`;
      if (checkedExercises[uniqueKey]) checked++;
    });

    const percent = total > 0 ? Math.round((checked / total) * 100) : 0;
    return { total, checked, percent };
  };

  const stats = getCompletionStats();

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
          <aside className="dashboard-sidebar">
            <h3>Routine Options</h3>
            <div className="split-selector-list">
              {splits.map((splitName) => (
                <button
                  key={splitName}
                  className={`split-select-btn ${selectedSplit === splitName ? 'active' : ''}`}
                  onClick={() => setSelectedSplit(splitName)}
                >
                  <span className="split-icon">📋</span>
                  <span className="split-name-text">{splitName.toUpperCase()} Routine</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Dashboard Area */}
          <main className="dashboard-main">
            {loadingDetails ? (
              <div className="loader-container">
                <div className="loader"></div>
                <p>Fetching exercise list...</p>
              </div>
            ) : splitDetails && activeSubSplit ? (
              <div className="workout-editor">
                {/* Tabs to select sub-splits (e.g. push, pull, legs or chest, back, shoulders) */}
                <div className="subsplit-tabs">
                  {Object.keys(splitDetails).map((subSplit) => (
                    <button
                      key={subSplit}
                      className={`tab-btn ${activeSubSplit === subSplit ? 'active' : ''}`}
                      onClick={() => setActiveSubSplit(subSplit)}
                    >
                      {subSplit.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="progress-section">
                  <div className="progress-label">
                    <span>Routine Completion ({activeSubSplit.toUpperCase()})</span>
                    <span className="percent-text">{stats.percent}% Done ({stats.checked}/{stats.total})</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${stats.percent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Exercises checklist */}
                <div className="exercise-list">
                  {Object.entries(splitDetails[activeSubSplit] || {}).map(([exKey, exName]) => {
                    const uniqueKey = `${selectedSplit}-${activeSubSplit}-${exKey}`;
                    const isChecked = !!checkedExercises[uniqueKey];
                    const noteValue = exerciseNotes[uniqueKey] || '';

                    return (
                      <div 
                        key={exKey} 
                        className={`exercise-row ${isChecked ? 'completed-row' : ''}`}
                      >
                        <div className="exercise-checkbox-col">
                          <label className="checkbox-container">
                            <input 
                              type="checkbox" 
                              checked={isChecked}
                              onChange={() => handleToggleCheck(uniqueKey)}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>

                        <div className="exercise-info-col">
                          <h4 className="exercise-type">{formatLabel(exKey)}</h4>
                          <span className="exercise-movement">{exName}</span>
                        </div>

                        <div className="exercise-notes-col">
                          <input 
                            type="text" 
                            className="notes-input"
                            value={noteValue}
                            onChange={(e) => handleNoteChange(uniqueKey, e.target.value)}
                            placeholder="Add sets/reps e.g., 4x12 @ 40lbs"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
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
