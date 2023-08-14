import { useState } from "react";
import { useEffect } from "react";

const EditTodo = ({ cancel, updateTodo }) => {
	const [todo, setTodo] = useState("");
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const currentTodo = { title, date };
	const [formValid, setFormValid] = useState(true);

	useEffect(() => {
		if (title.length > 0 && date.length > 0) {
			setFormValid(true);
		} else {
			setFormValid(false);
		}
	}, [title, date]);

	return (
		<>
			<div className="max-w-lg mx-auto mt-5">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						updateTodo(currentTodo);
					}}
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
					<div className="flex justify-between">
						<button
							type="submit"
							className="text-sm bg-blue-500 hover:bg-blue-700 duration-500 text-white p-1.5 px-3 rounded-lg mt-3"
              disabled={!formValid}
						>
							Submit
						</button>
						<button
							type="submit"
							className="text-sm bg-red-500 hover:bg-red-700 duration-500 text-white p-1.5 px-3 rounded-lg mt-3"
							onClick={() => {
								cancel();
							}}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default EditTodo;
