import Home from "./pages/Home.jsx";
import MisterEmailPage from "./projects/misterEmail/pages/MisterEmailPage.jsx";

import MissNotes from './projects/missNotes/pages/MissNotes.jsx'
import EmailContent from './projects/misterEmail/cmps/EmailContent.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
const { createBrowserHistory } = History;
const history = createBrowserHistory();

class App extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={MisterEmailPage} path="/email" exact></Route>
                        <Route component={EmailContent} path="/mister-email/email-content/:content" exact ></Route>
                        <Route component={MissNotes} path="/notes" exact></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
