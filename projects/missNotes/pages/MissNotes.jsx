import Top from "../cmps/Top.jsx";
import AddNoteForm from "../cmps/AddNoteForm.jsx";
import Footer from "../cmps/Footer.jsx";

// import NoteForm from "../cmps/NoteForm.jsx";

import notesService from "../js/notesService.js";
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

  onDeleteNote = (id) => {
    notesService.deleteNote(id)
      .then(notes => this.setState({ notes }))
  }

  onPinToTop = (id) => {
    notesService.PinToTop(id)
      .then(notes => this.setState({ notes }))
  }

  loadNotes = () => {
    notesService.getNotes(this.state.filterBy).then(notes => {
      this.setState({ notes: notes });
    });
  };

  onAddNote = (type, txt, label, url, dodos, bgColor) => {
    notesService.addTextNote(type, txt, label, url, dodos, bgColor)
      .then(notes => this.setState({ notes }))
  }



  // onFilter = filterBy => {
  //   this.setState({ filterBy }, this.loadNotes);
  // };

  render() {
    return (
      <div className="n-main-container">
        <Top />
        <AddNoteForm onAddNote={this.onAddNote} onDeleteNote={this.onDeleteNote} />
        {/* <Filter onFilter={this.onFilter}></Filter> */}
        <NotesList notes={this.state.notes} onDeleteNote={this.onDeleteNote} onPinToTop={this.onPinToTop}></NotesList>
        <Footer></Footer>
      </div>
    );
  }
}
