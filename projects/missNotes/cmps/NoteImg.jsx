import notesService from "../js/notesService.js"
export default class NoteImg extends React.Component {

  render() {
    return (
      <div className="n-note n-image-note flex column">
        <div className="n-note-header n-image-note-header">
          <span className="n-note-lable">{this.props.note.info.title}</span>
        </div>
        <div>
          <img className="n-image-note-img" src={this.props.note.info.url}></img>
        </div>

        <div className="image-upload">
          <label htmlFor="save-input">
            <img className="n-save-img-btn" src="./projects/missNotes/img/variations/image.png" />
          </label>
          <input className="save-input" type="file" accept=".jpg, .jpeg, .png" multiple
            onChange={notesService.saveImages} />
        </div>

        <div className="in-note-controls" >
          <img className="in-note-control-img" onClick={() => this.props.onDeleteNote(this.props.note.id)} src="./projects/missNotes/img/variations/delete.png"></img>
          <img className="in-note-control-img" onClick={() => this.props.onPinToTop(this.props.note.id)} src="./projects/missNotes/img/variations/unpin.png"></img>
        </div>
      </div>
    );
  }
}