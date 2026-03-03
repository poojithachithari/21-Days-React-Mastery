import Timer from './components/Timer'
import './App.css'
import { TimerProvider } from './context/TimerContext'

function App() {
  return (
    <TimerProvider>
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-6 border border-white/20 shadow-xl">
            <h1 className="text-5xl font-bold text-white flex items-center gap-3">
              <span className="text-6xl">⏱️</span>
              FocusTimer
            </h1>
          </div>
          <p className="text-white/90 text-lg font-medium">
            Stay focused. Get things done. Track your progress.
          </p>
        </div>

        {/* Main Content */}
        <div className=" backdrop-blur-sm rounded-3xl  p-8">
          <Timer />
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/70 text-sm">
            Built with React + Tailwind CSS ❤️
          </p>
        </div>
      </div>
    </div>
    </TimerProvider>
  )
}

export default App