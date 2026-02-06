import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
      <Header />
      <main className="py-3">
        
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
        </Routes>

      </main>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
