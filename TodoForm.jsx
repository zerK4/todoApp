import React, { useState } from 'react'
import './Todo.css'

export default function Todo(props){
	
	const [input, setInput] = useState('')

	const handleChange = e => {
		setInput(e.target.value)
	}

	const handleSubmit = e =>{
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		});
		setInput('')
	}
	
	return(
		<form className='todoForm' onSubmit={handleSubmit}>
			<input 
				type="text"
				placeholder="Add a todo..."
				value={input}
				name="text"
				className="todoInput"
				onChange={handleChange}
				/>
			<button className="todoButton">+</button>
		</form>
	)
}