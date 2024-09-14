// import type { FC } from "react";
// import styled from "styled-components";
// import { type TaskInterface, useTODO } from "./useTODO.tsx";

// interface TaskItemProps {
// 	task: TaskInterface;
// 	index: number;
// 	deleteTask: (id: number) => void;
// 	moveUp: (index: number) => void;
// 	moveDown: (index: number) => void;
// }

// const TaskItem: FC<TaskItemProps> = ({
// 	task,
// 	index,
// 	deleteTask,
// 	moveUp,
// 	moveDown,
// }) => {
// 	const { list } = useTODO();
// 	return (
// 		<StyledTaskItem>
// 			<TaskText>{task.text}</TaskText>
// 			<ButtonContainer>
// 				<ActionButton onClick={() => deleteTask(task.id)}>Delete</ActionButton>
// 				{index > 0 && (
// 					<ActionButton onClick={() => moveUp(index)}>☝</ActionButton>
// 				)}
// 				{index < list.length - 1 && (
// 					<ActionButton onClick={() => moveDown(index)}>DO</ActionButton>
// 				)}
// 			</ButtonContainer>
// 		</StyledTaskItem>
// 	);
// };

// export default TaskItem;

// // Styled components
// const StyledTaskItem = styled.li`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px;
//     margin-bottom: 10px;
//     background-color: #fff;
//     border-radius: 5px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const TaskText = styled.span`
//     flex: 1;
//     text-align: left;
// `;

// const ButtonContainer = styled.div`
//     display: flex;
//     gap: 10px;
// `;

// const ActionButton = styled.button`
//     background-color: #007bff;
//     color: white;
//     padding: 5px 10px;
//     border: none;
//     border-radius: 3px;
//     cursor: pointer;

//     &:hover {
//         background-color: #0056b3;
//     }
// `;
