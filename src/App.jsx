import TodoForm from './components/NoteForm'
import TodoList from './components/NoteList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Notes Management System
          </h1>
          <p className="text-gray-600">Organize your notes efficiently</p>
        </div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App

