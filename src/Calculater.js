import React,{useState} from 'react'
import './cal.css'
function Calculater() {

    const [inputValue,setInputValue]=useState("")
const handelClick =()=>{
        setInputValue("")
}
const eccval=()=>{
  setInputValue(eval(inputValue))
}
const del = () => {
  setInputValue(inputValue.slice(0, -1));
};

  return (
    <div>


    <center> 
        <h1>Online Calculater</h1>
        <div id='mainDiv'>
       
        <input  value={inputValue} id='input'/>
       
        <button onClick={e=>(setInputValue(inputValue +"9"))}  className='btn'>9</button>
        <button onClick={e=>(setInputValue(inputValue +"8"))}  className='btn'>8</button>
        <button onClick={e=>(setInputValue(inputValue +"7"))}  className='btn'>7</button>
        <button onClick={e=>(setInputValue(inputValue +"6"))}  className='btn'>6</button>
        <button onClick={e=>(setInputValue(inputValue +"5"))}  className='btn'>5</button>
        <button onClick={e=>(setInputValue(inputValue +"4"))}  className='btn'>4</button>
        <button onClick={e=>(setInputValue(inputValue +"3"))}  className='btn'>3</button>
        <button onClick={e=>(setInputValue(inputValue +"2"))}  className='btn'>2</button>
        <button onClick={e=>(setInputValue(inputValue +"1"))}  className='btn'>1</button>
        <button onClick={e=>(setInputValue(inputValue +"0"))}  className='btn'>0</button>
        <button onClick={e=>(setInputValue(inputValue +"00"))} className='btn' >00</button>
        <button onClick={e=>(setInputValue(inputValue +"+"))}  className='btn'>+</button>
        <button onClick={e=>(setInputValue(inputValue +"-"))}  className='btn'>-</button>
        <button onClick={e=>(setInputValue(inputValue +"*"))}  className='btn'>*</button>
        <button onClick={e=>(setInputValue(inputValue +"%"))}  className='btn'>%</button>
        <button onClick={e=>(setInputValue(inputValue +"/"))}  className='btn'>/</button>
        <button onClick={handelClick} id='clearbtn'>clear</button>
         <button onClick={eccval} id='equalbtn'>==</button>
         <button onClick={del} id='delbtn'>del</button>

       

      </div>
      </center>
    </div>
  )
}

export default Calculater
