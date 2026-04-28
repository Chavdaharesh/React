import {useState} from 'react'
import './App.css'

function Demo({ temp }) {    

  return(
        <div className='card'>  
            <div className='demo'>
                    <h1>Name: {temp.Name}</h1>
                    <h2>Designation: {temp.Designation}</h2>
                    <h3>Mobile: {temp.mobile}</h3>
                    <h4>Email: {temp.email}</h4>
                    <button className='btn' onClick={temp.button}>
                        Click me
                    </button>
            </div>
        </div>   
    
    )
}

export {Demo};
