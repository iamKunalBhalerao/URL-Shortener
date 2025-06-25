import React, { useState } from "react";
import AuthHeading from "../components/AuthHEading";
import AuthSubHeading from "../components/AuthSubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { signin } from "../api/User.api";
import { useNavigate } from "@tanstack/react-router";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signInHandler = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await signin(email, password);
      dispatch(login(data.user));
      if (data.success) {
        setError(data);
        setLoading(false);
        navigate({ to: "/dashboard" });
      } else {
        setError(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message || "Registration Failed. Please Try Again.");
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
        <div className="w-96 max-w-md p-6 shadow-xl rounded-xl bg-white">
          <AuthHeading title="Sign In" />
          <AuthSubHeading title="Enter Your Information to Sign In to your Account." />
          <div className="space-y-4">
            <InputBox
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              label="Email"
              placeholder={"example@example.com"}
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              label="Password"
              placeholder={"Strong Password"}
            />
            {error.success ? (
              <div>
                <p className="text-sm font-normal text-green-500 text-center">
                  {error.message}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-sm font-normal text-red-500 text-center">
                  {error.message}
                </p>
              </div>
            )}
            <Button
              onClick={signInHandler}
              type="submit"
              label={loading ? "Signing In..." : "Sign In"}
            />
            <BottomWarning
              title="Don't have an account?"
              buttontxt="Sign Up"
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
