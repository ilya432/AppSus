const { Link } = ReactRouterDOM;

export default class PetPreview extends React.Component {
  onSelectNote = () => {
    if (this.props.onSelectNote) this.props.onSelectNote(this.props.note);
  };
  render() {
    // const props = this.props;
    const { props } = this;
    return (
      <Link to={`/notes/${props.note.id}`}>
        <li onClick={this.onSelectNote}>
          <h2>{props.note.lable}</h2>
        </li>
      </Link>
    );
  }
}
