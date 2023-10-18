import cl from './Friends.module.css';

const Friends = (props) => {
  return (
    <div className={cl.friends}>
      {props.friends.map((f) => (
        <div>
          <img src={f.ava} />
          <h4>
            {f.name} {f.age}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Friends;
