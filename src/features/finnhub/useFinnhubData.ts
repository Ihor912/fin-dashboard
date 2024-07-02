import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFinnhubData } from "../../api/api";
import { fetchFailure, fetchSuccess } from "./finnhubSlice";

export const useFinnhubData = (symbol: string) => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery<any[]>({
    queryKey: ["finnhubData"],
    queryFn: () => fetchFinnhubData(symbol),
    enabled: !!isAuthenticated,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (error) {
      dispatch(fetchFailure(error.message));
    }
    if (data) {
      dispatch(fetchSuccess(data));
    }
  }, [dispatch, data, error]);

  return { data, error, isLoading };
};
