import React, { useState, useRef, useEffect } from "react";
import "./CarLoanForm.css";
import { useSnackbar } from "notistack";
import { AddCommas, getMonthName } from '../Pages/Calculator/Helper.js'
import { CarLoanFormURL } from "../../Components/APIUrl.js"

function Review() {
    const { enqueueSnackbar } = useSnackbar();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [_StepsData, setStepsData] = useState({});
    const [_carloan, setcarLoan] = useState({});
    const [_aboutyou, setAboutYouData] = useState([]);
    const [_Homeloan, setHomeLoanData] = useState([]);
    const [_Personalloan, setPersonalLoanData] = useState([]);
    const [_CreditCardloan, setCreditCardLoanData] = useState([]);
    const [_OtherLoan, setOtherLoanData] = useState([]);
    const [_Taxresidence, setForeignTaxResidenceData] = useState([]);

    useEffect(() => {
        GetAllData()
    }, [])

    function GetAllData() {
        const stepsData = localStorage.getItem('stepsData')
        const FinanceData = localStorage.getItem('carloan')
        const AboutYouData = localStorage.getItem('aboutyou')

        const homeLoanData = localStorage.getItem('homeloan')
        const personalLoanData = localStorage.getItem('Personalloan')
        const creditCardData = localStorage.getItem('CreditCardloan')
        const otherLoanData = localStorage.getItem('OtherLoan')

        const foreignTaxResidenceData = localStorage.getItem('taxresidence')

        if (stepsData) {
            const json = JSON.parse(stepsData);
            setStepsData(json);
        }

        if (FinanceData) {
            const json = JSON.parse(FinanceData);
            setcarLoan(json);
        }

        if (AboutYouData) {
            const json = JSON.parse(AboutYouData);
            setAboutYouData(json);
            let name = `${json.personalDetails?.firstName} ${json.personalDetails?.middleName} ${json.personalDetails?.lastName}`;
            setName(name)
            setEmail(json.personalDetails?.contactDetails?.email);
            setPhone(json.personalDetails?.contactDetails?.mobile);
        }

        if (homeLoanData) {
            const json = JSON.parse(homeLoanData);
            setHomeLoanData(json);
        }

        if (personalLoanData) {
            const json = JSON.parse(personalLoanData);
            setPersonalLoanData(json);
        }

        if (creditCardData) {
            const json = JSON.parse(creditCardData);
            setCreditCardLoanData(json);
        }

        if (otherLoanData) {
            const json = JSON.parse(otherLoanData);
            setOtherLoanData(json);
        }

        if (foreignTaxResidenceData) {
            const json = JSON.parse(foreignTaxResidenceData);
            setForeignTaxResidenceData(json);
        }
    }


    function ClearUsestate() {
        setName("");
        setEmail("");
        setPhone("");
        setStepsData({});
        setcarLoan({});
        setAboutYouData([]);
        setHomeLoanData([]);
        setPersonalLoanData([]);
        setCreditCardLoanData([]);
        setOtherLoanData([]);
        setForeignTaxResidenceData([]);

        localStorage.removeItem('stepsData');
        localStorage.removeItem('carloan');
        localStorage.removeItem('aboutyou');
        localStorage.removeItem('homeloan');
        localStorage.removeItem('Personalloan');
        localStorage.removeItem('CreditCardloan');
        localStorage.removeItem('OtherLoan');
        localStorage.removeItem('taxresidence');



    }


    async function SubmitFormData() {
        try {

            GetAllData();

            let StepsData = JSON.stringify(_StepsData);
            let carloan = JSON.stringify(_carloan);
            let aboutyou = JSON.stringify(_aboutyou);
            let Homeloan = _Homeloan.length > 0 ? JSON.stringify(_Homeloan) : JSON.stringify([]);
            let Personalloan = _Personalloan.length > 0 ? JSON.stringify(_Personalloan) : JSON.stringify([]);
            let CreditCardloan = _CreditCardloan.length > 0 ? JSON.stringify(_CreditCardloan) : JSON.stringify([]);
            let OtherLoan = _OtherLoan.length > 0 ? JSON.stringify(_OtherLoan) : JSON.stringify([]);
            let Taxresidence = _Taxresidence.length > 0 ? JSON.stringify(_Taxresidence) : JSON.stringify([]);

            const data = { Name, Email, Phone, StepsData, carloan, aboutyou, Homeloan, Personalloan, CreditCardloan, OtherLoan, Taxresidence }
            const response = await fetch(CarLoanFormURL + 'InsertCarLoanForm',
                {
                    method: "Post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            debugger;
            const mydata = await response.json();
            //debugger
            if (mydata.Message === "Success") {
                ClearUsestate()
                enqueueSnackbar("Form Submitted Successfully", { variant: "success" });

                setTimeout(() => {
                    window.location.href = "/secured-car-loan"; // Redirect to the desired page after clearing state
                }, 2000);
            }
        }
        catch (err) {
            console.loh(err)
        }
    }


    const fnReviewForm = () => {

        return (
            <>
                <div className="CarLoanFormContent">
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" style={{ justifyContent: "flex-start" }}>
                                <p style={{ fontSize: "var(--fontsize15)", color: "var(--theme-color)" }}>Your personalised rate</p>
                            </div>
                            <div className="input-group">
                                <label>10.49% p.a.</label>
                            </div>
                        </div>
                    </div >
                    <p className="content-title">Loan details</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" >
                                <p>Loan purpose</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.loanDetails?.loanpurpose === "newCar" ? "New Car" : "Used Car"}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" >
                                <p>Total requested amount</p>
                            </div>
                            <div className="input-group">
                                <label>${AddCommas(String(_carloan.loanDetails?.amount || 0))}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" >
                                <p>Loan Term</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.loanDetails?.overHowManyYears} Years</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" >
                                <p>Estimated repayments</p>
                            </div>
                            <div className="input-group">
                                <label>${AddCommas(String(_carloan.loanDetails?.repayment))}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" >
                                <p>Loan Type</p>
                            </div>
                            <div className="input-group">
                                <label>Fixed Rate</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" >
                                <p>State</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.loanDetails?.state}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" >
                                <p>Postcode</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.loanDetails?.postcode}</label>
                            </div>
                        </div>
                    </div >

                    <p className="content-title">Car details</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" >
                                <p>Engine type</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.loanDetails?.engineType}</label>
                            </div>
                        </div>
                    </div >

                    <p className="content-title">Income</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label" >
                                <p>Salary / wages / pension</p>
                            </div>
                            <div className="input-group">
                                <label>${AddCommas(String(_carloan.income?.incomeAmount))} {_carloan.income?.incomeFrequency}</label>
                            </div>
                        </div>
                    </div >

                    <p className="content-title">Savings and other assets</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Properties owned</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.savingsAndAssets?.anyProperties ? "Yes" : "No"}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Total balances in savings / investment accounts</p>
                            </div>
                            <div className="input-group">
                                <label>${AddCommas(String(_carloan.savingsAndAssets?.totalBalances))}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Other assets type</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.savingsAndAssets?.otherAssets}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Other assets amount</p>
                            </div>
                            <div className="input-group">
                                <label>${AddCommas(String(_carloan.savingsAndAssets?.otherAssetsAmount))}</label>
                            </div>
                        </div>
                    </div >

                    <p className="content-title">Housing and relationship</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Relationship status</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.housingAndRelationship?.relationshipStatus}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Number of dependants</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.housingAndRelationship?.dependants === null ? 0 : 0}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Current housing situation</p>
                            </div>
                            <div className="input-group">
                                <label>{_carloan.housingAndRelationship?.currentHousingSituation}</label>
                            </div>
                        </div>
                    </div >

                    <p className="content-title">Liabilities</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Home loan/Investment loan</p>
                            </div>
                            <div className="input-group" style={{ flexDirection: "column" }}>
                                {
                                    _Homeloan !== undefined && _Homeloan.length !== 0
                                        ?
                                        _Homeloan.map((item, index) => {
                                            return (
                                                <div key={index} style={{ marginBottom: "15px" }}>
                                                    <label>{item.institutionName}</label>
                                                    <label>Loan Limit:  ${AddCommas(String(item.loanLimit))}</label>
                                                    <label>Owing:  ${AddCommas(String(item.amountOwed))}</label>
                                                    <label>Repayment:  ${AddCommas(String(item.repaymentAmount))} {item.repaymentType}</label>
                                                </div>
                                            );
                                        })
                                        : "No"
                                }
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>personal loans or auto loans</p>
                            </div>
                            <div className="input-group" style={{ flexDirection: "column" }}>
                                {
                                    _Personalloan !== undefined && _Personalloan.length !== 0
                                        ?
                                        _Personalloan.map((item, index) => {
                                            return (
                                                <div key={index} style={{ marginBottom: "15px" }}>
                                                    <label>{item.institutionName}</label>
                                                    <label>Loan Limit:  ${AddCommas(String(item.loanLimit))}</label>
                                                    <label>Owing:  ${AddCommas(String(item.amountOwed))}</label>
                                                    <label>Repayment:  ${AddCommas(String(item.repaymentAmount))} {item.repaymentType}</label>
                                                </div>
                                            );
                                        })
                                        : "No"
                                }
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>credit cards or store cards</p>
                            </div>
                            <div className="input-group" style={{ flexDirection: "column" }}>
                                {
                                    _CreditCardloan !== undefined && _CreditCardloan.length !== 0
                                        ?
                                        _CreditCardloan.map((item, index) => {
                                            return (
                                                <div key={index} style={{ marginBottom: "15px" }}>
                                                    <label>{item.institutionName}</label>
                                                    <label>Loan Limit:  ${AddCommas(String(item.loanLimit))}</label>
                                                    <label>Owing:  ${AddCommas(String(item.amountOwed))}</label>
                                                    <label>Repayment:  ${AddCommas(String(item.repaymentAmount))} {item.repaymentType}</label>
                                                </div>
                                            );
                                        })
                                        : "No"
                                }
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Other liability</p>
                            </div>
                            <div className="input-group" style={{ flexDirection: "column" }}>
                                {
                                    _OtherLoan !== undefined && _OtherLoan.length !== 0
                                        ?
                                        _OtherLoan.map((item, index) => {
                                            return (
                                                <div key={index} style={{ marginBottom: "15px" }}>
                                                    <label>{item.institutionName}</label>
                                                    <label>Loan Limit:  ${AddCommas(String(item.loanLimit))}</label>
                                                    <label>Owing:  ${AddCommas(String(item.amountOwed))}</label>
                                                    <label>Repayment:  ${AddCommas(String(item.repaymentAmount))} {item.repaymentType}</label>
                                                </div>
                                            );
                                        })
                                        : "No"
                                }
                            </div>
                        </div>
                    </div >

                    <p className="content-title">Expenses</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Total living expenses</p>
                            </div>
                            <div className="input-group">
                                <label>${AddCommas(String(_carloan.expenses?.livingExpenses))} {_carloan.expenses?.livingExpensesFrequency1}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Total other expenses</p>
                            </div>
                            <div className="input-group">
                                <label>${AddCommas(String(_carloan.expenses?.otherlivingExpenses))} {_carloan.expenses?.otherlivingExpensesFrequency1}</label>
                            </div>
                        </div>
                    </div >


                    <p className="content-title">Foreseeable changes</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Foreseeable changes</p>
                            </div>
                            <div className="input-group">
                                {
                                    _carloan.foreseeableChanges?.foreseeableChanges === true ?
                                        <>
                                            <label>Temporary Decrease in Income {_carloan.foreseeableChanges?.foreseeableChanges === true ? "yes" : "No"}</label>
                                            <label>Permanent Decrease in Income {_carloan.foreseeableChanges?.Permanentdecreaseinincome === true ? "yes" : "No"}</label>
                                            <label>Increase in Expenses{_carloan.foreseeableChanges?.Increaseinexpenses === true ? "yes" : "No"}</label>
                                            <label>Increase in Loan Repayments {_carloan.foreseeableChanges?.Increaseinloanrepayments === true ? "yes" : "No"}</label>

                                        </> :
                                        <label>No</label>
                                }

                            </div>
                        </div>
                    </div >

                    <p className="content-title">About you</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Full name</p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.personalDetails?.title} {_aboutyou.personalDetails?.firstName} {_aboutyou.personalDetails?.middleName} {_aboutyou.personalDetails?.lastName}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Known by any other name</p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.personalDetails?.anyOtherName === true ? _aboutyou.personalDetails?.alternateName : "No"}</label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Foreign Tax Resident</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group" style={{ flexDirection: "column" }}>
                                    {
                                        _Taxresidence !== undefined && _Taxresidence.length !== 0
                                            ?
                                            _Taxresidence.map((item, index) => {
                                                return (
                                                    <div key={index} style={{ marginBottom: "15px" }}>
                                                        <label> Foreign TIN : {item.ForiegnTIN}</label>
                                                        <label> Tax Residence Country : {item.taxResidenceCountry}</label>
                                                    </div>
                                                );
                                            })
                                            : "No"
                                    }
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Date of birth</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group" >
                                    <label>
                                        {_aboutyou.personalDetails?.dateOfBirth?.day} {getMonthName(parseInt(_aboutyou.personalDetails?.dateOfBirth?.month))} {_aboutyou.personalDetails?.dateOfBirth?.year}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Gender</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group">
                                    <label>
                                        {_aboutyou.personalDetails?.title === "Mr" ? "Male" : "Female"}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Driver's licence number</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group">
                                    <label>
                                        {_aboutyou.personalDetails?.drivingLicense?.number}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Licence expiry</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group">
                                    <label>
                                        {_aboutyou.personalDetails?.drivingLicense?.expiryDate?.day} {getMonthName(parseInt(_aboutyou.personalDetails?.drivingLicense?.expiryDate?.month))} {_aboutyou.personalDetails?.drivingLicense?.expiryDate?.year}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>State of Issue</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group">
                                    <label>
                                        {_aboutyou.personalDetails?.drivingLicense?.stateOfIssue}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Contact details</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group" style={{ flexDirection: "column" }}>
                                    <label>
                                        Mobile: {_aboutyou.personalDetails?.contactDetails?.mobile}
                                    </label>
                                    <label>
                                        Email: {_aboutyou.personalDetails?.contactDetails?.email}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Residential address</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group" >
                                    <label>
                                        {_aboutyou.residentialDetails?.currentAddress?.address}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Length of time at this address</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group" >
                                    <label>
                                        {_aboutyou.residentialDetails?.currentAddress?.lengthOfStay}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Previous residential address</p>
                            </div>
                            <div className="input-group">
                                <div className="input-group" style={{ flexDirection: "column" }} >

                                    {_aboutyou.residentialDetails?.previousAddress === false ?
                                        <>
                                            <label>Address 1: {_aboutyou.residentialDetails?.previousAddressDetails?.addressLine1}</label>
                                            <label>Address 2: {_aboutyou.residentialDetails?.previousAddressDetails?.addressLine2}</label>
                                            <label>City: {_aboutyou.residentialDetails?.previousAddressDetails?.city}</label>
                                            <label>State: {_aboutyou.residentialDetails?.previousAddressDetails?.state}</label>
                                            <label>Postcode: {_aboutyou.residentialDetails?.previousAddressDetails?.postcode}</label>
                                            <label>Length of Time Staying: {_aboutyou.residentialDetails?.previousAddressDetails?.lengthOfStay}</label>

                                        </> : <label>No</label>}

                                </div>
                            </div>
                        </div>
                    </div >

                    <p className="content-title">Employment details</p>
                    <hr></hr>
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Employment type
                                </p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.employmentDetails?.currentEmployment?.type} </label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Industry type
                                </p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.employmentDetails?.currentEmployment?.industryCategory} </label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Occupation
                                </p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.employmentDetails?.currentEmployment?.occupation} </label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Business / Company Name
                                </p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.employmentDetails?.currentEmployment?.companyName} </label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Length of time self employed
                                </p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.employmentDetails?.currentEmployment?.lengthOfEmployment} </label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Previous employment type
                                </p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.employmentDetails?.previousEmployment?.type} </label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Employer Name
                                </p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.employmentDetails?.previousEmployment?.employerName} </label>
                            </div>
                        </div>
                    </div >
                    <div className="content">
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Length Of Employment
                                </p>
                            </div>
                            <div className="input-group">
                                <label>{_aboutyou.employmentDetails?.previousEmployment?.lengthOfEmployment} </label>
                            </div>
                        </div>
                    </div >

                </div>
                <div className="CarLoanFormContent" style={{ marginTop: "25px", display: "flex", justifyContent: "flex-end" }}>
                    <button className="btn btn-danger" style={{ margin: "20px 10px 10px 0px" }} onClick={() => SubmitFormData()} >Submit</button>
                </div>
            </>
        )
    }

    return <>
        {
            fnReviewForm()
        }
    </>;
}

export default Review;
