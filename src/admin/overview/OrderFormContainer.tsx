// Import necessary libraries and components
import React, { FunctionComponent, useState, useCallback, useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu";
import PortalPopup from "./PortalPopup";


// Define the functional component
const OrderFormContainer: FunctionComponent = () => {
  // State variables
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Callback functions
  const openDropdownMenu = useCallback(() => {
    setDropdownMenuOpen(true);
  }, []);

  const closeDropdownMenu = useCallback(() => {
    setDropdownMenuOpen(false);
  }, []);

  // Handle container click
  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Check if the click originated from the image inside the specified section
    const isImageClick = (event.target as HTMLElement).tagName === 'IMG';

    if (!isImageClick) {
      // Close other open containers
      const openContainers = document.querySelectorAll('.order-form-container.bg-lavender');
      openContainers.forEach(container => {
        container.classList.remove('bg-lavender');
      });
        // Open/Close the current container
        setClicked(!isClicked);
        if (!isClicked) {
          openDropdownMenu();
        } else {
          closeDropdownMenu();
        }
  
        console.log("OrderFormContainer clicked!");
      } else {
        // Execute the onClick handler for the IMG
        openDropdownMenu();
      }
    };
  
    // Handle message button click
    const handleMessageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      event.stopPropagation();
      // Add your logic for the message button click here
      console.log("Message button clicked!");
    };
  
    // Add an event listener to handle clicks outside the container
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (isClicked && containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setClicked(false);
          closeDropdownMenu();
        }
      };
  
      document.addEventListener("click", handleClickOutside);
  
      // Cleanup the event listener on component unmount
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isClicked, closeDropdownMenu]);
  

  return (
    <div
      ref={containerRef}
      className={`rounded-xl box-border w-[400px] flex flex-col items-start justify-center p-3 gap-[12px] text-right text-base text-black font-body-text-normal-16 border-[1px] border-solid border-grey-200 cursor-pointer ${
        isClicked ? "bg-purple-500" : ""
      } order-form-container`}
      onClick={handleContainerClick}
    >
      <div className="self-stretch flex flex-row items-center justify-between"
      >
        <div className="w-[178px] flex flex-row items-start justify-between">
          <div className="relative tracking-[0.15px] leading-[140%]">
            Order ID:
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative tracking-[0.15px] leading-[140%] font-medium">
              #234678
            </div>
          </div>
        </div>
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0 cursor-pointer"

          alt=""
          src="/group-1.svg"
          onClick={openDropdownMenu}
        />
      </div>
      <div className="self-stretch relative box-border h-0.5 opacity-[0.64] border-t-[2px] border-solid border-gray1-200" />
      <div className="flex flex-row items-center justify-start gap-[24px] text-left text-xs text-red">
        <div className="flex flex-col items-center justify-start">
          <div className="relative rounded-[50%] bg-red w-2.5 h-2.5" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative box-border w-px h-[61px] border-r-[1px] border-dashed border-red" />
            <div className="relative box-border w-px h-12 border-r-[1px] border-dashed border-green-2" />
          </div>
          <div className="relative rounded-[50%] box-border w-2.5 h-2.5 border-[2px] border-solid border-green-2" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[19px] uppercase font-medium">
              SENDER
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px] text-base text-black">
              <div className="relative leading-[19px] font-medium">
                Adebisi Olufemi
              </div>
              <div className="relative text-sm leading-[19px]">
                {`32,Rasaq-Eletu, Osapa-London `}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-green-2">
            <div className="relative leading-[19px] uppercase font-medium">
              RECEIVER
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px] text-base text-black">
              <div className="relative leading-[19px] font-medium">
                Adeola Papa
              </div>
              <div className="relative text-sm leading-[19px]">
                {`32,Rasaq-Eletu, Osapa-London `}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch relative box-border h-0.5 opacity-[0.64] border-t-[2px] border-solid border-gray1-200" />
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative rounded-[50%] w-[50px] h-[50px] object-cover"
            alt=""
            src="/ellipse-6@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative tracking-[0.15px] leading-[140%] font-semibold">
              Daniel Olu
            </div>
            <div className="relative text-sm tracking-[0.15px] leading-[140%] font-light text-grey-500">
              Client
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-lavender flex flex-row items-center justify-start py-2 px-[18px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src="/message.svg"
            onClick={handleMessageClick}
          />
        </div>
      </div>
      {isDropdownMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeDropdownMenu}
        >
           <DropdownMenu />
        </PortalPopup>
      )}
    </div>
  );
};

export default OrderFormContainer;
