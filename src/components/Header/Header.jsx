import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logout successful");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="bg-base-100 shadow-sm h-16">
      <nav className="navbar max-w-screen-xl px-4 mx-auto">
        <Link to={"/"} className="flex-1">
          <div className="flex gap-2 items-center">
            <img className="w-auto h-7" src={logo} alt="" />
            <span className="font-bold">SoloSphere</span>
          </div>
        </Link>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/add-job" className="justify-between">
                    Add Job
                  </Link>
                </li>
                <li>
                  <Link to="/my-posted-jobs">My Posted Jobs</Link>
                </li>
                <li>
                  <Link to="/my-bids">My Bids</Link>
                </li>
                <li>
                  <Link to="/bid-requests">Bid Requests</Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={handleLogout}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
