import * as React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorText } from "../../../commons";
import axios, { AxiosError } from "axios";
import { Form, Input } from "antd";
//import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

const Admin = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};
// const googleMapsApiKey: string = process.env
//   .REACT_APP_GOOGLE_MAPS_API_KEY as string;
// const libraries: any = ["drawing", "places"];

function AdminSignUpPage(props) {
    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey,
    //     libraries,
    //   });
      const navigate = useNavigate();
      const [error, setError] = useState("");
      const [form] = Form.useForm();
    
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      
      const loginPage = () => {
        navigate("/login");
      };
    
      const saveUser = async () => {
        Admin.firstName = firstName;
        Admin.lastName = lastName;
        Admin.email = email;
        Admin.password = password;
        Admin.confirmPassword = confirmPassword;
        Admin.phoneNumber = phoneNumber;
        
    
        setError("");
    
        try {
          const response = await axios.post(
            "http://localhost:8123/api/v1/admin/signup",
            Admin
          );
    
          console.log(response.data);
          alert("Email verification has been sent to "+email+".")
    
          // Rederict to login page on successful signup
          loginPage();
        } catch (err) {
          if (err && err instanceof AxiosError)
            setError(err.response?.data.responseMessage);
          else if (err && err instanceof Error) setError(err.message);
    
          console.log("Error: ", err);
        }
      };
  return (
    <div className="bg-emerald-200 pr-12 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.67] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
          <div className="shadow-lg bg-white flex flex-col w-full my-auto px-11 py-12 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="items-stretch self-center flex gap-1.5">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-green-500 text-xl font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                Books<span className="text-green-500">Ville</span>
              </div>
            </div>
            <div className="text-gray-900 text-2xl font-bold leading-8 self-center whitespace-nowrap mt-2.5">
              Create an Account
            </div>
            <Form
             form={form}
             name="signup"
             scrollToFirstError
             onFinish={saveUser}
             className="md:w-full md:flex md:flex-col md:items-stretch"
             autoComplete="off"
            >
              
            <div className="mt-7">
            <ErrorText className="text-left ">{error}</ErrorText>
             <label className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-10 max-md:max-w-full"
             htmlFor="grid-first-name">
             First Name
             </label>
            
            <Form.Item
            name="firstName"
            // className="w-full px-3 mb-1"
            rules={[
              {
                required: true,
                message: "Please input your First name!",
              },
            ]}           
            >
             <Input
               className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-3,#828282)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
               id="grid-first-name"
               onChange={(e) => setFirstName(e.target.value)}
             />
            </Form.Item>
           </div>

            <div>
             <label 
              className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-2 max-md:max-w-full"
             htmlFor="grid-last-name">
              Last Name
             </label>
            
            <Form.Item
              name="lastName"
              // className="w-full px-3 mb-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Last name!",
                },
              ]}           
            >
            <Input
               className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-3,#828282)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
               id="grid-last-name"
               onChange={(e) => setLastName(e.target.value)}
            />
            </Form.Item>
            </div>

            
            <div>
                <label 
                className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-2 max-md:max-w-full"
                htmlFor="grid-phone">
                Phone Number
                </label>
            <Form.Item>
              <Input
                className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-3,#828282)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
                id="grid-phone"
                type="tel"
                placeholder="+234********"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Item>      
            </div>

           <div>
             <label 
             className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-2 max-md:max-w-full"
             htmlFor="grid-email">
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
              className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-3,#828282)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
              id="grid-email"
              onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Item>
            
            <label 
            className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-2 max-md:max-w-full"
            htmlFor="grid-password">
            Password
            </label>
            
            <Form.Item 
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                () => ({
                  validator(_, value) {
                    if ((value).toString().length >= 4) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "Password is too short!"
                      )
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
              className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-3,#828282)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
              onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <label 
              className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-2 max-md:max-w-full"
              htmlFor="grid-confirm-password"
            >
              Confirm Password
            </label>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
           <Input.Password
              className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-3,#828282)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
              onChange={(e) => setConfirmPassword(e.target.value)}
           />
            </Form.Item>
            </div>


            <div className="self-stretch flex items-stretch justify-between gap-3.5 mt-6 max-md:max-w-full max-md:flex-wrap">
              <div className="bg-gray-200 self-center w-[222px] shrink-0 h-px my-auto" />
              <div className="text-gray-400 text-sm leading-5">OR</div>
              <div className="bg-gray-200 self-center w-[203px] shrink-0 h-0.5 my-auto" />
            </div>
            <div className="justify-center items-center self-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-white flex flex-col mt-3 px-16 py-3 rounded-lg border-solid max-md:max-w-full max-md:px-5">
              <div className="flex items-stretch gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6543185ef01e9b5ba287f00eb8c3b1c3ef4bdb5963a72a6e3b4a60a29e0d57?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-gray-400 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                  Sign in with Google
                </div>
              </div>
            </div>


            <div className="items-stretch self-stretch flex flex-col my-4 max-md:max-w-full">  
            <button
              className="text-gray-50 text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-green-500 self-stretch mt-1.5 px-16 py-3 rounded-xl max-md:max-w-full max-md:px-5"
              type="button"
              onClick={saveUser}
            >
             SIGNUP
            </button>     
            </div>

            </Form>


            <div className="text-green-500 text-sm leading-5 underline self-center whitespace-nowrap mt-6">
              <span className="font-semibold underline text-green-500">Already have an account ?</span>
              <a
                href="/login"
                className="font-semibold text-green-500 underline"
              >
                Log in here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminSignUpPage;