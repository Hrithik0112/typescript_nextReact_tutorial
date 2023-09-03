"use client";
import React, { useState } from "react";

type Usrtype = {
  sessionId: number;
  name: string;
};

const UseStateExample = () => {
  const [username, setUserName] = useState("");
  const [user, setUser] = useState<Usrtype | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };
  return (
    <div className="useStateExample">
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
      {/* used option chaining in the below line of code minimize error */}
      {user?.name}
    </div>
  );
};

export default UseStateExample;
