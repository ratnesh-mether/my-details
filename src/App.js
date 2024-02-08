import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Login from './components/Login/Login';
import InputTags from './components/InputTags/InputTags';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/question-1" element={<Form />}></Route>
        <Route path="/question-2" element={<Login />}></Route>
        <Route path="/question-3" element={<InputTags />}></Route>
      </Routes>
      {/* <Form /> */}
    </div>
  );
}

export default App;
