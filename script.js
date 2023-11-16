    let score = 0;
    let wicket=0;
    let ballwiseResult =[];
    let hit=0;
    let commentry=React.createRef();



    const addScore = (num) =>{
        
        hit = num;
        rootElement.render(<App />);
        
        
    }


    function setWicket(){
    
    hit = "W";
    rootElement.render(<App />);
  
    
}

const ScoreButtons =()=>(

     <div>

        <button onClick={()=>addScore(0)}>0</button>
        <button onClick={()=>addScore(1)}>1</button>
        <button onClick={()=>addScore(2)}>2</button>
        <button onClick={()=>addScore(3)}>3</button>
        <button onClick={()=>addScore(4)}>4</button>
        <button onClick={()=>addScore(6)}>6</button>
        <button onClick={()=>addScore(-1)}>Deduct Run</button>
        <button onClick={setWicket}>Wicket</button>
    </div>

)

const Result = () =>(
    <div>
    {
       
        ballwiseResult.map((res,index)=>(
         <>
         {index % 6 ==0? <br/>: null}
        <span key={index}>{res ==0?<strong>.</strong>:res}</span>&nbsp;&nbsp;</>))
    }
    </div>
)

function handleSubmit(event){
    event.preventDefault();
    if(hit=="W"){
        wicket+=1;
    }else{
    score+=hit;
    }
    ballwiseResult.unshift(
        // <span>{hit}{" :- "}{commentry.current.value}</span>
        <span>{`${hit} :- ${commentry.current.value}`}</span>
        );

    hit = 0;
    commentry.current.value="";
    rootElement.render(<App />);

}

const Form = ()=>(
    <form onSubmit={handleSubmit}> 
        <input value={hit}/>&nbsp;&nbsp;
        <input ref={commentry} placeholder="Commentery"/>
        <button>Submit</button>
    </form>
    
)


const App = () =>{


   

    return(
    <div align='center'>
    
    <h1>SCORE KEEPER</h1>
    <h2>SCORE: {score}/{wicket}</h2>
    <ScoreButtons/>
    <br/>
    {/* <Result /> */}
    <Form/>
    <hr/>
    {ballwiseResult.map((res, index)=>(
        <p key={index}>{res}</p>
    ))}
    </div>

    
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);
