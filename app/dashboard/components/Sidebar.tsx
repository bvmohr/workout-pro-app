interface SidebarProps {
  splits: string[];
  selectedSplit: string;
  onSelectSplit: (splitName: string) => void;
}

export default function Sidebar({ splits, selectedSplit, onSelectSplit }: SidebarProps) {
  return (
    <aside className="dashboard-sidebar">
      <h3>Routine Options</h3>
      <div className="split-selector-list">
        {splits.map((splitName) => (
          <button
            key={splitName}
            className={`split-select-btn ${selectedSplit === splitName ? 'active' : ''}`}
            onClick={() => onSelectSplit(splitName)}
          >
            <span className="split-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <svg className="icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="9" x2="15" y2="9" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="15" y2="17" />
              </svg>
            </span>
            <span className="split-name-text">{splitName.toUpperCase()} Routine</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
