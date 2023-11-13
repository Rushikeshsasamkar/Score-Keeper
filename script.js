    let score = 0;
    let wicket=0;



 function addOne(){
    // alert("Player took a Single");
    score+=1;
    rootElement.render(<App />);
    console.log(score);
    }

    const addScore = (num) =>{
        score+=num;
        rootElement.render(<App />);
    }

    function setWicket(){
    alert("Player got Out");
    wicket+=1;
    rootElement.render(<App />);
    }




const App = () =>{


   

    return(
    <div align='center'>
    
    <h1>SCORE KEEPER</h1>
    <h2>SCORE: {score}/{wicket}</h2>
    <div>
        <button onClick={()=>addScore(1)}>1</button>
        <button onClick={()=>addScore(2)}>2</button>
        <button onClick={()=>addScore(3)}>3</button>
        <button onClick={()=>addScore(4)}>4</button>
        <button onClick={()=>addScore(6)}>6</button>
        <button onClick={()=>addScore(-1)}>Deduct Run</button>
        <button onClick={setWicket}>Wicket</button>
    </div>
    </div>
    
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);
