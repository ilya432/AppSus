//NOT IN USE!!! - MERGED WITH FILTER

export default class EmailSort extends React.Component {

  state = {
    sortBy: 'subject'
  }

  onInputChange = (ev) => {
    let sortBy = ev.target.value;
    this.setState(prevState => ({ sortBy: sortBy }),
      () => this.props.setSortBy(this.state.sortBy))
  }

  sortEmails() {

  }


  render() {
    return (
      <select name="" id="" onChange={this.onInputChange}>
        <option value="subject">sort by subject</option>
        <option value="sentAt">sort by time</option>
      </select>
    )
  }
}