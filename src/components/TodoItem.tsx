import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;

}
export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center gap-1">
            <label className="flex items-center gap-2 border rounded-md grow p-2 border-gray-400 bg-white hover:bg-slate-100">
                <input
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                    type="checkbox"
                    className="scale-150"
                />
                <span
                    className={
                        todo.completed ? "line-through text-slate-500" : ""
                    }
                >
                    {todo.title}
                </span>
            </label>
            <div>
                <button 
                onClick={() => onDelete(todo.id)}
                className="bg-red-500 text-white rounded-md p-1">
                    Delete
                </button>
            </div>
        </div>
    );
}
