import Home from "./pages/Home.jsx";
import MisterEmailPage from "./projects/misterEmail/pages/MisterEmailPage.jsx";

<<<<<<< HEAD
import MissNotes from './projects/missNotes/pages/MissNotes.jsx'
import EmailContent from './projects/misterEmail/cmps/EmailContent.jsx'
=======
import MissNotes from "./projects/missNotes/pages/MissNotes.jsx";
>>>>>>> 153884e35d4d78395dba5c71e3ad868331c67028

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
const { createBrowserHistory } = History;
const history = createBrowserHistory();

class App extends React.Component {
<<<<<<< HEAD

    render() {
        return (
            <main>
                <Router history={history}>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={MisterEmailPage} path="/mister-email" exact></Route>
                        <Route component={EmailContent} path="/mister-email/email-content/:content" exact ></Route>
                        <Route component={MissNotes} path="/miss-notes" exact></Route>
                        
                    </Switch>
                </Router>
            </main>
        )
    }
=======
  render() {
    return (
      <main>
        <Router history={history}>
          <Switch>
            <Route component={Home} path="/" exact></Route>
            <Route
              component={MisterEmailPage}
              path="/mister-email"
              exact
            ></Route>
            <Route component={MissNotes} path="/miss-notes" exact></Route>
          </Switch>
        </Router>
      </main>
    );
  }
>>>>>>> 153884e35d4d78395dba5c71e3ad868331c67028
}

ReactDOM.render(<App />, document.getElementById("root"));
