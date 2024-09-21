import React, { useMemo, useState } from 'react'
import './bmi.css'



const Bmi = () => {

  const [weight,setWeight] = useState(50);
  const [height,setHeight] = useState(100);


  function onWeightChange(event){
   
    setWeight(event.target.value);
  };

  function onHeightChange(event){

    setHeight(event.target.value)
  };

  const output = useMemo(() =>{

   const calculateHeight = height /100

   return (weight/ (calculateHeight*calculateHeight)).toFixed(1)

  },[weight,height]);

  return (
    <>
       <main>

       <h1>  BMI CALCULATOR</h1>
     <div className='input-section'>

         <p className='slider-output'>weight : {weight} kg</p>
       <input type='range' className='input-slider' step='1' min='40' max='200'  onChange={onWeightChange} />
       <p className='slider-output' > height : {height}cm</p>
       <input type="range" className='input-slider' max='500' min='50'  onChange={onHeightChange} />
      </div>

      <div className='output-section'>
        <p > Your BMI is </p>
        <p className='output'>{output}</p>

      </div>

      </main>




       
    
    </>
  )
}

export default Bmi
