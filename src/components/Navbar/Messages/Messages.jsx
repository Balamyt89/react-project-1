import { NavLink } from "react-router-dom";



const Messages = (props) => {
  return (
    <div>
      
      {props.dialogs.map((d) => (
        <div>
          <NavLink to={d.name}>{d.name}</NavLink>
        </div>
      ))}
      
    </div>
  );
};

export default Messages;
