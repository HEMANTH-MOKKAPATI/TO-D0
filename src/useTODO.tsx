import { useState, useEffect } from "react";

// Define the shape of a task
export interface TaskInterface {
	id: number; // Change id type to string for UUID
	text: string;
}

// Custom hook for handling To-Do List logic
export const useTODO = () => {
	const [list, setList] = useState<TaskInterface[]>(() => {
		// Load tasks from localStorage
		const savedTasks = localStorage.getItem("tasks");
		return savedTasks ? JSON.parse(savedTasks) : []; // Parse and return tasks or return an empty array
	});
	const [newTask, setNewTask] = useState<string>(""); // New task input state

	// Effect to save tasks to localStorage whenever the list changes
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(list));
	}, [list]);

	// Function to add a task
	const AddTask = () => {
		if (newTask.trim() === "") return; // Avoid adding empty tasks
		const newTaskItem: TaskInterface = {
			id: Date.now(), // Use UUID for unique ID
			text: newTask,
			// completed: false, // Default to incomplete
		};
		setList((prevList) => [...prevList, newTaskItem]); // Use functional update
		setNewTask(""); // Clear input after adding
	};

	// Function to delete a task by ID
	const deleteTask = (id: number) => {
		setList((prevList) => prevList.filter((task) => task.id !== id)); // Use functional update
	};

	// Function to move task up the list
	const moveUp = (index: number) => {
		if (index === 0) return; // Do nothing if the task is already at the top
		setList((prevList) => {
			const newList = [...prevList];
			[newList[index - 1], newList[index]] = [
				newList[index],
				newList[index - 1],
			]; // Swap elements
			return newList;
		});
	};

	// Function to move task down the list
	const moveDown = (index: number) => {
		if (index === list.length - 1) return; // Do nothing if the task is already at the bottom
		setList((prevList) => {
			const newList = [...prevList];
			[newList[index], newList[index + 1]] = [
				newList[index + 1],
				newList[index],
			]; // Swap elements
			return newList;
		});
	};

	return {
		list,
		newTask,
		deleteTask,
		moveDown,
		moveUp,
		AddTask,
		setNewTask,
	};
};
