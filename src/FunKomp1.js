import PropTypes from "prop-types";
import snakenames from "snake-names"

export default function FunKomp1 ({name,lastName,age}){
        const snake = snakenames.random();
    return (<>
        <h2>Funkcijska Komponeneta 1</h2>
        <h3>Moje ime je {name}</h3>
        <p>Prezime {lastName}</p>
        <p>I imam {age}</p>
        <p>Random snake: {snake}</p>
        <hr/>
        </>
    );
    
    
    
    
       
    
};
FunKomp1.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number
}