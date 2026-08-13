'use client';

import ExerciseRow from './ExerciseRow';

interface SubSplitExercises {
  [exerciseKey: string]: string;
}

interface SplitDetails {
  [subSplitName: string]: SubSplitExercises;
}

interface WorkoutEditorProps {
  selectedSplit: string;
  splitDetails: SplitDetails;
  activeSubSplit: string;
  onSetActiveSubSplit: (subSplit: string) => void;
  checkedExercises: { [key: string]: boolean };
  onToggleCheck: (key: string) => void;
  exerciseNotes: { [key: string]: string };
  onNoteChange: (key: string, value: string) => void;
}

export default function WorkoutEditor({
  selectedSplit,
  splitDetails,
  activeSubSplit,
  onSetActiveSubSplit,
  checkedExercises,
  onToggleCheck,
  exerciseNotes,
  onNoteChange,
}: WorkoutEditorProps) {
  // Calculate workout completion statistics
  const getCompletionStats = () => {
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
    <div className="workout-editor">
      {/* Tabs to select sub-splits (e.g. push, pull, legs or chest, back, shoulders) */}
      <div className="subsplit-tabs">
        {Object.keys(splitDetails).map((subSplit) => (
          <button
            key={subSplit}
            className={`tab-btn ${activeSubSplit === subSplit ? 'active' : ''}`}
            onClick={() => onSetActiveSubSplit(subSplit)}
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
          return (
            <ExerciseRow
              key={exKey}
              exerciseKey={exKey}
              exerciseName={exName}
              isChecked={!!checkedExercises[uniqueKey]}
              onToggleCheck={() => onToggleCheck(uniqueKey)}
              noteValue={exerciseNotes[uniqueKey] || ''}
              onNoteChange={(value) => onNoteChange(uniqueKey, value)}
            />
          );
        })}
      </div>
    </div>
  );
}
