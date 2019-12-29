const { Link } = ReactRouterDOM;
import NoteTxt from './NoteTxt.jsx'
import NoteImg from './NoteImg.jsx'
import NoteTodo from './NoteTodos.jsx'

export default class NotePreview extends React.Component {


    // onSelectNote = () => {
    //     if (this.props.onSelectNote) this.props.onSelectNote(this.props.note);
    // };
    render() {
        // const props = this.props;
        // const { props } = this;

        const DynamicCmp = (props) => {
            switch (this.props.note.type) {
                case 'NoteText':
                    return <NoteTxt className="note-item" {...this.props}></NoteTxt>
                case 'NoteImg':
                    return <NoteImg className="note-item" {...this.props}></NoteImg>
                case 'NoteTodos':
                    return <NoteTodo className="note-item" {...this.props}></NoteTodo>
                default:
                    return <div>'dfdf'</div>
            }

        }
        return (this.props.note && <div>

            {/* <Link to={`/notes/${props.note.id}`}> */}
            <DynamicCmp note={this.props.note} />
            {/* </Link> */}
        </div>
        );
    }
}
