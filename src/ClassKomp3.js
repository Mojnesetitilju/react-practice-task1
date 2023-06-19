import React from "react";
import oneLinerJoke from "one-liner-joke";

 export default class ClassKomp3 extends React.Component {
        render() {
            const users = this.props.people;
            const joke = oneLinerJoke.getRandomJoke();
            return (
                <>
                <h2>Class komponenta 3</h2>
                <p>Zbroj godina svih zaposlenika je: {users[0].age+users[1].age+users[2].age+users[3].age+users[4].age+users[5].age+users[6].age+users[7].age+users[8].age+users[9].age}</p>
                <p>Random joke: {joke.body}</p>
                <hr/>
                </>
            )
        }
 };
