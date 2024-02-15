// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Header from "./Header";
import Thread from "./Thread";
import NewThread from "./NewThread";
import Posts from './Posts';


function App() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Thread />} />
        <Route path="/thread/new" element={<NewThread />} />
        <Route path="/thread/:threadId" element={<Posts />} />
        {/* <Route path="/thread/:a" element={<Posts />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
