const Avatar = ({ url }) => {
  return (
    <img
      className="h-10 cursor-pointer rounded-full transition duration-150 transform hover:scale-110"
      loading="lazy"
      src={url}
      alt="profile picture"
    />
  );
};

export default Avatar;
