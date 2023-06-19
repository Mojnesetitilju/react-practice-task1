import daddy_jokes from "daddy-jokes"

export default function FunKomp3 ({props}){
    const daddy = daddy_jokes();
    return (
        <>
        <h2>Funkcijska Komponeneta 3</h2>
        <h3>Popis zaposlenika</h3>
        <ol>
        <li>{props[6].name}</li>
        <li>{props[7].name}</li>
        <li>{props[8].name}</li>
        <li>{props[9].name}</li>
        <li>{props[5].name}</li>
       </ol>
        <p>{daddy}</p>
        <hr/>
        </>
    )
        
    
};