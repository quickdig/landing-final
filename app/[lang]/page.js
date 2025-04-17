

import React from 'react';
// import config from "./service/config.json";
import HomePage from "@/components/Home/HomePage";

export async function generateStaticParams() {
  return [{ lang: "ar" }];
}

export default function Home({ params }) {

  return (
    <>
      <HomePage lang={params.lang} />
    </>
  );
}
