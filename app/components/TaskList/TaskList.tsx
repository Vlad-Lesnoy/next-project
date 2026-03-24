import TaskCard from "../TaskCard/TaskCard";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type Props = {
    tasks: Task[];
};

const TaskList = ({ tasks }: Props) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;