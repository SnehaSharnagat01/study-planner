import React, { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState(() => {
    const data = localStorage.getItem("sessions");
    return data ? JSON.parse(data) : [];
  });

  const [editData, setEditData] = useState(null);

  const addSession = (data) => {
    setSessions((prev) => [...prev, data]);
  };

  const updateSession = (updatedData) => {
    setSessions((prev) =>
      prev.map((item) =>
        item.id === updatedData.id ? updatedData : item
      )
    );
  };

  const deleteSession = (id) => {
    setSessions((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  return (
    <SessionContext.Provider
      value={{
        sessions,
        addSession,
        updateSession,
        deleteSession,
        editData,
        setEditData
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;