import TypeIt from 'typeit-react'
import HeroImage from '../assets/images/key-image.png'
import ServicesComponent from '../components/ServicesComponent'

const HomePage = () => {
    return <div className='flex flex-col justify-center items-center mt-40 lg:mt-20 lg:w-[70%] w-[90%] mx-auto overflow-y-hidden'>
        <div className='w-full flex justify-around items-center flex-col md:flex-row lg:flex-row'>
            <img src={HeroImage} alt="" className='lg:w-[45%] md:w-[50%]' />
            <div className='lg:w-[40%] flex flex-col gap-5 items-center lg:items-start'>
                <h1 className="text-3xl lg:text-5xl">
                    <TypeIt
                        options={{
                            strings: [
                                "Your Digital Fortress Guarded by Abisentry.",
                            ],
                            speed: 100,
                            waitUntilVisible: true,
                            loop: true,
                            cursor: false,
                        }}
                    />
                </h1>
                <h2 className="text-lg lg:text-xl">We are on quest to reinforce the digital world and guarantee the safety of our clients' priceless assets, and we are fueled by a passion for security and a team of highly skilled experts.</h2>
                <button className='py-5 px-10 bg-[#1565c0] rounded-lg'>Talk to Sales</button>
            </div>
        </div>
        <h1 className='text-[28px] lg:text-8xl text-center font-medium mt-28'>
            Powering <br /> cybersecurity <br /> Intelligence with <br />
            <span className='text-hero_text_color'> Abisentry Unified <br /> Risk Platform</span>
        </h1>
        <h3 className='lg:w-[45%] text-gray-600 text-center lg:text-3xl font-semibold mt-24'>
            Understands the threat actors targeting your organization and optimizes your defenses against them. With intelligence at its core, Abisentry's cybersecurity platform effectively prevents breaches, fraud and other cyber threats
        </h3>

        {/* Services Section */}
        <ServicesComponent />

        {/* Expert section */}
        <div className='flex justify-center items-center gap-10 py-10 border-y-foreground/30 border-t-2 w-full flex-col'>
            <div className='lg:w-[80%]'>
                <h1 className='text-5xl font-medium'>Cybersecurity expertise that speaks volumes</h1>
            </div>
            <div className='flex justify-center items-start gap-2 flex-col lg:w-[80%]'>
                <h1 className='text-2xl font-medium'>Full-featured solutions in action</h1>
                <p className='font-medium text-lg'>Positioned highest for our ability to innovate, mentioned as a proven growth leader and the furthest for completeness of vision cybersecurity company by top analytical agencies, Abisentry Unified Risk Platform is recognized to be one of the most feature-rich cyber protection platforms covering three major IS tracks – cybersecurity, fraud prevention, and brand protection.</p>
            </div>
            <div className='flex justify-center items-start gap-2 flex-col lg:w-[80%]'>
                <h1 className='text-2xl font-medium'>Focus on advanced cyber threats</h1>
                <p className='font-medium text-lg'>Weaponized by comprehensive and continuously updated intelligence sources, armed with their exceptional in-the-field experience, and taking advantage of the global partner network, our teams are capable of detecting, preventing, and disrupting the most sophisticated cyber threats as well as identifying and taking down threat actors.</p>
            </div>
            <div className='flex justify-center items-start gap-2 flex-col lg:w-[80%]'>
                <h1 className='text-2xl font-medium'>Researching cyberspace non-stop</h1>
                <p className='font-medium text-lg'>Abisentry team is a roster of talent, and our IS professionals, cybersecurity experts, and analysts became an inexhaustible source of cybersecurity insights. They regularly share it by releasing industry-leading reports, writing technical blogs, and hosting webinars. Group-IB often acts as a cybersecurity awareness evangelist creating professional courses for IS specialists and investing in cybersecurity research centers all over the world.</p>
            </div>
        </div>

    </div>
}

export default HomePage