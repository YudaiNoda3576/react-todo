import React from 'react';
import './style.css';

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = React.useState(['ああああああああああ', 'iiiiiiiiiii'])
  const [completeTodos, setCompleteTodos] = React.useState(['うううううううううう', 'eeeeeeeeeee'])

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力"/>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo, index) => {
            return (
              <div className="list-row" key={index}>
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
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
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App; 
