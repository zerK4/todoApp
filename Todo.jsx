import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }){

	const [edit, setEdit] = useState({
		id: null,
		value: ''
	})

	const submitUpdate = value =>{
		updateTodo(edit.id, value)
		setEdit({
			id: null,
			value: ''
		})
	}

	if(edit.id){
		return <TodoForm edit={edit} onSubmit={submitUpdate} />
	}
	
	return todos.map((todo, i)=>(
		<div className={todo.isComplete ? 'todoRow complete' : 'todoRow'} key={i}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.text}
			</div>
			<div className="icons">
				<RiCloseCircleLine 
					onClick={()=> removeTodo(todo.id)}
					className="deleteIcon"
				/>
				<TiEdit 
					onClick={()=> setEdit({ id: todo.id, value: todo.text })}
					className="editIcon"	
				/>
			</div>
		</div>
	))
}