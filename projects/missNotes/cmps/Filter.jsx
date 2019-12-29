export default class Filter extends React.Component {
  state = {
    filterBy: {
      activity: ""
    }
  };
  changeOption = ev => {
    const field = ev.target.name;
    this.setState(prevState => ({
      filterBy: { ...prevState.filterBy, [field]: value }
    }));
  };

  onFilterClick = () => {
    this.props.onFilter(this.state.filterBy);
  };
  render() {
    return (
      <div>
        <select onChange={this.changeOption}>
          <option value={this.state.filterBy.activity}>Active</option>
          <option value={this.state.filterBy.activity}>Done</option>
        </select>
      </div>
    );
  }
}
