import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useBidsData = () => {
  const { user } = useContext(AuthContext);

  const { isError, isLoading, refetch, data, error } = useQuery({
    queryKey: ["bids"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/bids?email=${user?.email}`,
        { withCredentials: true }
      );
      return data;
    },
  });

  return { isLoading, refetch, data };
};

export default useBidsData;
