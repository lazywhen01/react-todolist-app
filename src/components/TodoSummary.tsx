import { Todo } from "@/types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}
export default function TodoSummary({
    todos,
    deleteAllCompleted,
}: TodoSummaryProps) {
    const completedTodos = todos.filter((todo) => todo.completed);
    return (
        <div>
            <p className="text-center">
                {completedTodos.length}/{todos.length} Todos Completed
            </p>
            {completedTodos.length > 0 && (
                <button
                    onClick={deleteAllCompleted}
                    className="bg-red-500 p-2 text-white flex items-center mx-auto mt-2"
                >
                    Delete All Todos
                </button>
            )}
        </div>
    );
}
