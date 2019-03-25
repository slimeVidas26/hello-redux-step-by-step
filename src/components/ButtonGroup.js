import React from 'react';

function ButtonGroup({technologies , buttonClick}) {

   
       //const technologies = props.technologies
    return (
        <div className="hello-btns">
            {technologies.map((technology, i) => {
                return <button id = {technology} onClick ={buttonClick}
                 key={i} className="hello-btn">
                    {technology}
                </button>
            })
}
        </div>
    )
}


export default ButtonGroup
