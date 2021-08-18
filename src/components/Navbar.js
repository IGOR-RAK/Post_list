import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context";
import { MyButton } from "../UI/buttons/MyButton";

export default function Navbar() {
  const { setIsAuth } = useContext(AuthContext);
  const router = useHistory();

  return (
    <div className="navbar">
      <div>
        <MyButton
          onClick={() => {
            setIsAuth(false);
            localStorage.removeItem("auth");
          }}
        >
          Logout
        </MyButton>
      </div>

      <div className="navbar__links">
        <MyButton
          style={{ border: "none" }}
          onClick={() => {
            router.push(`/about`);
          }}
        >
          About
        </MyButton>
        <MyButton
          style={{ border: "none" }}
          onClick={() => {
            router.push(`/posts`);
          }}
        >
          Posts
        </MyButton>
      </div>
    </div>
  );
}
