import React from "react";
import InspectionView from "../views/InspectionView";
import { Route, Routes } from "react-router-dom";
import InspectionDetails from "../components/Inspections/InspectionDetails";

const PageContainer = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route exact path="/" element={<InspectionView />} />
          <Route
            exact
            path="/inspection/:id"
            element={<InspectionDetails />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default PageContainer;
