import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch<T>(
  url: string,
  options?: {
    cacheTimeout?: number;
    initial?: T;
    callback?: Function;
    debug?: boolean;
  }
) {
  const [data, setData] = useState<T | null>(
    options && options.initial ? options.initial : null
  );
  const [loading, setLoading] = useState<boolean>(true);

  async function loadData() {
    setLoading(true);

    const fetchedData = await axios.get(url);

    setData(fetchedData.data);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!loading && options && options.callback) {
      options.callback();
    }
  }, [loading]);

  return [data as T, loading as boolean] as const;
}
