// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './page/Navbar';
import ShoppingList from './page/Shoppinglist';
import TodoList from './page/TodoList';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>






      <Navbar />
      <Routes>
        <Route path='shoppinglist' element={<ShoppingList />}></Route>
        <Route path='todo' element={<TodoList />}></Route>


      </Routes>






    </>
  );
}

export default App;
