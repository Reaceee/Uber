const focusedCard = (props) => {
    return (
        <div className="Card md:w-1/2 w-full flex flex-col gap-5 pb-10">
            <img src={props.img} className="w-full" alt="" />
            <span className="w-max px-5 scale-x-110 font-semibold text-gray-800 text-xl">{props.title}</span>
            <span className="font-['plus_jakarta_sans'] text w-[90%] opacity-80">{props.text}</span>

            <div className="flex gap-5">
                {props.links.map(link => (
                    <div className="learnMore font-plus cursor-pointer text-black text-md">{link}</div>
                ))}
            </div>
        </div>
    )
}

export default focusedCard;