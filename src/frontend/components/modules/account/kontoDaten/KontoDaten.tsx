import './kontoDaten.scss';
import '../../../../fonts/fonts.css';

import React, { useState, useEffect } from 'react';

const Daten:React.FC = () => {
	const [isEditing, setIsEditing] = useState(
		localStorage.getItem('isEditing') || false);

	const [formData, setFormData] = useState(() => {
		const savedFormData = localStorage.getItem('formData');
		return savedFormData ? JSON.parse(savedFormData) : {
			Name: '',
			Surname: '',
			Age: '',
			Land: '',
			City: '',
			Post: '',
			Street: '',
			House: '',
		}
	});

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		setIsEditing(false);
	};

	const handleChange = (event:any) => {
		const { name, value } = event.target;
		setFormData((prevFormData: any) => ({
		...prevFormData,
		[name]: value,
		}));
	};

	useEffect(() => {
		localStorage.setItem('formData', JSON.stringify(formData));
	}, [formData]);

	return(
		<div className="daten">
			<div className="daten_title">Your personal data</div>
			<div className="daten_box">
				<div className="daten_box_one">
					<input type="text" name="Name" value={formData.Name} onChange={handleChange} disabled={!isEditing} style={{ color: isEditing ? 'black' : 'gray' }} placeholder='Your Name' />
					<input type="text" name="Surname" value={formData.Surname} onChange={handleChange} disabled={!isEditing} style={{ color: isEditing ? 'black' : 'gray' }} placeholder='Your Surname' />
					<input type="text" name="Age" value={formData.Age} onChange={handleChange} disabled={!isEditing} style={{ color: isEditing ? 'black' : 'gray' }} placeholder='Your Age' />
				</div>
				<div className="daten_box_adress">Delivery</div>
				<div className="daten_box_two">
					<input type="text" name="Land" value={formData.Land} onChange={handleChange} disabled={!isEditing} style={{ color: isEditing ? 'black' : 'gray' }} placeholder='Land' />
					<input type="text" name="City" value={formData.City} onChange={handleChange} disabled={!isEditing} style={{ color: isEditing ? 'black' : 'gray' }} placeholder='City'  />
					<input type="text" name="Post" value={formData.Post} onChange={handleChange} disabled={!isEditing} style={{ color: isEditing ? 'black' : 'gray' }} placeholder='Post code' />
					<input type="text" name="Street" value={formData.Street} onChange={handleChange} disabled={!isEditing} style={{ color: isEditing ? 'black' : 'gray' }} placeholder='Street' />
					<input type="text" name="House" value={formData.House} onChange={handleChange} disabled={!isEditing} style={{ color: isEditing ? 'black' : 'gray' }} placeholder='House Nr.' />
				</div>
				<div className="daten_box_three">
					
					<button onClick={handleEdit} className="daten_box_three_btn1">Edit</button>
					
					<button onClick={handleSave} className="daten_box_three_btn2">Save</button>
					
				</div>
			</div>
		</div>
	);
};

export default Daten;