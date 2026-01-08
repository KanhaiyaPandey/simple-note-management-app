import { useDispatch } from 'react-redux'
import { deleteTodo } from '../store/todoSlice'

const NoteItem = ({ todo }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all duration-200 border-l-4 border-blue-500">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {todo.title}
          </h3>
          <p className="text-gray-600 mb-3">{todo.description}</p>
          <p className="text-xs text-gray-400">
            {new Date(todo.createdAt).toLocaleString()}
          </p>
        </div>
        <button
          onClick={handleDelete}
          className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Delete task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NoteItem

