// import EmailPreview from './EmailPreview.jsx'
import EmailService, { gReadEmailPercent } from '../js/EmailService.js'
const { Link } = ReactRouterDOM
export default class EmailContent extends React.Component {
    state = {
        email: {},
        emailContent: '',
        body: '',
        subject: '',
        id: ''
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
        return (
            <div>
                <div key="5" className="email-content">
                    <p className="e-email-body">Email Subject:{subject}</p>
                    <p>Email Body: {body}</p>
                </div>
                <Link to={`/email`}>
                    <button>Back</button>
                    <button onClick={EmailService.deleteEmail}>Delete</button>
                </Link>
                <Link to={`/mister-email/email-reply/${body}&${subject}&${id}`}>
                    <button>Reply</button>
                </Link>
                {/* <EmailCompose/> */}
            </div>
        )
    }
}