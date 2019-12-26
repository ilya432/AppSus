export default class NoteImg extends React.Component {
  render() {
    return (
      <div className="n-note n-image-note flex column">
        <div className="n-note-lable-container">
          <span className="n-note-lable">{this.props.note.info.label}</span>
        </div>
        <div>
          <img className="n-note-image" src={this.props.note.info.url}></img>
        </div>
      </div>
    );
  }
}
