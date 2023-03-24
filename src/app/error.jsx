"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Somthing went wrong</h1>
      <button onClick={() => reset()} className="text-amber-600">
        Try again
      </button>
    </div>
  );
};

export default Error;
