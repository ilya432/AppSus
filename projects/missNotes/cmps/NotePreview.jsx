const { Link } = ReactRouterDOM;
import NoteTxt from './NoteTxt.jsx'
import NoteImg from './NoteImg.jsx'
import NoteTodo from './NoteTodo.jsx'

export default class NotePreview extends React.Component {


    onSelectNote = () => {
        if (this.props.onSelectNote) this.props.onSelectNote(this.props.note);
    };
    render() {
        // const props = this.props;
        // const { props } = this;

        const DynamicCmp = (props) => {
            switch (this.props.note.type) {
                case 'NoteText':
                    return <NoteTxt {...this.props}></NoteTxt>
                case 'NoteImg':
                    return <NoteImg {...this.props}></NoteImg>
                // case 'NoteTodos':
                //     return <div> {...props}</div>
                default:
                    return <div>'dfdf'</div>
            }
        }
        return (this.props.note && <div>

            {/* <Link to={`/notes/${props.note.id}`}> */}
            <DynamicCmp />
            {/* </Link> */}
        </div>
        );
    }
}
