import TaskList from "@/app/components/TaskList/TaskList";

async function getTasks() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    return res.json();
}

export default async function TasksPage() {
    const tasks = await getTasks();

    return (
        <div>
            <h1>Список задач</h1>
            <TaskList tasks={tasks} />
        </div>
    );
}