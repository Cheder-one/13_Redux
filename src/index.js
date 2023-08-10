import React from "react";
import ReactDOM from "react-dom"; // Исправлено

// Создание хранилища с обновлением состояния
function createStore(initialState) {
  let state = initialState;

  function getState() {
    return state;
  }

  function setState(newState) {
    state = newState;
  }

  return { getState, setState }; // Добавлен setState
}

const store = createStore([{ id: 1, description: "Task 1", completed: false }]);
console.log(store.getState()); // Показать состояние хранилища

const App = () => {
  const state = store.getState(); // Получение состояния хранилища
  return (
    <React.StrictMode>
      <h1>App</h1>
      {/* Отображение состояния хранилища */}
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </React.StrictMode>
  );
};

// Использование метода render для монтирования приложения
ReactDOM.render(<App />, document.getElementById("root"));
