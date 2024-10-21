const Challenge = () =>{
    const a = 1;
    const b = 2;

    console.log("Valor de A: "+a);
    console.log("Valor de B: "+b);

    const handleMyEvent = () =>{
        console.log("Resultado da soma: " +(a+b));
    };

    return(
        <div>
            <button onClick={handleMyEvent}>Somar</button>
        </div>
    );    
};

export default Challenge;