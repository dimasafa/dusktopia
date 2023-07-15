import './kontoOrder.scss';
import { useState, useEffect } from 'react';
import { AllOrder, Order } from '../kontoCart/kontoCartInterfaces';
import allBuy from '../kontoCart/KontoCart';



const Ordered: React.FC = () => {

	const [savedOrder, setSavedOrder] = useState<AllOrder>(() => {
		const fertigAllOrder = localStorage.getItem('fertigOrder') as string;
		return fertigAllOrder ? JSON.parse(fertigAllOrder) : {};
		});
	const [savedData, setSavedData] = useState<{ [key: string]: string }>(JSON.parse(localStorage.getItem('formData') as string));



	return (
		<div className="order">
			HELLO!
{/* 			{savedOrder} */}
			{Object.entries(savedData).map(([key, value]) => (
				<div key={key}>{key} {value}</div>
			))}
			{Object.entries(savedOrder).map(([key, value]) => (
				<div key={key}>
				{key} {(value as Order[]).map((order) => (
					<div key={order._type}>
					{order._type} {order._grosse} {order._price}
					</div>
				))}
				</div>
			))}
{/* 				<div>
				{allBuy.map((nestedArray: any, index: number) => (
					<div key={index}> */}
					{/* Вывод времени */}
{/* 					<h2>Время: {nestedArray[0]}</h2> */}
					{/* Вывод объектов */}
{/* 					<ul>
						{nestedArray[1].map((item: any, i: number) => (
						<li key={i}> */}
							{/* Вывод ключей и значений объекта */}
{/* 							{Object.entries(item).map(([key, value]) => (
							<p key={key}>
								{key}: {value}
							</p>
							))}
						</li>
						))}
					</ul>
					</div>
				))}
				</div> */}

		</div>
	);
};

export default Ordered;