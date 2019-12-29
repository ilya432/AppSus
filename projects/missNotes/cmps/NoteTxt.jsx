import notesService from "../js/notesService.js"
export default class NoteTxt extends React.Component {


  render() {
    return (
      // onClick={this.onNoteClick(this.props.note)}
      <div className="n-note n-text-note flex column" >
        <div className="n-note-header n-text-note-header">
          <span className="n-note-lable">{this.props.note.info.label}</span>
        </div>
        <div className="n-note-text-container">
          <span className="n-note-txt">{this.props.note.info.txt}</span>
        </div>




        <div className="in-note-controls" >
          <img className="in-note-control-img" onClick={() => this.props.onDeleteNote(this.props.note.id)} src="./projects/missNotes/img/variations/delete.png"></img>
          <img className="in-note-control-img" onClick={() => this.props.onPinToTop(this.props.note.id)} src="./projects/missNotes/img/variations/unpin.png"></img>
        </div>

      </div>
    );
  }
}
