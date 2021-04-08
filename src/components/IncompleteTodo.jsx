import { memo } from "react";

export const IncompleteTodo = memo((props) => {
    const {incompleteTodos, onClickComplete, onClickDelete, onClickMoveHoryu} = props;
    return (
        <div className="incomplete-area">
                <h2>未完了のTODO</h2>
                <ul>
                  {incompleteTodos.map((todo, index) => {
                    return (
                      <div key={todo} className="list-row">
                        <li>{todo}</li>
                        <button onClick={() => onClickComplete(index)}>完了</button>
                        <button onClick={() => onClickDelete(index)}>削除</button>
                        <button onClick={() => onClickMoveHoryu(index)}>保留へ</button>
                    </div>
                    );
                  })}
                </ul>
        </div>
    );
});