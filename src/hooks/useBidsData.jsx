import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useBidsData = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { isError, isLoading, refetch, data, error } = useQuery({
    queryKey: ["bids"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/bids?email=${user?.email}`);
      return data;
    },
  });

  return { isLoading, refetch, data };
};

export default useBidsData;
