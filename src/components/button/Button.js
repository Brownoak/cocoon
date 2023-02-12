


const Button =(props)=>{
    return(
        <div>
            <button className={` mr-5  flex   md: bg-main py-2 w-36  text-xm gap-6 items-center justify-center  font-bold  text-white hover:ring-gray-500 rounded-2xl r block lg:visible `}>{props.title}
            </button>        
        </div>
    )
}

export default Button