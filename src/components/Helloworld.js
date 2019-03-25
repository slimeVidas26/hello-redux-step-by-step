import React from 'react'

function Helloworld({tech}) {
    //console.log(props)
    //const tech = {props.tech}
  return (
    <div className="hello-world">
                Hello world 
                <span className="hello-world__tech">{tech}</span>
            </div>
  )
}

export default Helloworld



