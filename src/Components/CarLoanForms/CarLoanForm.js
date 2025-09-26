import React, { useEffect, useRef, useState } from "react";
import "./CarLoanForm.css";
import Layout from "../Layout";
import { Radio, RadioGroup, FormControlLabel, FormControl, Button, ButtonGroup, FormGroup, Checkbox } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { set } from "date-fns";
// Ensure these functions are defined in CarLoanFormJSON.js
import { useSnackbar } from "notistack";
import HomeLoanLiabilities from "./Liabilities/HomeLoanLiabilities";
import PersonalLoanLiabilities from "./Liabilities/PersonalLoanLiabilities";
import CreditCardLoanLiabilities from "./Liabilities/CreditCardLoanLiabilities";
import OtherLiabilities from "./Liabilities/OtherLiabilities";
import { handleKeyPress, handleKeyPressString, AddCommas } from "../../Components/Pages/Calculator/Helper";
import AboutYou from "./AboutYou";
import ReviewComponent from "./Review";



function CarLoanForm() {
    const { enqueueSnackbar } = useSnackbar();

    const [Step1, setStep1] = useState(true);
    const [Step2, setStep2] = useState(false);
    const [Step3, setStep3] = useState(false);

    const [Finances, setFinances] = useState(true);
    const [Aboutyou, setAboutyou] = useState(false);
    const [Review, setReview] = useState(false);


    //Step1 Form
    //Before we get started
    const [firstName, setFirstName] = useState(null);
    const [email, setEmail] = useState(null);

    //Loan Details
    const [loanpurpose, setLoanpurpose] = useState(null);
    const [refinance, setRefinance] = useState(null);
    const [costSaving, setcostSaving] = useState(null);
    const [moreFlexibility, setmoreFlexibility] = useState(null);
    const [changesinFinancialInstitution, setchangesinFinancialInstitution] = useState(null);
    const [confirmation, setConfirmation] = useState(null);

    const [amount, setAmount] = useState(null);
    const [overHowManyYears, setOverHowManyYears] = useState(null);
    const [engineType, setEngineType] = useState(null);
    const [state, setState] = useState(null);
    const [postcode, setPostcode] = useState(null);
    const [temporaryVisa, setTemporaryVisa] = useState(null);

    //Income - What you earn
    const [incomeAmount, setIncomeAmount] = useState(null);
    const [incomeFrequency, setIncomeFrequency] = useState(null);
    const [addOtherIncome, setaddOtherIncome] = useState(false);
    const [rentalIncome1, setRentalIncome1] = useState(null);
    const [rentalIncomeFrequency1, setRentalIncomeFrequency1] = useState(null);
    const [rentalIncome2, setRentalIncome2] = useState(null);
    const [rentalIncomeFrequency2, setRentalIncomeFrequency2] = useState(null);

    //Savings and other assets   
    const [anyProperties, setanyProperties] = useState(false);
    const [totalMarketValue, setTotalMarketValue] = useState(null);
    const [totalBalances, setTotalBalances] = useState(null);
    const [otherAssets, setOtherAssets] = useState(null);
    const [otherAssetsAmount, setOtherAssetsAmount] = useState(null);

    //Housing and relationship   
    const [relationshipStatus, setRelationshipStatus] = useState(null);
    const [dependants, setDependants] = useState(null);
    const [currentHousingSituation, setCurrentHousingSituation] = useState(null);

    //Liabilities
    const [anyhomeloan, setanyhomeloan] = useState(null);
    const [anypersonalloan, setanypersonalloan] = useState(null);
    const [anycreditcard, setanycreditcard] = useState(null);
    const [anyOtherLiabilities, setanyOtherLiabilities] = useState(null);

    //Expenses
    const [livingExpenses, setlivingExpenses] = useState(null);
    const [livingExpensesFrequency1, setlivingExpensesFrequency1] = useState(null);
    const [otherlivingExpenses, setotherlivingExpenses] = useState(null);
    const [otherlivingExpensesFrequency1, setotherlivingExpensesFrequency1] = useState(null);

    //Foreseeable changes
    const [foreseeableChanges, setforeseeableChanges] = useState(null);
    const [Temporarydecreaseinincome, setTemporarydecreaseinincome] = useState(null);
    const [Permanentdecreaseinincome, setPermanentdecreaseinincome] = useState(null);
    const [Increaseinexpenses, setIncreaseinexpenses] = useState(null);
    const [Increaseinloanrepayments, setIncreaseinloanrepayments] = useState(null);

    //Loan Summary
    const [establishmentFee, setEstablishmentFee] = useState("250");
    // const [repayment, setRepaayment] = useState("");
    const repayment = useRef()
    const [interestRate, setInterestRate] = useState("10.49");

    //useref
    const firstNameref = useRef(null);
    const emailref = useRef(null);


    const loanpurposeref = useRef(null);
    const refinanceref = useRef(null);
    const costSavingref = useRef(null);
    const confirmationref = useRef(null);


    const amountref = useRef(null);
    const overHowManyYearsref = useRef(null);
    const engineTyperef = useRef(null);
    const stateref = useRef(null);
    const postcoderef = useRef(null);

    const temporaryVisaref = useRef(null);
    const incomeAmountref = useRef(null);
    const incomeFrequencyref = useRef(null);
    const addOtherIncomeref = useRef(null);

    const rentalIncome1ref = useRef(null);
    const rentalIncomeFrequency1ref = useRef(null);
    const rentalIncome2ref = useRef(null);
    const rentalIncomeFrequency2ref = useRef(null);

    const anyPropertiesref = useRef(null);
    const totalMarketValueref = useRef(null);
    const totalBalancesref = useRef(null);
    const otherAssetsref = useRef(null);
    const otherAssetsAmountref = useRef(null);

    const relationshipStatusref = useRef(null);
    const dependantsref = useRef(null);
    const currentHousingSituationref = useRef(null);

    const anyhomeloanref = useRef(null);
    const anypersonalloanref = useRef(null);
    const anycreditcardref = useRef(null);
    const anyOtherLiabilitiesref = useRef(null);

    const livingExpensesref = useRef(null);
    const livingExpensesFrequency1ref = useRef(null);
    const otherlivingExpensesref = useRef(null);
    const otherlivingExpensesFrequency1ref = useRef(null);

    const foreseeableChangesref = useRef(null);
    const Temporarydecreaseinincomeref = useRef(null);
    const Permanentdecreaseininincomeref = useRef(null);
    const Increaseinexpensesref = useRef(null);
    const Increaseinloanrepaymentsref = useRef(null);




    let zoomLevel = 1; // Persistent zoom level

    function zoomIn() {
        let carloanform = document.getElementById("carloanform");
        zoomLevel += 0; // Increase zoom by 10%
        carloanform.style.transform = `scale(${zoomLevel})`;
    }

    useEffect(() => {
        fnGetLocalStorageDataandPopulate();
        fnGetStepsData();
    }, [])

    function fnGetStepsData() {
        const StepData = localStorage.getItem('stepsData');
        const Data = JSON.parse(StepData);
        if (Data !== undefined && Data !== null) {
            setStep1(Data.StepData.Step1);
            setStep2(Data.StepData.Step2);
            setStep3(Data.StepData.Step3);
        }
    }

    function fnGetLocalStorageDataandPopulate() {
        let data = localStorage.getItem('carloan');
        if (data) {
            const carloanData = JSON.parse(data);
            setFirstName(carloanData.beforeWeGetStarted.firstName);
            setEmail(carloanData.beforeWeGetStarted.email);

            setLoanpurpose(carloanData.loanDetails.loanpurpose);
            setRefinance(carloanData.loanDetails.refinance);
            setcostSaving(carloanData.loanDetails.costSaving);
            setmoreFlexibility(carloanData.loanDetails.moreFlexibility);
            setchangesinFinancialInstitution(carloanData.loanDetails.changesinFinancialInstitution);
            setConfirmation(carloanData.loanDetails.confirmation);
            setAmount(carloanData.loanDetails.amount);
            setOverHowManyYears(carloanData.loanDetails.overHowManyYears);
            setEngineType(carloanData.loanDetails.engineType);
            setState(carloanData.loanDetails.state);
            setPostcode(carloanData.loanDetails.postcode);
            setTemporaryVisa(carloanData.loanDetails.temporaryVisa);
            repayment.current = carloanData.loanDetails.repayment;

            setIncomeAmount(carloanData.income.incomeAmount);
            setIncomeFrequency(carloanData.income.incomeFrequency);
            setaddOtherIncome(carloanData.income.addOtherIncome);
            setRentalIncome1(carloanData.income.rentalIncome1);
            setRentalIncomeFrequency1(carloanData.income.rentalIncomeFrequency1);
            setRentalIncome2(carloanData.income.rentalIncome2);
            setRentalIncomeFrequency2(carloanData.income.rentalIncomeFrequency2);

            setanyProperties(carloanData.savingsAndAssets.anyProperties);
            setTotalMarketValue(carloanData.savingsAndAssets.totalMarketValue);
            setTotalBalances(carloanData.savingsAndAssets.totalBalances);
            setOtherAssets(carloanData.savingsAndAssets.otherAssets);
            setOtherAssetsAmount(carloanData.savingsAndAssets.otherAssetsAmount);

            setRelationshipStatus(carloanData.housingAndRelationship.relationshipStatus);
            setDependants(carloanData.housingAndRelationship.dependants);
            setCurrentHousingSituation(carloanData.housingAndRelationship.currentHousingSituation);

            setanyhomeloan(carloanData.liabilities.anyhomeloan);
            setanypersonalloan(carloanData.liabilities.anypersonalloan);
            setanycreditcard(carloanData.liabilities.anycreditcard);
            setanyOtherLiabilities(carloanData.liabilities.anyOtherLiabilities);

            setlivingExpenses(carloanData.expenses.livingExpenses);
            setlivingExpensesFrequency1(carloanData.expenses.livingExpensesFrequency1);
            setotherlivingExpenses(carloanData.expenses.otherlivingExpenses);
            setotherlivingExpensesFrequency1(carloanData.expenses.otherlivingExpensesFrequency1);

            setforeseeableChanges(carloanData.foreseeableChanges.foreseeableChanges);
            setTemporarydecreaseinincome(carloanData.foreseeableChanges.Temporarydecreaseinincome);
            setPermanentdecreaseinincome(carloanData.foreseeableChanges.Permanentdecreaseinincome);
            setIncreaseinexpenses(carloanData.foreseeableChanges.Increaseinexpenses);
            setIncreaseinloanrepayments(carloanData.foreseeableChanges.Increaseinloanrepayments);

        }


    }


    function fnAreYouRefinancing(btntype) {
        const refinanceyes = document.getElementById("refinanceyes");
        const refinanceno = document.getElementById("refinanceno");

        if (btntype == refinanceyes.id) {
            refinanceyes.classList.add('btnactive');
            refinanceyes.classList.remove('btnnotactive');

            refinanceno.classList.remove('btnactive');
            refinanceno.classList.add('btnnotactive');
            setRefinance(true);
        }

        if (btntype == refinanceno.id) {
            refinanceno.classList.add('btnactive');
            refinanceno.classList.remove('btnnotactive');

            refinanceyes.classList.remove('btnactive');
            refinanceyes.classList.add('btnnotactive');
            setRefinance(false);
        }
    }

    function fnAnyProperties(btntype) {
        const propertyyes = document.getElementById("propertyyes");
        const propertyno = document.getElementById("propertyno");

        if (btntype == propertyyes.id) {
            propertyyes.classList.add('btnactive');
            propertyyes.classList.remove('btnnotactive');

            propertyno.classList.remove('btnactive');
            propertyno.classList.add('btnnotactive');
            setanyProperties(true);
        }

        if (btntype == propertyno.id) {
            propertyno.classList.add('btnactive');
            propertyno.classList.remove('btnnotactive');

            propertyyes.classList.remove('btnactive');
            propertyyes.classList.add('btnnotactive');
            setanyProperties(false);
        }
    }

    function fnHomeLoan(btntype) {
        const homeloanyes = document.getElementById("homeloanyes");
        const homeloanno = document.getElementById("homeloanno");

        if (btntype == homeloanyes.id) {
            homeloanyes.classList.add('btnactive');
            homeloanyes.classList.remove('btnnotactive');

            homeloanno.classList.remove('btnactive');
            homeloanno.classList.add('btnnotactive');
            setanyhomeloan(true);

        }

        if (btntype == homeloanno.id) {
            homeloanno.classList.add('btnactive');
            homeloanno.classList.remove('btnnotactive');

            homeloanyes.classList.remove('btnactive');
            homeloanyes.classList.add('btnnotactive');
            setanyhomeloan(false);
            localStorage.removeItem('homeloan');
        }
    }

    function fnAnyCreditCardLoan(btntype) {
        const creditcardyes = document.getElementById("creditcardyes");
        const creditcardno = document.getElementById("creditcardno");

        if (btntype == creditcardyes.id) {
            creditcardyes.classList.add('btnactive');
            creditcardyes.classList.remove('btnnotactive');

            creditcardno.classList.remove('btnactive');
            creditcardno.classList.add('btnnotactive');
            setanycreditcard(true);
        }

        if (btntype == creditcardno.id) {
            creditcardno.classList.add('btnactive');
            creditcardno.classList.remove('btnnotactive');

            creditcardyes.classList.remove('btnactive');
            creditcardyes.classList.add('btnnotactive');
            setanycreditcard(false);
            localStorage.removeItem('CreditCardloan');
        }
    }


    function fnAnyPersonalLoan(btntype) {
        const personalloanyes = document.getElementById("personalloanyes");
        const personalloanno = document.getElementById("personalloanno");

        if (btntype == personalloanyes.id) {
            personalloanyes.classList.add('btnactive');

            personalloanyes.classList.remove('btnnotactive');
            personalloanno.classList.remove('btnactive');
            personalloanno.classList.add('btnnotactive');
            setanypersonalloan(true);
        }

        if (btntype == personalloanno.id) {
            personalloanno.classList.add('btnactive');
            personalloanno.classList.remove('btnnotactive');

            personalloanyes.classList.remove('btnactive');
            personalloanyes.classList.add('btnnotactive');
            setanypersonalloan(false);
            localStorage.removeItem('Personalloan');
        }
    }

    function fnAnyOtherLiabilities(btntype) {
        const Otherliabilitiesyes = document.getElementById("Otherliabilitiesyes");
        const Otherliabilitiesno = document.getElementById("Otherliabilitiesno");

        if (btntype == Otherliabilitiesyes.id) {
            Otherliabilitiesyes.classList.add('btnactive');
            Otherliabilitiesyes.classList.remove('btnnotactive');

            Otherliabilitiesno.classList.remove('btnactive');
            Otherliabilitiesno.classList.add('btnnotactive');
            setanyOtherLiabilities(true);
        }

        if (btntype == Otherliabilitiesno.id) {
            Otherliabilitiesno.classList.add('btnactive');
            Otherliabilitiesno.classList.remove('btnnotactive');

            Otherliabilitiesyes.classList.remove('btnactive');
            Otherliabilitiesyes.classList.add('btnnotactive');
            setanyOtherLiabilities(false);
            localStorage.removeItem('OtherLoan');
        }
    }

    function fnLoanPurpose(event) {
        const selectedValue = event.target.value;
        setLoanpurpose(selectedValue);
    }

    function fnforeseeableChanges(btntype) {
        const foreseeableChangesyes = document.getElementById("foreseeableChangesyes");
        const foreseeableChangesno = document.getElementById("foreseeableChangesno");

        if (btntype == foreseeableChangesyes.id) {
            foreseeableChangesyes.classList.add('btnactive');
            foreseeableChangesyes.classList.remove('btnnotactive');

            foreseeableChangesno.classList.remove('btnactive');
            foreseeableChangesno.classList.add('btnnotactive');
            setforeseeableChanges(true);
        }

        if (btntype == foreseeableChangesno.id) {
            foreseeableChangesno.classList.add('btnactive');
            foreseeableChangesno.classList.remove('btnnotactive');

            foreseeableChangesyes.classList.remove('btnactive');
            foreseeableChangesyes.classList.add('btnnotactive');
            setforeseeableChanges(false);
        }
    }

    function fnSetStep(step) {
        if (step === 'step1') {
            setStep1(true);
            setStep2(false);
            setStep3(false);
        }
        else if (step === 'step2') {
            const carloanform = localStorage.getItem('carloan');
            const Data = JSON.parse(carloanform);
            if (Data !== undefined && Data !== null) {
                setStep1(false);
                setStep2(true);
                setStep3(false);
            }
            else {
                enqueueSnackbar("Please fill the Step1 Finances form", { variant: "warning" });
                return;
            }
        }
        else if (step === 'step3') {
            const aboutyouform = localStorage.getItem('aboutyou');
            const Data = JSON.parse(aboutyouform);
            if (Data !== undefined && Data !== null) {
                setStep1(false);
                setStep2(false);
                setStep3(true);
            }
            else {
                enqueueSnackbar("Please fill the Step2 about you form", { variant: "warning" });
                return;
            }
        }
    }

    function createStep1Json(
        firstName,
        email,
        loanpurpose,
        refinance,
        costSaving,
        moreFlexibility,
        changesinFinancialInstitution,
        confirmation,
        amount,
        overHowManyYears,
        engineType,
        state,
        postcode,
        temporaryVisa,
        incomeAmount,
        incomeFrequency,
        addOtherIncome,
        rentalIncome1,
        rentalIncomeFrequency1,
        rentalIncome2,
        rentalIncomeFrequency2,
        anyProperties,
        totalMarketValue,
        totalBalances,
        otherAssets,
        otherAssetsAmount,
        relationshipStatus,
        dependants,
        currentHousingSituation,
        anyhomeloan,
        anypersonalloan,
        anycreditcard,
        anyOtherLiabilities,
        livingExpenses,
        livingExpensesFrequency1,
        otherlivingExpenses,
        otherlivingExpensesFrequency1,
        foreseeableChanges,
        Temporarydecreaseinincome,
        Permanentdecreaseinincome,
        Increaseinexpenses,
        Increaseinloanrepayments,
        homeloadData,
        personalloadData,
        creditcardData,
        otherLiabilitiesData,
        repaymentAmount
    ) {
        return {
            beforeWeGetStarted: {
                firstName: firstName,
                email: email
            },
            loanDetails: {
                loanpurpose: loanpurpose,
                refinance: refinance,
                costSaving: costSaving,
                moreFlexibility: moreFlexibility,
                changesinFinancialInstitution: changesinFinancialInstitution,
                confirmation: confirmation,
                amount: amount,
                overHowManyYears: overHowManyYears,
                engineType: engineType,
                state: state,
                postcode: postcode,
                temporaryVisa: temporaryVisa,
                repayment: repaymentAmount
            },
            income: {
                incomeAmount: incomeAmount,
                incomeFrequency: incomeFrequency,
                addOtherIncome: addOtherIncome,
                rentalIncome1: rentalIncome1,
                rentalIncomeFrequency1: rentalIncomeFrequency1,
                rentalIncome2: rentalIncome2,
                rentalIncomeFrequency2: rentalIncomeFrequency2
            },
            savingsAndAssets: {
                anyProperties: anyProperties,
                totalMarketValue: totalMarketValue,
                totalBalances: totalBalances,
                otherAssets: otherAssets,
                otherAssetsAmount: otherAssetsAmount
            },
            housingAndRelationship: {
                relationshipStatus: relationshipStatus,
                dependants: dependants,
                currentHousingSituation: currentHousingSituation
            },
            liabilities: {
                anyhomeloan: anyhomeloan,
                homeloadData: anyhomeloan ? homeloadData : [],
                anypersonalloan: anypersonalloan,
                personalloadData: anypersonalloan ? personalloadData : [],
                anycreditcard: anycreditcard,
                creditcardData: anycreditcard ? creditcardData : [],
                anyOtherLiabilities: anyOtherLiabilities,
                otherLiabilitiesData: anyOtherLiabilities ? otherLiabilitiesData : []
            },
            expenses: {
                livingExpenses: livingExpenses,
                livingExpensesFrequency1: livingExpensesFrequency1,
                otherlivingExpenses: otherlivingExpenses,
                otherlivingExpensesFrequency1: otherlivingExpensesFrequency1
            },
            foreseeableChanges: {
                foreseeableChanges: foreseeableChanges,
                Temporarydecreaseinincome: foreseeableChanges ? Temporarydecreaseinincome : null,
                Permanentdecreaseinincome: foreseeableChanges ? Permanentdecreaseinincome : null,
                Increaseinexpenses: foreseeableChanges ? Increaseinexpenses : null,
                Increaseinloanrepayments: foreseeableChanges ? Increaseinloanrepayments : null
            },
        };
    }

    function createStepData(Step1, Step2, Step3) {
        return {
            StepData: {
                Step1: Step1,
                Step2: Step2,
                Step3: Step3
            }
        }
    }

    function SaveforLater() {

        const homeloadData = anyhomeloan ? JSON.parse(localStorage.getItem('homeloan')) : [];
        const personalloadData = anypersonalloan ? JSON.parse(localStorage.getItem('Personalloan')) : [];
        const creditcardData = anycreditcard ? JSON.parse(localStorage.getItem('CreditCardloan')) : [];
        const otherLiabilitiesData = anyOtherLiabilities ? JSON.parse(localStorage.getItem('OtherLoan')) : [];

        if (firstName === null || firstName.length === 0) {
            enqueueSnackbar("Please enter financial institution", { variant: "warning" });
            if (firstNameref.current) {
                firstNameref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                firstNameref.current.focus();
            }
            return;
        }
        if (email === null || email.length === 0) {
            enqueueSnackbar("Please enter email", { variant: "warning" });
            if (emailref.current) {
                emailref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                emailref.current.focus();
            }
            return;
        }

        if (loanpurpose === null) {
            enqueueSnackbar("Please select loan purpose", { variant: "warning" });
            if (loanpurposeref.current) {
                loanpurposeref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                loanpurposeref.current.focus();
            }
            return;
        }

        if (loanpurpose === "usedCar" && refinance === null) {
            enqueueSnackbar("Please select are you refinancing", { variant: "warning" });
            if (refinanceref.current) {
                refinanceref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                refinanceref.current.focus();
            }
            return;
        }
        if (refinance === true && costSaving === null && moreFlexibility === null && changesinFinancialInstitution === null) {
            enqueueSnackbar("Please select reason to refinancing/consolidate", { variant: "warning" });
            if (costSavingref.current) {
                confirmationref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                confirmationref.current.focus();
            }
            return;
        }

        if (refinance === true && confirmation === null) {
            enqueueSnackbar("Please confirm you have understood the above", { variant: "warning" });
            if (confirmationref.current) {
                confirmationref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                confirmationref.current.focus();
            }
            return;
        }

        if (amount === null || amount.length === 0) {
            enqueueSnackbar("Please enter refinance amount", { variant: "warning" });
            if (amountref.current) {
                amountref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                amountref.current.focus();
            }
            return;
        }

        if (overHowManyYears === null) {
            enqueueSnackbar("Please select over how many years", { variant: "warning" });
            if (overHowManyYearsref.current) {
                overHowManyYearsref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                overHowManyYearsref.current.focus();
            }
            return;
        }

        if (engineType === null) {
            enqueueSnackbar("Please select engine type", { variant: "warning" });
            if (engineTyperef.current) {
                engineTyperef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                engineTyperef.current.focus();
            }
            return;
        }

        if (state === null) {
            enqueueSnackbar("Please select state", { variant: "warning" });
            if (stateref.current) {
                stateref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                stateref.current.focus();
            }
            return;
        }

        if (postcode === null || postcode.length < 4) {
            enqueueSnackbar("Please enter valid postcode", { variant: "warning" });
            if (postcoderef.current) {
                postcoderef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                postcoderef.current.focus();
            }
            return;
        }

        if (incomeAmount === null || incomeAmount.length === 0) {
            enqueueSnackbar("Please enter income amount", { variant: "warning" });
            if (incomeAmountref.current) {
                incomeAmountref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                incomeAmountref.current.focus();
            }
            return;
        }

        if (incomeFrequency === null || incomeFrequency === "0") {
            enqueueSnackbar("Please select income frequency", { variant: "warning" });
            if (incomeFrequencyref.current) {
                incomeFrequencyref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                incomeFrequencyref.current.focus();
            }
            return;
        }

        if (addOtherIncome === true) {
            if (rentalIncome1 === null || rentalIncome1.length === 0) {
                enqueueSnackbar("Please enter rental income", { variant: "warning" });
                if (rentalIncome1ref.current) {
                    rentalIncome1ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    rentalIncome1ref.current.focus();
                }
                return;
            }

            if (rentalIncomeFrequency1 === null || rentalIncomeFrequency1 === "0") {
                enqueueSnackbar("Please select rental income frequency", { variant: "warning" });
                if (rentalIncomeFrequency1ref.current) {
                    rentalIncomeFrequency1ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    rentalIncomeFrequency1ref.current.focus();
                }
                return;
            }
        }

        if (anyProperties === null) {
            enqueueSnackbar("Please select any properties", { variant: "warning" });
            if (anyPropertiesref.current) {
                anyPropertiesref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anyPropertiesref.current.focus();
            }
            return;
        }

        if (anyProperties === true) {
            if (totalMarketValue === null || totalMarketValue.length === 0) {
                enqueueSnackbar("Please enter total market value", { variant: "warning" });
                if (totalMarketValueref.current) {
                    totalMarketValueref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    totalMarketValueref.current.focus();
                }
                return;
            }
        }

        if (totalBalances === null || totalBalances.length === 0) {
            enqueueSnackbar("Please enter total balances", { variant: "warning" });
            if (totalBalancesref.current) {
                totalBalancesref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                totalBalancesref.current.focus();
            }
            return;
        }

        if (otherAssets === null || otherAssets === "0") {
            enqueueSnackbar("Please enter other assets", { variant: "warning" });
            if (otherAssetsref.current) {
                otherAssetsref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                otherAssetsref.current.focus();
            }
            return;
        }

        if (otherAssetsAmount === null || otherAssetsAmount.length === 0) {
            enqueueSnackbar("Please enter other assets amount", { variant: "warning" });
            if (otherAssetsAmountref.current) {
                otherAssetsAmountref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                otherAssetsAmountref.current.focus();
            }
            return;
        }

        if (relationshipStatus === null || relationshipStatus === "0") {
            enqueueSnackbar("Please select relationship status", { variant: "warning" });
            if (relationshipStatusref.current) {
                relationshipStatusref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                relationshipStatusref.current.focus();
            }
            return;
        }

        // if (dependants === null || dependants.length === 0) {
        //     enqueueSnackbar("Please enter dependants", { variant: "warning" });
        //     if (dependantsref.current) {
        //         dependantsref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        //         dependantsref.current.focus();
        //     }
        //     return;
        // }

        if (currentHousingSituation === null || currentHousingSituation === "0") {
            enqueueSnackbar("Please select current housing situation", { variant: "warning" });
            if (currentHousingSituationref.current) {
                currentHousingSituationref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                currentHousingSituationref.current.focus();
            }
            return;
        }

        if (anyhomeloan === null) {
            enqueueSnackbar("Please select any home loan", { variant: "warning" });
            if (anyhomeloanref.current) {
                anyhomeloanref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anyhomeloanref.current.focus();
            }
            return;
        }

        if (anyhomeloan === true) {
            if (homeloadData.length === 0) {
                enqueueSnackbar("Enter one or more home loan details", { variant: "warning" });
                anyhomeloanref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anyhomeloanref.current.focus();
                return;
            }
        }

        if (anypersonalloan === null) {
            enqueueSnackbar("Please select any personal loan", { variant: "warning" });
            if (anypersonalloanref.current) {
                anypersonalloanref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anypersonalloanref.current.focus();
            }
            return;
        }

        if (anypersonalloan === true) {
            if (personalloadData.length === 0) {
                enqueueSnackbar("Enter one or more personal loan details", { variant: "warning" });
                anypersonalloanref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anypersonalloanref.current.focus();
                return;
            }
        }

        if (anycreditcard === null) {
            enqueueSnackbar("Please select any credit card", { variant: "warning" });
            if (anycreditcardref.current) {
                anycreditcardref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anycreditcardref.current.focus();
            }
            return;
        }

        if (anycreditcard === true) {
            if (creditcardData.length === 0) {
                enqueueSnackbar("Enter one or more credit card details", { variant: "warning" });
                anycreditcardref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anycreditcardref.current.focus();
                return;
            }
        }

        if (anyOtherLiabilities === null) {
            enqueueSnackbar("Please select any other liabilities", { variant: "warning" });
            if (anyOtherLiabilitiesref.current) {
                anyOtherLiabilitiesref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anyOtherLiabilitiesref.current.focus();
            }
            return;
        }

        if (anyOtherLiabilities === true) {
            if (otherLiabilitiesData.length === 0) {
                enqueueSnackbar("Enter one or more other liabilities details", { variant: "warning" });
                anyOtherLiabilitiesref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anyOtherLiabilitiesref.current.focus();
                return;
            }
        }

        if (livingExpenses === null || livingExpenses.length == 0) {
            enqueueSnackbar("Please enter living expenses", { variant: "warning" });
            if (livingExpensesref.current) {
                livingExpensesref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                livingExpensesref.current.focus();
            }
            return;
        }

        if (livingExpensesFrequency1 === null || livingExpensesFrequency1 === "0") {
            enqueueSnackbar("Please select living expenses frequency", { variant: "warning" });
            if (livingExpensesFrequency1ref.current) {
                livingExpensesFrequency1ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                livingExpensesFrequency1ref.current.focus();
            }
            return;
        }

        if (otherlivingExpenses === null || otherlivingExpenses.length == 0) {
            enqueueSnackbar("Please enter other living expenses", { variant: "warning" });
            if (otherlivingExpensesref.current) {
                otherlivingExpensesref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                otherlivingExpensesref.current.focus();
            }
            return;
        }

        if (otherlivingExpensesFrequency1 === null || otherlivingExpensesFrequency1 === "0") {
            enqueueSnackbar("Please select other living expenses frequency", { variant: "warning" });
            if (otherlivingExpensesFrequency1ref.current) {
                otherlivingExpensesFrequency1ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                otherlivingExpensesFrequency1ref.current.focus();
            }
            return;
        }

        if (foreseeableChanges === null) {
            enqueueSnackbar("Please select foreseeable changes", { variant: "warning" });
            if (foreseeableChangesref.current) {
                foreseeableChangesref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                foreseeableChangesref.current.focus();
            }
            return;
        }

        if (foreseeableChanges === true) {
            if (Temporarydecreaseinincome == null && Permanentdecreaseinincome == null && Increaseinexpenses == null && Increaseinloanrepayments == null) {
                enqueueSnackbar("Select one or more circumstances that apply", { variant: "warning" });
                if (Temporarydecreaseinincomeref.current) {
                    Temporarydecreaseinincomeref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    Temporarydecreaseinincomeref.current.focus();
                }
                return;
            }
        }

        const step1Json = createStep1Json(
            firstName,
            email,
            loanpurpose,
            refinance,
            costSaving,
            moreFlexibility,
            changesinFinancialInstitution,
            confirmation,
            amount,
            overHowManyYears,
            engineType,
            state,
            postcode,
            temporaryVisa,
            incomeAmount,
            incomeFrequency,
            addOtherIncome,
            rentalIncome1,
            rentalIncomeFrequency1,
            rentalIncome2,
            rentalIncomeFrequency2,
            anyProperties,
            totalMarketValue,
            totalBalances,
            otherAssets,
            otherAssetsAmount,
            relationshipStatus,
            dependants,
            currentHousingSituation,
            anyhomeloan,
            anypersonalloan,
            anycreditcard,
            anyOtherLiabilities,
            livingExpenses,
            livingExpensesFrequency1,
            otherlivingExpenses,
            otherlivingExpensesFrequency1,
            foreseeableChanges,
            Temporarydecreaseinincome,
            Permanentdecreaseinincome,
            Increaseinexpenses,
            Increaseinloanrepayments,
            homeloadData,
            personalloadData,
            creditcardData,
            otherLiabilitiesData,
            repayment.current
        );

        const stepsData = createStepData(Step1, Step1, Step3);

        localStorage.setItem('carloan', JSON.stringify(step1Json));
        localStorage.setItem('stepsData', JSON.stringify(stepsData));

        enqueueSnackbar("Step1 data saved successfully", { variant: "success" });
        setStep1(false);
        setStep2(true);
    }

    function fnfindLoanRepayment(years) {
        debugger;
        if (amount !== null && amount !== "" && years !== "0") {
            const year=parseInt(years);
            const principleamt = parseInt(amount) + parseInt(establishmentFee);
            calculateEMI(principleamt, interestRate, year);
        }
    }

    const calculateEMI = (principal, annualRate, tenureYears) => {
        debugger;
        const monthlyRate = (annualRate / 100) / 12;
        const totalMonths = tenureYears * 12;
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
        const totalPaidAmount = Math.round(emi * totalMonths)
        repayment.current = AddCommas(Math.round(emi));
    }

    return (
        <>
            <div id="carloanform" className="CarLoan">
                <div className="CarLoanHeader">
                    <text style={{}}> Car Loan</text>
                </div>
                <div className="CarLoanForm">
                    <div className="CarLoanFormSteps">
                        <div className={`step ${Step1 ? `border-bottom-theme-color` : `border-bottom-shade-color`}`} onClick={() => fnSetStep('step1')} style={{ borderRight: "1px solid var(--shade-color)" }}>
                            <p className="step1">Step 1.</p>
                            <p className="step-title">Finances</p>
                        </div>
                        <div className={`step ${Step2 ? `border-bottom-theme-color` : `border-bottom-shade-color`}`} onClick={() => fnSetStep('step2')} style={{ borderRight: "1px solid var(--shade-color)" }}>
                            <p className="step1">Step 2.</p>
                            <p className="step-title">About you</p>
                        </div>
                        <div className={`step ${Step3 ? `border-bottom-theme-color` : `border-bottom-shade-color`}`} onClick={() => fnSetStep('step3')}>
                            <p className="step1">Step 3.</p>
                            <p className="step-title">Review</p>
                        </div>
                    </div>
                    {
                        Step1 && !Step2 && !Step3 && Step1 !== null ? (
                            <>

                                <div className="CarLoanFormContent">
                                    <p className="content-title">Before we get started</p>
                                    <hr></hr>
                                    <p className="content-title2">Don't lose the hard work you've done. We'll save your progress so you can continue from where you left off</p>
                                    <div className="content">
                                        <div className="controls">
                                            <div className="input-group-label">
                                                <p>First name</p>
                                            </div>
                                            <div className="input-group">
                                                <input type="text" value={firstName} ref={firstNameref} onChange={(e) => { setFirstName(e.target.value); handleKeyPressString(e) }} maxLength={50} onKeyDown={handleKeyPressString} placeholder="As shown on your ID"></input>
                                            </div>
                                        </div>
                                        <div className="controls">
                                            <div className="input-group-label">
                                                <p>Email</p>
                                            </div>
                                            <div className="input-group">
                                                <input type="email" value={email} ref={emailref} onChange={(e) => setEmail(e.target.value)} maxLength={70} placeholder=""></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CarLoanFormContent" style={{ paddingBottom: "35px" }}>
                                    <p className="content-title">Loan details</p>
                                    <hr></hr>
                                    <div className="content">
                                        <div className="controls">
                                            <div className="input-group-label">
                                                <p>Loan purpose</p>
                                            </div>
                                            <div className="input-group">
                                                <FormControl>
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="row-radio-buttons-group"
                                                    >
                                                        <FormControlLabel id="newcar" ref={loanpurposeref}
                                                            value="newCar"
                                                            control={<Radio className="custom-radio" checked={loanpurpose == "newCar" ? true : false} onChange={(e) => setLoanpurpose(e.target.value)} />}
                                                            label={<span className="custom-label">New Car</span>}
                                                        />
                                                        <FormControlLabel id="usedCar" ref={loanpurposeref}
                                                            value="usedCar"
                                                            control={<Radio className="custom-radio" checked={loanpurpose == "usedCar" ? true : false} onChange={(e) => setLoanpurpose(e.target.value)} />}
                                                            label={<span className="custom-label">Used Car</span>}
                                                        />
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                        </div>

                                        {
                                            loanpurpose === "usedCar" && (
                                                <div className="controls">
                                                    <div className="input-group-label">
                                                        <p>Are you Refinancing?</p>
                                                    </div>
                                                    <div className="input-group">
                                                        <ButtonGroup variant="contained" ref={refinanceref} aria-label="Basic button group" style={{ borderRadius: "2px 2px 2px 2px" }}>
                                                            <Button id="refinanceyes" value={refinance} className={`btnleft ${refinance == true ? `btnactive` : `btnnotactive`} `} onClick={() => fnAreYouRefinancing('refinanceyes')}  >Yes</Button>
                                                            <Button id="refinanceno" value={refinance} className={`btnright ${refinance == false ? `btnactive` : `btnnotactive`} `} onClick={() => fnAreYouRefinancing('refinanceno')} >No</Button>
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                            )}

                                        {refinance === true && (
                                            <>
                                                <div className="controls" style={{ alignItems: "flex-start" }}>
                                                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                        <p style={{}}>Reason to refinancing/consolidate <n></n> </p>
                                                        <p style={{ color: "var(--text-color)", fontSize: "10px", position: "absolute", right: "0px", top: "17px" }}>You can select more than one</p>
                                                    </div>
                                                    <div className="input-group">
                                                        <FormGroup style={{ flexDirection: "column", gap: "20px" }} >
                                                            <FormControlLabel control={<Checkbox className="custom-checkbox" ref={costSavingref} checked={costSaving} onChange={() => setcostSaving(costSaving == null ? true : null)} />} label={<span className="custom-label">Cost saving</span>} />
                                                            <FormControlLabel control={<Checkbox className="custom-checkbox" checked={moreFlexibility} onChange={() => setmoreFlexibility(moreFlexibility == null ? true : null)} />} label={<span className="custom-label">More flexibility in repayment amount or frequency</span>} />
                                                            <FormControlLabel control={<Checkbox className="custom-checkbox" checked={changesinFinancialInstitution} onChange={() => setchangesinFinancialInstitution(changesinFinancialInstitution == null ? true : null)} />} label={<span className="custom-label">Change in financial institution</span>} />
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="controls" style={{ marginTop: "20px" }}>
                                                    <div className="input-group-label" >
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="instrunctions">
                                                            <div className="instrunctions-content">
                                                                <p><InfoOutlinedIcon /> Refinancing or consolidating debt? Remember to compare your current debt(s) with this loan and make sure you:</p>
                                                                <ul className="custom-list">
                                                                    <li>compare all fees, including break costs</li>
                                                                    <li>compare interest rates and repayment amounts</li>
                                                                    <li>check how much interest you'll pay over the term of the new loan</li>
                                                                    <li>learn about key features (ie fixed or variable rate).</li>
                                                                </ul>
                                                                <p>If you're chosen to refinance accounts held with us, we will close them after approving your new loan. We recommend that you close accounts held with another financial institution that you're chosen to refinance/consolidate.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="controls" style={{ marginTop: "20px" }}>
                                                    <div className="input-group-label" >
                                                    </div>
                                                    <div className="input-group">
                                                        <FormGroup>
                                                            <FormControlLabel control={<Checkbox className="custom-checkbox" ref={confirmationref} checked={confirmation} onChange={() => setConfirmation(confirmation == null ? true : null)} />} label={<span className="custom-label">I confirm I have understood the above</span>} />
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                            </>
                                        )}


                                        <div className="controls" style={{ marginTop: "15px" }}>
                                            <div className="input-group-label">
                                                <p>Amount</p>
                                            </div>
                                            <div className="input-group">
                                                <div className="join-dollar">
                                                    <label className="form-group-dollar">$</label>
                                                    <input type="text" value={amount} ref={amountref} onChange={(e) => setAmount(e.target.value)} onKeyDown={handleKeyPress} maxLength={10} placeholder="" style={{ borderRadius: "0px 2px 2px 0px", }} ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p>Total loan amount</p>
                                            </div>
                                            <div className="input-group" style={{ flexDirection: "column" }}>
                                                <p className="loan-amount">$ {amount}</p>
                                                <p className="loan-amount-instruction">In applying for the total loan amount, please consider any current and future personal circumstances that may change or affect your financial position before proceeding. This includes things such as retirement, change in income, parental leave, medical and large expenditures.</p>
                                            </div>
                                        </div>
                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p>Over how many years?</p>
                                            </div>
                                            <div className="input-group" >
                                                <select value={overHowManyYears} ref={overHowManyYearsref} onChange={(e) => { setOverHowManyYears(e.target.value); fnfindLoanRepayment(e.target.value) }}>
                                                    <option value="" disabled selected>Please select</option>
                                                    <option value="1">1 year</option>
                                                    <option value="2">2 years</option>
                                                    <option value="3">3 years</option>
                                                    <option value="4">4 years</option>
                                                    <option value="5">5 years</option>
                                                    <option value="6">6 years</option>
                                                    <option value="7">7 years</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p>Engine type</p>
                                            </div>
                                            <div className="input-group">
                                                <select value={engineType} ref={engineTyperef} onChange={(e) => setEngineType(e.target.value)}>
                                                    <option value="0" disabled selected>Please select</option>
                                                    <option value="Electric">Electric</option>
                                                    <option value="Hybrid">Hybrid</option>
                                                    <option value="Petrol/Diesel/LPG">Petrol/Diesel/LPG</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p>State</p>
                                            </div>
                                            <div className="input-group">
                                                <select value={state} ref={stateref} onChange={(e) => setState(e.target.value)}>
                                                    <option value="0" disabled selected>Please select</option>
                                                    <option value="New South Wales (NSW)" label="New South Wales (NSW)">New South Wales (NSW)</option>
                                                    <option value="Northern Territory (NT)" label="Northern Territory (NT)">Northern Territory (NT)</option>
                                                    <option value="Queensland (QLD)" label="Queensland (QLD)">Queensland (QLD)</option>
                                                    <option value="South Australia (SA)" label="South Australia (SA)">South Australia (SA)</option>
                                                    <option value="Tasmania (TAS)" label="Tasmania (TAS)">Tasmania (TAS)</option>slot
                                                    <option value="Victoria (VIC)" label="Victoria (VIC)">Victoria (VIC)</option>slot
                                                    <option value="Western Australia (WA)" label="Western Australia (WA)">Western Australia (WA)</option>slot
                                                </select>
                                            </div>
                                        </div>
                                        <div className="controls">
                                            <div className="input-group-label">
                                                <p>Postcode</p>
                                            </div>
                                            <div className="input-group">
                                                <input type="text" value={postcode} ref={postcoderef} maxLength={5} onKeyDown={handleKeyPress} onChange={(e) => setPostcode(e.target.value)} ></input>
                                            </div>
                                        </div>
                                        <div className="controls">
                                            <div className="input-group-label" >
                                                <p>Tick this box if you are on a <span style={{ fontWeight: "800" }}> temporary</span> visa</p>
                                            </div>
                                            <div className="input-group">
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox className="custom-checkbox" ref={temporaryVisaref} checked={temporaryVisa ? true : false} onChange={() => setTemporaryVisa(temporaryVisa == null ? true : null)} />} />
                                                </FormGroup>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {
                                    repayment.current !== "" &&  repayment.current !== undefined && (<>
                                        <div className="CarLoanFormContent loansummary">
                                            <div className="SummaryHead">
                                                <h6>Loan Summary</h6>
                                            </div>
                                            <div className="bgBorder">
                                                <div className="SummaryDetail">
                                                    <div className="SummaryDetailChild">
                                                        <p>Loan amount and establishment fee</p>
                                                        <h6>${AddCommas(String(parseInt(establishmentFee) + parseInt(amount)))}</h6>
                                                    </div>
                                                    <div className="SummaryDetailChild">
                                                        <p>Repayments</p>
                                                        <h6>${AddCommas(String(repayment.current))}</h6>
                                                        <p>per month</p>
                                                    </div>
                                                    <div className="SummaryDetailChild">
                                                        <p>Loan term</p>
                                                        <h6>{overHowManyYears}</h6>
                                                        <p>Years</p>
                                                    </div>
                                                    <div className="SummaryDetailChild">
                                                        <p>Your personalised interest rate</p>
                                                        <h6>{interestRate}%</h6>
                                                        <p>p.a.</p>
                                                    </div>
                                                </div>
                                                <div className="Information">
                                                    <p>This summary does not constitute a quote or loan offer.</p>
                                                    <p>The loan amount includes the lending establishment fee and the repayment amount includes the monthly loan account fee.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                }


                                <div className="CarLoanFormContent">
                                    <p className="content-title">Income - What you earn</p>
                                    <hr></hr>
                                    <div className="content">
                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label">
                                                <p>Salary / wages / pension (after tax)</p>
                                            </div>
                                            <div className="input-group" style={{ flexDirection: "column", gap: "10px" }}>
                                                <div className="join-dollar">
                                                    <label className="form-group-dollar">$</label>
                                                    <input type="text" value={incomeAmount} ref={incomeAmountref} onKeyDown={handleKeyPress} onChange={(e) => setIncomeAmount(e.target.value)} maxLength={10} placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                                                    <select value={incomeFrequency} ref={incomeFrequencyref} onChange={(e) => setIncomeFrequency(e.target.value)} style={{ backgroundColor: "var(--theme-color)", color: "var(--white-color)", border: "1px solid var(--shade-color)", borderRadius: "2px 0px 0px 2px", padding: "5px", width: "100px" }}>
                                                        <option value="0" disabled selected>Select</option>
                                                        <option value="Monthly">Monthly</option>
                                                        <option value="Weekly">Weekly</option>
                                                        <option value="Fortnightly">Fortnightly</option>
                                                        <option value="Annual">Annual</option>
                                                    </select>
                                                </div>
                                                {
                                                    !addOtherIncome && (
                                                        <div style={{ display: "flex", justifyContent: "flex-start", gap: "40px", alignItems: "center", width: "80%" }} onClick={() => setaddOtherIncome(true)}>
                                                            <a className="addincome" ref={addOtherIncomeref} onClick={() => setaddOtherIncome(true)} > Add other income</a>
                                                            <HelpOutlineOutlinedIcon style={{ color: "var(--theme-color)", fontSize: "20px" }} />
                                                        </div>
                                                    )
                                                }
                                            </div>

                                        </div>
                                        {
                                            addOtherIncome && (
                                                <div style={{ borderTop: "1px solid var(--theme-color)", borderBottom: "1px solid var(--theme-color)", padding: "15px 0px", backgroundColor: "var(--theme-fade-color)", width: "100%", position: "relative" }}>
                                                    <div className="controls renTalIncome" >
                                                        <ClearOutlinedIcon style={{ position: "absolute", right: "20", top: "10", color: "red", zIndex: "999" }} onClick={() => setaddOtherIncome(false)} />
                                                        <div className="input-group-label ">
                                                            <p>Rental income (if any)</p>
                                                        </div>
                                                        <div className="input-group" style={{ flexDirection: "column", gap: "10px" }}>
                                                            <div className="join-dollar">
                                                                <label className="form-group-dollar">$</label>
                                                                <input type="text" value={rentalIncome1} ref={rentalIncome1ref} onKeyDown={handleKeyPress} onChange={(e) => setRentalIncome1(e.target.value)} maxLength={10} placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%", backgroundColor: "white" }} ></input>
                                                                <select value={rentalIncomeFrequency1} ref={rentalIncomeFrequency1ref} onChange={(e) => setRentalIncomeFrequency1(e.target.value)} style={{ backgroundColor: "var(--theme-color)", color: "var(--white-color)", border: "1px solid var(--shade-color)", borderRadius: "2px 0px 0px 2px", padding: "5px", width: "100px" }}>
                                                                    <option value="0" disabled selected>Select</option>
                                                                    <option value="Monthly">Monthly</option>
                                                                    <option value="Weekly">Weekly</option>
                                                                    <option value="Fortnightly">Fortnightly</option>
                                                                    <option value="Annual">Annual</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="controls">
                                                        <ClearOutlinedIcon style={{ position: "absolute", right: "20", top: "10", color: "red" }} />
                                                        <div className="input-group-label">
                                                            <p>Rental income (if any)</p>
                                                        </div>
                                                        <div className="input-group" style={{ flexDirection: "column", gap: "10px" }}>
                                                            <div className="join-dollar">
                                                                <label className="form-group-dollar">$</label>
                                                                <input type="text" value={rentalIncome2} onChange={(e) => setRentalIncome2(e.target.value)} onKeyDown={handleKeyPress} maxLength={10} placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%", backgroundColor: "white" }} ></input>
                                                                <select value={rentalIncomeFrequency2} onChange={(e) => setRentalIncomeFrequency2(e.target.value)} style={{ backgroundColor: "var(--theme-color)", color: "var(--white-color)", border: "1px solid var(--shade-color)", borderRadius: "2px 0px 0px 2px", padding: "5px", width: "100px" }}>
                                                                    <option value="0" disabled selected>Select</option>
                                                                    <option value="Monthly">Monthly</option>
                                                                    <option value="Weekly">Weekly</option>
                                                                    <option value="Fortnightly">Fortnightly</option>
                                                                    <option value="Annual">Annual</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                                <div className="CarLoanFormContent">
                                    <p className="content-title">Savings and other assets</p>
                                    <hr></hr>
                                    <div className="content">
                                        <div className="controls">
                                            <div className="input-group-label">
                                                <p>Do you own any properties?</p>
                                            </div>
                                            <div className="input-group">
                                                <ButtonGroup variant="contained" ref={anyPropertiesref} aria-label="Basic button group" style={{ borderRadius: "2px 2px 2px 2px" }}>
                                                    <Button id="propertyyes" value="true" className={`btnleft ${anyProperties === true ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyProperties('propertyyes')}>Yes</Button>
                                                    <Button id="propertyno" value="false" className={`btnright ${anyProperties === false ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyProperties('propertyno')}>No</Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>
                                        {
                                            anyProperties && (
                                                <div className="controls" style={{ marginTop: "15px" }}>
                                                    <div className="input-group-label">
                                                        <p>Total market value of all properties</p>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="join-dollar">
                                                            <label className="form-group-dollar">$</label>
                                                            <input type="text" value={totalMarketValue} ref={totalMarketValueref} onKeyDown={handleKeyPress} onChange={(e) => setTotalMarketValue(e.target.value)} maxLength={10} placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <div className="controls" style={{ marginTop: "15px" }}>
                                            <div className="input-group-label">
                                                <p>Total balances in savings / investment accounts (if any)</p>
                                            </div>
                                            <div className="input-group">
                                                <div className="join-dollar">
                                                    <label className="form-group-dollar">$</label>
                                                    <input type="text" value={totalBalances} ref={totalBalancesref} onKeyDown={handleKeyPress} onChange={(e) => setTotalBalances(e.target.value)} maxLength={10} placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p>Other assets (Please specify)</p>
                                            </div>
                                            <div className="input-group" >
                                                <select value={otherAssets} ref={otherAssetsref} onChange={(e) => setOtherAssets(e.target.value)}>
                                                    <option value="0" disabled selected>Please select</option>
                                                    <option value="Furniture content">Furniture content</option>
                                                    <option value="Additional sources">Additional sources</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="controls">
                                            <div className="input-group-label">
                                                <p>Other assets amount</p>
                                            </div>
                                            <div className="input-group">
                                                <div className="join-dollar">
                                                    <label className="form-group-dollar">$</label>
                                                    <input type="text" value={otherAssetsAmount} ref={otherAssetsAmountref} onKeyDown={handleKeyPress} onChange={(e) => setOtherAssetsAmount(e.target.value)} maxLength={10} placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="CarLoanFormContent">
                                    <p className="content-title">Housing and relationship</p>
                                    <hr></hr>
                                    <div className="content">

                                        <div className="controls" >
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p style={{ lineHeight: "15px" }}>What is your relationship status?</p>
                                            </div>
                                            <div className="input-group" >
                                                <select value={relationshipStatus} ref={relationshipStatusref} onChange={(e) => setRelationshipStatus(e.target.value)}>
                                                    <option value="0" disabled selected>Please select</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Married">Married</option>
                                                    <option value="De Facto">De Facto</option>
                                                    <option value="Separated">Separated</option>
                                                    <option value="Divorced">Divorced</option>
                                                    <option value="Widow/Widower">Widow/Widower</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p style={{ lineHeight: "15px" }}>Number of dependants  </p>
                                                <p className="label-subtitle" style={{}}>(excluding spouse)</p>
                                            </div>
                                            <div className="input-group">
                                                <select value={dependants} ref={dependantsref} onChange={(e) => setDependants(e.target.value)}>
                                                    <option value="0" selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10+">10+</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p style={{}}>What is your current housing situation?  </p>
                                                <p className="label-subtitle">(If you are paying a rental expense, even if you have a mortgage please select renting.)</p>
                                            </div>
                                            <div className="input-group">
                                                <select value={currentHousingSituation} ref={currentHousingSituationref} onChange={(e) => setCurrentHousingSituation(e.target.value)}>
                                                    <option value="0" disabled selected>Please select</option>
                                                    <option value="Mortgaged" label="Mortgaged">Mortgaged</option>
                                                    <option value="Owns outright (no mortgage)" label="Owns outright (no mortgage)">Owns outright (no mortgage)</option>
                                                    <option value="Renting" label="Renting">Renting</option>
                                                    <option value="Boarding/Living with Parents" label="Boarding/Living with Parents">Boarding/Living with Parents</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="CarLoanFormContent liabilities" style={{ marginTop: "20px" }}>
                                    <p className="content-title">Liabilities</p>
                                    <hr></hr>
                                    <div style={{ borderTop: "1px solid var(--theme-color)", borderBottom: "1px solid var(--theme-color)", padding: "10px 0px", backgroundColor: "var(--theme-fade-color)", width: "100%", position: "relative" }}>
                                        <div className="controls" >
                                            <p style={{ padding: " 0px 10px", fontSize: "12px", fontWeight: "300", color: "var(--theme-color)" }}>To avoid delays with your personal loan application, please make sure you've included details of all liabilities, as they will be cross checked against your credit report.</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <div className="controls" style={{ marginTop: "20px" }}>
                                            <div className="input-group-label">
                                                <p className="liabilities-heads">Home loans</p>
                                            </div>
                                            <div className="input-group">
                                            </div>
                                        </div>
                                        <div className="controls">
                                            <div className="input-group-label">
                                                <p style={{ lineHeight: "18px" }}>Do you have any home loans, including for investment purposes?</p>
                                            </div>
                                            <div className="input-group">
                                                <ButtonGroup variant="contained" aria-label="Basic button group" ref={anyhomeloanref} style={{ borderRadius: "2px 2px 2px 2px" }}>
                                                    <Button id="homeloanyes" value={anyhomeloan} className={`btnleft ${anyhomeloan === true ? `btnactive` : `btnnotactive`} `} onClick={() => fnHomeLoan('homeloanyes')}  >Yes</Button>
                                                    <Button id="homeloanno" value={anyhomeloan} className={`btnright ${anyhomeloan === false ? `btnactive` : `btnnotactive`} `} onClick={() => fnHomeLoan('homeloanno')} >No</Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>

                                        {
                                            anyhomeloan && <HomeLoanLiabilities />
                                        }

                                        <div className="controls" style={{ marginTop: "20px" }}>
                                            <div className="input-group-label">
                                                <p className="liabilities-heads">Personal loans</p>
                                            </div>
                                            <div className="input-group">

                                            </div>
                                        </div>
                                        <div className="controls">
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p>Do you have any personal loans/auto loans? </p>
                                            </div>
                                            <div className="input-group">
                                                <ButtonGroup variant="contained" aria-label="Basic button group" ref={anypersonalloanref} style={{ borderRadius: "2px 2px 2px 2px" }}>
                                                    <Button id="personalloanyes" value={anypersonalloan} className={`btnleft ${anypersonalloan === true ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyPersonalLoan('personalloanyes')}  >Yes</Button>
                                                    <Button id="personalloanno" value={anypersonalloan} className={`btnright ${anypersonalloan === false ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyPersonalLoan('personalloanno')} >No</Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>

                                        {
                                            anypersonalloan && <PersonalLoanLiabilities />
                                        }


                                        <div className="controls" style={{ marginTop: "20px" }}>
                                            <div className="input-group-label">
                                                <p className="liabilities-heads">Credit cards</p>
                                            </div>
                                            <div className="input-group">

                                            </div>
                                        </div>
                                        <div className="controls" style={{ marginBottom: "20px" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p style={{ lineHeight: "15px" }}>Do you have any credit cards/store cards? </p>
                                                <p className="label-subtitle" style={{ marginTop: "14px" }}>(Include all cards, even ones you don't use)</p>
                                            </div>
                                            <div className="input-group">
                                                <ButtonGroup variant="contained" aria-label="Basic button group" ref={anycreditcardref} style={{ borderRadius: "2px 2px 2px 2px" }}>
                                                    <Button id="creditcardyes" value={anycreditcard} className={`btnleft ${anycreditcard === true ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyCreditCardLoan('creditcardyes')}  >Yes</Button>
                                                    <Button id="creditcardno" value={anycreditcard} className={`btnright ${anycreditcard === false ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyCreditCardLoan('creditcardno')} >No</Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>

                                        {
                                            anycreditcard && <CreditCardLoanLiabilities />
                                        }


                                        <div className="controls" style={{ marginTop: "20px" }}>
                                            <div className="input-group-label">
                                                <p className="liabilities-heads">Other liabilities</p>
                                            </div>
                                            <div className="input-group">

                                            </div>
                                        </div>
                                        <div className="controls">
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p>Do you have any other type of liability? </p>
                                                <p className="label-subtitle">(e.g. line of credit, overdraft, family/private loan or other)</p>
                                            </div>
                                            <div className="input-group">
                                                <ButtonGroup variant="contained" aria-label="Basic button group" ref={anyOtherLiabilitiesref} style={{ borderRadius: "2px 2px 2px 2px" }}>
                                                    <Button id="Otherliabilitiesyes" value={anyOtherLiabilities} className={`btnleft ${anyOtherLiabilities === true ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyOtherLiabilities('Otherliabilitiesyes')}  >Yes</Button>
                                                    <Button id="Otherliabilitiesno" value={anyOtherLiabilities} className={`btnright ${anyOtherLiabilities === false ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyOtherLiabilities('Otherliabilitiesno')} >No</Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>
                                        {
                                            anyOtherLiabilities && <OtherLiabilities />
                                        }
                                    </div>
                                </div>

                                <div className="CarLoanFormContent" style={{ marginTop: "25px" }}>
                                    <p className="content-title">Expenses</p>
                                    <hr></hr>
                                    <div className="content" style={{ marginBottom: "15px" }}>
                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p style={{}}>Total living expenses  </p>
                                                <p className="label-subtitle">(Home, contents & car insurance, groceries, clothing, public school fees, transport, entertainment, utilities)</p>
                                            </div>
                                            <div className="input-group" style={{ flexDirection: "column", gap: "10px" }}>
                                                <div className="join-dollar">
                                                    <label className="form-group-dollar">$</label>
                                                    <input type="text" value={livingExpenses} ref={livingExpensesref} onKeyDown={handleKeyPress} onChange={(e) => setlivingExpenses(e.target.value)} maxLength={10} placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                                                    <select value={livingExpensesFrequency1} ref={livingExpensesFrequency1ref} onChange={(e) => setlivingExpensesFrequency1(e.target.value)} style={{ backgroundColor: "var(--theme-color)", color: "var(--white-color)", border: "1px solid var(--shade-color)", borderRadius: "2px 0px 0px 2px", padding: "5px", width: "100px" }}>
                                                        <option value="0" selected disabled>Select</option>
                                                        <option value="Monthly"  >Monthly</option>
                                                        <option value="Weekly">Weekly</option>
                                                        <option value="Fortnightly">Fortnightly</option>
                                                        <option value="Annual">Annual</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="controls" style={{ alignItems: "flex-start" }}>
                                            <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                                <p style={{}}>Total other regular expenses  </p>
                                                <p className="label-subtitle">(Private insurance, memberships, childcare, child support, private education)</p>
                                            </div>
                                            <div className="input-group" style={{ flexDirection: "column", gap: "10px" }}>
                                                <div className="join-dollar">
                                                    <label className="form-group-dollar">$</label>
                                                    <input type="text" value={otherlivingExpenses} ref={otherlivingExpensesref} onKeyDown={handleKeyPress} onChange={(e) => setotherlivingExpenses(e.target.value)} maxLength={10} placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                                                    <select value={otherlivingExpensesFrequency1} ref={otherlivingExpensesFrequency1ref} onChange={(e) => setotherlivingExpensesFrequency1(e.target.value)} style={{ backgroundColor: "var(--theme-color)", color: "var(--white-color)", border: "1px solid var(--shade-color)", borderRadius: "2px 0px 0px 2px", padding: "5px", width: "100px" }}>
                                                        <option value="0" selected disabled>Select</option>
                                                        <option value="Monthly"  >Monthly</option>
                                                        <option value="Weekly">Weekly</option>
                                                        <option value="Fortnightly">Fortnightly</option>
                                                        <option value="Annual">Annual</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="CarLoanFormContent forceableChnages" style={{ marginTop: "25px" }}>
                                    <p className="content-title">Foreseeable changes</p>
                                    <hr></hr>
                                    <div className="controls">
                                        <div className="input-group-label">
                                            <p style={{ lineHeight: "15px" }}>Do you plan or expect any significant changes to your financial situation that would NEGATIVELY impact your ability to meet repayments?</p>
                                        </div>
                                        <div className="input-group">
                                            <ButtonGroup variant="contained" aria-label="Basic button group" ref={foreseeableChangesref} style={{ borderRadius: "2px 2px 2px 2px" }}>
                                                <Button id="foreseeableChangesyes" value={anyhomeloan} className={`btnleft ${anyhomeloan === true ? `btnactive` : `btnnotactive`} `} onClick={() => fnforeseeableChanges('foreseeableChangesyes')}  >Yes</Button>
                                                <Button id="foreseeableChangesno" value={anyhomeloan} className={`btnright ${anyhomeloan === false ? `btnactive` : `btnnotactive`} `} onClick={() => fnforeseeableChanges('foreseeableChangesno')} >No</Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>

                                    {
                                        foreseeableChanges && (<>
                                            <div className="controls">
                                                <div className="input-group-label" >
                                                    <p>Select one or more circumstances that apply</p>
                                                </div>
                                                <div className="input-group" style={{ flexDirection: "row", gap: "5px" }}>
                                                    <FormGroup>
                                                        <FormControlLabel control={<Checkbox className="custom-checkbox" ref={Temporarydecreaseinincomeref} checked={Temporarydecreaseinincome} onChange={() => setTemporarydecreaseinincome(!Temporarydecreaseinincome)} />} />
                                                    </FormGroup>
                                                    <div style={{ display: "flex", flexDirection: "column", lineHeight: "20px" }}>
                                                        <p className="forceableChnagesTitle1">Temporary decrease in income  </p>
                                                        <p className="forceableChnagesTitle2" >(e.g. career break, starting a business, parental leave)</p>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="controls">
                                                <div className="input-group-label" >

                                                </div>
                                                <div className="input-group" style={{ flexDirection: "row", gap: "5px" }}>
                                                    <FormGroup>
                                                        <FormControlLabel control={<Checkbox className="custom-checkbox" checked={Permanentdecreaseinincome} onChange={() => setPermanentdecreaseinincome(!Permanentdecreaseinincome)} />} />
                                                    </FormGroup>
                                                    <div style={{ display: "flex", flexDirection: "column", lineHeight: "20px", width: "80%" }}>
                                                        <p className="forceableChnagesTitle1">Permanent decrease in income  </p>
                                                        <p className="forceableChnagesTitle2">(e.g. reducing hours, retirement, redundancy, career change or reduction in primary income)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="controls">
                                                <div className="input-group-label" >

                                                </div>
                                                <div className="input-group" style={{ flexDirection: "row", gap: "5px" }}>
                                                    <FormGroup>
                                                        <FormControlLabel control={<Checkbox className="custom-checkbox" checked={Increaseinexpenses} onChange={() => setIncreaseinexpenses(!Increaseinexpenses)} />} />
                                                    </FormGroup>
                                                    <div style={{ display: "flex", flexDirection: "column", lineHeight: "20px", width: "80%" }}>
                                                        <p className="forceableChnagesTitle1">Increase in expenses  </p>
                                                        <p className="forceableChnagesTitle2">(e.g. increased housing costs, private school fees, medical expenses, child support payments or additional dependants)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="controls">
                                                <div className="input-group-label" >

                                                </div>
                                                <div className="input-group" style={{ flexDirection: "row", gap: "5px" }}>
                                                    <FormGroup>
                                                        <FormControlLabel control={<Checkbox className="custom-checkbox" checked={Increaseinloanrepayments} onChange={() => setIncreaseinloanrepayments(!Increaseinloanrepayments)} />} />
                                                    </FormGroup>
                                                    <div style={{ display: "flex", flexDirection: "column", lineHeight: "20px", width: "80%" }}>
                                                        <p className="forceableChnagesTitle1">Increase in loan repayments  </p>
                                                        <p className="forceableChnagesTitle2">(e.g. moving from an interest only to principal and interest repayments, approved for a home/investment loan and awaiting settlement)</p>
                                                    </div>
                                                </div>
                                            </div></>
                                        )
                                    }

                                </div>
                                <div className="CarLoanFormContent" style={{ marginTop: "25px", display: "flex", justifyContent: "space-between" }}>
                                    <button className="btn btn-secondary" style={{ margin: "20px 10px 10px 0px" }} onClick={() => SaveforLater()}>Save for later</button>
                                    <button className="btn btn-danger" onClick={() => { fnSetStep("step2") }} style={{ margin: "20px 10px 10px 0px" }}>Continue</button>
                                </div>
                            </>
                        ) : null
                    }

                    {
                        Step2 !== null && Step2 && !Step1 && !Step3 ? (<>
                            <AboutYou setStep3={setStep3} setStep1={setStep1} setStep2={setStep2} fnSetStep={fnSetStep} />
                        </>
                        ) : null
                    }

                    {
                        Step3 && !Step1 && !Step2 && Step3 !== null ? (<>
                            <ReviewComponent />
                        </>
                        ) : null
                    }

                </div>
            </div >
        </>
    );
}

export default CarLoanForm;
