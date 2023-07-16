const miniComp = (props) => {


    return (
        <div onClick={(e) => { document.querySelector('.underline').style.left = e.target.id + 'px' }} id={props.id} className="compLink flex flex-col gap-4 py-6 w-[80px] items-center cursor-pointer text-[.9em] hover:text-gray-600 text-center">
            <img onClick={(e) => { document.querySelector('.underline').style.left = e.target.id + 'px' }} id={props.id} src={props.icon} alt="icon" width={25} />
            <p onClick={(e) => { document.querySelector('.underline').style.left = e.target.id + 'px' }} id={props.id}>{props.title}</p>
        </div>
    )
}

export default miniComp;