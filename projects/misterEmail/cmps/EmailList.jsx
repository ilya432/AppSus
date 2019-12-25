import EmailPreview from './EmailPreview.jsx'

export default class EmailList extends React.Component {

    state = {
        EmailList: []
    }

    componentDidMount() {
    }

    onSelectEmail = (email) => {
        console.log('email selected ', email)
    }

    render() {
        // console.log('emails in list', this.props.emails)
        // const emailList = this.props.emailList
        console.log('email List in Email List Component:', this.props.emailList)

        return <div>EMAIL - LIST

            {/* <EmailPreview emailList={this.props.emailList} /> */}

            <ul className="e-emailList">
                {this.props.emailList && this.props.emailList.map((email, i) =>
                    <EmailPreview key={i} email={email} />)}</ul>
        </div>
    }
} 