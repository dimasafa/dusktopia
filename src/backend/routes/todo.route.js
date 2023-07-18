import { Router } from 'express';
import { Todo } from '../models/Todo.js';

const router = Router();

router.post('/add', async (req, res) => {
	try {
		const { name, surname, age, land, city, plz, street, house, userId} = req.body

		const todo = await new Todo({
			name,
			surname,
			age,
			land,
			city,
			plz,
			street,
			house,
			owner: userId,
			completed: false
		})

		await todo.save();

		res.json(todo);
	} catch (error) {
		console.log(error);
	}
})


export default router;