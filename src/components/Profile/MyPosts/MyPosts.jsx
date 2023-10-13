import Post from './Post/Post';
import cl from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post/>
    </div>
    
  )
};

export default MyPosts;