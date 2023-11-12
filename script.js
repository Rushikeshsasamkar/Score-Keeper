    let score = 0;
    let wicket=0;



 function addOne(){
    // alert("Player took a Single");
    score+=1;
    rootElement.render(<App />);
    console.log(score);
    }

    function addTwo(){
    alert("Player took a Double");
    score+=2;
    rootElement.render(<App />);
    console.log(score);
    }

    function addThree(){
    alert("Player took a Triple");
    score+=3;
    rootElement.render(<App />);
    console.log(score);
    }

    function addFour(){
    alert("Player hit the boundry");
    score+=4;
    rootElement.render(<App />);
    console.log(score);
    }

    function addSix(){
    alert("Player hit the Six");
    score+=6;
    rootElement.render(<App />);
    console.log(score);
    }

    function reduceOne(){
    score-=1;
    rootElement.render(<App />);
    console.log(score);
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
        <button onClick={addOne}>1</button>
        <button onClick={addTwo}>2</button>
        <button onClick={addThree}>3</button>
        <button onClick={addFour}>4</button>
        <button onClick={addSix}>6</button>
        <button onClick={reduceOne}>Deduct Run</button>
        <button onClick={setWicket}>Wicket</button>
    </div>
    </div>
    
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);
