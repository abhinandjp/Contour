import React, { Fragment } from "react";
import AdminRouter from "./Routes/AdminRouter/AdminRouter";
import ContractorRouter from "./Routes/ContractorRouter/ContractorRouter";
import UserRouter from "./Routes/UserRouter/UserRouter";

function App() {
  return (
    <Fragment>
      <UserRouter />
      <ContractorRouter />
      <AdminRouter/>
    </Fragment>
  );
}

export default App;
