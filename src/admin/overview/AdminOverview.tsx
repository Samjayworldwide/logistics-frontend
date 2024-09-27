import { Header } from "antd/es/layout/layout";
import React, { FunctionComponent, useCallback } from "react";
import CustomerGrowthContainer from "./CustomerGrowthContainer";
import OrderFormContainer from "./OrderFormContainer";
import AdminHeader from "../AdminHeader";
import GraphDiagram from "./GraphDiagram";

const AdminOverview: FunctionComponent = () => {
  const onFrameContainer4Click = useCallback(() => {
    // Please sync "Driver" to the project
  }, []);

  const onFrameContainer6Click = useCallback(() => {
    // Please sync "Driver" to the project
  }, []);

  const handleCustomerContainerClick = () => {
    // Handle the click event here
    console.log("CustomerContainer clicked!");
  };

  return (
    <div>
      <AdminHeader  />

      <div>
        <GraphDiagram />
      </div>

      <CustomerGrowthContainer />
      <div className="absolute top-[130px] left-[1014px] grid gap-4 grid-cols-[repeat(auto-fill, minmax(300px,1fr))] overflow-y-auto h-[800px]">
        <OrderFormContainer />
        <OrderFormContainer />
      </div>
    </div>
  );
};

export default AdminOverview;
