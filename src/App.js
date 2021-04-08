import React, { useState } from 'react';
import { CompleteTodo } from './components/ComplateTodo';
import { HoryuTodo } from './components/HoryuTodo';
import { IncompleteTodo } from './components/IncompleteTodo';
import { InputTodo } from './components/InputTodo';
import "./styles.css";



export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [horyuTodos, setHoryuTodos] = useState([]);


  // インプット追加
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 未完了のTODOへの追加
  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  } 

  //未完了のTODOからの削除
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }



  //未完了のTODOから完了への移動
const onClickComplete = (index) => {
  // 未完了エリアの更新
  const newIncompleteTodos = [...incompleteTodos];
  const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
  newIncompleteTodos.splice(index, 1);
  

  //セット
  setIncompleteTodos(newIncompleteTodos);
  setCompleteTodos(newCompleteTodos);
}

//保留エリアへ追加
const onClickMoveHoryu = (index) => {

  // 未完了エリアの更新
  const newIncompleteTodos = [...incompleteTodos];
  const newHoryuTodos = [...horyuTodos, newIncompleteTodos[index]];

  newIncompleteTodos.splice(index, 1);

  //セット
  setHoryuTodos(newHoryuTodos);
  setIncompleteTodos(newIncompleteTodos);
}

const onClickBack = (index) => {
  const newCompleteTodos = [...completeTodos];
  const newIncompleteTodos = [...incompleteTodos, newCompleteTodos[index]];
  newCompleteTodos.splice(index, 1);

  //セット
  setIncompleteTodos(newIncompleteTodos);
  setCompleteTodos(newCompleteTodos);
}

// 保留から消去
const onClickDeleteHoryu = (index) => {
  const newHoryuTodos = [...horyuTodos];
  newHoryuTodos.splice(index, 1);
  setHoryuTodos(newHoryuTodos);
}

// 
const onClickHoryuBack = (index) => {
  const newHoryuTodos = [...horyuTodos];

  const newIncompleteTodos = [...incompleteTodos, horyuTodos[index]];
  newHoryuTodos.splice(index, 1);

  setIncompleteTodos(newIncompleteTodos);
  setHoryuTodos(newHoryuTodos);
}






  return (
    <>
    <div className="main-wrapper">
        <header>
            <h1>TODOリスト</h1>
            <p>入力したTODOは「未完了のTODO」に追加されます。<br />
                １度に登録できる「未完了のTODO」は５個までです。<br />
                完了したTODOは１０まで保存されます。
            </p>
        </header>
        <main>
            {/* インプットエリア */}
            <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd} disabled={incompleteTodos.length >= 5} />

            {/* 未完了のエリア */}
            {incompleteTodos.length >= 5 && (<p style={{ color: "red" }}>５個まで登録できます。</p>)}
            <IncompleteTodo incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} onClickMoveHoryu={onClickMoveHoryu} />

            {/* 完了エリア */}
            <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />

            {/* 保留エリア */}
            <HoryuTodo horyuTodos={horyuTodos} onClickHoryuBack={onClickHoryuBack} onClickDeleteHoryu={onClickDeleteHoryu} />
        </main>
    </div>

    
    
    <footer className="footer">
        Copyright taichi All Rights Reserved
    </footer>
    </>
  );
}

export default App;