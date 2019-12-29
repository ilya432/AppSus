import NotePreview from "../cmps/NotePreview.jsx";

export default function NotesList(props) {
  return (
    <section className="n-notes-container">
      <ul className="n-notes-list flex row wrap">
        {props.notes.map((note, i) => (
          <NotePreview key={i} note={note}></NotePreview>
        ))}
      </ul>
    </section>
  );
}
