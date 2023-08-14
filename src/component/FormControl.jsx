import { useEffect } from "react";
import { useState } from "react";

const FormControl = ({ addTodo }) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [formValid, setFormValid] = useState(true)

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTodo = { title: title, date: date };
		addTodo(newTodo);
	};

	useEffect(() => {
		if (title.length > 0 && date.length > 0) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}, [title, date])

	return (
		<>
			<div className="max-w-lg mx-auto mt-5">
				<form
					onSubmit={handleSubmit}
					action=""
					className="bg-white p-5 rounded-lg shadow-lg"
				>
					<label htmlFor="title" className="font-bold">
						Title :
					</label>
					<input
						type="text"
						placeholder="Your goal?"
						className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 outline-none"
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
					<label htmlFor="title" className="font-bold">
						Date time
					</label>
					<input
						type="datetime-local"
						placeholder="Your goal?"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 outline-none"
						onChange={(e) => {
							setDate(e.target.value);
						}}
					/>
					<button
						type="submit"
						className="text-sm bg-blue-500 hover:bg-blue-700 duration-500 text-white p-1.5 px-3 rounded-lg mt-3"
						disabled={!formValid}
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default FormControl;
