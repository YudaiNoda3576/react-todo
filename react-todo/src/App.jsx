import React from 'react';
import './style.css';

export const App = () => {
  const [todoText, setTodoText] = React.useState('');
  const [imcompleteTodos, setImcompleteTodos] = React.useState(['ああああああああああ', 'iiiiiiiiiii'])
  const [completeTodos, setCompleteTodos] = React.useState(['うううううううううう', 'eeeeeeeeeee'])
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText('');
  };
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    setImcompleteTodos(newImcompleteTodos);

    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setImcompleteTodos(newImcompleteTodos);
  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={ onChangeTodoText } />
        <button onClick={ onClickAdd }>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo, index) => {
            return (
              <div className="list-row" key={index}>
                <li>{todo}</li>
                <button onClick={ () => onClickComplete(index) }>完了</button>
                <button onClick={ () => onClickDelete(index) }>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div className="list-row" key={index}>
                <li>{todo}</li>
                <button onClick={ () => onClickBack(index) }>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App; 
