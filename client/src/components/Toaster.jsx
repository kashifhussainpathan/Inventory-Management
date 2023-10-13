import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterComponent = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 2000,
        style: {
          background: "#363636",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToasterComponent;
