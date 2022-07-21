import { getSession } from "next-auth/react";

function Blog({ data }) {
  return <h1>Blog page - {data}</h1>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      data: session ? "list of 100 personalized posts" : "List of Free blogs",
    },
  };
}
