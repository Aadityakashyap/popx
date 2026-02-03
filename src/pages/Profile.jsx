const DEFAULT_USER = {
  name: "Marry Doe",
  email: "marry@gmail.com",
  description:
    "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.",
};

const Profile = () => {
  const storedUser = localStorage.getItem("popx_user");

  const parsedUser = storedUser ? JSON.parse(storedUser) : {};

  const user = {
    name: parsedUser?.name?.trim() || DEFAULT_USER.name,
    email: parsedUser?.email?.trim() || DEFAULT_USER.email,
    description: DEFAULT_USER.description,
  };

  return (
    <div className="py-6 flex flex-col justify-between h-full">
      <span>
        <h2 className="font-semibold mb-4 text-lg px-6 pb-4 shadow-xl shadow-border">
          Account Settings
        </h2>
        <div className="flex items-start gap-6 mb-6 px-6">
          <span className="relative">
            <img
              src="/avatar.png"
              alt="avatar"
              className="w-19 h-19 rounded-full"
            />
            <img
              src="/upload.png"
              alt="avatar"
              className="absolute -right-1.5 bottom-0 w-6 h-6 rounded-full"
            />
          </span>
          <div>
            <p className="font-semibold text-[15px]">{user.name}</p>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed px-6 capitalize">
          {user.description}
        </p>
        <hr className="border border-dashed border-border mt-4" />
      </span>
      <hr className="border border-dashed border-border my-4" />
    </div>
  );
};

export default Profile;
