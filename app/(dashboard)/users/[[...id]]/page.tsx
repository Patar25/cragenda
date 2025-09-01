import React from "react";

interface SingleUserPageProps {
  params: {
    id?: string | string[];
  };
}

const SingleUserPage = ({ params }: SingleUserPageProps) => {
  console.log(params);
  return <div>SingleUserPage</div>;
};

export default SingleUserPage;
