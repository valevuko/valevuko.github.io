import React from "react";

class UserClass extends React.Component {
    render() {

        const { user } = this.props;

        return (
            <p>Moje ime je {user.name} i imam {user.age} godina.</p>
        )
    }
}

export default UserClass;