export default class NoteTxt extends React.Component {
  render() {
    return (
      <div className="n-note flex column">

        <div className="n-note-lable-container">
          <span className="n-note-lable">{this.props.note.info.lable}</span>
        </div>

        <div className="n-note-text-container">
          <span className="n-note-txt">{this.props.note.info.txt}</span>
        </div>

      </div>
    );
  }
}
