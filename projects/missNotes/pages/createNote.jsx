export default class createNote extends React.Component {
  state = { name: "" };
  changeInput = ev => {
    this.setState({ name: ev.target.value });
  };
  onSave = ev => {
    ev.preventDefault();
    this.props.onSave(this.state.name);
  };
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.name}
          onChange={this.changeInput}
        />
        <button onClick={this.onSave}>Save</button>
      </form>
    );
  }
}
