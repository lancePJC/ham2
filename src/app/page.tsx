"use client"
import Navbar from "@/components/front-end/Navbar";
import { useState } from "react";
import Cart from "@/components/front-end/Cart";
// import Hero from "@/components/front-end/Hero";
import Feature from "@/components/front-end/Feature";
import TrendingProduct from "@/components/front-end/TrendingProduct";
import Banner from "@/components/front-end/Banner";
import Footer from "@/components/front-end/Footer";
import Hero from "@/components/front-end/Hero";
export default function Home() {

  const [showCart, setShowCart] = useState(false)

  return (
      <main>
        <Navbar setShowCart={setShowCart}/>
       {showCart && <Cart setShowCart={setShowCart}/>}
       <Hero />
       <Feature/>
       <TrendingProduct/>
       <Banner/>
       <Footer/>
      </main >
  );
}
