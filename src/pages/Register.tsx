import { useState } from "react"
import "./register.css"
import InputComponent from "../components/input";

interface formDataProps {
    firstName: string;
    lastName: string;
    bio: string;
    education: string;
}



export default function Register() {

    const [formData, setFormData] = useState<formDataProps>({
        firstName: "",
        lastName: "",
        bio: "",
        education: ""
    }
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const [step, setStep] = useState<number>(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    
    

    return (
        <div className="register-wrapper">

            {step > 1 && (
                <button 
                onClick={prevStep}
                className="prev">Click to see previous</button>
            )}

            {step === 1 && (
                <Names
                    formData={formData}
                    handleChange={handleChange}
                    nextStep ={nextStep}
                />
            )}

            {
                step === 2 && (
                 <Bio 
                 bio={formData.bio}
                 handleChange={handleChange}
                 nextStep={nextStep}
                 />
                )
            }

            {
                step === 3 && (
                    <Education 
                    education = {formData.education}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    />
                )
            }

            {
                step === 4 && (
                    <Confirm 
                    firstName= {formData.firstName}
                    lastName = {formData.lastName}
                     bio={formData.bio}
                     education={formData.education}
                    //  onSubmit={handleSubmit}
                    />
                )
            }
        </div>
    )
}


function HeaderNames({ title, className }: { title: string, className?: string }) {
    return (
        <h1 className={className}>{title}</h1>
    )
}

// for first and last names

interface nameProps {
    formData: { firstName: string, lastName: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    nextStep: () => void
}

function Names({ formData, handleChange, nextStep }: nameProps) {
    return (
        <div>
            <HeaderNames title="What is your name" />

            <form onSubmit={(e) => {
                e.preventDefault();
                nextStep()
            }}>

                <InputComponent 
                className="name"
                type="text"
                name="firstName"
                placeholder="First Name..."
                value={formData.firstName}
                onChange={handleChange}
                />

                <InputComponent
                className="name"
                type="text"
                name="lastName"
                placeholder="Last Name..."
                value={formData.lastName}
                onChange={handleChange}
                 />

                <button
                className="btn"
                type="submit" 
                >
                    Continue
                </button>
            </form>
        </div>
    )
}

// for bio

interface BioProps{
    bio: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    nextStep: () => void
}

function Bio({bio, handleChange, nextStep}: BioProps){
    return (
        <div>
            <HeaderNames title="Tell us more about yourself" />
            <form onSubmit={(e) => {
                e.preventDefault()
                nextStep()
            }}>

               <InputComponent 
               className="name"
               type="text"
               name="bio"
               value={bio}
               onChange={handleChange}
               />

               <button 
               className="btn"
               type="submit"
               >
                Confirm
               </button>

            </form>
        </div>
    )
}

// for highest form of education

interface education{
    education: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    nextStep: () => void
}

function Education({education, handleChange, nextStep}: education) {
    return(
        <div>
            <HeaderNames title="What is your highest level of Education" />

            <form onSubmit={(e)=> {
                e.preventDefault();
                nextStep()
            }}>

              <InputComponent 
              className="name"
              type="text"
              name="education"
              value={education}
              onChange={handleChange}
              />

              <button
              className="btn"
              >
                Confirm
              </button>
            </form>
        </div>
    )
}

// for confirm component

interface confirmProps {
    firstName: string;
    lastName: string;
    bio: string;
    education: string;
    // onSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
}


function Confirm({firstName, lastName, bio, education}: confirmProps){

    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);


    const handleSubmit = async(e: any) => {
        e.preventDefault();
        setIsLoading(true);

        console.log("submitting form")

        try{
            console.log("within try")

            const response = await fetch('https://api.pluritongues.com/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({firstName, lastName, bio, education})
            })
 
            if(response.status !== 200){
                console.log("Error sending data")
             const errorData = await response.json();
             setError(errorData.message)
            }
             
            const data = await response.json()
            console.log("data: ", data)
            
        } 
        catch {
        setError("An error occured during your application, please try again!" )
        }
        finally{
            setIsLoading(false)
        }

    }

    return(
        <div 
        >
            <HeaderNames title="Confirm Your details" />
             <div>
                <HeaderNames className="small-header" title="What is your name" />
                  {firstName} {lastName}
                <HeaderNames className="small-header" title="Tell us more about you" />
                {bio}
                <HeaderNames className="small-header" title="What is your highest level of education" />
                {education}
                <button 
                onClick={handleSubmit}
                className="btn"
                type="submit"
                >
                   { isLoading ? "Submit" : "processing..."}
                </button>
                <p className="error">{error}</p>
             </div>
        </div>
    )
}