import NotePreview from "../cmps/NotePreview.jsx";

export default function NotesList(props) {
  return (
    <section className="n-all-notes">
      <ul>
        {props.notes.map((note, i) => (
          <NotePreview key={i} note={note}></NotePreview>
        ))}
      </ul>
    </section>
  );
}
