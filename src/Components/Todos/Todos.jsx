import { useEffect, useState } from 'react';
import Todo from './Todo';
import {GetTodo} from '../service/ApiService'

const Todos = () =>{
    const [todo , setTodo] = useState();
    useEffect(() =>{
      GetTodo.handleTodo({setTodo});
      },[])
    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {todo?.map((todo) => <Todo key={todo.id} todo={todo}/>)}
        </div>
        
    );
}

export default Todos;