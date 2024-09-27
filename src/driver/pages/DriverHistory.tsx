import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DriverHeader from "../layout/header/DriverHeader";
import CustomMap from "../../components/map/GoogleMap";

const googleMapsApiKey: string = process.env
  .REACT_APP_GOOGLE_MAPS_API_KEY as string;
const center = { lat: 6.6378, lng: 5.92915 };
const embedUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBWAY9ncGFN8U3L2LrqB5u126Gh2k9FqKk&center=${center.lat},${center.lng}&zoom=10`;

function DriverHistory() {
  const [selectedTab, setSelectedTab] = useState<null | string>(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isSomeIdentifier, setIsSomeIdentifier] = useState(false);
  const [orderDetailsClicked, setOrderDetailsClicked] = useState(false);
  const [driverInfoClicked, setDriverInfoClicked] = useState(false);
  const [customerInfoClicked, setCustomerInfoClicked] = useState(false);
  const [receiverAddress, setReceiverAddress] = useState("");
  const [senderAddress, setSenderAddress] = useState("");

  const directionUrl = `https://www.google.com/maps/embed/v1/directions?key=${googleMapsApiKey}
  &origin=${senderAddress}
  &destination=${receiverAddress}
  &avoid=tolls|highways`;

  const [infoContent, setInfoContent] = useState<JSX.Element | null>();

  const handleInfoClick = (infoType: any) => {
    switch (infoType) {
      case "orderDetails":
        setOrderDetailsClicked(!orderDetailsClicked);
        setDriverInfoClicked(false);
        setCustomerInfoClicked(false);
        setInfoContent(
          <div className="items-stretch flex justify-between gap-5">
            <div className="items-stretch flex grow basis-[0%] flex-col px-5">
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase">
                Order Number:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                #167894
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Pref. Delivery Time:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                danielajah@gmail.com
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Street Address:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                32, Rasaq-Eletu
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                State:
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-normal mt-2.5">
                Lagos
              </div>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col px-5">
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase">
                Item(s):
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                Body cream
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Pref. Delivery date:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                07024357891
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                City:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                Osapa
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Zip Code:
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-normal mt-2.5">
                144321
              </div>
            </div>
          </div>
        );
        break;
      case "driverInfo":
        setDriverInfoClicked(!driverInfoClicked);
        setOrderDetailsClicked(false);
        setCustomerInfoClicked(false);
        setInfoContent(
          <div className="justify-between items-stretch flex gap-5">
            <div className="items-stretch flex grow basis-[0%] flex-col px-5">
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase">
                First Name:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                Daniel
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Date of Birth:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                1/1/1990
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                License Number:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                JDK2783
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                EMG. Contact Name:
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-normal mt-2.5">
                Moses Ajah
              </div>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col px-5">
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase">
                Last Name:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                Ajah
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Contact Number:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                07024357891
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Expiry Date:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                1/9/2024
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                EMG. Contact NOS:
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-normal mt-2.5">
                08029301789
              </div>
            </div>
          </div>
        );
        break;
      case "customerInfo":
        setCustomerInfoClicked(!customerInfoClicked);
        setOrderDetailsClicked(false);
        setDriverInfoClicked(false);
        setInfoContent(
          <div className="justify-between items-stretch flex gap-5">
            <div className="items-stretch flex grow basis-[0%] flex-col px-5">
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase">
                First Name:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                Daniel
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Email:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                danielajah@gmail.com
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Street Address:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                32, Rasaq-Eletu
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                State:
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-normal mt-2.5">
                Lagos
              </div>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col px-5">
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase">
                Last Name:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                Ajah
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Contact Number:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                07024357891
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                City:
              </div>
              <div className="text-black text-base font-semibold leading-6 tracking-normal mt-2.5">
                Osapa
              </div>
              <div className="text-zinc-500 text-sm leading-5 tracking-normal uppercase mt-3">
                Zip Code:
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-normal mt-2.5">
                144321
              </div>
            </div>
          </div>
        );
        break;
      default:
        break;
    }
  };

  const handleClick = (tab: string) => {
    setSelectedTab(tab);
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
        setIsSomeIdentifier(false);
      } else if (component === "SecondComponent") {
        setIsSomeIdentifier(true);
      } else {
        // Reset state variables for other components
        setIsSomeIdentifier(false);
      }
    }
  };

  const getDivName = (component: any) => {
    // Add a class to the selected component to highlight it
    return `your-common-classes ${
      selectedComponent === component ? "selected" : ""
    }`;
  };

  const handleSecondClick = () => {
    handleDivClick("SecondComponent");
    // Additional logic for second click if needed
  };

  return (
    <>
      <DriverHeader current_tab={"History"} />
      <div className="bg-white flex flex-col items-center pl-8 pr-9 max-md:px-5">
        <div className="self-stretch mt-4 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

            <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-4 max-md:max-w-full max-md:mt-9">
                <a
                  href="#"
                  onClick={handleSecondClick}
                  className={getDivName("SecondComponent")}
                >
                  <div
                    className={`justify-center items-stretch border ${
                      isSomeIdentifier
                        ? "border-violet-700 bg-violet-700"
                        : "border-[color:var(--Grey-200,#EAECF0)] bg-white"
                    } self-stretch flex flex-col mt-8 p-3 rounded-xl border-solid max-md:max-w-full`}
                  >
                    <div className="justify-between items-stretch flex w-full gap-5">
                      <div className="justify-between items-stretch flex gap-5">
                        <div
                          className={`text-${
                            isSomeIdentifier ? "white" : "black"
                          } text-base leading-6 tracking-normal`}
                        >
                          Order ID:
                        </div>
                        <div
                          className={`text-${
                            isSomeIdentifier ? "white" : "black"
                          } text-base leading-6 tracking-normal`}
                        >
                          #234678
                        </div>
                      </div>
                      <div className="items-center flex gap-2 self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3484839f-bd79-476b-b794-0f317c010116?"
                          className="aspect-square object-contain object-center w-2.5 fill-green-500 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-green-500 text-sm leading-5 self-stretch grow whitespace-nowrap">
                          Delivered
                        </div>
                      </div>
                    </div>
                    <div className="opacity-[0.64] bg-black bg-opacity-20 shrink-0 h-0.5 mt-2.5" />
                    <div className="items-center flex justify-between gap-4 mt-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/543bc47c-2af4-4e70-8aa5-aa0d251798b9?"
                        className="aspect-[0.08] object-contain object-center w-2.5 items-center overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                        <div className="items-center flex justify-between gap-3">
                          <div
                            className={`text-${
                              isSomeIdentifier ? "white" : "black"
                            } text-base leading-6 tracking-normal`}
                          >
                            8:00
                          </div>
                          <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                            <div
                              className={`text-${
                                isSomeIdentifier ? "white" : "black"
                              } text-base leading-6 tracking-normal`}
                            >
                              KPMG Tower, Bishop Aboyade Cole St
                            </div>
                            <div
                              className={`text-${
                                isSomeIdentifier ? "white" : "black"
                              } text-base leading-6 tracking-normal`}
                            >
                              {" "}
                              Victoria Island 100272, Lagos
                            </div>
                          </div>
                        </div>
                        <div className="items-center flex justify-between gap-3 mt-6">
                          <div
                            className={`text-${
                              isSomeIdentifier ? "white" : "black"
                            } text-base leading-6 tracking-normal`}
                          >
                            11:00
                          </div>
                          <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                            <div
                              className={`text-${
                                isSomeIdentifier ? "white" : "black"
                              } text-base leading-6 tracking-normal`}
                            >
                              Abraham adesanya, Lekki Gardens{" "}
                            </div>
                            <div
                              className={`text-${
                                isSomeIdentifier ? "white" : "black"
                              } text-base leading-6 tracking-normal`}
                            >
                              {" "}
                              Aja 101245, Lagos
                            </div>
                          </div>
                        </div>
                        <div className="items-center flex justify-between gap-3 mt-6">
                          <div
                            className={`text-${
                              isSomeIdentifier ? "white" : "black"
                            } text-base leading-6 tracking-normal`}
                          >
                            16:00
                          </div>
                          <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                            <div
                              className={`text-${
                                isSomeIdentifier ? "white" : "black"
                              } text-base leading-6 tracking-normal`}
                            >
                              1 Billings Way, Oregun
                            </div>
                            <div
                              className={`text-${
                                isSomeIdentifier ? "white" : "black"
                              } text-base leading-6 tracking-normal`}
                            >
                              Ikeja 101233, Lagos
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-[0.64] bg-black bg-opacity-20 shrink-0 h-0.5 mt-2.5" />
                    <div className="justify-between items-stretch flex w-full gap-5 mt-3">
                      <div className="items-center flex justify-between gap-3">
                        <img
                          loading="lazy"
                          // srcSet={olu}
                          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                        />
                        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                          <div
                            className={`text-${
                              isSomeIdentifier ? "white" : "black"
                            } text-base leading-6 tracking-normal`}
                          >
                            Daniel Olu
                          </div>
                          <div
                            className={`text-${
                              isSomeIdentifier ? "white" : "black"
                            } text-base leading-6 tracking-normal`}
                          >
                            Client
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        onClick={() => handleClick("image7")}
                        role="button"
                        tabIndex={0}
                        className="items-center bg-violet-100 self-center flex aspect-[1.625] flex-col my-auto px-5 py-2 rounded-xl"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76e33e16-bf68-456a-b919-d967be10290b?"
                          className="aspect-square object-contain object-center w-4 overflow-hidden"
                          alt="Clickable Image"
                        />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="absolute top-[35%] left-[31%] bg-red-700 flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-5 ">
                <div className="flex-col overflow-hidden relative flex min-h-[509px] w-full items-center pt-12 pb-5 px-5 max-md:max-w-full">
                  <iframe
                    width="920"
                    height="509"
                    loading="lazy"
                    className="rounded-3xl"
                    allowFullScreen
                    src={
                      senderAddress?.length > 3 && receiverAddress?.length > 3
                        ? directionUrl
                        : embedUrl
                    }
                  ></iframe>
                  {/* <CustomMap hieght={"100%"} width={"100%"} classSpecification={"max-h-[509px] max-w-[920px]"} /> */}
                  <div className="relative justify-center items-center bg-white flex w-[767px] max-w-full flex-col mt-[-6.7rem] p-4 rounded-2xl max-md:mt-10">
                    <div className="justify-between items-stretch self-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap"></div>
                    <div className="flex items-center">
                      {" "}
                      {/* Apply flex styling to create a horizontal row */}
                      <div className="self-stretch stroke-[5px] w-4 h-4 flex-col rounded-[50%]" />
                      <div className="bg-violet-700 w-[166px] h-0.5 my-auto" />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe85d811-72ca-43c1-b37b-44f0ac918753?"
                        className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch max-w-full"
                      />
                      <div className="bg-gray-300 w-[166px] h-0.5 my-auto" />
                      <div className="self-stretch stroke-[5px] w-4 h-4 flex-col rounded-[50%]" />
                    </div>
                    <div className="items-stretch self-stretch flex w-full justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                      <div className="justify-between items-stretch flex gap-5">
                        <div className="items-stretch flex grow basis-[0%] flex-col">
                          <div className="text-black text-base font-medium leading-5 whitespace-nowrap">
                            Receiver 1
                          </div>
                          <div className="text-black text-sm leading-5 whitespace-nowrap mt-1">
                            Osapa-London
                          </div>
                        </div>
                        <div className="text-black text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                          12 Jun, 08:34
                        </div>
                      </div>
                      <div className="justify-between items-stretch flex gap-5">
                        <div className="items-stretch flex grow basis-[0%] flex-col">
                          <div className="text-black text-base font-medium leading-5 whitespace-nowrap">
                            Receiver 2
                          </div>
                          <div className="text-black text-sm leading-5 whitespace-nowrap mt-1">
                            Osapa-London
                          </div>
                        </div>
                        <div className="text-black text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                          12 Jun, 13:34
                        </div>
                      </div>
                      <div className="justify-between items-stretch flex gap-5">
                        <div className="items-stretch flex grow basis-[0%] flex-col">
                          <div className="text-black text-base font-medium leading-5 whitespace-nowrap">
                            Deliver
                          </div>
                          <div className="text-black text-sm leading-5 whitespace-nowrap mt-1">
                            Osapa-London
                          </div>
                        </div>
                        <div className="text-black text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                          12 Jun, 16:34
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative items-stretch border border-[color:var(--Grey-200,#EAECF0)] flex flex-col p-4 rounded-xl border-solid bg-gray20 ml-12 max-w-[90%]">
                    <div className="justify-between items-start flex w-full gap-5 pr-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                      <div
                        className={`text-black text-base leading-6 tracking-normal self-center my-auto p-2.5 cursor-pointer ${
                          orderDetailsClicked
                            ? "text-violet-700 border-b-[color:var(--Log-Pri,#6926D7)] border-b-2 border-solid"
                            : ""
                        }`}
                        onClick={() => handleInfoClick("orderDetails")}
                      >
                        Order details
                      </div>
                      <div
                        className={`text-black text-base leading-6 tracking-normal self-center my-auto p-2.5 cursor-pointer ${
                          driverInfoClicked
                            ? "text-violet-700 border-b-[color:var(--Log-Pri,#6926D7)] border-b-2 border-solid"
                            : ""
                        }`}
                        onClick={() => handleInfoClick("driverInfo")}
                      >
                        Driver Info
                      </div>
                      <div
                        className={`text-black text-base leading-6 tracking-normal my-auto p-2.5 cursor-pointer ${
                          customerInfoClicked
                            ? "text-violet-700 border-b-[color:var(--Log-Pri,#6926D7)] border-b-2 border-solid"
                            : ""
                        }`}
                        onClick={() => handleInfoClick("customerInfo")}
                      >
                        Customer Info
                      </div>
                    </div>
                    {/* Render infoContent wherever you need it in your component */}
                    {infoContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverHistory;
