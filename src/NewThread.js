import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewThread = () => {
  const [threadTitle, setThreadTitle] = useState("");

  const inputChange = (event) => setThreadTitle(event.target.value);


  const createThread = async () => {
    try {
      const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: threadTitle }), // 送信したいデータ
      });
      const data = await response.json();
      console.log(data); // 応答をログに記録
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex-box">
      <div>
        <div className='title'>スレッド新規作成</div>
        <input className='inputThreadName' type='text' placeholder='スレッドタイトルを入力してください' value={threadTitle} onChange={inputChange} />
      </div>
      <div className='underInput'>
        <Link to="/">Topに戻る</Link>
        <button className='createBtn' onClick={createThread}>作成</button> 
      </div>
    </div>
  );
}

export default NewThread;