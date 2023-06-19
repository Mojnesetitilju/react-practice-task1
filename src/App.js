import ClassKomp1 from "./ClassKomp1";
import ClassKomp2 from "./ClassKomp2";
import ClassKomp3 from "./ClassKomp3";
import FunKomp1 from "./FunKomp1";
import FunKomp2 from "./FunKomp2";
import FunKomp3 from "./FunKomp3";


function App() {
  const users = [{
      name: "Alice",
      lastName: "Smith",
      age: 23
  },
{
      name: "Bob",
      lastName: "Johnson",
      age: 42
  },

{
  name: "Charlie",
      lastName: "Williams",
      age: 18
  },

{
  name: "David",
      lastName: "Jones",
      age: 33
  },

{
  name: "Eve",
      lastName: "Brown",
      age: 24
  },

{
  name: "Frank",
      lastName: "Davis",
      age: 34
  },

{
  name: "Grace",
      lastName: "Miller",
      age: 27
  },

{
  name: "Henry",
      lastName: "Wilson",
      age: 53
  },

{name: "Ivy",
lastName: "Taylor",
age: 65
},
{
  name: "Jack",
      lastName: "Anderson",
      age: 29
  
}]


  return (
    <div>
      <FunKomp1 name = {users[1].name} lastName = {users[1].lastName} age = {users[1].age}/>
      <FunKomp2 name = {[users[0].name, users[3].name]} lastName = {[users[0].lastName, users[3].lastName]} age = {[users[0].age,users[3].age]}/>
      <FunKomp3 props = {users}/>
      <ClassKomp1 people = {users}/>
      <ClassKomp2 people = {users}/>
      <ClassKomp3 people = {users}/>
    </div>
  );
}

export default App;
