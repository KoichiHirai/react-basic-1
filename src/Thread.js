import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Thread = () => {
  const [threads, setThreads] = useState([]);
  const navigate = useNavigate();
  
  // apiでスレッド情報の取得
  useEffect(() =>{
    const getThreads = async () => {
      try {
        const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0");
        // レスポンスのボディをJSONとして取得
        const data = await response.json();
        setThreads(data);
      } catch (error) {
        // エラーが発生した場合の処理
        console.error('Error fetching data: ', error);
      }
    } 
    getThreads();
  },[])

  const getCell = (thread) => {
    // setThreadId(id);
    navigate(`/thread/${thread.id}`, {state: {id: thread.id, title: thread.title }})
  }

  return (
    threads.length > 0 ? (
      <div className='flex-box'>
        <div> 
          <div className='title'>新着スレッド</div>
          <table border="1">
            <thead></thead>
            <tbody>
              {
                threads.map((value) => 
                  <tr key={value.id}>
                    <td onClick={() => getCell(value)}>{value.title}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <diV></diV>
    )
  );
}

export default Thread;