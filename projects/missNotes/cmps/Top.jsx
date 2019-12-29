<<<<<<< HEAD
import Search from "../cmps/Search.jsx";

=======
import AddNote from "../cmps/AddNote.jsx";
// import showAllNotes from "../cmps/showAllNotes.jsx";
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1

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

<<<<<<< HEAD
            <div>
              <Search />
            </div>

=======
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1
            <div className="n-home-link">
              <Link to="/">Back home</Link>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
