
const App = () =>{
    let score = 0;
    let wicket=0;
    return(
    <div align='center'>
    
    <h1>SCORE KEEPER</h1>
    <h2>SCORE: {score}/{wicket}</h2>
    
    </div>
    
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
