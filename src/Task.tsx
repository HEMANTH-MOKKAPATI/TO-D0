import styled from "styled-components";
import { type TaskInterface, useTODO } from "./useTODO.tsx";

export default function ToDo() {
	const { list, deleteTask, moveUp, moveDown, AddTask, setNewTask, newTask } =
		useTODO();

	return (
		<Wrapper>
			<Header>To-Do List</Header>

			<Input
				type="text"
				id="input"
				placeholder="Enter A Task ...."
				value={newTask}
				onChange={(e: { target: { value: string } }) =>
					setNewTask(e.target.value)
				}
			/>

			<AddButton onClick={AddTask} disabled={!newTask.trim()}>
				Add Task
			</AddButton>

			<TaskList>
				{list?.map((item: TaskInterface, index: number) => (
					<TaskItem key={item.id}>
						<TaskText completed={item}>{item.text}</TaskText>

						<ButtonContainer>
							<ActionButton onClick={() => deleteTask(item.id)}>
								Delete
							</ActionButton>
							{index > 0 && (
								<ActionButton onClick={() => moveUp(index)}>☝</ActionButton>
							)}
							{index < list.length - 1 && (
								<ActionButton onClick={() => moveDown(index)}>👇</ActionButton>
							)}
						</ButtonContainer>
					</TaskItem>
				))}
			</TaskList>
		</Wrapper>
	);
}

// Wrapper for the entire To-Do List component
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Header for the to-do list title
const Header = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

// Styled input field
const Input = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  width: 80%;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

// Add task button
const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #218838;
  }
`;

// List container
const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

// Individual task item
const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Task text, with optional strikethrough when task is completed
const TaskText = styled.span<{ completed?: boolean }>`
  flex: 1;
  text-align: left;
  //text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  //color: ${(props) => (props.completed ? "#888" : "#000")};
`;

// Button container to hold the action buttons
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// General button styling for the action buttons
const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
