import { memo } from "react";

export const InputTodo = memo((props) => {
    const {todoText, onChangeTodoText, onClickAdd, disabled} = props;
    return (
        <div className="input-area">
                <h2>入力エリア</h2>
                <input type="text" placeholder="todoを入力" value={todoText} onChange={onChangeTodoText} disabled={disabled} />
                <button onClick={onClickAdd} disabled={disabled}>追加</button>
        </div>
    );
});