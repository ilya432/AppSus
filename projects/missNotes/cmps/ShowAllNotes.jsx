import { notesList } from "../js/notesService";

export default class showAllNotes extends React.Component {
  render() {
    notes = notesList.map(note => {
      // <li key={note.type}>{note.info.txt}</li>
      console.log(note);
      return <div className="notes">{note}</div>;
    });
  }
}
