import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

const AuthForm = ({ handleLogin }: any) => {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });
  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignInFormData = (e: any) => {
    setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value });
  };
  const handleSignUpFormData = (e: any) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };

  const sendSignInRequest = () => {
    console.log("send signin request")
    const url = "http://localhost:8081/auth/signin";
    axios
      .post(url, signInFormData)
      .then((response) => {
        if(response.data.status){
          localStorage.setItem("jwt", response.data.jwt);
          processLogIn({
            "jwt":response.data.jwt,
            "isLoggedIn":true
          });
          
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(signInFormData);
  };
  const processLogIn = (userDetails:any)=>{
   handleLogin(userDetails);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Signin</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-purple-700 font-bold text-center">
            FlowTrade
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-center  ">
          <div className="flex flex-col gap-2 items-center justify-center ">
            {location.pathname == "/auth/singup" ? (
              <section>
                <Signup handleSignUpFormData={handleSignUpFormData} />
                <div className="flex items-center justify-center ">
                  <span>Already have an account?</span>
                  <Button
                    variant={"link"}
                    onClick={() => navigate("/auth/singin")}
                  >
                    Signin
                  </Button>
                </div>
              </section>
            ) : (
              <section>
                <Signin handleSignInFormData={handleSignInFormData} />
                <div className="flex items-center justify-center ">
                  <span>Don't have an account?</span>
                  <Button
                    variant={"link"}
                    onClick={() => navigate("/auth/singup")}
                  >
                    Signup
                  </Button>
                </div>
              </section>
            )}
            <DialogClose>
              <Button onClick={() => sendSignInRequest()}>Login</Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthForm;
