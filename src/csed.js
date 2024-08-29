/*import React from "react";
const Csed = ({name}) =>
{
    return <h1>morning,{name}</h1>
}
export default Csed;*/
import React from "react";

function ParentComponent()
{
    return(
        <div>
            <h1>hii, it is a ParentComponent</h1>
            <ChildComponent name ="harini"/>
        </div>
    )
}
   function ChildComponent(props)
     {
        return (
        <div>
        <h1>hii, i am sri {props.name} </h1>
        </div>
        )
                        
      }
export default ParentComponent