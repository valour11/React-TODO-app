
// css file
import "./App.css";
// icons
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin4Line } from "react-icons/ri";
// end of icons


import Header from "./components/Header"

function App() {

  return (
    <div>
      <body className='App'>
        <main>
            {/* Header */}
            <header>
              <section>
                {/* logo section */}
                <h3>SEFE<span>TODO</span></h3>
              </section>
                {/* logout icon section */}
              <section className="logout">
                <IoLogOutOutline />
              </section>
            </header>
            {/* Header ends */}
              {/* body section */}
            <div className="second-section">
                <section className="container">
                  <div>
                    <h2>Todo Done</h2>
                    <p>keep it up</p>
                  </div>
                  <div className="circle">
                    <h3>1/3</h3>
                  </div>
                </section>
                <section className="input-1">
                  <div className="text-area">
                    <input type="text" placeholder="write your next task" />
                    <div className="plus">+</div>
                  </div>
                  <div className="task-1">
                    <div>
                      <input type="radio" id="task-1" name="task-1" />
                      <label htmlFor="task-1">Task 1</label>
                    </div>
                    <i>
                      <FaRegEdit />
                      <RiDeleteBin4Line />
                    </i>
                  </div>
                  <div className="task-1">
                    <div>
                      <input type="radio" id="task-1" name="task-1" />
                      <label htmlFor="task-1" className="task-2">Task 2</label>
                    </div>
                    <i>
                      <FaRegEdit />
                      <RiDeleteBin4Line />
                    </i>
                  </div>
                  <div className="task-1">
                    <div>
                      <input type="radio" id="task-1" name="task-1" />
                      <label htmlFor="task-1">Task 2</label>
                    </div>
                    <i>
                      <FaRegEdit />
                      <RiDeleteBin4Line />
                    </i>
                  </div>
                </section>
  
              </div>
        </main>
      </body>
    </div>
  )
}

export default App
