// import EmailPreview from './EmailPreview.jsx'

const { Link } = ReactRouterDOM

export default class EmailStatus extends React.Component {

    state = {
        email: {},
        emailContent: ''
    }

    componentDidMount() {
    }

    render() {

        return (
            <div>
                Read Emails Percent: {this.props.readEmailPercent}
            </div>

        )
    }
}