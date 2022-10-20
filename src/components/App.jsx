import React from 'react';
import SignInPOS from './SignInPOS';
import DateTime from "./DateTime";
import HomeOrderPage from "./HomeOrderPage";
import DrawerSample from "./DrawerSample";
import FinalizeOrderPage from "./FinalizeOrderPage";
import OrderSummaryPage from "./OrderSummaryPage";
// import CustomerListPage from "./CustomerListPage";
import PendingOrdersPage from "./PendingOrdersPage";
// import DraftsPage from "./DraftsPage-------------";
import HistoryPage from "./HistoryPage";
import PrintReceiptFormatPage from "./PrintReceiptFormatPage";
// import DiscountsPage from "./DiscountsPage";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import AddMenuItemPage from './AddMenuItemPage';
import AddCategoryPage from './AddCategoryPage';


function App(){
    return (
      <div>
        <div>
          <Routes>
            <Route path="/" element={<SignInPOS />} />
            <Route path="/homeorderpage" element={<HomeOrderPage />} />
            <Route path="/pendingpage" element={<PendingOrdersPage />} />
            <Route path="/finalizeorderpage" element={<FinalizeOrderPage />} />
            <Route path="/ordersummarypage" element={<OrderSummaryPage />} />
            <Route path="/historypage" element={<HistoryPage />} />
            <Route
              path="/printreceiptformatpage"
              element={<PrintReceiptFormatPage />}
            />
            <Route path="/addmenuitempage" element={<AddMenuItemPage />} />
            <Route path="/addcategorypage" element={<AddCategoryPage />} />
            {/* <Route path="/draftspage" element={<DraftsPage />} /> */}

            {/* <Route path="/discountspage" element={<DiscountsPage />} /> */}
            {/* <Route path="/customerlistpage" element={<CustomerListPage />} /> */}
          </Routes>

          {
            // <Router>
            //   <Routes>
            //    <Route path="/" element={<SignInPOS/>} />
            //     <Route path="/homeorderspage" element={<HomeOrderPage/>} />
            //     <Route path="/pendingpage" element={<PendingOrdersPage/>} />
            //     <Route path="/draftspage" element={<DraftsPage/>} />
            //     <Route path="/historypage" element={<HistoryPage/>} />
            //     <Route path="/discountspage" element={<DiscountsPage/>} />
            //     <Route path="/signin" element={<SignInPOS/>} />
            //   </Routes>
            // </Router>
            // <div>
            //   {/* TESTING AREA: */}
            //   {/* <SignInPOS /> */}
            //   {/* <SidebarPOS/> */}
            //   {/* <HomeOrderPage /> */}
            //   {/* <DrawerSample/> */}
            //   {/* <TestSample /> */}
            //   {/* <PaymentPage/> */}
            //   {/* <OrderSummaryPage /> */}
            //   {/* <CustomerListPage /> */}
            //   {/* <PendingOrdersPage /> */}
            //   {/* <DraftsPage/> */}
            //   {/* <HistoryPage /> */}
            //   {/* <DiscountsPage /> */}
            // </div>
            // ************************************************************
            // UNCOMMENT THIS TO ACTIVATE ROUTES:
          }
        </div>
      </div>
    );

}

export default App;


// https://stackoverflow.com/questions/17628305/windows-git-warning-lf-will-be-replaced-by-crlf-is-that-warning-tail-backwar