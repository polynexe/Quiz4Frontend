import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DetailScreen from "./screens/DetailScreen";
import TaskScreen from "./screens/TaskScreen";


function App() {
  return (
    <div>
      <Router>
      <Header />
      <main className="py-3">
        
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/project/" element={<DetailScreen />} />
          <Route path="/project/:id" element={<TaskScreen />} />
        </Routes>

      </main>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
