

import React from 'react';
// import config from "./service/config.json";
import HomePage from "@/components/Home/HomePage";
// import axios from 'axios';

// export async function generateMetadata() {
//   try {
//     const response = await axios.get(`${config.apiEndPoint}home_content`);
//     const data = response.data;
//     return {
//       title:data?.meta_title || "Future Sport UAE Home",
//       description: data?.meta_description || "Future Sport UAE Home",
//     };
//   } catch (error) {
//     console.error('Error fetching product data:', error);
//     return {
//       title: 'Future Sport UAE Home', // fallback title in case of an error
//     };
//   }
// }



export default function Home() {

  return (
    <>
      <HomePage />
    </>
  );
}
