import { useEffect } from "react";

const Error = ({ message }) => {
  useEffect(() => {
    alert(message);
  }, [message]);
};

export default Error;
