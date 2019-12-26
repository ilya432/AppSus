const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {

    state = {
        emailList: [],
        selectedEmail: {}
    }

    onSelectEmail = (email) => {
        this.setState(() => ({ ['selectedEmail']: email }
        ))
        console.log('email selected props', email)

    }

    render() {

        console.log('email List in Email EmailPreview:', this.props.emailList)
        console.log('email selected state', this.state.selectedEmail)



        return (

            <Link to={`/mister-email/email-content/${this.props.email.body}`}>


                <li onClick={() => this.onSelectEmail(this.props.email)}>
                    <span className="e-email"> {this.props.email.subject}</span>
                    {this.state.selectedEmail && <div className="e-email-body">{this.state.selectedEmail.body}</div>}
                </li>
            </Link>
        )


    }

}