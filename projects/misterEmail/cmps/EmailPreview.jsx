import EmailService from '../js/EmailService.js'


const { Link } = ReactRouterDOM



export default class EmailPreview extends React.Component {

    state = {
        emailList: [],
        selectedEmail: {}
    }

    componentDidMount() {
        console.log('COMPONENT DID Mount!!!!')

    }

    componentDidUpdate() {
        console.log('COMPONENT DID UPDATE!!!!')
    }
    onEmailClick = () => {
        EmailService.markEmailAsRead(this.props.email.id);
    }
    onSelectEmail = (email) => {
        this.setState(() => ({ selectedEmail: email }
        ))
        console.log('email selected props', email)
    }

    render() {

        console.log('email List in Email EmailPreview:', this.props.emailList)
        console.log('email selected state', this.state.selectedEmail)



        return (

            <Link to={`/mister-email/email-content/${this.props.email.body}`}>


                <li onClick={this.onEmailClick}>
                    <span className={this.props.email.isRead ? "e-email e-read" : "e-email"}> {this.props.email.subject}</span>
                    {/* {this.state.selectedEmail && <div className="e-email-body">{this.state.selectedEmail.body}</div>} */}
                </li>
            </Link>
        )

 
    }

}