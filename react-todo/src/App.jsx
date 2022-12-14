import React from 'react';
import './style.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = React.useState('');
  const [incompleteTodos, setIncompleteTodos] = React.useState(['ああああああああああ', 'いいいいいいい', 'ううううううう', 'えええええええ', 'おおおおおおお'])
  const [completeTodos, setCompleteTodos] = React.useState(['うううううううううう', 'eeeeeeeeeee'])
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };
  
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd} disabled={incompleteTodos.length >= 5} />
        {incompleteTodos.length >= 5 && <p style={{ color: 'red' }}>登録できるTODOは5個までです。消化してください。</p>}
      <IncompleteTodo incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}

export default App; 
