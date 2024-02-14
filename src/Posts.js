import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Posts = () => {
  const location = useLocation();
  const {id, title} = location.state;
  
  const [postData, setPostData] = useState({});
  const [postContent, setPostContent] = useState("");

  const getPosts = async () => {
    try {
      const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts?offset=0`);
      // レスポンスのボディをJSONとして取得
      const data = await response.json();
      setPostData(data);
    } catch (error) {
      // エラーが発生した場合の処理
      console.error('Error fetching data: ', error);
    }
  } 

  useEffect(() =>{
    getPosts();
  },[])

  const inputChange = (event) => setPostContent(event.target.value);

  const createPost = async () => {
    try {
      const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post: postContent }), // 送信したいデータ
      });
      const data = await response.json();
      console.log(data); // 応答をログに記録
      getPosts();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return(
    Object.keys(postData).length > 0 ?(
      <div className="flex-box-posts">
        <div className="title">{title}</div>
        <div className='flexbox-posts-inside'>
          <div className='posts-left'>
            {
              postData.posts.length > 0 ? (
                postData.posts.map((value) => 
                  <div key={value.id} className="post">{value.post}</div>
                )
              ) : (
                <div>Postがありません</div>
              )
            }
          </div>
          <div className="post-right">
            <input className='inputPost' type='text' placeholder='投稿しよう' value={postContent} onChange={inputChange} />
            <button className='postBtn' onClick={createPost}>投稿</button> 
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    )
  );
}
export default Posts;