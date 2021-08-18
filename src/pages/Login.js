import { useContext } from "react";
import { AuthContext } from "../context";
import { MyButton } from "../UI/buttons/MyButton";
import { MyInput } from "../UI/inputs/MyInput";

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1 style={{ paddingBottom: "10px" }}> Login page: </h1>
      <div>
        <form onSubmit={login}>
          <MyInput type="text" placeholder="No need to fill in." />
          <MyInput type="password" placeholder="Just click button below." />
          <MyButton>Just click to authorize</MyButton>
        </form>
      </div>
    </div>
  );
}
