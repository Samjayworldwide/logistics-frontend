import { FunctionComponent } from "react";

const Frame: FunctionComponent = () => {
  return (
    <div className="relative rounded bg-white box-border flex flex-col items-start justify-start gap-[4px] max-w-full max-h-full overflow-auto text-left text-base text-green-2 font-body-textmedium-16 border-[1px] border-solid border-grey-200">
      <div className="flex flex-row items-center justify-start py-2 px-4 gap-[16px] border-b-[1px] border-solid border-grey-200">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/Accept.jpg"
        />
        <div className="relative leading-[19px] font-medium">Accept</div>
      </div>
      <div className="flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-red">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/Decline.jpg"
        />
        <div className="relative leading-[19px] font-medium">Decline</div>
      </div>
    </div>
  );
};

export default Frame;
