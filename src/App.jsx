import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import NavBarComponents from './components/NavBarComponents';
import buttonComponent from './components/buttonComponent';
import ScoreIndicator from './components/scoreIndicator';
import Button from 'react-bootstrap/Button';
import imgArrow from './Assets/arrows.png';


function App() {
  const [total, setTotal] = useState("501");
  // const [operator,setOperator]= useState("1");

  const [scoreToReach, setScoreToReach]=useState(501);
  const [score, setScore]=useState(501);
  const [oldScore, setOldScore]=useState(0);
const [multiplicator, setMultiplicator]=useState(1);
const [arrows, setArrows]=useState(3);
const [laps, setLaps]=useState(0);



  const handleChange=(charToSubstract)=>{
    if (arrows-1==0){
      setArrows(3);
      setLaps(laps+1);

      setOldScore(score-(charToSubstract*multiplicator));
        }else{
      setArrows(arrows-1);
    }

    if(charToSubstract==25 && multiplicator==3){
alert("TRICHEUR!!!");
setMultiplicator(1);
    }else if((score-(charToSubstract*multiplicator))<0){
      alert('Tour terminé!!')
      setMultiplicator(1);
      setArrows(3)
      setLaps (laps+1);
      setMultiplicator(1);
      setScore(oldScore);
    }else if((score-(charToSubstract*multiplicator))==0){
      setScore(score-(charToSubstract*multiplicator));
      setMultiplicator(1);
      alert("Bien joué t'es la best");
    }
    else{
    setScore(score - (charToSubstract*multiplicator));
    setMultiplicator(1);
  }
  if (arrows-1==0){
    setArrows(3);
    setLaps(laps+1);
  }else{
    setArrows(arrows-1);
  }
  }
  
const replay=()=>{
  setMultiplicator(1);
  setScore(501);
  setArrows(3);
  setLaps(0);
}
  
console.log(oldScore);

    return <>
    <container  className='d-flex flex-column align-items-center'>
       <h1>flechette</h1>  
       <ScoreIndicator maxValue={scoreToReach} value={score}/>
       <div className='d-flex flex-row align-items-center'>
        <h5>Tours : {laps}</h5>
       {arrows ==3 &&<>
        <img src={imgArrow} className="arrow-img"/>
        <img src={imgArrow} className="arrow-img"/>
        <img src={imgArrow} className="arrow-img"/>
        </>       
       }
       
       {arrows ==2 &&<>
        <img src={imgArrow} className="arrow-img"/>
        <img src={imgArrow} className="arrow-img"/>
        </>       
       }
       {arrows ==1 &&<>
        <img src={imgArrow} className="arrow-img"/>
        </>       
       }
       </div>
       
           {score==0?<>
           {/* {j'affiche quelque chose si mon score est égal à 0 */}
           <button variant='primary' className='mt-3' onClick={replay}>rejouer</button>
           </>:<>
          {/* //  {j'affiche quelque chose si mon score n'est pas égal à 0} */}
         
          <div className='d-flex justify-content-between col-5 col-xl-3 mt-3'>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(1)}}>1</Button>
      <Button variant='light' className='col-2' onClick={() => {handleChange(2)}}>2</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(3)}}>3</Button>
      <Button variant='light' className='col-2' onClick={() => {handleChange(4)}}>4</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(5)}}>5</Button>
    </div>

    <div className='d-flex justify-content-between col-3 mt-3'>
      <Button variant='light' className='col-2' onClick={() => {handleChange(6)}}>6</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(7)}}>7</Button>
      <Button variant='light' className='col-2' onClick={() => {handleChange(8)}}>8</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(9)}}>9</Button>
      <Button variant='light' className='col-2' onClick={() => {handleChange(10)}}>10</Button>
    </div>
    <div className='d-flex justify-content-between col-3 mt-3'>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(11)}}>11</Button>
      <Button variant='light' className='col-2' onClick={() => {handleChange(12)}}>12</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(13)}}>13</Button>
      <Button variant='light' className='col-2' onClick={() => {handleChange(14)}}>14</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(15)}}>15</Button>
    </div>
    <div className='d-flex justify-content-between col-3 mt-3'>
      <Button variant='light' className='col-2' onClick={() => {handleChange(16)}}>16</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(17)}}>17</Button>
      <Button variant='light' className='col-2' onClick={() => {handleChange(18)}}>18</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleChange(19)}}>19</Button>
      <Button variant='light' className='col-2' onClick={() => {handleChange(20)}}>20</Button>
    </div>
    <div className='d-flex justify-content-between col-3 mt-3'>
      <Button variant='danger' className='col-2' onClick={() => {handleChange(0)}}>0</Button>
      <Button variant='light' className='col-2' onClick={() => {handleChange(25)}}>25</Button>
      <Button variant='dark' className='col-3' onClick={() => {setMultiplicator(2)}}>DOUBLE</Button>
      <Button variant='light' className='col-3' onClick={() => {setMultiplicator(3)}}>TRIPLE</Button>
    </div>
    
          </>}
         
           
     





    </container>
    
      </>
    
  }
 
  export default App;

