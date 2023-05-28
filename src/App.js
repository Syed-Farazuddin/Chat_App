import { useState } from "react";
import Chatbox from "./components/Chatbox";
import Login from "./components/Login";
// import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const [lightTheme, setLightTheme] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <Router>
      <div>
        {sidebar === false ? null : <Sidebar />}
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/welcome" element={<Welcome />} />

          <Route path="/welcome/chat" element={<Chatbox />} />

          <Route path="/chat" element={<Chatbox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// export { theme };
// {/* <div className="app">
//   <Sidebar />
//   {/* <Chatbox /> */}
//   <Welcome />
// </div>; */}
