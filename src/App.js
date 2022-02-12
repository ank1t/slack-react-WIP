import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
        <Header />
        <div className="app__body">
          <SideBar />
          <Routes>
            <Route path="room/:roomId" element={<Chat />} />
            <Route path="/" />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
