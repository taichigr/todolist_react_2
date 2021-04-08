import { memo } from "react";

export const HoryuTodo = memo((props) => {
    const {horyuTodos, onClickHoryuBack, onClickDeleteHoryu} = props;
return (
    <div className="horyu-area">
                <h2>保留のTODO</h2>
                <ul>
                  {horyuTodos.map((todo, index) => {
                    return (
                      <div key={todo} className="list-row">
                        <li>{todo}</li>
                        <button onClick={() => onClickHoryuBack(index)}>未完了へ</button>
                        <button onClick={() => onClickDeleteHoryu(index)}>削除</button>
                    </div>
                    )
                  })}
                </ul>
    </div>
);
});