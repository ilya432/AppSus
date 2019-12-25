import Home from './pages/Home.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
            <Switch>
               <Route component={Home} path="/" exact></Route>
            </Switch>
         </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)