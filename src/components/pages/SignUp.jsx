import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SignUp = () => {

    const navigate=useNavigate()
const [userEmail,setUserEmail]=useState("");

const [otpshow,setOtpshow]=useState(false);
const [userOtp,setUserOtp]=useState("")
const [otp,setOtp]=useState(["1234","5678"])

const handleChange=(e)=>{

    setUserEmail(e.target.value)
    console.log(userEmail);
    
}

const handleSubmit=(e)=>{

    e.preventDefault();

    const data =JSON.parse(localStorage.getItem("userdata")) || []

    data.push(userEmail);

    localStorage.setItem("userdata",JSON.stringify(data))

    setOtpshow(true)

    console.log(data)
    
}

const handleOtp=(e)=>{

    const otpData= otp.find((e)=>e===userOtp)

    if(otpData){
        navigate("/landingpage")
    }

}

 

  return (
    <>
    <div className="h-screen bg-amber-100">
        <div>
            <form>

            <input type="email" placeholder="Enter Email" onChange={handleChange}/>
            <button onClick={handleSubmit} className="bg-blue-400 w-25 p-1 ">Next</button>
            </form> 
        </div>

        {
            otpshow && <div>
            <input type="number" maxLength={4} placeholder="0450" onChange={(e)=>setUserOtp(e.target.value)} />
            <button onClick={handleOtp}>Signin</button>
        </div>
        }

        

    </div>

    
    </>
  )
}

export default SignUp