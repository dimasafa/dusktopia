import './kontoDaten.scss';
import '../../../../fonts/fonts.css';
import axios from 'axios';

import React, { useState, useContext, useCallback } from 'react';
import { AuthContext } from '../../../../context/AuthContext.js';

const Daten:React.FC = () => {

	const { userId } = useContext(AuthContext);

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [age, setAge] = useState(0);
	const [land, setLand] = useState('');
	const [city, setCity] = useState('');
	const [plz, setPlz] = useState(0);
	const [street, setStreet] = useState('');
	const [house, setHouse] = useState(0);

	const [todos, setTodos] = useState([]);

	const createTodo = useCallback(async () => {
		try {
			await axios.post('/api/todo/add', {
				name,
				surname,
				age,
				land,
				city,
				plz,
				street,
				house,
				userId,
			}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {console.log(response)})
		} catch (error) {
			console.log(error);
		}
	}, [name, surname, age, land, city, plz, street, house, userId])

	return(
		<div className="daten">
			<div className="daten_title">Your personal data</div>
			<form className="daten_box" onSubmit={e => e.preventDefault()}>
				<div className="daten_box_one">
					<input 
						type="text" 
						name="name"
						id="name"
						onChange={e => setName(e.target.value)} 
						placeholder='Your Name' />
					<input 
						type="text" 
						name="surname" 
						id="surname"
						onChange={e => setSurname(e.target.value)} 
						placeholder='Your Surname' />
					<input 
						type="text" 
						name="age" 
						id="age"
						onChange={e => setAge(parseInt(e.target.value))} 
						placeholder='Your Age' />
				</div>
				<div className="daten_box_adress">Delivery</div>
				<div className="daten_box_two">
					<input 
						type="text" 
						name="land" 
						id="land"
						onChange={e => setLand(e.target.value)} 
						placeholder='Land' />
					<input 
						type="text" 
						name="city" 
						id="city"
						onChange={e => setCity(e.target.value)} 
						placeholder='City'  />
					<input 
						type="text" 
						name="plz" 
						id="plz"
						onChange={e => setPlz(parseInt(e.target.value))} 
						placeholder='Post code' />
					<input 
						type="text" 
						name="street" 
						id="street"
						onChange={e => setStreet(e.target.value)} 
						placeholder='Street' />
					<input 
						type="text" 
						name="house" 
						id="house"
						onChange={e => setHouse(parseInt(e.target.value))}  
						placeholder='House Nr.' />
				</div>
				<div className="daten_box_three">
					
					<button className="daten_box_three_btn1">Edit</button>
					
					<button onClick={createTodo} className="daten_box_three_btn2">Save</button>
					
				</div>
			</form>
		</div>
	);
};

export default Daten;