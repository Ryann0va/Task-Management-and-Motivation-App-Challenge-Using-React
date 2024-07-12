//U99350821
import React, { useState } from 'react';
import FancyText from './FancyText';
import tasks from './tasks';
import './TaskGenerator.css';

const motivationalMessages = [
  "Keep going! You're doing great!",
  "Believe in yourself!",
  "You can do it!",
  "Stay focused and keep pushing!",
  "Every step counts!"
];

function TaskGenerator() {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [currentTasks, setCurrentTasks] = useState(tasks);

  const handleNextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % currentTasks.length);
  };

  const handleCompleteTask = () => {
    const updatedTasks = currentTasks.map((task, index) => {
      if (index === currentTaskIndex) {
        return { ...task, isCompleted: true };
      }
      return task;
    });
    setCurrentTasks(updatedTasks);
    console.log(updatedTasks);
  };

  const currentTask = currentTasks[currentTaskIndex];
  const motivationalMessage = motivationalMessages[currentTaskIndex % motivationalMessages.length];

  return (
    <div className="task-generator">
      <div className="task">
        <FancyText title="true" text="Current Task" />
        <FancyText text={currentTask.name} />
        <FancyText text={currentTask.isCompleted ? "Completed ✔" : "Pending"} />
        <div className="task-buttons">
          <button onClick={handleCompleteTask} className="btn complete-btn">Mark as Completed</button>
          <button onClick={handleNextTask} className="btn next-btn">Next Task</button>
        </div>
      </div>
      <FancyText title="true" text="Motivational Message" />
      <FancyText text={motivationalMessage} />
    </div>
  );
}

export default TaskGenerator;
