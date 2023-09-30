import { useEffect, useRef, useState } from 'react';
import './../../App.css';
import Hero from './sections/hero/Hero';
import Products from './sections/products/Products';
import Navbar from './../../components/navbar/Navbar';
import NewsLetter from './sections/newsletter/NewsLetter';
import Faqs from './sections/faqs/Faqs';
import Footer from './../../components/footer/Footer';

export default function Home() {
  const myRef = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIntersecting(entry.isIntersecting);
      },
      { root: null, rootMargin: '-92px' }
    );

    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar isIntersecting={isIntersecting} />
      <Hero ref={myRef} />
      <Products />
      <NewsLetter />
      <Faqs />
      <Footer />
    </>
  );
}
