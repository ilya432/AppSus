export default class NoteTodos extends React.Component {

    render() {
        return (
            <div className="n-note n-todoes-note flex column">

                <div className="n-note-header">
                    <span className="n-note-lable">{this.props.note.info.label}</span>
                </div>

                <div className="n-note-text-container">
                    <ul className="n-note-">
                        {this.props.note.info.todos.map(todo => <li className=""> {todo.txt} {todo.doneAt}</li>)}
                    </ul>


                </div>

            </div>
        );
    }
}