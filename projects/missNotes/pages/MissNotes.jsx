import Top from "../cmps/Top.jsx";
import AddNote from "../cmps/AddNote.jsx";

import NotesService from "../js/notesService.js";
import NotesList from "../cmps/NotesList.jsx";

const { Link } = ReactRouterDOM;
export default class MissNotes extends React.Component {
  state = {
    notes: [],
    // filterBy: null
  };
  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    NotesService.getNotes(this.state.filterBy).then(notes => {
      this.setState({ notes: notes });
    });
  };

  // onFilter = filterBy => {
  //   this.setState({ filterBy }, this.loadNotes);
  // };

  render() {
    return (
      <div className="n-main-container">
        <Top />
        <AddNote />
        {/* <Filter onFilter={this.onFilter}></Filter> */}
        <NotesList notes={this.state.notes}></NotesList>
      </div>
    );
  }
}
