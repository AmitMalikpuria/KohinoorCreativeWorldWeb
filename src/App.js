import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Components/Pages/HomePage.js';
import HomeCalculator from './Components/Pages/Calculator/SimpleCalculator.js';
import FAQPage from './Components/Pages/FAQ/FAQPage.js';
import Contactus from './Components/Contactus.js'
import CalculatorsTitle from './Components/CalculatorsTitle.js';
import Aboutus from './Components/Pages/About/Aboutus.js';
import Error from './Components/Error.js';
import Directors from './Components/Pages/Board/Directors.js';
import DirectorDetails from './Components/Pages/Board/DirectorDetails.js';
import LoanDetails from './Components/Pages/LoanDetails/LoanDetails.js';
import BorrowingModule from './Components/Pages/Calculator/BorrowingPower/Borrowing.js';
// import HomeLoanRepayment from './Components/Pages/Calculator/HomeLoanRepayment/HomeLoanRepayment.js';
import New_HomeLoanRepayments from './Components/Pages/Calculator/HomeLoanRepayment/New_HomeLoanRepayments.js';
import HowLongtoRepay from './Components/Pages/Calculator/HowLongtoRepay/HowLongtoRepay.js';
import RemainingBalance from './Components/Pages/Calculator/RemainingBalance/RemainingBalance.js';
import FortnightlyRepayment from './Components/Pages/Calculator/FortnightlyRepayment/FortnightlyRepayment.js';
import Calculator from './Components/Pages/Calculator/TestCalculator/Calculator.js';

import NewsDetails_FHLDS from './Components/Pages/HomePage/NewsDetails_FHLDS.js'
import Hottest_Affordable_Suburbs from './Components/Pages/HomePage/Hottest_Affordable_Suburbs.js';
import PropertyMarket from './Components/Pages/HomePage/PropertyMarket.js';
import CarLoan from './Components/Pages/CarLoan/CarLoan.js';
import PersonalLoan from './Components/Pages/PersonalLoan/PersonalLoan.js';
import HomeLoan from './Components/Pages/HomeLoan/HomeLoan.js'
import BusinessLoan from './Components/Pages/BusniessLoan/BusinessLoan.js';
import ApplyNow from './Components/Pages/ApplyNow/ApplyNow.js';
import PrivacyPolicy from './Components/PrivacyPolicy.js';
import CarLoanForm from './Components/CarLoanForms/CarLoanForm.js';
import ReadContactUs from './Components/Admin/ReadContactUs.js';
import ResidentialProjects from './Components/Pages/Residential/ResidentialProjects.js';
import MRGCrown from './Components/Pages/Residential/MRGCrown.js';

function App() {
  return (<div>
    <BrowserRouter >
      <Routes>
        {/* Web Site Pages */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>

        <Route path="/contactus" element={<Contactus />}></Route>



        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/managecontactus" element={<ReadContactUs />} />


        {/* Projects */}
        <Route path="/residential-developments" element={<ResidentialProjects />}></Route>
        <Route path="/residential-developments/mrg-crown" element={<MRGCrown />}></Route>

      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;
