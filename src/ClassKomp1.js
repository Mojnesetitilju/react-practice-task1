import React from "react";


 export default class ClassKomp1 extends React.Component {
    
       
        render() {
            const users = this.props.people;
            return (
                <>
                <h2>ClassKomp1</h2>
                <p>Moje ime je {users[1].name}. Imam {users[1].age} godine.</p>
                <hr/>
                </>
            )
        }
 };


