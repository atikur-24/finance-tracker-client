import { useEffect, useState } from "react";
import useAuth from "./useAuth";

export default function useTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://finance-tracker-server-theta.vercel.app/transactions?email=${user?.email}`,
          { signal },
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTransactions(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [user?.email]);

  return [transactions, setTransactions, loading];
}
