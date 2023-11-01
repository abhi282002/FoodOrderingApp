import { useState, useEffect } from "react";
import { apiMenu } from "../../utils/constants";
const useResInfo = (resId) => {
  const [ResInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(apiMenu + resId);
    const json = await data.json();

    setResInfo(json);
  };
  return ResInfo;
};

export default useResInfo;
