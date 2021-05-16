import { useEffect, useState } from "react";
import axios from "axios";

const ClickCount = (click_count) => {
  const [count, setCount] = useState([]);

  // connect with API using axios and set the endpoint

  useEffect(() => {
    axios.get(`/api/v1/progress/${click_count}`).then((res) => {
      const clicks = res.data;
      setCount(clicks);
    });
  }, []);
};

export default ClickCount;
