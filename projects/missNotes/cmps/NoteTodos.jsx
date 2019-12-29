import notesService from "../js/notesService.js"
export default class NoteTodos extends React.Component {

    render() {
        return (
            <div className="n-note n-todoes-note flex column">
                <div className="n-note-header n-todo-header">
                    <span className="n-note-lable n-todo-label">{this.props.note.info.label}</span>
                </div>
                <div className="n-note-text-container">
                    <ul className="n-dotos-list">
                        {this.props.note.info.todos.map((todo, i) => <li className="n-todo-item" key={i}> {todo.txt} {todo.doneAt}</li>)}
                    </ul>
                </div>

                <div className="in-note-controls">
                    <img className="in-note-control-img" onClick={() => this.props.onDeleteNote(this.props.note.id)} src="./projects/missNotes/img/variations/delete.png"></img>
                    <img className="in-note-control-img" onClick={() => this.props.onPinToTop(this.props.note.id)} src="./projects/missNotes/img/variations/unpin.png"></img>
                </div>
            </div>
        );
    }
}