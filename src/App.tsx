import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav"
import Teachnologies from "./components/Technologies";
import Footer from "./components/Footer";




const techDataFetch = async () => {
  const res = await fetch('./data.json');
  const data = await res.json();
  return data;
}


function App() {

  const techPromise = techDataFetch();

  return (
    <>

      <Nav />
      <Banner />

      <Suspense fallback={<h2>Loading Technologies...</h2>}>
        <Teachnologies techPromise={techPromise}></Teachnologies>
      </Suspense>
      <Footer></Footer>

    </>
  )
}

export default App
