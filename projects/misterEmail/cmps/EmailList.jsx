import EmailPreview from './EmailPreview.jsx'

export default class EmailList extends React.Component {

    state = {
        EmailList: []
    }

    componentDidMount() {
    }

    onSelectEmail = (email) => {
    }

    render() {
        // console.log('emails in list', this.props.emails)
        // const emailList = this.props.emailList
        console.log('email List in Email List Component:', this.props.emailList)

        return (

            <div>
                <ul className="e-emailList">
                    {this.props.emailList && this.props.emailList.map((email, i) =>
                        <EmailPreview key={i} email={email} />)}
                </ul>
            </div>
        )
    }
} 