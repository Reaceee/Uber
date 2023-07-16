import React from 'react'
import earn from '../assets/images/Earn-filled.svg'
import eat from '../assets/images/restaurant-outlined.svg'
import ride from '../assets/images/car-front-outlined.svg'
import MiniComp from '../components/miniComp.jsx'
import earnerBg from '../assets/images/Bg1.webp'
import eatsBg from '../assets/images/eatsBg.png'
import rideBg from '../assets/images/rideBg.webp'
import HeroBody from '../components/HeroBody.jsx'
import business from '../assets/images/Bg2.jpg'
import Focused from '../components/focused.jsx'

const Home = () => {
    
    const underline = React.useRef()
    const [HeroBg, SetHeroBg] = React.useState(earnerBg)
    const [heroTitle, SetHeroTitle] = React.useState('Get in the driver’s seat and get paid')
    const [heroBody, SetHeroBody] = React.useState('Drive on the platform with the largest network of active riders.')
    const [heroLink, SetHeroLink] = React.useState('Learn more about driving and delivering')
    const [heroBtn, SetHeroBtn] = React.useState('Sign up to drive')
    const [heroLast, SetHeroLast] = React.useState(false)

    function changeHero() {
        if (underline.current.style.left === '28px') {
            SetHeroBg(earnerBg)
            SetHeroLast(false)
            SetHeroTitle('Get in the driver’s seat and get paid')
            SetHeroBody('Drive on the platform with the largest network of active riders.')
            SetHeroLink('Learn more about driving and delivering')
            SetHeroBtn('Sign up to drive')
        }

        else if (underline.current.style.left === '172px') {
            SetHeroBg(eatsBg)
            SetHeroLast(false)
            SetHeroTitle('Discover delicious eats')
            SetHeroBody('Order delivery from restaurants you love.')
            SetHeroLink('Own a restaurant? Partner with Uber Eats')
            SetHeroBtn('Order now')

        }

        else if (underline.current.style.left === '316px') {
            SetHeroBg(rideBg)
            SetHeroLast(true)
            SetHeroTitle('Request a ride now')
            SetHeroBody('Order delivery from restaurants you love.')
            SetHeroLink('Own a restaurant? Partner with Uber Eats')
            SetHeroBtn('Request now')
        }

    }

    return (
        <>

            <div style={{ backgroundImage: `url(${HeroBg})` }} onClick={changeHero} className="duration-[100ms] max-w-full overflow-hidden md:p-16 bg-cover bg-no-repeat bg-center h-max p-0 bg-gray-200 w-full" >
                <div className="bg-white md:w-min w-full ">
                    <div className="w-full px-16 flex justify-center bg-[#eeeeee60] border-b-[1px] border-b-solid border-b-[#EEEEEE]">
                        <div className="Comps gap-16 flex relative px-7">
                            <div ref={underline} className="underline -mb-[1px]" ></div>
                            <MiniComp id='28' icon={earn} title="Drive or deliver" />
                            <MiniComp id='172' icon={eat} title="Eat" />
                            <MiniComp id='316' icon={ride} title="Ride" />
                        </div>
                    </div>


                    <HeroBody title={heroTitle} body={heroBody} link={heroLink} btn={heroBtn} last={heroLast} />
                </div>
            </div>

            <div style={{ backgroundImage: `url(${HeroBg})` }} onClick={changeHero} className="duration-[100ms] md:hidden bg-cover bg-no-repeat bg-center h-[360px] bg-gray-200 w-full" ></div>
            <div style={{ backgroundImage: `url(${business})` }} className="w-full px-5 py-12 h-max bg-[contain 100%] bg-center bg-no-repeat" >
                <p className="title pt-5 text-3xl font-bold font-plus leading-snug">
                    Uber for Business
                </p>
                <p className="bod py-4 w-[90%] font-plus ">
                    Transform the way your company moves and feeds its people.
                </p>
                <button style={{ letterSpacing: '.5px' }} className="w-max bg-black py-3 mt-4 mb-7 cursor-pointer hover:bg-[#3a3a3a] duration-300 px-4 rounded-md  font-semibold text-white font-plus text-sm">See how</button>
            </div>

            <Focused />

        </>
    )
}
export default Home;