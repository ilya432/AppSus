export default class NoteTodos extends React.Component {
    render() {
        return (
            <div className="n-note n-todoes-note flex column">

                <div className="n-note-lable-container">
                    <span className="n-note-lable">{this.props.note.info.lable}</span>
                </div>

                <div className="n-note-text-container">
                    <span className="n-note-txt">{this.props.note.info.todoes.txt}</span>
                </div>

            </div>
        );
    }
}