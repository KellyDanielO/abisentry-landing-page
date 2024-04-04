import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './App.css'
import Logo from '../src/assets/images/logo.png'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import NewsLetterImage from '../src/assets/images/newsletter.png'

function App() {

  return (
    <div className='w-full overflow-x-hidden bg-background scroll-smooth text-foreground'>
      {/* <main className='w-[70%] mx-auto'> */}

      <NavBar />
      <HomePage />

      {/* Newsletter */}
      <div className='bg-newsletter_color_one lg:w-screen flex flex-col justify-center items-center py-10 px-10 w-full'>

        <div className='flex justify-between items-center gap-5 flex-col lg:flex-row'>
          <div className='flex justify-around items-center lg:w-[70%] gap-5  flex-col lg:flex-row'>
            <img src={NewsLetterImage} alt="" className='lg:w-[15%]' />
            <div className='flex flex-col items-center'>
              <h1 className='font-medium text-lg lg:text-3xl text-center'>Never miss a deal on Abisentry Cybersecurity</h1>
              <p className='text-sm lg:text-lg text-center'>Subscribe to our newsletter and be the first to know about our special offers.Subscribe to stay up to date with the latest cyber threat trends</p>
            </div>
          </div>
          {/* Form Area */}
          <form className='flex gap-2 flex-col lg:flex-row'>
            <input type="text" className="py-3 px-8 font-medium rounded-lg bg-transparent border-2" placeholder='abisentry@gmail.com'/>
            <button className='uppercase py-3 px-8 font-medium bg-primary outline-none border-none rounded-lg '>Subscribe</button>
          </form>
        </div>
        <h3 className='text-lg lg:text-2xl text-center mt-5'>By subscribing, you give Abisentry limited consent to send to your email!</h3>
      </div>
      {/* Footer Section */}
      <footer className="flex justify-between items-start py-[10vh] gap-10 lg:gap-5 flex-col lg:flex-row mx-auto w-[70%]">
        <div className='lg:w-[25%] flex flex-col justify-center items-start gap-2'>
          <img src={Logo} alt="webflow" className='w-[30%]' />
          <h3 className='my-2 text-xl font-semibold'>Your Digital Fortress Guarded by Abisentry.</h3>
          <p className='text-[16px]'>We are fully registered and Licensed in Nigeria RC7131200</p>
          <div className='flex justify-center items-center gap-5 mt-5'>
            <FaFacebook className='text-2xl cursor-pointer' />
            <FaInstagram className='text-2xl cursor-pointer' />
            <BsTwitterX className='text-2xl cursor-pointer' />
          </div>
        </div>
        <div className='lg:w-[15%]'>
          <h3 className='text-3xl font-medium'>Services</h3>
          <br />
          <ul className='flex gap-3 flex-col'>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Vulnerability Assessment</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Endpoint protection</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Accounts Review</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Threat intelligence</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Incident response</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Compliance and regulation</a>
          </ul>
        </div>
        <div className='lg:w-[15%]'>
          <h3 className='text-3xl font-medium'>About Us</h3>
          <br />
          <ul className='flex gap-3 flex-col'>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Career</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Press</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Accounts Review</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Blog</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Sitemap</a>
          </ul>
        </div>
        <div className='lg:w-[15%]'>
          <h3 className='text-3xl font-medium'>Other Links</h3>
          <br />
          <ul className='flex gap-3 flex-col'>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Pricing</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Abisentry Guide</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Abisentry for Non profits</a>
          </ul>
        </div>
        <div className='lg:w-[15%]'>
          <h3 className='text-3xl font-medium'>Helpful Links</h3>
          <br />
          <ul className='flex gap-3 flex-col'>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Contact Us</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>FAQs</a>
            <a href="#" className='text-[#F0F0F0]/70 hover:font-bold transition-all ease-linear hover:text-foreground text-lg'>Meet an expert</a>
          </ul>
        </div>
      </footer>
      {/* </main> */}
    </div>
  )
}

export default App
