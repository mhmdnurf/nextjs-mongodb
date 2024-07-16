"use client";

import React from "react";

export default function Error({ error }: { error: Error }) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <>
      <div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </>
  );
}
