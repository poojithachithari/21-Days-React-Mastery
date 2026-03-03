import { createContext, useContext, useReducer, useEffect } from "react";

// Initial State
const initialState = {
  timeLeft: 25 * 60,
  isRunning: false,
  mode: "focus",
  sessionsCompleted: 0,
};

// Helper function
const getTimerDuration = (mode) => {
  switch (mode) {
    case "focus":
      return 25 * 60;
    case "break":
      return 5 * 60;
    case "longBreak":
      return 15 * 60;
    default:
      return 25 * 60;
  }
};

// Reducer Function
const timerReducer = (state, action) => {
  switch (action.type) {
    case "TICK":
      if (state.timeLeft <= 0) return state;  // ✅ FIXED
      return { ...state, timeLeft: state.timeLeft - 1 };  // ✅ FIXED

    case "START":
      return { ...state, isRunning: true };

    case "PAUSE":  // ✅ FIXED
      return { ...state, isRunning: false };
      
    case "RESET":  // ✅ FIXED
      const duration = getTimerDuration(state.mode);
      return { ...state, timeLeft: duration, isRunning: false };

    case "SWITCH_TO_BREAK":
      return {
        ...state,
        mode: "break",
        timeLeft: 5 * 60,
        isRunning: false,
        sessionsCompleted: state.sessionsCompleted + 1,
      };

    case "SWITCH_TO_LONG_BREAK":
      return {
        ...state,
        mode: "longBreak",
        timeLeft: 15 * 60,
        isRunning: false,
        sessionsCompleted: state.sessionsCompleted + 1,
      };

    case "SWITCH_TO_FOCUS":
      return {
        ...state,
        mode: "focus",
        timeLeft: 25 * 60,
        isRunning: false,
      };

    default:
      return state;
  }
};

// Create context
const TimerContext = createContext(null);

// Provider Component
export const TimerProvider = ({ children }) => {
  const [timerState, dispatch] = useReducer(timerReducer, initialState);

  // Timer logic (interval)
  useEffect(() => {
    if (!timerState.isRunning) return;

    const interval = setInterval(() => {
      if (timerState.timeLeft <= 1) {
        // Timer finished - switch modes
        if (timerState.mode === "focus") {
          const newCount = timerState.sessionsCompleted + 1;
          if (newCount % 4 === 0) {
            dispatch({ type: "SWITCH_TO_LONG_BREAK" });
          } else {
            dispatch({ type: "SWITCH_TO_BREAK" });
          }
        } else {
          dispatch({ type: "SWITCH_TO_FOCUS" });
        }
      } else {
        dispatch({ type: "TICK" });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    timerState.isRunning,
    timerState.timeLeft,
    timerState.mode,
    timerState.sessionsCompleted,
  ]);

  const value = {
    timerState,
    dispatch,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimerContext must be used within TimerProvider");
  }
  return context;
};