import React from 'react';
import PropTypes from 'prop-types';
import Todoitem  from '../Myappcomponents/Todoitem';

export default function Todos(props) {

  return (

      
    <div className=' todos-container' >
      
       <h2>Todos List</h2>
       {props.todos.length==0? "No todo to show":
       props.todos.map((todo)=>{
          
          return(
            <>    
            <Todoitem todo={todo} ondelete={props.ondelete}/>
              <hr/>
             </>
       
          

            
          )

})
     
}
    </div>
  
  )
}
