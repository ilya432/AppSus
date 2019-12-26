// import EmailPreview from './EmailPreview.jsx'

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

            <div key="5" className="email-content">Email Body: <p className="e-email-body">{body.content}</p> </div>
        )
    }
}