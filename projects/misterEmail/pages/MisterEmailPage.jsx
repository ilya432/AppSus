import EmailList from "../cmps/EmailList.jsx";
import { getEmailList } from "../js/emailService.js";
import emailService from "../js/emailService.js";

export default class MisterEmailPage extends React.Component {
  state = {
    emailList: []
  };

  componentDidMount() {
    this.loadEmailList();
  }
  loadEmailList = () => {
    let emailList = emailService.getEmailList().then(emailList => {
      console.log("Email List recieved from Service:", emailList);
      this.setState({ emailList });
    });
  }

  render() {
    console.log("this.state.emailList: ", this.state.emailList);

    return (
      <div>
        Mister Email Page
        <EmailList emailList={this.state.emailList} />
      </div>
    );
  }
}
