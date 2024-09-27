import React, { useState } from "react";
import AdminHeader from "./AdminHeader";

interface FrameProps {
  onClose: () => void;
}

function AdminDriver() {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [containerColor, setContainerColor] = useState("#FFFFFF");
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isViolet, setIsViolet] = useState(false);
  const [isSomeIdentifier, setIsSomeIdentifier] = useState(false);

  const handleIconClick = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  const handleMessageIconClick = () => {};

  const handleContainerClick = () => {
    handleDivClick("DivComponent");
  };

  const handleDivClick = (component: any) => {
    if (selectedComponent === component) {
      // If the clicked component is already selected, unselect it
      setSelectedComponent(null);
    } else {
      // Otherwise, select the clicked component
      setSelectedComponent(component);

      // Update state variables based on the clicked component
      if (component === "ImageComponent") {
        setIsViolet(true);
        setIsSomeIdentifier(false);
      } else if (component === "SecondComponent") {
        setIsViolet(false);
        setIsSomeIdentifier(true);
      } else {
        // Reset state variables for other components
        setIsViolet(false);
        setIsSomeIdentifier(false);
      }
    }
  };

  const handleFlagClick = () => {
    console.log("Disabled");
  };

  const handleDeleteClick = () => {
    console.log("Delete");
  };

  return (
    <div>
      <AdminHeader />


            <div className="flex flex-col items-stretch  w-[33%] h-[25%] max-md:w-full max-md:ml-0">
              <a
                href="#"
                className="border border-[color:var(--grey-200,#EAECF0)] relative flex grow flex-col mx-auto px-3 py-3 rounded-xl border-solid"
                onClick={handleContainerClick} // Add this line
              >
                  {isPopUpVisible && (
                    <div className="left-25 mt-12  absolute z-40 top-0 right-2 rounded border h-[6rem] w-[6rem] border-solid bg-white">
                      <div className=" flex gap-2 py-2 border-b-2"
                        
                        onClick={handleFlagClick}
                        style={{ cursor: "pointer" }}>

                        <button>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24711d92-68bf-46c7-85e4-db6a74cbb537?apiKey=60a62d801c914c1da2fccd5d795e8655&"
                          />
                        </button>

                        <div>
                          Flag
                        </div>
                      </div>

                      <div className="flex gap-2 mt-3 mb-2"
                       style={{ cursor: "pointer" }}
                       onClick={handleDeleteClick}>
                     
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4367e1-5e2f-4ed3-a8d1-42323f780d6f?apiKey=60a62d801c914c1da2fccd5d795e8655&"
                          />
                      

                        <div
                          className="text-rose-500"
                        >
                          Delete
                        </div>

                      </div>

                    </div>
                  )}

                  <div className="justify-between  self-stretch flex w-full gap-5 items-start">
                    <div className="items-stretch  flex gap-4">
                      <div className="text-black  text-right text-base leading-6 tracking-normal">
                        Driver ID:
                      </div>

                      <div className="text-black text-right text-size font-med leading-6 tracking-normal whitespace-nowrap">
                        #234678
                      </div>
                    </div>

                    <div className="items-center self-stretch flex justify-between gap-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/104de622-8aa4-47f6-be2f-23b7e0975d61?apiKey=60a62d801c914c1da2fccd5d795e8655&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                        onClick={handleIconClick}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className="opacity-[0.64]  bg-black bg-opacity-20 self-stretch shrink-0 h-0.5 mt-2.5" />

                  <div className="justify-between items-stretch flex w-[348px] max-w-full gap-5 mt-4 self-start max-md:ml-2.5">
                    <div className="items-stretch flex grow basis-[0%] flex-col">
                      <div className="text-white-500 text-sm leading-5 tracking-normal uppercase whitespace-nowrap">
                        First Name:
                      </div>

                      <div className="text-black-500 text-base font-semibold leading-6 tracking-normal whitespace-nowrap mt-2.5">
                        Daniel
                      </div>

                      <div className="text-white-500 text-sm leading-5 tracking-normal uppercase whitespace-nowrap mt-3">
                        gender
                      </div>

                      <div className="text-black text-base font-semibold leading-6 tracking-normal whitespace-wrap mt-2.5">
                        Male
                      </div>

                      <div className="text-white-500 text-sm leading-5 tracking-normal uppercase whitespace-nowrap mt-3">
                        License Number:
                      </div>

                      <div className="text-black text-base font-semibold leading-6 tracking-normal whitespace-nowrap mt-2.5">
                        JDK2783
                      </div>
                    </div>

                    <div className="items-stretch relative flex grow basis-[0%] pr-0 flex-col">
                      <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase whitespace-nowrap">
                        Last Name:
                      </div>

                      <div className="text-black text-base font-semibold leading-6 tracking-normal whitespace-nowrap mt-2.5">
                        Ajah
                      </div>

                      <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase whitespace-nowrap mt-3">
                        Phone number:
                      </div>

                      <div className="text-black text-base font-semibold leading-6 tracking-normal whitespace-nowrap mt-2.5">
                        07024357891
                      </div>

                      <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase whitespace-nowrap mt-3">
                        Expiry Date:
                      </div>

                      <div className="text-black text-base font-semibold leading-6 tracking-normal whitespace-nowrap mt-2.5">
                        1/9/2024
                      </div>
                    </div>
                  </div>

                  <div className="opacity-[0.64] bg-black bg-opacity-20 self-stretch shrink-0 h-0.5 mt-2.5" />

                  <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-3">
                    <div className="items-stretch flex justify-between gap-3">
                      <img
                        loading="lazy"
                        srcSet="https://bitly.ws/34kZA"
                        className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                      />
                      <div className="text-black text-right text-base font-semibold leading-6 tracking-normal self-center grow whitespace-nowrap my-auto">
                        Daniel Olu
                      </div>
                    </div>
                    <div className="items-center bg-violet-100 self-center flex aspect-[1.625] flex-col my-auto px-5 py-2 rounded-xl">
                      <button
                        onClick={handleMessageIconClick}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ae8eb3-26c9-4f64-8ac9-f47efbe84379?apiKey=60a62d801c914c1da2fccd5d795e8655&"
                          className="aspect-square object-contain object-center w-4 overflow-hidden"
                        />
                      </button>
                    </div>
                  </div>
                
              </a>
            </div>
       
      </div>
   
  );
}

export default AdminDriver;
