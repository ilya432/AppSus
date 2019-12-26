import NotePreview from "../cmps/NotePreview.jsx";

export default function NotesList(props) {
  return (
    <section >
      <ul className="n-all-notes flex row wrap">
        {props.notes.map((note, i) => (
          <NotePreview key={i} note={note}></NotePreview>
        ))}
      </ul>
    </section>
  );
}
