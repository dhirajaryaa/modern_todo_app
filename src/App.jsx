import React from 'react'
import "./App.css"

function App() {
  return (
    <div class="container">
      <section class="warper">
        <h1>To Do App</h1>
        <div class="header">
          <input type="text" class="input-box" placeholder="Enter your task" />
          <div class="filterd-menu">
            <div class="btn-list">
              <button class="btn html">HTML</button>
              <button class="btn css">CSS</button>
              <button class="btn javascript">JavaScript</button>
              <button class="btn react">React</button>
            </div>
            <div class="action-btn">
              <select name="work-status" id="work-status">
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button class="submit">+ Add Task</button>
            </div>
          </div>
        </div>
        <hr />
        <div class="task-container">
          <div class="task-list">
            <h3><img src="./target.png" alt="target" /> To do</h3>
            <div class="task-box">
              <p>Change Deleate Icon</p>
              <div class="box">
                <div class="tags">
                  <button class="btn html">HTML</button>
                  <button class="btn css">CSS</button>
                </div>
                <div class="del-btn">
                  <button class="delete">
                    <img src="./delete.png" alt="delete" />
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          <div class="task-list">
            <h3><img src="./star.png" alt="star" /> Doing</h3>
            <div class="task-box">
              <p>Change Deleate Icon</p>
              <div class="box">
                <div class="tags">
                  <button class="btn html">HTML</button>
                  <button class="btn css">CSS</button>
                </div>
                <div class="del-btn">
                  <button class="delete">
                    <img src="./delete.png" alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="task-list">
            <h3><img src="./done.png" alt="done" /> Done</h3>
            <div class="task-box">
              <p>Change Deleate Icon</p>
              <div class="box">
                <div class="tags">
                  <button class="btn html">HTML</button>
                  <button class="btn css">CSS</button>
                </div>
                <div class="del-btn">
                  <button class="delete">
                    <img src="./delete.png" alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App