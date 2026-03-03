import { useState, useEffect } from "react";
import { useTimerContext } from '../context/TimerContext'

const Timer = () => {
  // Get timer state from context
  const { timerState, dispatch } = useTimerContext()

  // Task state (separate from timer)
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("focusTimerTasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [currentTask, setCurrentTask] = useState("");

  // Format time helper
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Task handlers
  const handleAddTask = () => {
    if (currentTask.trim() === "") return;
    setTasks([...tasks, { text: currentTask, completed: false }]);
    setCurrentTask("");
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((task, index) => index !== indexToDelete));
  };

  const handleToggleTask = (indexToToggle) => {
    setTasks(
      tasks.map((task, index) => {
        if (index === indexToToggle) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("focusTimerTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Get mode colors
  const getModeColor = () => {
    switch(timerState.mode) {
      case 'focus': return 'from-blue-500 to-purple-500'
      case 'break': return 'from-green-500 to-emerald-500'
      case 'longBreak': return 'from-orange-500 to-red-500'
      default: return 'from-blue-500 to-purple-500'
    }
  }

  const getModeLabel = () => {
    switch(timerState.mode) {
      case 'focus': return '🍅 Focus Time'
      case 'break': return '☕ Short Break'
      case 'longBreak': return '🌟 Long Break'
      default: return '🍅 Focus Time'
    }
  }

  return (
    <div className="space-y-8">
      {/* Timer Display */}
      <div className={`bg-gradient-to-br ${getModeColor()} rounded-3xl p-12 shadow-xl border border-blue-100`}>
        <div className="text-center">
          {/* Mode Label */}
          <div className="text-white/90 text-xl font-semibold mb-2">
            {getModeLabel()}
          </div>
          
          {/* Timer */}
          <div className="text-8xl font-bold text-white mb-6 font-mono tracking-tight">
            {formatTime(timerState.timeLeft)}
          </div>

          {/* Session Counter */}
          <p className="text-white/80 text-lg mb-8">
            Session {timerState.sessionsCompleted % 4 + 1}/4
          </p>

          {/* Timer Controls */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => dispatch({ type: timerState.isRunning ? 'PAUSE' : 'START' })}
              className={`px-10 py-4 ${
                timerState.isRunning
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-white/20 hover:bg-white/30"
              } text-white rounded-xl font-bold text-xl transition-all transform hover:scale-105 backdrop-blur-sm`}
            >
              {timerState.isRunning ? "⏸ Pause" : "▶ Start"}
            </button>

            <button
              onClick={() => dispatch({ type: 'RESET' })}
              className="px-10 py-4 bg-white/20 text-white rounded-xl font-bold text-xl hover:bg-white/30 transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              ↻ Reset
            </button>
          </div>
        </div>
      </div>

      {/* Add Task Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          📝 What are you working on?
        </h3>
        <div className="flex gap-3">
          <input
            type="text"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
            placeholder="Type your task here..."
            className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          />
          <button
            onClick={handleAddTask}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 hover:shadow-lg"
          >
            ✓ Add
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition">
          <div className="text-5xl font-bold mb-2">{tasks.length}</div>
          <div className="text-blue-100 text-sm font-medium">Total Tasks</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition">
          <div className="text-5xl font-bold mb-2">
            {tasks.filter((task) => task.completed).length}
          </div>
          <div className="text-green-100 text-sm font-medium">Completed</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition">
          <div className="text-5xl font-bold mb-2">
            {tasks.filter((task) => !task.completed).length}
          </div>
          <div className="text-orange-100 text-sm font-medium">Active</div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Tasks</h2>
          {tasks.length > 0 && (
            <span className="text-sm text-gray-500">
              {tasks.filter((task) => task.completed).length} of {tasks.length}{" "}
              completed
            </span>
          )}
        </div>

        {tasks.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-8xl mb-6 opacity-50">📝</div>
            <p className="text-2xl font-semibold text-gray-400 mb-2">
              No tasks yet!
            </p>
            <p className="text-gray-400">
              Add your first task above to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`group flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  task.completed
                    ? "bg-gray-50 border-gray-200"
                    : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(index)}
                    className="w-6 h-6 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer transition"
                  />
                  <span
                    className={`text-lg transition ${
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="px-5 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-all transform hover:scale-105"
                >
                  🗑 Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timer;
