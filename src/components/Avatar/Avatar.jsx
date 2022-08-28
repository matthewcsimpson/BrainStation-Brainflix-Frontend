import "./Avatar.scss";
function Avatar({ userImg, classModifier }) {
  return (
    <div
      name="avatar"
      className={`glbl__user-avatar-container ${classModifier}`}
    >
      {userImg && userImg !== null ? (
        <img className="glbl__user-avatar" alt="User Img" src={userImg} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Avatar;
