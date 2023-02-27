import { redirect } from "react-router-dom";

export const action = () => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("EXPIRATION");
  return redirect('/');
};
