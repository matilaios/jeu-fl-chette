import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import NavBarComponents from './components/NavBarComponents';
import buttonComponent from './components/buttonComponent';
import ScoreIndicator from './components/scoreIndicator';
import Button from 'react-bootstrap/Button';

function App() {
  const [total, setTotal] = useState("501");
  // const [operator,setOperator]= useState("1");

  const [scoreToReach, setScoreToReach]=useState(501);
  const [score, setScore]=useState(501);
const [multiplicator, setMultiplicator]=useState(1);


  const handleChange=(charToSubstract)=>{
    if(charToSubstract==25 && multiplicator==3){
alert("TRICHEUR!!!");
setMultiplicator(1);
    }else if((score-(charToSubstract*multiplicator))<0){
      alert('Tour terminé!!')
      setMultiplicator(1);
    }else if((score-(charToSubstract*multiplicator))==0){
      setScore(score-(charToSubstract*multiplicator));
      setMultiplicator(1);
      alert("Bien joué t'es la best");
    }
    else{
    setScore(score - (charToSubstract*multiplicator));
    setMultiplicator(1);
  }
  }
  

  


    return <>
    <container  className='d-flex flex-column align-items-center'>
       <h1>flechette</h1>  
       <ScoreIndicator maxValue={scoreToReach} value={score}/>
       </container>     
       <navBarComponents/>
    
{/* <label>score</label> <input value={total} type="text"/>  */}



       <div className='buttonGroup'>
<button variant='dark' className="button" onClick={()=>handleChange(1)}>1</button>
<button variant='light' className='"button"' onClick={()=>handleChange(2)}>2</button>
<button className="button" onClick={()=>handleChange(3)}> 3</button>
<button className="button" onClick={()=>handleChange(4)}>4</button>
<button className="button"onClick={()=>handleChange(5)}>5</button>
       </div>
       <div className='buttonGroup'>
<button className="button"onClick={()=>handleChange(6)}>6</button>
<button className="button" onClick={()=>handleChange(7)}>7</button>
<button className="button"onClick={()=>handleChange(8)}>8</button>
<button className="button" onClick={()=>handleChange(9)}>9</button>
<button className="button" onClick={()=>handleChange(10)}>10</button>
       </div>
       <div className='buttonGroup'>
<button className="button"onClick={()=>handleChange(11)}>11</button>
<button className="button" onClick={()=>handleChange(12)}>12</button>
<button className="button" onClick={()=>handleChange(13)}>13</button>
<button className="button" onClick={()=>handleChange(14)}>14</button>
<button className="button" onClick={()=>handleChange(15)}>15</button>
       </div>
       <div className='buttonGroup' >
<button className="button" onClick={()=>handleChange(16)}>16</button>
<button className="button" onClick={()=>handleChange(17)}>17</button>
<button className="button" onClick={()=>handleChange(18)}>18</button>
<button className="button" onClick={()=>handleChange(19)}>19</button>
<button className="button" onClick={()=>handleChange(20)}>20</button>
       </div>
       <div className='buttonGroup'>
<button className="button" onClick={()=>handleChange(0)}>0</button>
<button className="button" onClick={()=>handleChange(25)}>25</button>
<button className="button" onClick={()=>{setMultiplicator(2)}}>double</button>
<button className="button" onClick={()=>{setMultiplicator(3)}}>triple</button>

       </div>
       
      </>
    
  }
 
  export default App;

