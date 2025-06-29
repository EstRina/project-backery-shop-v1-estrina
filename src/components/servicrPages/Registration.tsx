import SignUpForm from "../templates/SignUpForm.tsx";
import type {LoginData, SignupData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();
    const signUpSubmit = (data:SignupData) => {
        console.log(JSON.stringify(data))
    }
    const signUpWithEmail = async (data: SignupData) => {
        const userEmailPass:LoginData = {
            email:data.email,
            password:data.password
        }
        try {
            await registerWithEmailAndPassword(userEmailPass)
        navigate('/login')
        } catch (e){
            console.error(e);
        }
    }
    return (
        <div>
            <SignUpForm submitFunc={signUpSubmit}/>
        </div>
    );
};

export default Registration;