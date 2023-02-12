import cover_img from '../../assets/images/login.jpg'
import Button from '../button/Button'


const Login= ()=>{
    return(
        <div className="py-24 bg-bgMain flex flex-col md:flex-row gap-6">
            

            <div className=" text-gray-700 w-[90%] md:w-[50%] h-[80vh]   items-center gap-4  " 
                style={{backgroundImage: `linear-gradient(rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%), url(${cover_img})`
            }}>
                {/* <img src={cover_img} className='w-1/2 w-[90%] background-blend-lighten md:w-[87%]  h-[99%] object-cover '></img> */}
            </div>


            <div className='py-10 px-16  flex flex-col'>
                <div>
                    <h3 className='text-2xl font-semibold mb-4'>Log in to your account</h3>
                    <p className='text-sm mb-12'>Welcome back! please enter your details.</p>
                </div>

                <div>
                    <input
                    type='email'
                    placeholder='Email'
                    className='w-full text-black my-4 bg-transparent py-2 border-b border-black focus:outline-none'>
                        
                    </input>

                    <input
                    type='password'
                    placeholder='Password'
                    className='w-full text-black my-4  bg-transparent py-2 border-b border-black focus:outline-none'>
                        
                    </input>
                    <div className='py-4'>
                        <Button title= "Login"/>
                    </div>

                    <div className='w-full flex flex-col items-center'>
                        <p className='text-sm font-normal text-black'>Don't have an accont? <span className='font-semibold underline underline-offset-2 cursor-pointer'> Sign Up for free</span></p>
                    </div>
                </div>

                
            </div>
            
        </div>

    )

}

export default Login