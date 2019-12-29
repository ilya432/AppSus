import Search from "../cmps/Search.jsx";


const { Link } = ReactRouterDOM;
export default class Top extends React.Component {
  render() {
    return (
      <div className="n-top-continer flex column">
        <section className="top">
          <nav className="n-nav flex row between">
            <div className="n-logo-container">
              <img
                className="n-logo"
                src="./projects/missNotes/img/Logo.png"
              ></img>
            </div>

            <div>
              <Search />
            </div>

            <div className="n-home-link">
              <Link to="/">Back home</Link>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
