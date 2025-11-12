import React, { useState } from 'react'
import cube from './cube.png'

function ImageManipulation() {
    const[cubeHeight,setCubeHeight] = useState(200);
    const[cubeWidth,setCubeWidth] = useState(200);
    const[red,setRed]= useState(0);
    const[green,setGreen]= useState(0);
    const[blue,setBlue]= useState(0);

    function ChangeBGColor(){
      setRed(Math.random()*255);
      setGreen(Math.random()*255);
      setBlue(Math.random()*255);
    }

  return (
    <div style={{border:'2px solid red', height:'500', width:'400' , margin:'0px auto' , padding:'50px'}}> ImageManipulation
        <div>
            <img src={cube} height={cubeHeight} width={cubeWidth} style={{backgroundColor:rgb(${red},${green},${blue})}}/>
        </div>
        <div>
            <button onClick={()=>setCubeHeight(cubeHeight+20)}>Increase Height</button>
            <button onClick={()=>setCubeHeight(cubeHeight-20)}>Decrease Height</button>
            <button onClick={()=>setCubeWidth(cubeWidth+20)}>Increase Width</button>
            <button onClick={()=>setCubeWidth(cubeWidth-20)}>Decrease Width</button>
            <button onClick={ChangeBGColor}>ChangeBGColor</button>
           
        </div>
    </div>
  )
}

export default ImageManipulation