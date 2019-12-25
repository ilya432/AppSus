const { Link } = ReactRouterDOM;
export default class MissNotes extends React.Component {
  render() {
    return (
      <section className="n-main-continer flex column">
        <nav className="n-nav flex row between">
          <div className="n-logo-container">
            <img
              className="n-logo"
              src="./projects/missNotes/img/Logo.png"
            ></img>
          </div>

          <div className="n-add-note-container">
            <input className="n-add-note-input" type="text" />
            <div className="n-variations-container">
              <img
                className="n-variation-img1"
                src="./projects/missNotes/img/variations/text.png"
              ></img>
              <img
                className="n-variation-img2"
                src="./projects/missNotes/img/variations/image.png"
              ></img>
              <img
                className="n-variation-img3"
                src="./projects/missNotes/img/variations/video.png"
              ></img>
              <img
                className="n-variation-img4"
                src="./projects/missNotes/img/variations/audio.png"
              ></img>
              <img
                className="n-variation-img5"
                src="./projects/missNotes/img/variations/options.png"
              ></img>
            </div>
          </div>

          <div>
            <Link to="/">Back home</Link>
          </div>
        </nav>
      </section>
    );
  }
}
