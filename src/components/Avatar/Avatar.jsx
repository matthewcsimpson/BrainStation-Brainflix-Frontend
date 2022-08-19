import "./Avatar.scss";
function Avatar({ userimg, classModifier }) {
  return (
    <div
      name="avatar"
      className={`glbl__user-avatar-container ${classModifier}`}
    >
      {userimg && userimg !== null ? (
        <img className="glbl__user-avatar" alt="User Img" src={userimg} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Avatar;
