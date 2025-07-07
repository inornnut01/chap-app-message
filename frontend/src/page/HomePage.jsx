import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MessageContainer from "../components/messages/MessageContainer";

const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400/20 backdrop-blur-sm">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default HomePage;
