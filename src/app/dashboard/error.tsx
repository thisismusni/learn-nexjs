"use client";
import React from "react";
function error({ error }: any) {
  return <div>{JSON.stringify(error)}</div>;
}

export default error;
