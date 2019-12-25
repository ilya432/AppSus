import EmailPreview from '../books/BookPreview.jsx'

const { Link } = ReactRouterDOM

export default class EmailContent extends React.Component {

    state = {
        email: {},
        emailContent: ''
    }

    componentDidMount() {
    }

    render() {
        return <div>
            <div>Email Content</div>
            <EmailPreview key="201" email={this.props.email} />

            <div key="5" className="email-content">{this.props.email.content}</div>

        </div>
    }
}