import * as React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorText } from "../commons";
import axios, { AxiosError } from "axios";
import { useSignIn } from "react-auth-kit";
import { Form, Input } from "antd";

const CustomerLogin = {
    email: "",
    password: "",
  };

function LoginPage(props) {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const signIn = useSignIn();
    const [form] = Form.useForm();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const homePage = () => {
        navigate("/home");
      };

      const loginUser = async () => {
        CustomerLogin.email = email;
        CustomerLogin.password = password;
    
        setError("");
    
        try {
          const response = await axios.post(
            "http://localhost:8085/api/v1/users/login",
            CustomerLogin
          );
    
          const data = response.data.responseData.accessToken;
    
          localStorage.setItem("accessToken", data);
    
          console.log("Access Token:  " + data);
    
          signIn({
            token: response.data.responseData.accessToken,
            refreshToken: response.data.responseData.refreshToken,
            expiresIn: 30, // minutes
            tokenType: "Bearer",
            authState: { email: email },
          });
    
          localStorage.setItem("email", email);
    
          console.log(response.data);
          // Rederict to home page on successful login
          homePage();
        } catch (err) {
          if (err && err instanceof AxiosError) {
            if (err.response?.data.responseMessage === "Not verified!") {
              reSendLink();
            }
            setError(err.response?.data.responseMessage);
          } else if (err && err instanceof Error) setError(err.message);
    
          console.log("Error: ", err);
        }
      };

      const reSendLink = async () => {
        setError("");
    
        try {
          const response = await axios.get(
            "http://localhost:8085/api/v1/registration/re_verification?email=" +
              email
          );
    
          console.log(response.data);
          alert("Verification link sent to your email.");
          // Rederict to home page on successful login
          // closeModal2();
        } catch (err) {
          if (err && err instanceof AxiosError)
            setError(err.response?.data.responseMessage);
          else if (err && err instanceof Error) setError(err.message);
    
          console.log("Error: ", err);
        }
      };

  return (
    <div className="bg-emerald-200 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="shadow-lg bg-white flex w-[564px] max-w-full flex-col mt-32 mb-40 px-11 py-9 rounded-xl max-md:my-10 max-md:px-5">
        <div className="items-stretch self-center flex gap-1.5">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-green-500 text-xl font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
            <span className="text-black">Books</span>
            <span className="text-green-500">Ville</span>
          </div>
        </div>
        <div className="text-gray-900 text-2xl font-bold leading-8 self-center whitespace-nowrap mt-2.5">
          Welcome back to BooksVille
        </div>
        <Form
              form={form}
              name="signup"
              scrollToFirstError
              onFinish={loginUser}
              className="w-full max-w-lg"
            >

        
        <div className="mt-10">
         <ErrorText className="text-left ">{error}</ErrorText>
        </div>

        <div>
        <label
         className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-2 max-md:max-w-full"
         htmlFor="grid-text"
            
        >
         Name
            
        </label>
            <Form.Item
                  name="name"
                  // className="w-full px-3 mb-1"
                  rules={[
                    {
                      type: "text",
                      message: "The input is not a valid name!",
                    },
                    {
                      required: true,
                      message: "Please input a valid name !",
                    },
                  ]}
                >
                <Input 
                   className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Grey-600,#475467)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
                />
                </Form.Item>



              <label
              className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-2 max-md:max-w-full"
               htmlFor="grid-email"
              >
               Email Address
              </label>

                <Form.Item
                  name="email"
                  // className="w-full px-3 mb-1"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                <Input 
                    className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Grey-600,#475467)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
                    id="grid-email"
                    onChange={(e) => setEmail(e.target.value)}                    
                    />
                </Form.Item>

            <label
              className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-2 max-md:max-w-full"
              htmlFor="grid-password"
            >
             Password
            </label>

            <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    className="py-3 w-full px-3 "
                    id="grid-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>


        {/* <div className="items-stretch self-stretch rounded border border-[color:var(--Grey-600,#475467)] bg-white flex justify-between gap-5 mt-1 pl-3 pr-6 py-3 border-solid max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-neutral-500 text-base leading-6">**********</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed196e9186931c4485a50cf10554a45ea74bd46d3f248fedf1e3b4e600b17c37?"
            className="aspect-[1.14] object-contain object-center w-4 fill-green-500 overflow-hidden shrink-0 max-w-full mt-2.5 self-start"
          />
        </div> */}

     </div>
       <a
        href="/reset_password"
        className="text-green-500 text-base leading-6 tracking-normal underline self-stretch mt-4 max-md:max-w-full"
       >
        Forgot Password
       </a>

        <div className="self-stretch flex items-stretch justify-between gap-3.5 mt-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="bg-gray-200 self-center w-[221px] shrink-0 h-px my-auto" />
          <div className="text-gray-400 text-sm leading-5">OR</div>
          <div className="bg-gray-200 self-center w-[203px] shrink-0 h-0.5 my-auto" />
        </div>
        <div className="justify-center items-center self-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-white flex flex-col mt-3 px-16 py-3 rounded-lg border-solid max-md:max-w-full max-md:px-5">
          <div className="flex items-stretch gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e983b13740a4f6b8c54887c249a551ecbdf922916371d1498c09f3fa03f1f9b1?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-400 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
              Sign in with Google
            </div>
          </div>
        </div>

        <div className=" text-sm leading-5  self-center  mt-5 mb-5 md:flex md:flex-col items-stretch">
         <button className="text-gray-50 text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-green-500 self-stretch mt-1.5 px-16 py-3 rounded-xl max-md:max-w-full max-md:px-5"
         type="button"
         onClick={loginUser}
         >
            LOGIN
         </button>        
        </div>
        </Form>

        <div className="text-green-500 text-sm leading-5 underline self-center whitespace-nowrap mt-6">
          <span className=" text-gray-400">Don’t have an account ? </span>
          <a 
          href="/signup"
          className="font-semibold text-green-500"
          >
          <span >Sign Up here</span>
          </a>
         
        </div>
      </div>
    </div>
  );
}
export default LoginPage;