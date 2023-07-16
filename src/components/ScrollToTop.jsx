import arrowUp from '../assets/images/Arrow.svg'

const ScrollToTop = () => {
    const scrolTop = () => {
        window.scrollTo({top: 0, behavior:'smooth'})
    }
    return (
        <div onClick={scrolTop} className="scrollBtn w-10 bg-white shadow-lg aspect-square flex items-center fixed opacity-50 hover:opacity-100 justify-center rounded-full bottom-10 right-10 ">
            <img src={arrowUp} onClick={scrolTop} draggable="false" className='p-1 -rotate-90 hover:p-2 duration-100 aspect-square' alt="Scroll to Top" width={30} height={23} />

        </div>
    )
}

export default ScrollToTop;