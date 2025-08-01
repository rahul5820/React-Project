import { useState } from 'react'

function ToDoList () {
  const [task, setTask] = useState([
    'Eat Breakfast',
    'Go to College',
    'Do Homework',
    'Play Video Games',
    'Go to Bed'
  ])
  const [newTask, setnewTask] = useState('')

  function handleInputChange (e) {
    setnewTask(e.target.value)
  }

  function addTask () {
    if (newTask.trim() !== '') setTask(t => [...t, newTask])
    setnewTask('')
  }
  function DeleteTask (index) {
    const UpdatedTask = task.filter((_, i) => i !== index)
    setTask(UpdatedTask)
  }

  function MoveTaskUp (index) {
    if (index > 0) {
      const updatedTask = [...task]

      ;[updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index]
      ]
      setTask(updatedTask)
    }
  }
  function MoveTaskDown (index) {
    if (index <task.length - 1) {
      const updatedTask = [...task]
      ;
                [updatedTask[index], updatedTask[index + 1]] = [  updatedTask[index + 1],      updatedTask[index]
            ]
          
      
      setTask(updatedTask)
    }
  }

  return (
    <div className='to-do-list'>
      <h1> TO DO LIST</h1>
      <div>
        <input
          type='text'
          value={newTask}
          placeholder='Enter New Task...'
          onChange={handleInputChange}
        />

        <button className='add-button' onClick={addTask}>
          ADD TASK
        </button>
      </div>
      <ol>
        {task.map((tasklist, index) => (
          <li key={index}>
            <span className='text'>{tasklist}</span>
            <button className='delete-task' onClick={() => DeleteTask(index)}>
              Delete
            </button>
            <button className='move-up-task' onClick={() => MoveTaskUp(index)}>
              Move Up
            </button>
            <button
              className='move-down-task'
              onClick={() => MoveTaskDown(index)}
            >
              {' '}
              Move Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ToDoList
