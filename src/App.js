import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar/Navigation';
import Home from './Components/Home';
import Create from './Components/Create';
import View from './Components/View'
import Edit from './Components/Edit'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/View" element={<View />} />
        <Route path = "/Edit/:id" element = {<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;