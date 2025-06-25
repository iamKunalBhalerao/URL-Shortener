// import { useDispatch } from "react-redux";
import { redirect } from "@tanstack/react-router";
import { login } from "../redux/slices/authSlice";
import { isAuth } from "../api/User.api";

export const checkAuth = async ({ context }) => {
  try {
    const { store, myQueryClient } = context;
    const user = await myQueryClient.ensureQueryData({
      queryKey: ["currentUser"],
      queryFn: isAuth,
    });

    // console.log(user);
    if (!user.success) {
      redirect({
        to: "/signin",
        throw: true,
      });
    }

    store.dispatch(login(user));

    const { isAuthenticated } = store.getState().auth;

    if (!isAuthenticated) {
      redirect({
        to: "/signin",
        throw: true,
      });
    }

    return true;
  } catch (error) {
    redirect({
      to: "/signin",
      throw: true,
    });
  }
};
