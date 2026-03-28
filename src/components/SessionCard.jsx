import React from 'react';
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

const SessionCard = ({ data, setToggle }) => {
  const { deleteSession,setEditData } = useContext(SessionContext);

  let getPriorityColor = () => {
    if (data.priority === "Low") return "text-green-500";
    if (data.priority === "Medium") return "text-orange-500";
    if (data.priority === "High") return "text-red-500";
    return "text-white";
  };
  return (

    <div className='flex items-center gap-2'>
      <div className='h-fit w-full rounded-2xl bg-[#222] p-4'>
        <h1 className='text-2xl'>Topic : {data?.topicName}</h1>
        <h1 className='text-2xl'>Subject: {data?.subject}</h1>
        <h1 className='text-2xl'>Duration: {data?.duration} min </h1>
        <h1 className="text-2xl">
          Priority:
          <span className={getPriorityColor()}>
            {data?.priority}
          </span>
        </h1>
        <h1 className='text-2xl'>Date:{data?.date}</h1>

        <div className='flex justify-between mt-2'>
          <button onClick={() => {
            setEditData(data);
            setToggle(false);
          }}
            className='border-2  text-blue-900 px-2 py-1 rounded cursor-pointer'>EDIT</button>
          <button onClick={() => {
            if (window.confirm("Are you sure?")) {
              deleteSession(data.id);
            }
          }} className='border-2  text-red-900  px-2 py-1 rounded cursor-pointer'>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;