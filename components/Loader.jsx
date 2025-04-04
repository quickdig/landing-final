'use client';
import { Spin } from "antd";
import React from "react";


const Loader = () => {
  return (
    <div className="loader-container">
     <Spin size="large" />
    </div>
  );
};

export default Loader;
