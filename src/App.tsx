import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
    const {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodos,
    } = useTodos();

    return (
        <main className="py-10 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold text-center mb-4">Todo List:</h1>
            <div className="max-w-lg mx-auto bg-slate-200 rounded-lg p-5 space-y-6">
                <AddTodoForm onSubmit={addTodo} />
                <TodoList
                    todos={todos}
                    onCompletedChange={setTodoCompleted}
                    onDelete={deleteTodo}
                />
            </div>
            <div className="mt-2 text-sm text-gray-500">
                <TodoSummary
                    todos={todos}
                    deleteAllCompleted={deleteAllCompletedTodos}
                />
            </div>
        </main>
    );
}

export default App;
