import React from "react";
import { Link } from "react-router-dom";

const ShowTodoList = ({ todo, deleteTodo, editTodo }) => {
	const handleDelete = (index) => {
		deleteTodo(index);
	};

	return (
		<>
			<div className="max-w-screen-lg mx-auto bg-white mt-10 rounded-lg shadow-lg">
				<table className="text-sm text-left w-full">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3">Title</th>
							<th className="px-6 py-3">Date</th>
							<th className="px-6 py-3">Time</th>
							<th className="px-6 py-3">Edit</th>
							<th className="px-6 py-3">Delete</th>
						</tr>
					</thead>
					<tbody>
						{todo?.map((val, index) => (
							<tr key={index} className="border-b">
								<td className="px-6 py-4">{val.title}</td>
								<td className="px-6 py-4">{val.date.split("T")[0]}</td>
								<td className="px-6 py-4">{val.date.split("T")[1]}</td>
								<td className="px-6 py-4 w-20">
									<button
										className="bg-blue-500 py-1 px-2 text-white rounded-md hover:bg-blue-600 duration-500"
										onClick={() => {
											editTodo(true, index);
										}}
									>
										Edit
									</button>
								</td>
								<td className="px-6 py-4 w-20">
									<button
										className="bg-red-500 py-1 px-2 text-white rounded-md hover:bg-red-600 duration-500"
										onClick={() => handleDelete(index)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ShowTodoList;
