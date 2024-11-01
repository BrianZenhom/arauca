import './../../App.css'
import Products from './sections/products/Products'
import Navbar from './../../components/navbar/Navbar'
import NewsLetter from './sections/newsletter/NewsLetter'
import Faqs from './sections/faqs/Faqs'
import Footer from './../../components/footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Products />
      <NewsLetter />
      <Faqs />
      <Footer />
    </>
  )
}
