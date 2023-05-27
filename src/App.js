import { useState } from "react";
import Chatbox from "./components/Chatbox";
import Login from "./components/Login";
// import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <div>
        {sidebar === false ? null : <Sidebar theme={theme} />}
        <Routes>
          <Route path="/" element={<Login theme={theme} />} />

          <Route path="/welcome" element={<Welcome theme={theme} />} />

          <Route path="/welcome/chat" element={<Chatbox theme={theme} />} />

          <Route path="/chat" element={<Chatbox theme={theme} />} />
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
