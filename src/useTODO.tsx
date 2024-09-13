import { useState } from "react";

export interface TaskInterface {
	id: number;
	text: string;
}

export interface propInterface {
	deleteTask: (index: number) => void;
	moveUp: (index: number) => void;
	moveDown: (index: number) => void;
	AddTask: () => void;
	list: TaskInterface[];
	setList: (list: TaskInterface[]) => void;
	newTask: string;
	setNewTask: (newTask: string) => void;
}

export const useTODO = (): propInterface => {
	const [newTask, setNewTask] = useState<string>("");
	const [list, setList] = useState<TaskInterface[]>([]);

	const AddTask = (): void => {
		if (!newTask.trim()) return;

		const task: TaskInterface = {
			// id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
			id: Date.now(),
			text: newTask,
		};

		setList([...list, task]);
		setNewTask("");
	};

	const deleteTask = (id: number): void => {
		setList(list.filter((task) => task.id !== id));
	};

	const moveUp = (i: number): void => {
		if (i > 0) {
			const u = [...list];

			[u[i], u[i - 1]] = [u[i - 1], u[i]];
			setList(u);
		}
	};

	const moveDown = (i: number): void => {
		if (i < list.length - 1) {
			const u = [...list];

			[u[i], u[i + 1]] = [u[i + 1], u[i]];
			setList(u);
		}
	};

	return {
		list,
		deleteTask,
		moveUp,
		moveDown,
		AddTask,
		setList,
		setNewTask,
		newTask,
	};
};
