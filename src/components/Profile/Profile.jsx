import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css'

const Profile = () => {
  return (
    <div className={cl.profile}>
      <div >
        <img className={cl.baner} alt="img" src="https://bogatyr.club/uploads/posts/2023-03/1679336570_bogatyr-club-p-zastavka-kosmos-foni-pinterest-9.jpg"/>
      </div>
      <div >
        <img className={cl.ava} alt="ava" src="https://uprostim.com/wp-content/uploads/2021/05/image033-5.jpg"/>
        Name
      </div>
      <MyPosts/>
      </div>
  )
};

export default Profile;