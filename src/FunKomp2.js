

export default function FunKomp2 ({name,lastName,age}){
    
    
    return (
        <>
        <h2>Funkcijska Komponenta 2</h2>
        <p>{name[0]} i {name[1]} zajedno imaju {age[0]+age[1]} godina.</p>
        <p>{name[0]} se preziva {lastName[0]}, a {name[1]} se preziva {lastName[1]}</p>
        <hr/>
        </>
    )
        
    
};