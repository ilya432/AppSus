import EmailList from "../cmps/EmailList.jsx";
import { getEmailList } from "../js/emailService.js";
import emailService from "../js/emailService.js";

export default class MisterEmailPage extends React.Component {
  state = {
    emailList: []
  };

<<<<<<< HEAD
    state = {
        emailList: [],
        selectedEmail: {}
    }

    componentDidMount() {
        this.loadEmailList()
    }

    setSelectedEmail(){

    }
    
    loadEmailList() {
        let emailList = emailService.getEmailList()
            .then(emailList => {
                console.log('Email List recieved from Service:', emailList);
                this.setState({ emailList })
            })
=======
  componentDidMount() {
    this.loadEmailList();
  }
  loadEmailList() {
    let emailList = emailService.getEmailList().then(emailList => {
      console.log("Email List recieved from Service:", emailList);
      this.setState({ emailList });
    });
  }

  render() {
    console.log("this.state.emailList: ", this.state.emailList);
>>>>>>> 153884e35d4d78395dba5c71e3ad868331c67028

    return (
      <div>
        Mister Email Page
        <EmailList emailList={this.state.emailList} />
      </div>
    );
  }
}
