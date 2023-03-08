
'use client'
import {Box, Flex, HStack,Button,Input} from "@chakra-ui/react";

import { useState } from "react"

export default function InputCom() {

  const [todo,settodo]=useState("Write your todo here!")
  
  const onChangeHandler=(e:any)=>{
    console.log("e is", e.target.value)
      settodo(e.target.value)
  }
  
  const [todos, setTodos] = useState([
    { todoText: "Todo 1", completed:false},
    { todoText: "Todo 2", completed:true},
    { todoText: "Todo 3", completed:false},
  ]);
 

  const addTodos=()=>{
    const newTodo = { todoText: todo,completed:false};
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    settodo('');
  }

  const onClickhandler=(meraelm:any)=>{
    console.log("meraelm", meraelm)
    const newtodos=todos.map((todo1)=>{
      console.log("todo::",todo1)
      if(todo1.todoText==meraelm.todoText){
        todo1.completed=!todo1.completed
      }
      return todo1
    });
    console.log("neww todossss:",newtodos);
    setTodos(newtodos)

  };
    
    const deleteTodo=(del:any)=>{
      const newtodos=todos.filter((input)=>{
        if(input.todoText==del.todoText)return false;
        return true;
        

      });
      setTodos(newtodos);
    
  };
  return (
    <>
    <Box bg={"seagreen"} height={'520px'}
    borderRadius={"50px"}
    boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
    ml={['425px', '350px', '450px']} 
    mr={['425px', '350px', '450px']}>
      <Flex  boxSize={"50px"} >
        <HStack  alignItems={"space-around"} pl={"50px"} pt={"15px"}>
      <Input type="text" placeholder={todo} onChange={onChangeHandler} 
      w={"200px"}
      paddingLeft={"20px"}
      borderRadius={"10px"}/>
      
      <Button onClick={addTodos} borderRadius={"15px"} width={"80px"} >Add</Button></HStack>
      </Flex >
      <Box bg={"lightgreen"} 
      borderBottomRadius={"50px"}
      borderTopWidth={"10px"}
      borderTopStyle={"inherit"}
      height={'450px'}
      >
      <HStack>
      <ul >
        {
          todos.map((elm)=>{
            return (
            <li 
            style={{color:elm.completed ? "green":"red",
            fontSize:"30px",
            listStyle:"none"
            }}key={elm.todoText}>
              <input type="checkbox" checked={elm.completed} onChange={()=>{onClickhandler(elm)}} />
              {elm.todoText}
              <Button onClick={()=>{deleteTodo(elm)}} 
              borderRadius={"15px"} width={"80px"}
              alignItems={"center"}
              h={"30px"}>Delete</Button>
            </li>
            
            )
          })
        }
       </ul>
       </HStack>
       </Box>
       </Box>
    </>
    
  )
}
