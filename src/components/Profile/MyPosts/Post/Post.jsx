import cl from './Post.module.css'

const Post = () => {
  return (
      <div className={cl.post}>
        <img alt='ava' src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'/>
        Post 1
      </div>
  )
};

export default Post;