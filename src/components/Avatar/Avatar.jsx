import "./Avatar.scss";
function Avatar({ userimg, classModifier }) {
  return (
    <div name="avatar" className={`glbl__user-avatar ${classModifier}`}>
      <img className="glbl__user-avatar" alt="User Img" src={userimg}></img>
    </div>
  );
}

export default Avatar;
