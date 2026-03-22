type PresenterNotesProps = {
  visible: boolean;
  title?: string;
  notes?: string[];
};

export function PresenterNotes({
  visible,
  title,
  notes = [],
}: PresenterNotesProps) {
  if (!visible) return null;

  return (
    <aside className="presenter-notes">
      <div className="presenter-notes-title">{title || "Speaker Notes"}</div>
      <ul>
        {notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </aside>
  );
}