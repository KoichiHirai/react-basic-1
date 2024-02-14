// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Header from "./Header";
import Thread from "./Thread";
import NewThread from "./NewThread";
import Posts from './Posts';


function App() {
  // let a = 1;
  // const [threads, setThreads] = useState([]);
  
  // // apiでスレッド情報の取得
  // useEffect(() =>{
  //   const getThread = async () => {
  //     try {
  //       const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0");
  //       // レスポンスのボディをJSONとして取得
  //       const data = await response.json();
  //       setThreads(data);
  //     } catch (error) {
  //       // エラーが発生した場合の処理
  //       console.error('Error fetching data: ', error);
  //     }
  //   } 
  //   getThread();
  // },[])
  
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

  // return(
  //   <>
  //     <Header />
  //     <Board />
  //   </>
  // );
}

export default App;
