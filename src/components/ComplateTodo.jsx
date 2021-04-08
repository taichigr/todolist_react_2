import { memo } from "react";

export const CompleteTodo = memo((props) => {
    const {completeTodos, onClickBack} = props;
    if(completeTodos.length > 11){
      completeTodos.splice(0, 1);
    }
    return (
        <div className="complete-area">
            <h2>完了のTODO</h2>
                <ul>
                  {completeTodos.map((todo, index) => {
                    return (
                      <div key={todo} className="list-row">
                        <li>{todo}</li>
                        <button onClick={() => onClickBack(index)}>戻す</button>
                    </div>
                    );
                  })}
                </ul>
        </div>
    );
});