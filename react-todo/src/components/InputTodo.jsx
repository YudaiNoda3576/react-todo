import React from "react";

export const InputTodo = (props) => {
    const { todoText, onChangeTodoText, onClickAdd, disabled } = props;

    return (
        <div className="input-area">
            <input placeholder="TODOを入力" defaultValue={todoText} onChange={onChangeTodoText} disabled={disabled}/>
            <button onClick={onClickAdd} disabled={disabled}>追加</button>
        </div>
    )
};
