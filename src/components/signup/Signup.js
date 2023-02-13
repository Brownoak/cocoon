import cover_img from '../../assets/images/login.jpg'
import Button from '../button/Button'
import { useState } from 'react';
import ProductDetail from "../ProductDetail"
import { Link, useNavigate } from 'react-router-dom';

const Signup= ()=>{
    const [firstName, setFname] = useState("");
    const [lastName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
     const navigate = useNavigate
    const [error,setError]=useState(false)

    const handleSubmit = (e) => {
         e.preventDefault();
        console.log(firstName, lastName, email, password);
        fetch("http://localhost:5000/users/signup", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.status == "sucess" && setError(false)) {

              // alert("Registration Successful");
              navigate('/details', {replace:true})

            } else if(data.status == "error")  {
              // alert(data.message);

              if(firstName.length==0||lastName.length==0||email.length==0|| password.length<=5){
                setError(true)
                
            }
            
            }
          });

         
       }

       
       


    return(
        <div className="py-24 bg-bgMain md:flex flex-row gap-2 lg:gap-24">
            

            {/* <div className=" text-gray-700 w-[90%] md:w-[50%] h-[80vh]   items-center gap-4  " 
                style={{backgroundImage: `linear-gradient(rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%), url(${cover_img})`
            }}>

            </div> */}
              <img src={cover_img} className=' hidden  rounded-3xl background-blend-lighten md:block w-[50%] h-96 mt-10  lg:rounded-tr-full '></img>


            <div className='py-10 px-12  flex flex-col'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col  items-center'>
                        <h3 className='text-2xl font-semibold mb-4'>WelCome! Create Your Account</h3>
                        <p className='text-sm mb-12'>add your personal details below</p>
                    </div>

                    <div className='flex flex-col items-center  m-auto'>
                    <input
                        type='text'
                        placeholder='First Name'
                        className='text-center w-full text-black my-4 bg-transparent py-2 border-b border-black focus:outline-none'
                        onChange={(e) => setFname(e.target.value)}>

                        </input>

                        { error && firstName.length<=0 ? <p className='text-red-500'>first name required</p>:""}

                        <input
                        type='text'
                        placeholder='Last Name'
                        className='text-center w-full text-black my-4 bg-transparent py-2 border-b border-black focus:outline-none'
                        onChange={(e) => setLname(e.target.value)}>
                        
                            
                        </input>
                        { error && lastName.length<=0 ? <p className={`text-red-500 `}>last name required</p>:""}

                        <input
                        type='email'
                        placeholder='Email'
                        className='text-center w-full text-black my-4 bg-transparent py-2 border-b border-black focus:outline-none'
                        onChange={(e) => setEmail(e.target.value)}>
                            
                        </input>
                        { error && email.length<=0 ? <p className='text-red-500'>email required</p>:""}
                        
                        <input
                        type='password'
                        placeholder='Password'
                        className=' text-center w-full text-black my-4  bg-transparent py-2 border-b border-black focus:outline-none md:border-b'
                        onChange={(e) => setPassword(e.target.value)}>
                            
                        </input>
                        { error && password.length<=5 ? <p className='text-red-500'>password must be at least 6 characters</p>:""}

                        <div className='py-4'>
                            <Button title= "Signup" type="submit"/>
                        </div>

                        <div className='w-full flex flex-col items-center'>
                            <p className='text-sm font-normal text-black'>Don't have an accont? <span className='font-semibold underline underline-offset-2 cursor-pointer'> Sign Up for free</span></p>
                        </div>
                    </div>
                </form>
                
            </div>
            
        </div>

    )

}

export default Signup