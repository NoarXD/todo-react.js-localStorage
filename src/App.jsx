import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import FormControl from "./component/FormControl";
import ShowTodoList from "./component/ShowTodoList";
import { useState } from "react";
import { useEffect } from "react";
import EditTodo from "./component/EditTodo";

function App() {
	const [todo, setTodo] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [idEdit, setIdEdit] = useState(0);
	const [titelEdit, setTitleEdit] = useState("");
	const [dateEdit, setDateEdit] = useState("");

	const handleAddTodo = (newTodo) => {
		setTodo((prevTodo) => {
			const addTodo = [...prevTodo, newTodo];
			localStorage.setItem("todo", JSON.stringify(addTodo));
			return addTodo;
		});
		Swal.fire({
			title: "Success!",
			icon: "success"
		});
	};
	const handleDeleteTodo = (index) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				setTodo((prevTodo) => {
					const deleteTodo = prevTodo.filter((item, i) => i !== index);
					localStorage.setItem("todo", JSON.stringify(deleteTodo));
					return deleteTodo;
				});
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
			}
		});
	};

	useEffect(() => {
		const itemsFromLocalStorage = localStorage.getItem("todo");
		if (itemsFromLocalStorage) {
			setTodo(JSON.parse(itemsFromLocalStorage));
		}
	}, []);
	useEffect(() => {
		const itemsFromLocalStorage = localStorage.getItem("todo");
		if (itemsFromLocalStorage) {
			setTodo(JSON.parse(itemsFromLocalStorage));
		}
	}, [isEditing]);

	const cancelEdit = (val) => {
		setIsEditing(val);
	};

	const iseditTodo = (val, id) => {
		setIsEditing(val);
		setIdEdit(id);
	};

	const handleUpdateTodo = (currentTodo) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				setTodo((prevTodo) => {
					const edit = prevTodo.map((item, i) => {
						if (i === idEdit) {
							return currentTodo;
						} else {
							return item;
						}
					});
					localStorage.setItem("todo", JSON.stringify(edit));
					setIsEditing(false);
				});
				Swal.fire("Updated!", "Your file has been updated.", "success");
			}
		});
	};

	return (
		<>
			<Navbar />
			{isEditing ? (
				<EditTodo cancel={cancelEdit} updateTodo={handleUpdateTodo} />
			) : (
				<>
					<FormControl addTodo={handleAddTodo} />
					<ShowTodoList
						todo={todo}
						deleteTodo={handleDeleteTodo}
						editTodo={iseditTodo}
					/>
				</>
			)}
		</>
	);
}

export default App;
