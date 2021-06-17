import { useEffect, useState } from "react";

import axios from "../axios";

export default function FecthData(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
          setLoading(false)
          setData(res.data)
      })
      .catch((e) => {setLoading(false);setError(true)});
  }, []);

  return [data, error, loading,setData];
}
