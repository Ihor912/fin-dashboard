import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchUsers } from "../api/api";
import Counter from "../features/counter/Counter";
import { User } from "../types/types";

const Home: React.FC = () => {
  const { data, error, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

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

      <Counter />

      <div>
        <h1>Users</h1>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
