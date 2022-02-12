import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="app__body">
        <SideBar />
        {/* React router -> Chat screen */}
      </div>
    </div>
  );
}

export default App;
