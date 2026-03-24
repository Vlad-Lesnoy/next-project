"use client";

import { useState } from "react";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type Props = {
    task: Task;
};

const TaskCard = ({ task }: Props) => {
    const [isCompleted, setIsCompleted] = useState(task.completed);

    const toggleStatus = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div
            onClick={toggleStatus}
            style={{
                border: "1px solid #ccc",
                padding: "5px 1px",
                margin: "5px 0",
                width: "400px",
                borderRadius: "1px",
                cursor: "pointer",
                color: "black",
                backgroundColor: isCompleted ? "#d4edda" : "#fff3cd",
            }}
        >
            <h3>{task.title}</h3>
            <p>
                Статус: {isCompleted ? "✅ Completed" : "⏳ In Progress"}
            </p>
        </div>
    );
};

export default TaskCard;