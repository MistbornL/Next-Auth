import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    <h2>Loading...</h2>;
  } else {
    return <h1>Welcome to Dashboard</h1>;
  }
}

export default Dashboard;
