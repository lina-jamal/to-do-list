import React, { useState, useEffect } from "react";
import TodoForm from "../todosForm";
import { fetchTodo, editTodo, deleteTodo } from "./function";
const Todos = ({ name }) => {
  const [edit, setEdit] = useState(false);
  const [showForm, setShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    userId: "",
    title: "",
    description: "",
    time: new Date(),
    important: false,
    done: false,
  });

  useEffect(() => {
    fetchTodo(setTodos);
  }, []);

  return (
    <>
      <div className="todoContainer">
        <button
          type="button"
          onClick={() => {
            setShow(true);
            setTodo({
              userId: "",
              title: "",
              description: "",
              time: new Date(),
              important: false,
              done: false,
            });
          }}
        >
          Add Todo
        </button>
        <div className="mytodo">
          {todos.length > 0
            ? todos.map((todo) => (
                <div key={todo._id} className="todo">
                  <h3
                    onClick={() =>
                      editTodo(
                        todo._id,
                        todo.title,
                        todo.description,
                        todo.time,
                        todo.important,
                        todo.done,
                        setShow,
                        setEdit,
                        setTodo
                      )
                    }
                  >
                    {todo.title}
                  </h3>
                  <div className="todo_controller">
                    <button type="button" onClick={() => deleteTodo(todo._id)}>
                      <i className="fas fa-trash-alt"> del</i>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editTodo(
                          todo._id,
                          todo.title,
                          todo.description,
                          todo.time,
                          todo.important,
                          todo.done,
                          setShow,
                          setEdit,
                          setTodo
                        )
                      }
                    >
                      <i className="fas fa-edit"> edit</i>
                    </button>
                  </div>
                  <p>{todo.description}</p>
                  <span>{todo.emportant}</span>
                  <span>{todo.dine}</span>

                  <span>{todo.time}</span>
                </div>
              ))
            : null}
        </div>
      </div>

      {showForm && (
        <TodoForm
          edit={edit}
          setEdit={setEdit}
          setShow={setShow}
          setTodo={setTodo}
          todo={todo}
        />
      )}
    </>
  );
};

export default Todos;