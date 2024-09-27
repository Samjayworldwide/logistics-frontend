import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// import deji from "../assets/deji.png";
// import cheers from "../assets/cheers.png";
// import confirm from "../assets/confirm.png";

const center = { lat: 6.6378, lng: 5.92915 };
const embedUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBWAY9ncGFN8U3L2LrqB5u126Gh2k9FqKk&center=${center.lat},${center.lng}&zoom=10`;

interface TrackPageProps {}

function DriverFindTrack(props: TrackPageProps) {
  const [selectedTab, setSelectedTab] = useState<null | string>(null);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [notificationsModalIsOpen, setNotificationsModalIsOpen] =
    useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const backgroundColor = isHighlighted ? "bg-violet-300" : "bg-violet-100";
  const [orderDetailsClicked, setOrderDetailsClicked] = useState(false);
  const [senderInfoClicked, setSenderInfoClicked] = useState(false);
  const [receiverInfoClicked, setReceiverInfoClicked] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);

  const [infoContent, setInfoContent] = useState<JSX.Element | null>(
    orderDetailsClicked ? (
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
    ) : null
  );

  const handleInfoClick = (infoType: any) => {
    switch (infoType) {
      case "orderDetails":
        setOrderDetailsClicked(!orderDetailsClicked);
        setSenderInfoClicked(false);
        setReceiverInfoClicked(false);
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
      case "senderInfo":
        setSenderInfoClicked(!senderInfoClicked);
        setOrderDetailsClicked(false);
        setReceiverInfoClicked(false);
        setInfoContent(
          <div className="items-stretch flex justify-between gap-5">
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
      case "receiverInfo":
        setReceiverInfoClicked(!receiverInfoClicked);
        setOrderDetailsClicked(false);
        setSenderInfoClicked(false);
        setInfoContent(
          <div className="items-stretch flex justify-between gap-5">
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

  const openNotificationsModal = () => {
    setNotificationsModalIsOpen(true);
  };

  const closeNotificationsModal = () => {
    setNotificationsModalIsOpen(false);
  };

  const handleNotificationsClick = () => {
    openNotificationsModal();
  };

  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const starRating = document.getElementById("starRating")!;
    const selectedRating = document.getElementById("currentRating")!;

    function handleStarClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target.classList.contains("star")) {
        const value = parseInt(target.getAttribute("data-value") || "0", 10);
        setCurrentRating(value);

        // Reset all stars
        document.querySelectorAll(".star").forEach((star, index) => {
          if (index < value) {
            star.classList.add("active");
          } else {
            star.classList.remove("active");
          }
        });
      }
    }

    function handleStarHover(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target.classList.contains("star")) {
        const value = parseInt(target.getAttribute("data-value") || "0", 10);
        selectedRating.innerText = value.toString();
      }
    }

    starRating.addEventListener("click", handleStarClick);
    starRating.addEventListener("mouseover", handleStarHover);

    // Cleanup event listeners when the component is unmounted
    return () => {
      starRating.removeEventListener("click", handleStarClick);
      starRating.removeEventListener("mouseover", handleStarHover);
    };
  }, [setCurrentRating]);

  const handleImageClick = () => {
    setIsHighlighted((prevIsHighlighted) => !prevIsHighlighted);
  };

  const getClassName = (tab: string) => {
    return `text-gray-900 text-base leading-6 tracking-normal self-center my-auto ${
      selectedTab === tab
        ? "text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-center bg-violet-700 grow px-5 py-1 rounded-2xl"
        : ""
    }`;
  };

  return (
    <div className="bg-white flex flex-col px-9 max-md:px-5">
      <div className="justify-between items-stretch self-center flex w-full max-w-[1290px] gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex justify-between gap-5">
          <div className="items-center flex basis-[0%] flex-col">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f4c1509-ab4f-4706-a674-949967e3bdd6?"
              className="aspect-[2.29] object-contain object-center w-[55px] fill-violet-700 overflow-hidden"
            />
            <div
              onClick={() => handleClick("image1")}
              role="button" // Include this for accessibility
              tabIndex={0} // Include this for accessibility
              className="text-black text-base leading-5 tracking-normal self-stretch whitespace-nowrap"
            >
              <span className="">Karri</span>
              <span className="font-medium">GO</span>
            </div>
          </div>
          <div className="items-stretch border border-[color:var(--Log-Pri,#6926D7)] bg-white flex gap-2 pl-3 pr-20 py-2 rounded-2xl border-solid self-start max-md:pr-5">
            <img
              onClick={() => handleClick("image2")}
              role="button" // Include this for accessibility
              tabIndex={0} // Include this for accessibility
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b6f4153-cc9c-4520-a3b6-54cb1317bcad?"
              className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
              alt="Clickable Image"
            />
            <input
              type="text"
              className="text-neutral-400 text-base leading-6 tracking-normal grow whitespace-nowrap border-none outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="items-stretch self-center flex gap-4 my-auto max-md:justify-center">
          <img
            onClick={() => handleClick("image4")}
            role="button" // Include this for accessibility
            tabIndex={0} // Include this for accessibility
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ad1440c-efc5-40d9-975c-3215c6c583c6?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Clickable Image"
          />
          <img
            onClick={handleNotificationsClick}
            role="button" // Include this for accessibility
            tabIndex={0} // Include this for accessibility
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de9107ad-19d9-4961-b448-19818332aedd?"
            className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
            alt="Clickable Image"
          />
          <Modal
            isOpen={notificationsModalIsOpen}
            ariaHideApp={false}
            className="absolute w-[30%] bg-transparent border-none top-[20%] left-[35%] justify-center items-center"
            onRequestClose={closeNotificationsModal}
          >
            <div className="relative bg-white flex flex-col items-start justify-start p-6 box-border gap-[6px] max-w-[60%] max-h-full  text-left text-sm text-dimgray font-body-text-normal-16 top-[-2%] left-[90%] rounded-2xl">
              <div className="relative text-5xl leading-[36px] font-semibold text-black">
                Notifications
              </div>
              <div className="relative box-border w-[640px] h-[91px] text-gray border-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[34.48px] left-[624px] rounded-lg flex flex-row items-start justify-start">
                  <img className="relative w-4 h-4" alt="" src="/svg.svg" />
                </div>
                <div className="absolute top-[0px] left-[0px] w-[612px] h-[90px]">
                  <img
                    className="absolute top-[16px] left-[0px] rounded-3xl w-12 h-12"
                    alt=""
                    // src={cheers}
                  />
                  <div className="absolute top-[16px] left-[60px] flex flex-col items-start justify-start py-0 pr-[40.58123779296875px] pl-0 gap-[4px]">
                    <div className="relative leading-[18px] font-semibold flex w-[60%] items-center whitespace-normal">
                      Exciting news! Your order #167890 is now out for delivery.
                      Track your delivery in real-time.
                    </div>
                    <div className="relative text-[13px] leading-[18px] text-dimgray">
                      16:56
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative box-border w-[640px] h-[91px] text-gray border-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[34.48px] left-[624px] rounded-lg flex flex-row items-start justify-start">
                  <img className="relative w-4 h-4" alt="" src="/svg.svg" />
                </div>
                <div className="absolute top-[0px] left-[0px] w-[612px] h-[90px]">
                  <img
                    className="absolute top-[16px] left-[0px] rounded-3xl w-12 h-12"
                    alt=""
                    // src={deji}
                  />
                  <div className="absolute top-[16px] left-[60px] flex flex-col items-start justify-start py-0 pr-[15.56561279296875px] pl-0 gap-[4px]">
                    <div className="relative leading-[18px] font-semibold flex items-center w-[60%] whitespace-normal">
                      Driver Adepoju Deji has arrived at the pickup location for
                      order #167890
                    </div>
                    <div className="relative leading-[18px] text-dimgray">
                      13:21
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative box-border w-[640px] h-[91px] border-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[34.48px] left-[624px] rounded-lg flex flex-row items-start justify-start">
                  <img className="relative w-4 h-4" alt="" src="/svg1.svg" />
                </div>
                <div className="absolute top-[0px] left-[0px] w-[612px] h-[90px]">
                  <img
                    className="absolute top-[16px] left-[0px] rounded-3xl w-12 h-12"
                    alt=""
                    // src={deji}
                  />
                  <div className="absolute top-[16px] left-[60px] flex flex-col items-start justify-start py-0 pr-[24.90936279296875px] pl-0 gap-[4px]">
                    <div className="relative leading-[18px] flex w-[60%] items-center whitespace-normal">
                      Driver Adepoju Deji is en route to pick up your order
                      #167890.
                    </div>
                    <div className="relative leading-[18px]">11:31</div>
                  </div>
                </div>
              </div>
              <div className="relative box-border w-[640px] h-[91px] border-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[34.48px] left-[624px] rounded-lg flex flex-row items-start justify-start">
                  <img className="relative w-4 h-4" alt="" src="/svg1.svg" />
                </div>
                <div className="absolute top-[0px] left-[0px] w-[612px] h-[90px]">
                  <img
                    className="absolute top-[16px] left-[0px] rounded-3xl w-12 h-12"
                    alt=""
                    // src={cheers}
                  />
                  <div className="absolute top-[16px] left-[60px] flex flex-col items-start justify-start py-0 pr-[28.90936279296875px] pl-0 gap-[4px]">
                    <div className="relative leading-[18px] flex w-[60%] items-center whitespace-normal">
                      Great news! Your order #167890 is now assigned to Driver
                      Adepoju Deji
                    </div>
                    <div className="relative leading-[18px]">8:29</div>
                  </div>
                </div>
              </div>
              <div className="relative w-[640px] h-[108px]">
                <div className="absolute top-[43.48px] left-[624px] rounded-lg flex flex-row items-start justify-start">
                  <img className="relative w-4 h-4" alt="" src="/svg.svg" />
                </div>
                <div className="absolute top-[0px] left-[0px] w-[612px] h-[90px]">
                  <img
                    className="absolute top-[16px] left-[0px] rounded-3xl w-12 h-12"
                    alt=""
                    // src={confirm}
                  />
                  <div className="absolute top-[16px] left-[60px] flex flex-col items-start justify-start py-0 pr-[28.90936279296875px] pl-0 gap-[4px]">
                    <div className="relative leading-[18px] flex w-[60%] items-center whitespace-normal">
                      Your order #167890 has been confirmed!
                    </div>
                    <div className="relative leading-[18px]">yesterday</div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <img
            onClick={() => handleClick("image5")}
            role="button" // Include this for accessibility
            tabIndex={0} // Include this for accessibility
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/106eca0e-31cf-43be-986d-2cf0c31d4cf8?"
            className="aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Clickable Image"
          />
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1340px] justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex w-[317px] max-w-full justify-between gap-5 ml-8 mt-8 self-start max-md:justify-center max-md:ml-2.5">
          <div
            onClick={() => handleClick("Overview")}
            role="button"
            tabIndex={0}
            className={getClassName("Overview")}
          >
            Overview
          </div>
          <div
            onClick={() => handleClick("History")}
            role="button"
            tabIndex={0}
            className={getClassName("History")}
          >
            History
          </div>
          <div
            onClick={() => handleClick("FindTrack")}
            role="button"
            tabIndex={0}
            className={getClassName("FindTrack")}
          >
            Find track
          </div>
        </div>
        <div
          className={`items-stretch ${backgroundColor} self-stretch flex justify-between gap-3 px-5 py-2 rounded-xl`}
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08ffdb0d-670c-4e39-9933-31499f6fd8e5?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-0"
              onClick={openModal}
            />
            <div
              className="text-violet-700 text-base font-semibold leading-6 tracking-normal grow whitespace-nowrap mt-0"
              onClick={openModal}
            >
              Complete Delivery?
            </div>
            <Modal
              isOpen={modalIsOpen}
              ariaHideApp={false}
              className="absolute w-[30%] bg-transparent border-none top-[20%] left-[35%] justify-center items-center"
              onRequestClose={closeModal}
            >
              <div className="justify-center items-center bg-gray-50 flex flex-col px-8 rounded-2xl max-md:px-5">
                <div className="text-violet-700 text-2xl font-medium leading-8 whitespace-nowrap mt-8">
                  Delivery Successfully Completed!
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d432e77c-6461-4793-b588-94b8b0b03702?"
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full mt-8"
                />
                <div className="text-zinc-500 text-center text-base font-medium leading-6 self-stretch mt-8 max-md:max-w-full">
                  Thank you for your dedication to excellent service!
                </div>
                <div
                  className="text-zinc-100 text-base font-bold leading-3 whitespace-nowrap justify-center items-center bg-violet-700  m-8 p-5 px-20 rounded-[100px] max-md:max-w-full"
                  onClick={closeModal}
                >
                  Continue
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[446px] items-center mt-6 pt-12 px-5 max-md:max-w-full">
        <iframe
          width="1372"
          height="446"
          loading="lazy"
          allowFullScreen
          src={embedUrl}
        ></iframe>
        <div className="relative justify-center items-center bg-white flex w-[783px] max-w-full flex-col mt-52 px-6 py-8 rounded-2xl max-md:mt-10 max-md:px-5">
          <div className="justify-between items-stretch self-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
            <div id="starRating" className="star-rating">
              <span className="star" data-value="1">
                &#9733;
              </span>
              <span className="star" data-value="2">
                &#9733;
              </span>
              <span className="star" data-value="3">
                &#9733;
              </span>
              <span className="star" data-value="4">
                &#9733;
              </span>
              <span className="star" data-value="5">
                &#9733;
              </span>
            </div>
            <p id="selectedRating">
              You've rated: <span id="currentRating">{currentRating}</span>{" "}
              stars
            </p>

            <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
              <div className="text-black text-base font-semibold leading-5 whitespace-nowrap">
                03:23:23
              </div>
              <div className="text-gray-500 text-sm leading-5 whitespace-nowrap mt-1">
                45 mins left
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {" "}
            {/* Apply flex styling to create a horizontal row */}
            <div className="self-stretch stroke-[5px] w-4 h-4 flex-col rounded-[50%]" />
            <div className="bg-violet-700 w-[166px] h-0.5 my-auto" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a5deb4-fd71-477f-9f76-9db317936edf?"
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
                08:34
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
                {" "}
                13:34
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
                16:34
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="items-stretch border border-[color:var(--Grey-200,#EAECF0)] flex flex-col p-4 rounded-xl border-solid">
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
                senderInfoClicked
                  ? "text-violet-700 border-b-[color:var(--Log-Pri,#6926D7)] border-b-2 border-solid"
                  : ""
              }`}
              onClick={() => handleInfoClick("senderInfo")}
            >
              Sender Info
            </div>
            <div
              className={`text-black text-base leading-6 tracking-normal my-auto p-2.5 cursor-pointer ${
                receiverInfoClicked
                  ? "text-violet-700 border-b-[color:var(--Log-Pri,#6926D7)] border-b-2 border-solid"
                  : ""
              }`}
              onClick={() => handleInfoClick("receiverInfo")}
            >
              Receiver Info
            </div>
          </div>
          {/* Render infoContent wherever you need it in your component */}
          {infoContent}
        </div>
      </div>
    </div>
  );
}

export default DriverFindTrack;
