import React from "react";
import UrlForm from "../components/UrlForm";
import UserUrls from "../components/UserUrls";

const Dashboard = () => {
  return (
    <>
      <div className=" flex flex-col mb-4 flex-wrap p-4 gap-4 items-center justify-center">
        <UrlForm />
        <UserUrls />
      </div>
    </>
  );
};

export default Dashboard;
