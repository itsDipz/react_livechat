import './App.css';

function DisplayMessage() {
  return (
    <div className="message_display"></div>
  )
}


function Input() {
  return (
    <div className="input_wrapper">
      <textarea></textarea>
      <button>Submit</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <DisplayMessage />
      <Input />
    </div>
  );
}

export default App;
