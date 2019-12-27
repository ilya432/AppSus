export default class NoteTxt extends React.Component {
  render() {
    return (
      <div className="n-note n-text-note flex column">
        <div className="n-note-text-container">
          <span className="n-note-text">{this.props.note.info.txt}</span>
        </div>

      </div>
    );
  }
}
