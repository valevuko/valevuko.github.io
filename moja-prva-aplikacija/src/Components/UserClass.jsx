import React from "react";

class UserClass extends React.Component {
    componentDidMount() {
        console.log("componentDidMount")
      }
    
      componentDidUpdate() {
        console.log("componentDidUpdate - User")
      }
    
      componentWillUnmount() {
        console.log("componentWillUnmount")
      }
    

    render() {

        const { user } = this.props;

        return (
            <p>Moje ime je {user.name} i imam {user.age} godina.</p>
        )
    }
}

export default UserClass;