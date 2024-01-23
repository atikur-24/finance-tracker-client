import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useTransaction = () => {
  const { user, loading } = useAuth();
  const { data: transactions = [], refetch } = useQuery({
    queryKey: ["transactions", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const data = await axios.get(
        `https://finance-tracker-server-theta.vercel.app/transactions?email=${user?.email}`,
      );
      return data?.data;
    },
  });

  return [transactions, refetch];
};

export default useTransaction;
