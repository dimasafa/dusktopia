import { Router } from "express";
import { User } from '../models/User.js';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const router = Router();
dotenv.config();

router.post('/registration', 
	[
		check('email', 'Некорректный email').isEmail(),
		check('password', 'Некорректно введен пароль').isLength({min: 6})
	], 
	async (req, res) => {
	try {

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				message: 'Некорректные данные при регистрации'
			});
		};

		const { email, password } = req.body;

		const isUsed = await User.findOne({email})

		if (isUsed) {
			return res.status(300).json({message: 'Данный email уже занят'});
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = new User ({
			email, 
			password: hashedPassword
		});

		await user.save();

		res.status(201).json({message: 'Пользователь создан'});
	} catch (error) {
		console.log(error);
	}
});

router.post('/login', 
	[
		check('email', 'Некорректный email').isEmail(),
		check('password', 'Некорректно введен пароль').exists()
	], 
	async (req, res) => {
	try {

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				message: 'Некорректные данные при регистрации'
			});
		};

		const { email, password } = req.body;

		const user = await User.findOne({ email })

		if (!user) {
			return res.status(400).json({message: 'Такого email нет в базе'})
		}

		const isMatch = bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({message: 'Пароли не совпадают'});
		};

		const jwtSecret = process.env.JWT_SECRET;

		const token = jwt.sign(
			{userId: user.id},
			jwtSecret,
			{expiresIn: '1h'}
			);

		res.json({ token, userId: user.id })



	} catch (error) {
		console.log(error);
	}
});





export default router;