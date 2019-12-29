export default class EmailFilter extends React.Component {

    state = {
        filterBy: {
            txt: '',
            isRead: 'all',
            sortBy: 'sentAt'
        }
    }

    inputChange = (ev) => {
        console.log('SORT CHANGE')
        let field = ev.target.name;
        let value = ev.target.value;
        let fnLoadEmailList = this.props.loadEmailList;
        let filterBy = { [field]: value };
        // if (field === 'txt' && !value) return;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, ...filterBy } }),
            () => fnLoadEmailList(this.state.filterBy)
        )
    }

    componentDidMount() {

        let fnLoadEmailList = this.props.loadEmailList;
        fnLoadEmailList(this.state.filterBy)

    }


    render() {
        return (
            <div>Email FILTER

            <input type="txt" name="txt" onChange={this.inputChange} ></input>
                <select type="select" name="isRead" key ="1" onChange={this.inputChange}>
                    <option value="all" >Show All</option>
                    <option value={false}>Show Unread</option>
                    <option value={true}>Show Read</option>
                </select>
                <select name="sortBy" key="2" onChange={this.inputChange}>
                    <option value="subject">sort by subject</option>
                    <option value="sentAt">sort by time</option>
                </select>
            </div>
        )
    }

}