import axios from "axios";
import { User } from "../types/types";

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

export { fetchUsers };
