import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FinancialChart from "../components/FinancialChart";
import { fetchStart } from "../features/finnhub/finnhubSlice";
import { useFinnhubData } from "../features/finnhub/useFinnhubData";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const symbol = "AAPL";
  const { error, isLoading } = useFinnhubData(symbol);

  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>

      <h1>Finnhub Stock Data</h1>
      <FinancialChart />
    </div>
  );
};

export default Home;
