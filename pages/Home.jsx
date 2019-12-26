const { Link } = ReactRouterDOM;
export default class Home extends React.Component {
  render() {
    return (
      <section className="h-main-continer flex column">
        <nav className="h-nav flex row between">
          <div className="h-logo-container">
            <img className="h-logo" src="./img/Logo.png"></img>
          </div>

          <div className="h-links-container">
            <ul className="h-links-list flex row">
              <li>
                <Link to="/notes">Miss-Notes</Link>
              </li>
              <li>
                <Link to="/mister-email">Mister E-mail</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}
