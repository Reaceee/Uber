


const Body = (props) => {
    const sendIcon = <svg className=" hover:opacity-80 opacity-40 duration-75" aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 24 24" tabindex="0" role="button" aria-label="Locate me" class="pe-location-fetch css-ZSBbY"><path d="M10.5 13.5L.5 11 21 3l-8 20.5-2.5-10z"></path></svg>
    return (
        <div className="w-full flex flex-col px-5 md:px-16 pb-10">
            <p style={{lineHeight: '1.3em'}} className="title md:pt-12 pt-5 md:text-5xl text-4xl font-bold font-plus">
                {props.title}
            </p>

   {props.last ?
        <div className="relative mt-10 flex flex-col justify-center gap-5 my-5 ">
        <div className="absolute ml-4 h-[65%] flex flex-col items-center gap-1">
            <div className="min-h-[8px] min-w-[8px] aspect-square rounded-full border-[1px] border-solid border-black  "></div>
            <div className="w-[1px] h-full bg-black"></div>
            <div className="w-2 h-2 border-[1px] border-solid border-black  "></div>
        </div>
        <div className="flex bg-[#00000010] items-center pr-4"><input type="text" className="font-plus bg-transparent w-full h-12 px-10" placeholder="Enter pickup location" /> {sendIcon}</div>
        <input type="text" className="font-plus w-full bg-[#00000010] h-12 px-10" placeholder="Enter destination" />
    </div>
   : []}

            <p className="bod py-6 w-[90%] font-plus ">
                {props.body}
            </p>



            <div className="flex md:flex-row flex-col md:gap-6 gap-3">
                <button style={{ letterSpacing: '.5px' }} className="md:w-max outline-1 text-center w-full bg-black py-3  md:mt-4 mb-3 md:mb-7 cursor-pointer hover:bg-[#3a3a3a]  duration-300 px-4 rounded-md  font-semibold text-white font-plus text-md">{props.btn}</button>
                {props.last ? 
                <button style={{ letterSpacing: '.5px' }} className="md:w-max outline-1 text-center w-full bg-[#00000010] py-3  md:mt-4 mb-3 md:mb-7 cursor-pointer hover:bg-[#00000025] duration-300 px-4 rounded-md  font-semibold text-black font-plus text-md">Schedule for later</button> : 
                []}
            </div>
            <a href="#" className="learnMore font-plus">{props.link}</a>
        </div>
    )
}

export default Body;