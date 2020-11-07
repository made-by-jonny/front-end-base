import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    revalidate: 1,
  };
};

export default Index;
