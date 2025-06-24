import React, { useState } from "react";
import AuthHeading from "../components/AuthHEading";
import AuthSubHeading from "../components/AuthSubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { signup } from "../api/User.api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const signUpHandler = async () => {

    setLoading(true);
    setError("");

    try {
      const data = await signup(username, email, password);
      setError(data);
      if(data.success) {
          setLoading(false);
          navigate("/")
        }
        setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message || "Registration Failed. Please Try Again.");
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
        <div className="w-96 max-w-md p-6 shadow-xl rounded-xl bg-white">
          <AuthHeading title="Sign Up" />
          <AuthSubHeading title="Enter Yur Information to Create an account" />
          <div className="space-y-4">
            <InputBox
              type={"text"}
              label="Username"
              placeholder={"Kunal"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <InputBox
              type={"email"}
              label="Email"
              placeholder={"example@example.com"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputBox
              type={"password"}
              label="Password"
              placeholder={"Strong Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error.success ? (<div>
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
              onClick={signUpHandler}
              type="submit"
              label={loading ? "Signing in..." : "Sign In"}
            />
            <BottomWarning
              title="Already have an account?"
              buttontxt="Sign In"
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
