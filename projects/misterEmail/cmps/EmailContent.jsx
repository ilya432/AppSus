// import EmailPreview from './EmailPreview.jsx'
import EmailService from '../js/EmailService.js'
import EmailStatus from '../cmps/EmailStatus.jsx'


const { Link } = ReactRouterDOM

export default class EmailContent extends React.Component {

    state = {
        email: {},
        emailContent: ''
    }

    componentDidMount() {
    }

    render() {

        console.log('PARAMS', this.props.match.params)
        let body = this.props.match.params;
        return (
            <div>
                <div key="5" className="email-content">Email Body: <p className="e-email-body">{body.content}</p> </div>
                <Link to={`/email`}>
                    <button>BACK</button>
                    <button onClick={EmailService.deleteEmail}>Delete</button>
                </Link>
                <EmailStatus />

            </div>

        )
    }
}