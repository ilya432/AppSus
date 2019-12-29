import EmailService from '../js/EmailService.js'


const { Link } = ReactRouterDOM



export default class EmailPreview extends React.Component {

    state = {
        emailList: [],
        selectedEmail: {},
        email: this.props.email
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }
    onEmailClick = () => {
        EmailService.markEmailAsRead(this.props.email.id);
        this.setState((prevState) => ({ email: this.props.email }))
        this.props.loadEmailList()

    }
    onSelectEmail = (email) => {
        this.setState(() => ({ selectedEmail: email }
        ))
    }

    render() {
        return (

            <div>
                <Link to={`/mister-email/email-content/
                ${this.props.email.body}&${this.props.email.subject}&${this.props.email.id}`}>

                    <li onClick={this.onEmailClick}>
                        <span className={this.props.email.isRead ? "e-email e-read" : "e-email"}> {this.props.email.subject + ' '}
                            sent at:   {this.props.email.sentAtFormatted}</span>
                    </li>
                </Link>
                <button onClick={this.onEmailClick}>mark as read</button>
            </div>
        )


    }

}