'use client';

interface ExerciseRowProps {
  exerciseKey: string;
  exerciseName: string;
  isChecked: boolean;
  onToggleCheck: () => void;
  noteValue: string;
  onNoteChange: (value: string) => void;
}

export default function ExerciseRow({
  exerciseKey,
  exerciseName,
  isChecked,
  onToggleCheck,
  noteValue,
  onNoteChange,
}: ExerciseRowProps) {
  const formatLabel = (camelCase: string): string => {
    const result = camelCase.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  return (
    <div className={`exercise-row ${isChecked ? 'completed-row' : ''}`}>
      <div className="exercise-checkbox-col">
        <label className="checkbox-container">
          <input 
            type="checkbox" 
            checked={isChecked}
            onChange={onToggleCheck}
          />
          <span className="checkmark"></span>
        </label>
      </div>

      <div className="exercise-info-col">
        <h4 className="exercise-type">{formatLabel(exerciseKey)}</h4>
        <span className="exercise-movement">{exerciseName}</span>
      </div>

      <div className="exercise-notes-col">
        <input 
          type="text" 
          className="notes-input"
          value={noteValue}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="Add sets/reps e.g., 4x12 @ 40lbs"
        />
      </div>
    </div>
  );
}
