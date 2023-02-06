import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";




function App() {

  const [search_term, setSearchTerm] = useState("");

  let access_token = localStorage.getItem("access_token")
  const [user, setUser] = useState(access_token);

  return (
    <div >
      <BrowserRouter>
        <Navbar search_term={search_term} setSearchTerm={setSearchTerm} user={user} setUser={setUser} />
        <Routes>
          <Route path="" element={<Home search_term={search_term} />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
