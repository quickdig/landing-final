'use client'

import Banner from "./Banner"
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import FAQs from "./FAQs";
// import Loader from "../Loader"
const HomePage = ({ lang }) => {
  // const { data, loading } = useFetch("home_content")

  // if (loading) return <Loader/>;
  return (
    <>
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section4 />
      <FAQs />
    </>
  )
}

export default HomePage;