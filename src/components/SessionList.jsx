import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import SessionCard from "./SessionCard";

const SessionList = ({ setToggle }) => {
  const { sessions } = useContext(SessionContext);

  const totalDuration = sessions.reduce((acc, curr) => {
    return acc + Number(curr.duration);
  }, 0);

  return (
    <div className="mt-4 px-4">
      
      <h2 className="text-xl font-bold mb-4">
        Total Study Time: {totalDuration} mins
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {sessions.map((item) => (
          <SessionCard key={item.id} data={item} setToggle={setToggle} />
        ))}
      </div>

    </div>
  );
};

export default SessionList;