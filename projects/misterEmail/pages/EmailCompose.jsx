import eventBusService from "../services/eventBusService.js";

const { Link } = ReactRouterDOM

export default class EmailCompose extends React.Component {

    state = {
        subject: '',
        body: ''
    }
    onChangeEmail = (ev) => {
        ev.preventDefault();
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ [field]: value })
    }

    onSendEmail = (ev) => {
        ev.preventDefault();
        this.props.addEmail({ ...this.state })
        this.props.loadEmailList({txt:'',isRead:'all'})
        this.setState({subject: '',body: ''})
    }

    render() {
        return (
            <div className="e-new-message hidden" >
                <form action="">
                    <textarea placeholder="Subject" wrap="hard" name="subject" value={this.state.subject}  onChange={this.onChangeEmail} /> <br />
                    <textarea placeholder="Message" wrap="hard" name="body" value={this.state.body}  onChange={this.onChangeEmail} />
                    <button type="submit" onClick={this.onSendEmail}>Send</button>
                </form>
            </div>
        )
    }
}