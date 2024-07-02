import axios from "axios";

const fetchFinnhubData = async (symbol: string) => {
  const apiKey = import.meta.env.VITE_FINNHUB_API_KEY as string;

  const response = await axios.get(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
  );
  return response.data;
};

export { fetchFinnhubData };
