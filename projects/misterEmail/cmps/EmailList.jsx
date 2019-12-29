import EmailPreview from './EmailPreview.jsx'

export default class EmailList extends React.Component {
    render() {
        return (
            <div>
                <ul className="e-emailList">
                    {this.props.emailList && this.props.emailList.map((email, i) =>
                        <EmailPreview key={i} email={email} loadEmailList={this.props.loadEmailList}/>)}
                </ul>
            </div>
        )
    }
} 