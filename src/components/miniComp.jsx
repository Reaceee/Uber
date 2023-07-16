const miniComp = (props) => {
    return(
        <div id={props.id} className="compLink flex flex-col gap-4 py-6 w-[80px] items-center cursor-pointer text-[.9em] hover:text-gray-600 text-center">
            <img src={props.icon} alt="icon" width={25} />
            <p>{props.title}</p>
        </div>
    )
}

export default miniComp;