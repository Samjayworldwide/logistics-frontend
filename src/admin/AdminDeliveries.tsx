import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";

function AdminDeliveries() {
  return (
    <div>
      <AdminHeader />
      <div className=" ml-[2%]">
        <div className="flex flex-col items-stretch w-[32%]">
          <a
          //   href="#"
          //   onClick={}
          >
            <div className="justify-center items-stretch border self-stretch flex flex-col mt-8 p-3 rounded-xl border-solid max-md:max-w-full">
              <div className="justify-between items-stretch flex w-full gap-5">
                <div className="justify-between items-stretch flex gap-5">
                  <div className=" text-base leading-6 tracking-normal">
                    Order ID:
                  </div>
                  <div className=" text-base leading-6 tracking-normal">
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
                    <div className=" text-base leading-6 tracking-normal">
                      8:00
                    </div>
                    <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                      <div className="text-base leading-6 tracking-normal">
                        KPMG Tower, Bishop Aboyade Cole St
                      </div>
                      <div className="text-base leading-6 tracking-normal">
                        {" "}
                        Victoria Island 100272, Lagos
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex justify-between gap-3 mt-6">
                    <div className="text-base leading-6 tracking-normal">
                      11:00
                    </div>
                    <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                      <div className=" text-base leading-6 tracking-normal">
                        Abraham adesanya, Lekki Gardens{" "}
                      </div>
                      <div className="text-base leading-6 tracking-normal">
                        {" "}
                        Aja 101245, Lagos
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex justify-between gap-3 mt-6">
                    <div className="text-base leading-6 tracking-normal">
                      16:00
                    </div>
                    <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                      <div className="text-base leading-6 tracking-normal">
                        1 Billings Way, Oregun
                      </div>
                      <div className="text-base leading-6 tracking-normal">
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
                    <div className="text-base leading-6 tracking-normal">
                      Daniel Olu
                    </div>
                    <div className=" text-base leading-6 tracking-normal">
                      Client
                    </div>
                  </div>
                </div>
                <a
                  // href="#"
                  // onClick={() => handleClick("")}
                  // role="button"
                  // tabIndex={0}
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
    </div>
  );
}
export default AdminDeliveries;
