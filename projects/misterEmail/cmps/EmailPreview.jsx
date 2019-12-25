const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {

    state = {
        emailList: []
    }



    render() {

        console.log('email List in Email EmailPreview:', this.props.emailList)


        return (

            <li className = "e-email">
                {this.props.email.subject}
            </li>
        )


    }

}