import EmailService from '../js/EmailService.js'

const { Link } = ReactRouterDOM

export default class EmailReply extends React.Component {

    state = {
        body: '',
        subject: '',
        id: '',
        re: 'RE: '
    }

    onChangeEmail = (ev) => {
        ev.preventDefault();
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ [field]: value })
    }

    onSendEmail = (ev) => {
        // ev.preventDefault();
        EmailService.replyEmail({ ...this.state })
        EmailService.getEmailList({ txt: '', isRead: 'all' })
        this.setState({ subject: '', body: '' })
    }

    componentDidMount() {

        let emailContent = this.props.match.params.content.split('&');
        let emailBody = emailContent[0];
        let emailSubject = emailContent[1];
        let emailId = emailContent[2]
        this.setState({ body: emailBody, subject: emailSubject, id: emailId })
    }

    render() {
        let body = this.state.body
        let subject = this.state.subject
        let id = this.state.id
        let re = this.state.re
        return (

            <div className="e-new-message">
                <form action="">
                  <span>RE: </span>  <textarea placeholder="Reply" wrap="hard" name="subject" value={subject} onChange={this.onChangeEmail} /> <br />
                    <textarea placeholder="Message" wrap="hard" name="body" value={body} onChange={this.onChangeEmail} />
                    <Link to="/email">
                        <button onClick={this.onSendEmail}>Send</button>
                    </Link>
                </form>
            </div>
        )
    }

} 