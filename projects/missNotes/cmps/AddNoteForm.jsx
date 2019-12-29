import noteService from "../js/notesService.js"
import NotesPreview from "../cmps/NotePreview.jsx"

export default class AddNoteForm extends React.Component {

  state = {

    // note: {},
    // value: "Take a note...",
    type: '',
    txt: 'Take a note...',
    label: 'Give a label...',
    url: '',
    dodos: [],
    bgColor: '#ccc'
  }
  componentDidMount() {
    this.setFormDataForEdit();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.note !== this.props.note) {
      this.setFormDataForEdit();
    }
  }
  setFormDataForEdit() {
    const { note } = this.props;
    if (note) {
      this.setState({ type: note.type, txt: note.txt, label: note.label, url: note.url, dodos: note.info.todos, bgColor: note.bgColor })
    }
  }

  changeLabelInput = (ev) => {
    this.setState({ label: ev.target.value })
  }
  emptyLabel = (ev) => {
    if (ev.target.value === 'Give a label...')
      this.setState({ label: '' })
  }

  changeTxtInput = (ev) => {
    this.setState({ txt: ev.target.value })
  }
  emptyTxt = () => {
    if (this.state.txt === 'Take a note...')
      this.setState({ txt: '' })
  }

  onLabelFocus = (ev) => {

  }
  onOutOfFocus = (ev) => {
    if (ev.target.value === '')
      this.setState({ label: 'Give a label...' })



    // let textBox = document.querySelector('.'):
  }


  // onAddImage = (ev) => {

  // }


  submitForm = (ev) => {
    if (ev.target) {

    }
    ev.preventDefault()
    this.setState({ label: 'Give a label...' })
    this.setState({ txt: 'Take a note...' })
    let txt = this.state.txt;

    if (txt !== '' && txt !== 'Take a note...') {
      let label = this.state.label;
      if (label === 'Give a label...') {
        label = ''
      }
      this.props.onAddNote('NoteText', txt, label, 'some utl', ['dodos'], '#ccc')

    }

    changeBgColor = (ev) => {
      let palette = document.querySelector('.colors-palette');
      palette.css()
    }

    // this.refs['AddNoteForm'].submit(function () {
    //   ev.preventDefault()
    // })
  }


  // n-add-note-wrapper-big
  render() {
    return (
      <form className="n-add-note-container flex row wrap" onBlur={this.submitForm}>
        <div className="n-wrapper" >
          <input type="text" className="n-add-note-label" onClick={this.emptyLabel} value={this.state.label} onChange={this.changeLabelInput} onBlur={this.onOutOfFocus} ></input>
          <input type="text" className="n-add-note-input" onClick={this.emptyTxt} value={this.state.txt} onChange={this.changeTxtInput} />
          <div className="n-variations-container">
            <img
              onClick={noteService.addTextNote}
              src="./projects/missNotes/img/variations/text.png"
            ></img>
            <img onClick={this.addTextNote}
              src="./projects/missNotes/img/variations/image.png"
            ></img>
            {/* <div className="image-upload">
              <label htmlFor="save-input">
                <img className="btn-img save-img-btn" src="./projects/missNotes/img/variations/image.png" />
              </label>
              <input className="save-input" type="file" accept=".jpg, .jpeg, .png" multiple
                onChange={noteService.saveImages} />
            </div> */}
            <img src="./projects/missNotes/img/variations/video.png"
            ></img>
            <img src="./projects/missNotes/img/variations/audio.png"
            ></img>
            <img src="./projects/missNotes/img/variations/options.png"
            ></img>
            <img src="./projects/missNotes/img/variations/colors.png" onClick={this.changeBgColor}
            ></img>
          </div>

          <div className="colors-palette">
            <img className="color-palette-color-img" src="./projects/missNotes/img/colors/red.png"></img>
            <img className="color-palette-color-img" src="./projects/missNotes/img/colors/purple.png"></img>
            <img className="color-palette-color-img" src="./projects/missNotes/img/colors/blue.png"></img>
            <img className="color-palette-color-img" src="./projects/missNotes/img/colors/green.png"></img>
            <img className="color-palette-color-img" src="./projects/missNotes/img/colors/yellow.png"></img>
            <img className="color-palette-color-img" src="./projects/missNotes/img/colors/orange.png"></img>
            <img className="color-palette-color-img" src="./projects/missNotes/img/colors/white.png"></img>
            <img className="color-palette-color-img" src="./projects/missNotes/img/colors/blue navy.png"></img>
          </div>

        </div>
      </form>
    );
  }
}
