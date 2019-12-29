import EmailList from "../cmps/EmailList.jsx";
import { getEmailList } from "../js/EmailService.js";
import EmailService, { gReadEmailPercent } from "../js/EmailService.js";
import EmailStatus from "../cmps/EmailStatus.jsx"
import EmailFilter from '../cmps/EmailFilter.jsx'
import EmailCompose from './EmailCompose.jsx'
import EmailSort from '../cmps/EmailSort.jsx'

const { Link } = ReactRouterDOM;

///mister-email/email-compose

export default class MisterEmailPage extends React.Component {
  state = {
    emailList: []
  };

  componentDidMount() {

    // this.loadEmailList();
  }


  loadEmailList = (filterBy) => {

    EmailService.getEmailList(filterBy).then(emailList => {
      this.setState(prevState => ({ emailList }));
    });

  }

  setSortBy = (sortBy) => {
    EmailService.setSortBy(sortBy)
    this.loadEmailList()
  }

  showEmailCompose = () => {
    console.log('SHOW EMAIL COMPOSE')
    let elCompose = document.querySelector('.e-new-message');
    elCompose.classList.remove('hidden')
  }


  render() {

    return (

      <div>
        Mister Email Page
        <EmailStatus readEmailPercent={gReadEmailPercent} />
        {/* <EmailSort setSortBy ={this.setSortBy} /> */}
        <EmailFilter loadEmailList={this.loadEmailList} />
        <button onClick={this.showEmailCompose}>New Email</button>
        <EmailList emailList={this.state.emailList} loadEmailList={this.loadEmailList} />
        <EmailCompose addEmail={EmailService.addEmail} loadEmailList={this.loadEmailList} />
      </div>
    );
  }
}
