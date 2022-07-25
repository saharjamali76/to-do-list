import TodoCard from "./components/TodoCard";

function App() {
  return (
    <div className="App">
      <TodoCard title="language"/>
      <TodoCard title="Read a Book" />
      <TodoCard title="Mobocollege" />
      <TodoCard title="Bank" />
      <TodoCard title="Sport" />
      <TodoCard title="Meditation" />
    </div>
  );
}

export default App;