export default class AddNote extends React.Component {
  render() {
    return (
      <div className="n-add-note-container flex row">
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
    );
  }
}
