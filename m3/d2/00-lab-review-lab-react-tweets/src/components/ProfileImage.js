function ProfileImage({ imageAvatar }) {
  return (
    <div>
      <img src={imageAvatar} className="profile" alt="profile" />
    </div>
  );
}

export default ProfileImage;
