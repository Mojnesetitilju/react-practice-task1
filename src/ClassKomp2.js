import React from "react";


 export default class ClassKomp2 extends React.Component {
        render() {
            const users = this.props.people;
            return (
                <>
                <h2>Class komponenta 2</h2>
                <ul>
                    <li>{users[2].lastName}</li>
                    <li>{users[3].lastName}</li>
                    <li>{users[4].lastName}</li>
                    <li>{users[7].lastName}</li>
                    <li>{users[9].lastName}</li>
                </ul>
                <hr/>
                </>
            )
        }
 };
