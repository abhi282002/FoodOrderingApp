import React, { useEffect } from "react";

const DemoFunction = () => {
  useEffect(() => {
    console.log("Demo Function UseEffect Will caleed");
  }, []);
  return (
    <>
      {console.log("Demo Function Render")}
      <div>
        <h1>This Is Demo Function page</h1>
      </div>
    </>
  );
};

export default DemoFunction;
