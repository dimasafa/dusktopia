import './kontoCart.scss';
import '../../../../fonts/fonts.css';
import React, { useState, useEffect } from 'react';
import { firstList, secListOne, secListTwo } from './kontoCartData';
import { Order, AllOrder } from './kontoCartInterfaces';

import cart from '../../../../resources/kontoCart/cart.png';
import del from '../../../../resources/kontoCart/delete.png';

let allBuy = {};

const Cart:React.FC = () => {

	const [selectedValueType, setSelectedValueType] = useState('');
	const [selectedValueGross, setSelectedValueGross] = useState('');
	const [currentPrice, setCurrentPrice] = useState('0');
	const [allBuy, setAllBuy] = useState({});

	const [allOrder, setAllOrder] = useState<AllOrder>(() => {
		const savedAllOrder = localStorage.getItem('allOrder');
		return savedAllOrder ? JSON.parse(savedAllOrder) : {};
	});

	const [fertigOrder, setFertigOrder] = useState<AllOrder>(() => {
		const savedFertigOrder = localStorage.getItem('fertigOrder');
		return savedFertigOrder ? JSON.parse(savedFertigOrder) : {};
	});

	const [archiveOrder, setArchiveOrder] = useState (() => {
		const savedarchiveOrder = localStorage.getItem('archiveOrder');
		return savedarchiveOrder ? JSON.parse(savedarchiveOrder) :[];
	});

	const handleChangeType = (event:any): void => {
		setSelectedValueType(event.target.value);
	};
	const handleChangeGross = (event:any): void => {
		const selectedValue = event.target.value;
		setSelectedValueGross(selectedValue);
		setPrice();
	};
	const handleDeleteOrder = (key: string) => {
		const updatedOrder = { ...allOrder };
		delete updatedOrder[key];
		setAllOrder(updatedOrder);
	};

	const setPrice = (): void => {
	if (selectedValueType === 'Dub') {
		setCurrentPrice(secListOne[selectedValueGross]?.toString() || '0');
	} else {
		setCurrentPrice(secListTwo[selectedValueGross]?.toString() || '0');
	}
	};

	const addOrder = (type: string, gros: string, price: number): void => {
		const currObjLength = Object.keys(allOrder).length + 1;
		const curr: Order[] = [{ _type: type, _grosse: gros, _price: price }];
		setAllOrder({ ...allOrder, [currObjLength.toString()]: curr });
	};

	const cartSum = ():number => {
		let sum: number = 0;
		Object.keys(allOrder).map((key) => (
			sum += allOrder[key][0]._price
		));
		return sum;
	}

	const clearCart = ():void => {
		setAllOrder({});
		localStorage.removeItem('allOrder');
	}

	useEffect(() => {
		setPrice();
	}, [selectedValueGross]);
	
	useEffect(() => {
		localStorage.setItem('allOrder', JSON.stringify(allOrder));
	}, [allOrder]);

	useEffect(() => {
		localStorage.setItem('fertigOrder', JSON.stringify(fertigOrder));
	}, [fertigOrder]);

	useEffect(() => {
		localStorage.setItem('archiveOrder', JSON.stringify(archiveOrder));
	}, [archiveOrder]);

	const orderErstellung = ():void => {
		setFertigOrder(allOrder);
		const orderTime = Date.now().toString();
		setArchiveOrder({...archiveOrder, orderTime, allOrder})
		const updatedArchiveOrder = { ...archiveOrder, [orderTime]: allOrder };
		setArchiveOrder(updatedArchiveOrder);
		clearCart();
	}


	return(
		<div className="cart">
			<div className="cart_title">Choose Product</div>
			<div className="cart_one">
				<select className="cart_one_type "value={selectedValueType} onChange={handleChangeType}>
					<option value="">Select your option</option>
					{firstList.map((option, index) => (
					<option key={index} value={option} >{option}</option>
					))}
				</select>

				<select className="cart_one_gross" value={selectedValueGross} onChange={handleChangeGross}>
					<option value="">Select your option</option>
				{selectedValueType === 'Dub' ? (
					Object.keys(secListOne).map((option, index) => (
					<option key={index} value={option}>{option}</option>
					))
				) : selectedValueType === 'Jasen' ? (
					Object.keys(secListTwo).map((option, index) => (
					<option key={index} value={option}>{option}</option>
					))
				) : (
					<option value="">Select your option</option>
				)}
				</select>

				<div className="cart_one_sum">{currentPrice} €</div>
				<button onClick={() => addOrder(selectedValueType, selectedValueGross, +currentPrice)} className="cart_one_btn">Add to Cart</button>

			</div>

			<div className="cart_two">
				<div className="cart_two_img">
					<img src={cart} alt="cart" />
				</div>
				<div className="cart_two_title">Your Cart</div>	
				<div className="cart_two_OrderBlock">
					{Object.keys(allOrder).map((key) => (
					<div className="cart_two_OrderBlock_order" key={key}>
						<div className="cart_two_OrderBlock_order_type">{allOrder[key][0]._type}</div>
						<div className="cart_two_OrderBlock_order_grosse">{allOrder[key][0]._grosse}</div>
						<div className="cart_two_OrderBlock_order_price">{allOrder[key][0]._price} €</div>
						<div className="cart_two_OrderBlock_order_delete">
							<img src={del} alt="delete" onClick={() => handleDeleteOrder(key)} />
						</div>
					</div>
					))}
					{Object.keys(allOrder).length > 0 && (
						<div className="cart_two_OrderBlock_delivery">
						<div className="cart_two_OrderBlock_delivery_title">delivery</div>
						<div className="cart_two_OrderBlock_delivery_items">
							{Object.keys(allOrder).length} x 5.50 €
						</div>
						<div className="cart_two_OrderBlock_delivery_sum">
							{Object.keys(allOrder).length * 5.5} €
						</div>
						</div>
					)}

					{Object.keys(allOrder).length > 0 && (
						<div className="cart_two_OrderBlock_summe">
							<div className="cart_two_OrderBlock_summe_title">Summe:</div>
							<div className="cart_two_OrderBlock_summe_zahl">{Object.keys(allOrder).length * 5.5 + cartSum()} €</div>
						</div>
					)}

				</div>
			</div>
			<div className="cart_three">
				<div className="cart_three_btnClean">
					<button onClick={clearCart}>Clear</button>
				</div>
				<div className="cart_three_btnOrder">
					<button onClick={orderErstellung}>ORDER</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;