import React, { useState, useRef, useEffect } from "react";
import "./CarLoanForm.css";
import { Radio, RadioGroup, FormControlLabel, FormControl, Button, ButtonGroup, FormGroup, Checkbox } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useSnackbar } from "notistack";
import { handleKeyPress, handleKeyPressString } from "../../Components/Pages/Calculator/Helper";
import { setMonth } from "date-fns";
import TaxResidence from './TaxResident/TaxResidence.js'

function AboutYou(props) {

    const { enqueueSnackbar } = useSnackbar();

    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [anyOtherName, setanyOtherName] = useState(null);
    const [alternateName, setAlternateName] = useState("");
    const [areYouTaxResidentinOtherCountry, setareYouTaxResidentinOtherCountry] = useState(null);

    //tax Deatils shou,d be maid
    const [dob_Date, setdob_Date] = useState("0");
    const [dob_Month, setdob_Month] = useState("0");
    const [dob_Year, setdob_Year] = useState("");
    const [drivingLicenseNo, setdrivingLicenseNo] = useState("");
    const [LicenseExpiry_Date, setLicenseExpiry_Date] = useState("0");
    const [LicenseExpiry_Month, setLicenseExpiry_Month] = useState("0");
    const [LicenseExpiry_Year, setLicenseExpiry_Year] = useState("");
    const [StateofIssue, setStateofIssue] = useState("");
    const [Mobile, setMobile] = useState("");
    const [MobileHome, setMobileHome] = useState("");
    const [MobileWork, setMobileWork] = useState("");
    const [email, setEmail] = useState("");

    //Residential Address
    const [residentailAddress, setresidentailAddress] = useState("");
    const [lengthTimeattheAddress, setlengthTimeattheAddress] = useState("0");

    //Previous Resident Details
    const [previousAddress, setpreviousAddress] = useState(null);
    const [Streetddress1, setStreetddress1] = useState("");
    const [Streetddress2, setStreetddress2] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [PostCode, setPostCode] = useState("");
    const [lengthTimeattheAddress1, setlengthTimeattheAddress1] = useState("0");

    //Employment Details
    const [employmentType, setemploymentType] = useState("0");
    const [industryCategory, setindustryCategory] = useState("0");
    const [occupation, setOccupation] = useState("0");
    const [CompanyName, setCompanyName] = useState("");
    const [Lengthoftimewiththisemployer, setLengthoftimewiththisemployer] = useState("0");

    //Previoud Employment Details
    const [previousEmploymentType, setpreviousEmploymentType] = useState("0");
    const [previousEmployerName, setpreviousEmployerName] = useState("");
    const [Lengthoftimewithpreviousemployer, setLengthoftimewithpreviousemployer] = useState("0");



    const titleref = useRef("")
    const firstNameref = useRef("");
    const middleNameref = useRef("");
    const lastNameref = useRef("");
    const anyOtherNameref = useRef(null);
    const alternateNameref = useRef("");
    const areYouTaxResidentinOtherCountryref = useRef(null);
    const dob_Dateref = useRef("0");
    const dob_Monthref = useRef("0");
    const dob_Yearref = useRef("");
    const drivingLicenseNoref = useRef("");
    const LicenseExpiry_Dateref = useRef("0");
    const LicenseExpiry_Monthref = useRef("0");
    const LicenseExpiry_Yearref = useRef("");
    const StateofIssueref = useRef("");
    const Mobileref = useRef("");
    const MobileHomeref = useRef("");
    const MobileWorkref = useRef("");
    const emailref = useRef("");
    const residentailAddressref = useRef("");
    const lengthTimeattheAddressref = useRef("0");
    const previousAddressref = useRef(null);
    const Streetddress1ref = useRef("");
    const Streetddress2ref = useRef("");
    const Cityref = useRef("");
    const Stateref = useRef("");
    const PostCoderef = useRef("");
    const lengthTimeattheAddress1ref = useRef("0");
    const employmentTyperef = useRef("0");
    const industryCategoryref = useRef("0");
    const occupationref = useRef("0");
    const CompanyNameref = useRef("");
    const Lengthoftimewiththisemployerref = useRef("0");
    const previousEmploymentTyperef = useRef("0");
    const previousEmployerNameref = useRef("");
    const Lengthoftimewithpreviousemployerref = useRef("0");

    useEffect(() => {
        getFirstFormDetails();
        PopulateAboutYouFromLocalStorage();
    }, [])



    function PopulateAboutYouFromLocalStorage() {
        const aboutYouData = localStorage.getItem('aboutyou');
        if (aboutYouData) {
            const json = JSON.parse(aboutYouData);
            setTitle(json.personalDetails.title || "");
            setFirstName(json.personalDetails.firstName || "");
            setMiddleName(json.personalDetails.middleName || "");
            setLastName(json.personalDetails.lastName || "");
            setanyOtherName(json.personalDetails.anyOtherName || null);
            setAlternateName(json.personalDetails.alternateName || "");
            setareYouTaxResidentinOtherCountry(json.personalDetails.areYouTaxResidentinOtherCountry || null);
            setdob_Date(json.personalDetails.dateOfBirth.day || "0");
            setdob_Month(json.personalDetails.dateOfBirth.month || "0");
            setdob_Year(json.personalDetails.dateOfBirth.year || "");
            setdrivingLicenseNo(json.personalDetails.drivingLicense.number || "");
            setLicenseExpiry_Date(json.personalDetails.drivingLicense.expiryDate.day || "0");
            setLicenseExpiry_Month(json.personalDetails.drivingLicense.expiryDate.month || "0");
            setLicenseExpiry_Year(json.personalDetails.drivingLicense.expiryDate.year || "");
            setStateofIssue(json.personalDetails.drivingLicense.stateOfIssue || "");
            setMobile(json.personalDetails.contactDetails.mobile || "");
            setMobileHome(json.personalDetails.contactDetails.home || "");
            setMobileWork(json.personalDetails.contactDetails.work || "");
            setEmail(json.personalDetails.contactDetails.email || "");
            setresidentailAddress(json.residentialDetails.currentAddress.address || "");
            setlengthTimeattheAddress(json.residentialDetails.currentAddress.lengthOfStay || "0");
            setpreviousAddress(json.residentialDetails.previousAddress || null);
            // {
            //     !json.residentialDetails.previousAddress ? fnpreviousAddress('previousAddressno') : fnpreviousAddress('previousAddressyes')
            // }
            setStreetddress1(json.residentialDetails.previousAddressDetails?.addressLine1 || "");
            setStreetddress2(json.residentialDetails.previousAddressDetails?.addressLine2 || "");
            setCity(json.residentialDetails.previousAddressDetails?.city || "");
            setState(json.residentialDetails.previousAddressDetails?.state || "");
            setPostCode(json.residentialDetails.previousAddressDetails?.postcode || "");
            setlengthTimeattheAddress1(json.residentialDetails.previousAddressDetails?.lengthOfStay || "0");
            setemploymentType(json.employmentDetails.currentEmployment.type || "0");
            setindustryCategory(json.employmentDetails.currentEmployment.industryCategory || "0");
            setOccupation(json.employmentDetails.currentEmployment.occupation || "0");
            setCompanyName(json.employmentDetails.currentEmployment.companyName || "");
            setLengthoftimewiththisemployer(json.employmentDetails.currentEmployment.lengthOfEmployment || "0");
            setpreviousEmploymentType(json.employmentDetails.previousEmployment.type || "0");
            setpreviousEmployerName(json.employmentDetails.previousEmployment.employerName || "");
            setLengthoftimewithpreviousemployer(json.employmentDetails.previousEmployment.lengthOfEmployment || "0");
        }
    }

    function getFirstFormDetails() {
        const CarLoan = localStorage.getItem('carloan');
        if (CarLoan) {
            const json = JSON.parse(CarLoan);
            setEmail(json.beforeWeGetStarted.email);
            setFirstName(json.beforeWeGetStarted.firstName);
        }
    }


    function fnAnyOtherName(btntype) {
        const othernameyes = document.getElementById("anyOtherNameyes");
        const othernameno = document.getElementById("anyOtherNameno");

        if (btntype == othernameyes.id) {
            othernameyes.classList.add('btnactive');
            othernameyes.classList.remove('btnnotactive');

            othernameno.classList.remove('btnactive');
            othernameno.classList.add('btnnotactive');
            setanyOtherName(true);
        }

        if (btntype == othernameno.id) {
            othernameno.classList.add('btnactive');
            othernameno.classList.remove('btnnotactive');

            othernameyes.classList.remove('btnactive');
            othernameyes.classList.add('btnnotactive');
            setanyOtherName(false);
        }
    }

    function fnareYouTaxResidentinOtherCountry(btntype) {
        const taxResidentYes = document.getElementById("areYouTaxResidentinOtherCountryyes");
        const taxResidentNo = document.getElementById("areYouTaxResidentinOtherCountryno");

        if (btntype === taxResidentYes.id) {
            taxResidentYes.classList.add('btnactive');
            taxResidentYes.classList.remove('btnnotactive');

            taxResidentNo.classList.remove('btnactive');
            taxResidentNo.classList.add('btnnotactive');
            setareYouTaxResidentinOtherCountry(true);
        }

        if (btntype === taxResidentNo.id) {
            taxResidentNo.classList.add('btnactive');
            taxResidentNo.classList.remove('btnnotactive');

            taxResidentYes.classList.remove('btnactive');
            taxResidentYes.classList.add('btnnotactive');
            setareYouTaxResidentinOtherCountry(false);
        }
    }

    function fnpreviousAddress(btntype) {
        let previousAddressYes = document.getElementById("previousAddressyes");
        let previousAddressNo = document.getElementById("previousAddressno");

        if (btntype === previousAddressYes.id) {
            previousAddressYes.classList.add('btnactive');
            previousAddressYes.classList.remove('btnnotactive');

            previousAddressNo.classList.remove('btnactive');
            previousAddressNo.classList.add('btnnotactive');

            setpreviousAddress(true);
        }

        if (btntype === previousAddressNo.id) {
            previousAddressNo.classList.add('btnactive');
            previousAddressNo.classList.remove('btnnotactive');

            previousAddressYes.classList.remove('btnactive');
            previousAddressYes.classList.add('btnnotactive');

            setpreviousAddress(false);
        }
    }

    function SaveforLaterAboutYou() {

        const TaxResident = areYouTaxResidentinOtherCountry ? JSON.parse(localStorage.getItem('taxresidence')) : [];

        if (title === "0") {
            enqueueSnackbar("Please select title", { variant: "warning" });
            if (titleref.current) {
                titleref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                titleref.current.focus();
            }
            return;
        }

        if (!firstName.trim()) {
            enqueueSnackbar("Please enter your first name", { variant: "warning" });
            if (firstNameref.current) {
                firstNameref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                firstNameref.current.focus();
            }
            return;
        }

        if (!lastName.trim()) {
            enqueueSnackbar("Please enter your last name", { variant: "warning" });
            if (lastNameref.current) {
                lastNameref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                lastNameref.current.focus();
            }
            return;
        }

        if (anyOtherName === null) {
            enqueueSnackbar("Please specify if you are known by any other name", { variant: "warning" });
            if (anyOtherNameref.current) {
                anyOtherNameref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                anyOtherNameref.current.focus();
            }
            return;
        }

        if (anyOtherName && !alternateName.trim()) {
            enqueueSnackbar("Please enter your alternate name", { variant: "warning" });
            if (alternateNameref.current) {
                alternateNameref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                alternateNameref.current.focus();
            }
            return;
        }

        if (areYouTaxResidentinOtherCountry === null) {
            enqueueSnackbar("Please specify if you are a tax resident in another country", { variant: "warning" });
            if (areYouTaxResidentinOtherCountryref.current) {
                areYouTaxResidentinOtherCountryref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                areYouTaxResidentinOtherCountryref.current.focus();
            }
            return;
        }

        if (areYouTaxResidentinOtherCountry === true) {
            if (TaxResident.length === 0) {
                enqueueSnackbar("Please enter tax residence country & Foreign TIN number", { variant: "warning" });
                if (areYouTaxResidentinOtherCountry.current) {
                    areYouTaxResidentinOtherCountry.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    areYouTaxResidentinOtherCountry.current.focus();
                }
                return;
            }
        }

        if (dob_Date === "0" || dob_Month === "0" || !dob_Year.trim() || dob_Year.length < 4) {
            enqueueSnackbar("Please enter your complete date of birth", { variant: "warning" });
            if (dob_Dateref.current) {
                dob_Dateref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                dob_Dateref.current.focus();
            }
            return;
        }

        if (!drivingLicenseNo.trim()) {
            enqueueSnackbar("Please enter your driver's licence number", { variant: "warning" });
            if (drivingLicenseNoref.current) {
                drivingLicenseNoref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                drivingLicenseNoref.current.focus();
            }
            return;
        }

        if (LicenseExpiry_Date === "0" || LicenseExpiry_Month === "0" || !LicenseExpiry_Year.trim() || LicenseExpiry_Year.length < 4) {
            enqueueSnackbar("Please enter your licence expiry date", { variant: "warning" });
            if (LicenseExpiry_Dateref.current) {
                LicenseExpiry_Dateref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                LicenseExpiry_Dateref.current.focus();
            }
            return;
        }

        if (StateofIssue === "0") {
            enqueueSnackbar("Please select the state of issue for your licence", { variant: "warning" });
            if (StateofIssueref.current) {
                StateofIssueref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                StateofIssueref.current.focus();
            }
            return;
        }

        if (!Mobile.trim() || Mobile.length < 10) {
            enqueueSnackbar("Please enter your mobile number", { variant: "warning" });
            if (Mobileref.current) {
                Mobileref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                Mobileref.current.focus();
            }
            return;
        }

        if (!email.trim()) {
            enqueueSnackbar("Please enter your email address", { variant: "warning" });
            if (emailref.current) {
                emailref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                emailref.current.focus();
            }
            return;
        }

        if (!residentailAddress.trim()) {
            enqueueSnackbar("Please enter your residential address", { variant: "warning" });
            if (residentailAddressref.current) {
                residentailAddressref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                residentailAddressref.current.focus();
            }
            return;
        }

        if (lengthTimeattheAddress === "0") {
            enqueueSnackbar("Please select the length of time at your current address", { variant: "warning" });
            if (lengthTimeattheAddressref.current) {
                lengthTimeattheAddressref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                lengthTimeattheAddressref.current.focus();
            }
            return;
        }

        if ((lengthTimeattheAddress === "0-5" || lengthTimeattheAddress === "6-11" || lengthTimeattheAddress === "1" || lengthTimeattheAddress === "1.5" || lengthTimeattheAddress === "2" || lengthTimeattheAddress === "2.5") && previousAddress === null) {
            enqueueSnackbar("Please specify if your previous address is overseas", { variant: "warning" });
            if (previousAddressref.current) {
                previousAddressref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                previousAddressref.current.focus();
            }
            return;
        }

        if (previousAddress === false) {
            if (!Streetddress1.trim()) {
                enqueueSnackbar("Please enter your street address 1", { variant: "warning" });
                if (Streetddress1ref.current) {
                    Streetddress1ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    Streetddress1ref.current.focus();
                }
                return;
            }

            if (!City.trim()) {
                enqueueSnackbar("Please enter your city, town or suburb", { variant: "warning" });
                if (Cityref.current) {
                    Cityref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    Cityref.current.focus();
                }
                return;
            }

            if (State === "0") {
                enqueueSnackbar("Please select your state", { variant: "warning" });
                if (Stateref.current) {
                    Stateref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    Stateref.current.focus();
                }
                return;
            }

            if (!PostCode.trim() || PostCode.length < 4) {
                enqueueSnackbar("Please enter a valid postcode", { variant: "warning" });
                if (PostCoderef.current) {
                    PostCoderef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    PostCoderef.current.focus();
                }
                return;
            }

            if (lengthTimeattheAddress1 === "0") {
                enqueueSnackbar("Please select the length of time at this address", { variant: "warning" });
                if (lengthTimeattheAddress1ref.current) {
                    lengthTimeattheAddress1ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    lengthTimeattheAddress1ref.current.focus();
                }
                return;
            }
        }

        if (employmentType === "0") {
            enqueueSnackbar("Please select employment type", { variant: "warning" });
            if (employmentTyperef.current) {
                employmentTyperef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                employmentTyperef.current.focus();
            }
            return;
        }

        if ((employmentType === "full_time" || employmentType === "part_time" || employmentType === "casual_seasonal" || employmentType === "self_employed") && industryCategory === "0") {
            enqueueSnackbar("Please select your industry category", { variant: "warning" });
            if (industryCategoryref.current) {
                industryCategoryref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                industryCategoryref.current.focus();
            }
            return;
        }

        if ((employmentType === "full_time" || employmentType === "part_time" || employmentType === "casual_seasonal" || employmentType === "self_employed") && occupation === "0") {
            enqueueSnackbar("Please select your occupation", { variant: "warning" });
            if (occupationref.current) {
                occupationref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                occupationref.current.focus();
            }
            return;
        }

        if ((employmentType === "full_time" || employmentType === "part_time" || employmentType === "casual_seasonal" || employmentType === "self_employed") && !CompanyName.trim()) {
            enqueueSnackbar("Please enter your company name", { variant: "warning" });
            if (CompanyNameref.current) {
                CompanyNameref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                CompanyNameref.current.focus();
            }
            return;
        }

        if ((employmentType === "full_time" || employmentType === "part_time" || employmentType === "casual_seasonal" || employmentType === "self_employed") && Lengthoftimewiththisemployer === "0") {
            enqueueSnackbar("Please select the length of time with your employer", { variant: "warning" });
            if (Lengthoftimewiththisemployerref.current) {
                Lengthoftimewiththisemployerref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                Lengthoftimewiththisemployerref.current.focus();
            }
            return;
        }

        if (Lengthoftimewiththisemployer === "0-5" || Lengthoftimewiththisemployer === "6-11" || Lengthoftimewiththisemployer === "1" || Lengthoftimewiththisemployer === "1.5" || Lengthoftimewiththisemployer === "2" || Lengthoftimewiththisemployer === "2.5") {

            if (!previousEmploymentType || previousEmploymentType === "0") {
                enqueueSnackbar("Please select previous employment type", { variant: "warning" });
                if (previousEmploymentTyperef.current) {
                    previousEmploymentTyperef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    previousEmploymentTyperef.current.focus();
                }
                return;
            }

            if ((previousEmploymentType === "full_time" || previousEmploymentType === "part_time" || previousEmploymentType === "casual_seasonal" || previousEmploymentType === "self_employed") && !previousEmployerName.trim()) {
                enqueueSnackbar("Please enter your previous employer's name", { variant: "warning" });
                if (previousEmployerNameref.current) {
                    previousEmployerNameref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    previousEmployerNameref.current.focus();
                }
                return;
            }

            if ((previousEmploymentType === "full_time" || previousEmploymentType === "part_time" || previousEmploymentType === "casual_seasonal" || previousEmploymentType === "self_employed") && Lengthoftimewithpreviousemployer === "0") {
                enqueueSnackbar("Please select the length of time with your previous employer", { variant: "warning" });
                if (Lengthoftimewithpreviousemployerref.current) {
                    Lengthoftimewithpreviousemployerref.current.scrollIntoView({ behavior: "smooth", block: "center" });
                    Lengthoftimewithpreviousemployerref.current.focus();
                }
                return;
            }
        }

        const aboutYouData = createJsonObject({
            title,
            firstName,
            middleName,
            lastName,
            anyOtherName,
            alternateName,
            areYouTaxResidentinOtherCountry,
            dob_Date,
            dob_Month,
            dob_Year,
            drivingLicenseNo,
            LicenseExpiry_Date,
            LicenseExpiry_Month,
            LicenseExpiry_Year,
            StateofIssue,
            Mobile,
            MobileHome,
            MobileWork,
            email,
            residentailAddress,
            lengthTimeattheAddress,
            previousAddress,
            Streetddress1,
            Streetddress2,
            City,
            State,
            PostCode,
            lengthTimeattheAddress1,
            employmentType,
            industryCategory,
            occupation,
            CompanyName,
            Lengthoftimewiththisemployer,
            previousEmploymentType,
            previousEmployerName,
            Lengthoftimewithpreviousemployer
        });

        localStorage.setItem('aboutyou', JSON.stringify(aboutYouData));
        enqueueSnackbar("Step2 data saved successfully", { variant: "success" });

        const stepsData = createStepData(false, false, true);

        localStorage.setItem('stepsData', JSON.stringify(stepsData));
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


    function createJsonObject({
        title,
        firstName,
        middleName,
        lastName,
        anyOtherName,
        alternateName,
        areYouTaxResidentinOtherCountry,
        dob_Date,
        dob_Month,
        dob_Year,
        drivingLicenseNo,
        LicenseExpiry_Date,
        LicenseExpiry_Month,
        LicenseExpiry_Year,
        StateofIssue,
        Mobile,
        MobileHome,
        MobileWork,
        email,
        residentailAddress,
        lengthTimeattheAddress,
        previousAddress,
        Streetddress1,
        Streetddress2,
        City,
        State,
        PostCode,
        lengthTimeattheAddress1,
        employmentType,
        industryCategory,
        occupation,
        CompanyName,
        Lengthoftimewiththisemployer,
        previousEmploymentType,
        previousEmployerName,
        Lengthoftimewithpreviousemployer
    }) {
        return {
            personalDetails: {
                title,
                firstName,
                middleName,
                lastName,
                anyOtherName,
                alternateName,
                areYouTaxResidentinOtherCountry,
                dateOfBirth: {
                    day: dob_Date,
                    month: dob_Month,
                    year: dob_Year
                },
                drivingLicense: {
                    number: drivingLicenseNo,
                    expiryDate: {
                        day: LicenseExpiry_Date,
                        month: LicenseExpiry_Month,
                        year: LicenseExpiry_Year
                    },
                    stateOfIssue: StateofIssue
                },
                contactDetails: {
                    mobile: Mobile,
                    home: MobileHome,
                    work: MobileWork,
                    email
                }
            },
            residentialDetails: {
                currentAddress: {
                    address: residentailAddress,
                    lengthOfStay: lengthTimeattheAddress
                },
                previousAddress: previousAddress,
                previousAddressDetails: !previousAddress
                    ? {
                        addressLine1: Streetddress1,
                        addressLine2: Streetddress2,
                        city: City,
                        state: State,
                        postcode: PostCode,
                        lengthOfStay: lengthTimeattheAddress1
                    }
                    : null
            },
            employmentDetails: {
                currentEmployment: {
                    type: employmentType,
                    industryCategory,
                    occupation,
                    companyName: CompanyName,
                    lengthOfEmployment: Lengthoftimewiththisemployer
                },
                previousEmployment: {
                    type: previousEmploymentType,
                    employerName: previousEmployerName,
                    lengthOfEmployment: Lengthoftimewithpreviousemployer
                }
            }
        };
    }




    return <>
        <div className="CarLoanFormContent">
            <p className="content-title">Tell us about yourself</p>
            <hr></hr>
            <div className="content">

                <div className="controls">
                    <div className="input-group-label" >
                        <p>Title</p>
                    </div>
                    <div className="input-group">
                        <select value={title} ref={titleref} onChange={(e) => setTitle(e.target.value)} >
                            <option value="0" disabled selected>Please select</option>
                            <option value="Miss">Miss</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                        </select>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>First name</p>
                    </div>
                    <div className="input-group">
                        <input type="text" value={firstName} ref={firstNameref} onChange={(e) => setFirstName(e.target.value)} maxLength={40} onKeyDown={handleKeyPressString} placeholder="As shown on your ID"></input>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Middle Name (if any)</p>
                    </div>
                    <div className="input-group">
                        <input type="text" value={middleName} ref={middleNameref} onChange={(e) => setMiddleName(e.target.value)} maxLength={40} onKeyDown={handleKeyPressString} placeholder=""></input>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Last Name</p>
                    </div>
                    <div className="input-group">
                        <input type="text" value={lastName} ref={lastNameref} onChange={(e) => setLastName(e.target.value)} maxLength={40} onKeyDown={handleKeyPressString} placeholder=""></input>
                    </div>
                </div>

                <div className="controls" style={{ alignItems: "flex-start" }}>
                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                        <p style={{}}>Are you known by any other name?  </p>
                        <p style={{ color: "var(--text-color)", fontSize: "10px", position: "absolute", right: "0px", top: "17px" }}>(if any, e.g. maiden name)</p>
                    </div>
                    <div className="input-group">
                        <ButtonGroup variant="contained" ref={anyOtherNameref} aria-label="Basic button group" style={{ borderRadius: "2px 2px 2px 2px" }}>
                            <Button id="anyOtherNameyes" value="true" className={`btnleft ${anyOtherName === true ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyOtherName('anyOtherNameyes')}>Yes</Button>
                            <Button id="anyOtherNameno" value="false" className={`btnright ${anyOtherName === false ? `btnactive` : `btnnotactive`} `} onClick={() => fnAnyOtherName('anyOtherNameno')}>No</Button>
                        </ButtonGroup>
                    </div>
                </div>

                {
                    anyOtherName && (
                        <div className="controls">
                            <div className="input-group-label">
                                <p>Altername Name</p>
                            </div>
                            <div className="input-group">
                                <input type="text" value={alternateName} ref={alternateNameref} onChange={(e) => setAlternateName(e.target.value)} maxLength={40} onKeyDown={handleKeyPressString} placeholder=""></input>
                                <p style={{ color: "var(--text-color)", fontSize: "10px", }}>Note: It is an offence under the Anti-Money Laundering and Counter Terrorism Financing Act 2006 to give false or misleading information.</p>
                            </div>
                        </div>
                    )
                }

                <div className="controls" style={{ alignItems: "flex-start" }}>
                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                        <p style={{}}>Are you a tax resident in a country other than Australia?  </p>
                    </div>
                    <div className="input-group">
                        <ButtonGroup variant="contained" ref={areYouTaxResidentinOtherCountryref} aria-label="Basic button group" style={{ borderRadius: "2px 2px 2px 2px" }}>
                            <Button id="areYouTaxResidentinOtherCountryyes" value="true" className={`btnleft ${areYouTaxResidentinOtherCountry === true ? `btnactive` : `btnnotactive`} `} onClick={() => fnareYouTaxResidentinOtherCountry('areYouTaxResidentinOtherCountryyes')}>Yes</Button>
                            <Button id="areYouTaxResidentinOtherCountryno" value="false" className={`btnright ${areYouTaxResidentinOtherCountry === false ? `btnactive` : `btnnotactive`} `} onClick={() => fnareYouTaxResidentinOtherCountry('areYouTaxResidentinOtherCountryno')}>No</Button>
                        </ButtonGroup>
                        <p style={{ color: "var(--text-color)", fontSize: "10px", }}>You are a foreign tax resident if you're required to pay tax in another country, even if you don't need to fill out a tax return.</p>
                    </div>
                </div>

                {
                    areYouTaxResidentinOtherCountry && (
                        <TaxResidence />
                    )
                }

                <div className="controls">
                    <div className="input-group-label">
                        <p>Date of birth</p>
                    </div>
                    <div className="input-group dobclass">
                        <select className="dobelement" value={dob_Date} ref={dob_Dateref} onChange={(e) => setdob_Date(e.target.value)} >
                            <option value="0" disabled selected>Select Date</option>
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select className="dobelement" value={dob_Month} ref={dob_Monthref} onChange={(e) => setdob_Month(e.target.value)} >
                            <option value="0" disabled selected>Select Month</option>
                            {[
                                { value: 1, label: "January" },
                                { value: 2, label: "February" },
                                { value: 3, label: "March" },
                                { value: 4, label: "April" },
                                { value: 5, label: "May" },
                                { value: 6, label: "June" },
                                { value: 7, label: "July" },
                                { value: 8, label: "August" },
                                { value: 9, label: "September" },
                                { value: 10, label: "October" },
                                { value: 11, label: "November" },
                                { value: 12, label: "December" },
                            ].map((month) => (
                                <option key={month.value} value={month.value}>
                                    {month.label}
                                </option>
                            ))}

                        </select>
                        <input className="dobelement" type="text" value={dob_Year} ref={dob_Yearref} onChange={(e) => setdob_Year(e.target.value)} maxLength={4} onKeyDown={handleKeyPress} placeholder="YYYY"></input>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Driver's licence number
                        </p>
                    </div>
                    <div className="input-group">
                        <input type="text" value={drivingLicenseNo} ref={drivingLicenseNoref} onChange={(e) => setdrivingLicenseNo(e.target.value)} maxLength={20} placeholder=""></input>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Licence expiry</p>
                    </div>
                    <div className="input-group dobclass">
                        <select className="dobelement" value={LicenseExpiry_Date} ref={LicenseExpiry_Dateref} onChange={(e) => setLicenseExpiry_Date(e.target.value)} >
                            <option value="0" disabled selected>Select Date</option>
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select className="dobelement" value={LicenseExpiry_Month} ref={LicenseExpiry_Monthref} onChange={(e) => setLicenseExpiry_Month(e.target.value)} >
                            <option value="0" disabled selected>Select Month</option>
                            {[
                                { value: 1, label: "January" },
                                { value: 2, label: "February" },
                                { value: 3, label: "March" },
                                { value: 4, label: "April" },
                                { value: 5, label: "May" },
                                { value: 6, label: "June" },
                                { value: 7, label: "July" },
                                { value: 8, label: "August" },
                                { value: 9, label: "September" },
                                { value: 10, label: "October" },
                                { value: 11, label: "November" },
                                { value: 12, label: "December" },
                            ].map((month) => (
                                <option key={month.value} value={month.value}>
                                    {month.label}
                                </option>
                            ))}

                        </select>
                        <input className="dobelement" type="text" value={LicenseExpiry_Year} ref={LicenseExpiry_Yearref} onChange={(e) => setLicenseExpiry_Year(e.target.value)} maxLength={4} onKeyDown={handleKeyPress} placeholder="YYYY"></input>
                    </div>
                </div>
                <div className="controls" style={{ alignItems: "flex-start" }}>
                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                        <p>State of issue</p>
                    </div>
                    <div className="input-group">
                        <select value={StateofIssue} ref={StateofIssueref} onChange={(e) => setStateofIssue(e.target.value)}>
                            <option value="0" disabled selected>Please select</option>
                            <option value="Australian Capital Territory (ACT)">Australian Capital Territory (ACT)</option>
                            <option value="New South Wales (NSW)">New South Wales (NSW)</option>
                            <option value="Northern Territory (NT)">Northern Territory (NT)</option>
                            <option value="Queensland (QLD)">Queensland (QLD)</option>
                            <option value="South Australia (SA)">South Australia (SA)</option>
                            <option value="Tasmania (TAS)">Tasmania (TAS)</option>
                            <option value="Victoria (VIC)">Victoria (VIC)</option>
                            <option value="Western Australia (WA)">Western Australia (WA)</option>
                        </select>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Mobile number</p>
                    </div>
                    <div className="input-group">
                        <input type="text" value={Mobile} ref={Mobileref} onChange={(e) => setMobile(e.target.value)} maxLength={10} onKeyDown={handleKeyPress} placeholder=""></input>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Mobile number - HOME</p>
                    </div>
                    <div className="input-group">
                        <input type="text" value={MobileHome} ref={MobileHomeref} onChange={(e) => setMobileHome(e.target.value)} maxLength={10} onKeyDown={handleKeyPress} placeholder=""></input>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Mobile number - WORK</p>
                    </div>
                    <div className="input-group">
                        <input type="text" value={MobileWork} ref={MobileWorkref} onChange={(e) => setMobileWork(e.target.value)} maxLength={10} onKeyDown={handleKeyPress} placeholder=""></input>
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
            <p className="content-title">Residential address</p>
            <hr></hr>
            <div className="content">
                <div className="controls">
                    <div className="input-group-label" >
                        <p style={{ color: "var(--text-color)" }}>Street addresses only
                            This is your postal address, as well, and cannot be a PO box.</p>
                    </div>
                    <div className="input-group">

                    </div>
                </div>

                <div className="controls" style={{ alignItems: "flex-start" }}>
                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                        <p style={{}}>Residential address   </p>
                        <p style={{ color: "var(--text-color)", fontSize: "10px", position: "absolute", right: "0px", top: "17px" }}>(no PO box)</p>
                    </div>
                    <div className="input-group">
                        <input type="text" value={residentailAddress} ref={residentailAddressref} onChange={(e) => setresidentailAddress(e.target.value)} maxLength={100} placeholder="please enter and select your address"></input>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Length of time at this address</p>
                    </div>
                    <div className="input-group ">
                        <select value={lengthTimeattheAddress} ref={lengthTimeattheAddressref} onChange={(e) => setlengthTimeattheAddress(e.target.value)} >
                            <option value="0" disabled selected>Select Month</option>
                            <option value="0 - 5 months">0 - 5 months</option>
                            <option value="6 - 11 months">6 - 11 months</option>
                            <option value="1 year">1 year</option>
                            <option value="1 year 6 months">1 year 6 months</option>
                            <option value="2 years">2 years</option>
                            <option value="2 years 6 months">2 years 6 months</option>
                            <option value="3 years">3 years</option>
                            <option value="3 years 6 months">3 years 6 months</option>
                            <option value="4 years">4 years</option>
                            <option value="4 years 6 months">4 years 6 months</option>
                            <option value="5 years">5 years</option>
                            <option value="6 years">6 years</option>
                            <option value="7 years">7 years</option>
                            <option value="8 years">8 years</option>
                            <option value="9 years">9 years</option>
                            <option value="10+ years">10+ years</option>
                        </select>
                    </div>
                </div>
            </div>

            {lengthTimeattheAddress === "0 - 5 months" || lengthTimeattheAddress === "6 - 11 months" || lengthTimeattheAddress === "1 year" || lengthTimeattheAddress === "1 year 6 months" || lengthTimeattheAddress === "2 years" || lengthTimeattheAddress === "2 years 6 months" ? (<>
                <p className="content-title">Previous residential address</p>
                <hr></hr>
                <div className="content">
                    <div className="controls" style={{ alignItems: "flex-start" }}>
                        <div className="input-group-label" >
                            <p style={{}}>Is your previous address overseas?  </p>
                        </div>
                        <div className="input-group">
                            <ButtonGroup variant="contained" ref={previousAddressref} aria-label="Basic button group" style={{ borderRadius: "2px 2px 2px 2px" }}>
                                <Button id="previousAddressyes" value="true" className={`btnleft ${previousAddress === true ? `btnactive` : `btnnotactive`} `} onClick={() => fnpreviousAddress('previousAddressyes')}>Yes</Button>
                                <Button id="previousAddressno" value="false" className={`btnright ${previousAddress === false ? `btnactive` : `btnnotactive`} `} onClick={() => fnpreviousAddress('previousAddressno')}>No</Button>
                            </ButtonGroup>
                        </div>
                    </div>

                    {
                        !previousAddress && previousAddress !== null && (<>
                            <div style={{ borderTop: "1px solid var(--shade-color)", borderBottom: "1px solid var(--shade-color)", padding: "10px 10px", backgroundColor: "var(--shade-color)", width: "100%", position: "relative" }}>

                                <div className="controls">
                                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                        <p>Street address 1</p>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            value={Streetddress1 || ''}
                                            ref={Streetddress1ref}
                                            onChange={(e) => setStreetddress1(e.target.value)}
                                            placeholder="" maxLength={100}
                                        ></input>
                                    </div>
                                </div>
                                <div className="controls">
                                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                        <p>Street address 2 (if any)</p>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            value={Streetddress2 || ''}
                                            ref={Streetddress2ref}
                                            onChange={(e) => setStreetddress2(e.target.value)}
                                            placeholder=""
                                            maxLength={100}
                                        ></input>
                                    </div>
                                </div>
                                <div className="controls">
                                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                        <p>City, town or suburb</p>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            value={City || ''}
                                            ref={Cityref}
                                            onChange={(e) => setCity(e.target.value)}
                                            placeholder=""
                                            maxLength={100}
                                        ></input>
                                    </div>
                                </div>
                                <div className="controls" style={{ alignItems: "flex-start" }}>
                                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                                        <p>State</p>
                                    </div>
                                    <div className="input-group">
                                        <select value={State} ref={Stateref} onChange={(e) => setState(e.target.value)}>
                                            <option value="0" disabled selected>Please select</option>
                                            <option value="Australian Capital Territory (ACT)">Australian Capital Territory (ACT)</option>
                                            <option value="New South Wales (NSW)">New South Wales (NSW)</option>
                                            <option value="Northern Territory (NT)">Northern Territory (NT)</option>
                                            <option value="Queensland (QLD)">Queensland (QLD)</option>
                                            <option value="South Australia (SA)">South Australia (SA)</option>
                                            <option value="Tasmania (TAS)">Tasmania (TAS)</option>
                                            <option value="Victoria (VIC)">Victoria (VIC)</option>
                                            <option value="Western Australia (WA)">Western Australia (WA)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="controls">
                                    <div className="input-group-label">
                                        <p>Postcode</p>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" value={PostCode} ref={PostCoderef} maxLength={5} onKeyDown={handleKeyPress} onChange={(e) => setPostCode(e.target.value)} ></input>
                                    </div>
                                </div>
                                <div className="controls">
                                    <div className="input-group-label">
                                        <p>Length of time at this address</p>
                                    </div>
                                    <div className="input-group ">
                                        <select value={lengthTimeattheAddress1} ref={lengthTimeattheAddress1ref} onChange={(e) => setlengthTimeattheAddress1(e.target.value)} >
                                            <option value="0" disabled selected>Select Month</option>
                                            <option value="0 - 5 months">0 - 5 months</option>
                                            <option value="6 - 11 months">6 - 11 months</option>
                                            <option value="1 year">1 year</option>
                                            <option value="1 year 6 months">1 year 6 months</option>
                                            <option value="2 years">2 years</option>
                                            <option value="2 years 6 months">2 years 6 months</option>
                                            <option value="3 years">3 years</option>
                                            <option value="3 years 6 months">3 years 6 months</option>
                                            <option value="4 years">4 years</option>
                                            <option value="4 years 6 months">4 years 6 months</option>
                                            <option value="5 years">5 years</option>
                                            <option value="6 years">6 years</option>
                                            <option value="7 years">7 years</option>
                                            <option value="8 years">8 years</option>
                                            <option value="9 years">9 years</option>
                                            <option value="10+ years">10+ years</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                        </>)
                    }
                </div>
            </>
            ) : null
            }

            <p className="content-title">Employment details</p>
            <hr></hr>
            <div className="content">

                <div className="controls">
                    <div className="input-group-label">
                        <p>Employment type</p>
                    </div>
                    <div className="input-group ">
                        <select value={employmentType} ref={employmentTyperef} onChange={(e) => { setemploymentType(e.target.value); console.log("emplementtype", employmentType) }} >
                            <option value="0" disabled selected>Select</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Casual/Seasonal">Casual/Seasonal</option>
                            <option value="Self Employed">Self Employed</option>
                            <option value="Retired">Retired</option>
                            <option value="Home duties">Home duties</option>
                            <option value="Social Security">Social Security</option>
                            <option value="Unemployed">Unemployed</option>
                        </select>
                    </div>
                </div>

                {
                    (employmentType == "Full Time" || employmentType == "Part Time" || employmentType == "Casual/Seasonal" || employmentType == "Self Employed") && (
                        <>
                            <div className="controls">
                                <div className="input-group-label">
                                    <p>Industry category</p>
                                </div>
                                <div className="input-group ">
                                    <select value={industryCategory} ref={industryCategoryref} onChange={(e) => setindustryCategory(e.target.value)} >
                                        <option value="0" disabled selected>Select </option>
                                        <option value="Arts / Entertainment / Sport / Leisure">Arts / Entertainment / Sport / Leisure</option>
                                        <option value="Business Professional / Consultant">Business Professional / Consultant</option>
                                        <option value="Catering / Hospitality / Food Production">Catering / Hospitality / Food Production</option>
                                        <option value="Clerical">Clerical</option>
                                        <option value="Construction / Mechanical & Transport">Construction / Mechanical & Transport</option>
                                        <option value="Education / Knowledge">Education / Knowledge</option>
                                        <option value="Farm / Garden / Rural Services">Farm / Garden / Rural Services</option>
                                        <option value="Finance / Retail Sales / Real Estate">Finance / Retail Sales / Real Estate</option>
                                        <option value="Machine Operation / Process Work">Machine Operation / Process Work</option>
                                        <option value="Medical / Health">Medical / Health</option>
                                        <option value="Personal Services / Miscellaneous">Personal Services / Miscellaneous</option>
                                        <option value="Public Services / Legal / Emergency & Security">Public Services / Legal / Emergency & Security</option>
                                        <option value="Retired / Unpaid / Welfare recipients">Retired / Unpaid / Welfare recipients</option>
                                        <option value="Science / Engineering / Technology">Science / Engineering / Technology</option>
                                    </select>
                                </div>
                            </div>

                            <div className="controls">
                                <div className="input-group-label">
                                    <p>Occupation</p>
                                </div>
                                <div className="input-group ">
                                    <select value={occupation} ref={occupationref} onChange={(e) => setOccupation(e.target.value)} >
                                        <option value="0" disabled selected>Select </option>
                                        {
                                            industryCategory === "Arts / Entertainment / Sport / Leisure" && (<>
                                                <option value="Actor / Performer">Actor / Performer</option>
                                                <option value="Announcer / Disc Jockey">Announcer / Disc Jockey</option>
                                                <option value="Artist">Artist</option>
                                                <option value="Author / Editor / Screenwriter">Author / Editor / Screenwriter</option>
                                                <option value="Beauty services / Funeral services / Massage services / Croupier / Guide">Beauty services / Funeral services / Massage services / Croupier / Guide</option>
                                                <option value="Blacksmith / Farrier / Springmaker / Toolsmith">Blacksmith / Farrier / Springmaker / Toolsmith</option>
                                                <option value="Booking clerk / TAB clerk / Ticket seller">Booking clerk / TAB clerk / Ticket seller</option>
                                                <option value="Cameraman / Sound technician">Cameraman / Sound technician</option>
                                                <option value="Dancer / Choreographer">Dancer / Choreographer</option>
                                                <option value="Fashion / Interior Designer / Graphic Designer / Illustrator">Fashion / Interior Designer / Graphic Designer / Illustrator</option>
                                                <option value="Greenkeeper / Groundsperson">Greenkeeper / Groundsperson</option>
                                                <option value="Grip / Meterman / Veterinary nurse">Grip / Meterman / Veterinary nurse</option>
                                                <option value="Horse breaker/ Animal Trainer">Horse breaker/ Animal Trainer</option>
                                                <option value="Leadlighter / Musical instrument maker / Piano tuner / Potter">Leadlighter / Musical instrument maker / Piano tuner / Potter</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Business Professional / Consultant" && (<>
                                                <option value="Cartographer / Surveyor">Cartographer / Surveyor</option>
                                                <option value="Civil engineering technician / Draughtsperson">Civil engineering technician / Draughtsperson</option>
                                                <option value="Fashion / Interior Designer / Graphic Designer / Illustrator">Fashion / Interior Designer / Graphic Designer / Illustrator</option>
                                                <option value="Industrial Relations Consultant">Industrial Relations Consultant</option>
                                                <option value="Journalist / Copywriter / Reporter">Journalist / Copywriter / Reporter</option>
                                                <option value="Manager / Supervisor / Official">Manager / Supervisor / Official</option>
                                                <option value="Managing director / Doctor - general medical">Managing director / Doctor - general medical</option>
                                                <option value="Personnel specialist - Training/Staff development">Personnel specialist - Training/Staff development</option>
                                                <option value="Public relations">Public relations</option>
                                                <option value="Specialist manager - personnel">Specialist manager - personnel</option>
                                                <option value="Specialist manager : Ambulance / Engineering / Library / Other">Specialist manager : Ambulance / Engineering / Library / Other</option>
                                                <option value="Transport specialist manager">Transport specialist manager</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Catering / Hospitality / Food Production" && (<>
                                                <option value="Baker / Pastrycook">Baker / Pastrycook</option>
                                                <option value="Bar attendant">Bar attendant</option>
                                                <option value="Butcher / Abattoir worker">Butcher / Abattoir worker</option>
                                                <option value="Caretaker / Janitor">Caretaker / Janitor</option>
                                                <option value="Catering / Restaurant manager">Catering / Restaurant manager</option>
                                                <option value="Chef / Cook">Chef / Cook</option>
                                                <option value="Confectioner / Miller">Confectioner / Miller</option>
                                                <option value="Dishwasher / Kitchenhand">Dishwasher / Kitchenhand</option>
                                                <option value="Fisherman / Deckhand">Fisherman / Deckhand</option>
                                                <option value="Hotel / Accommodation manager">Hotel / Accommodation manager</option>
                                                <option value="Housekeeper">Housekeeper</option>
                                                <option value="Luggage porter">Luggage porter</option>
                                                <option value="Machine operator - foods">Machine operator - foods</option>
                                                <option value="Milkman / Street vendor / Canvasser">Milkman / Street vendor / Canvasser</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Clerical" && (<>
                                                <option value="Accounting clerk / Branch accountant financial institution">Accounting clerk / Branch accountant financial institution</option>
                                                <option value="Actuarial clerk">Actuarial clerk</option>
                                                <option value="Articled clerk / Barrister / Solicitor / Legal Officer - corporation">Articled clerk / Barrister / Solicitor / Legal Officer - corporation</option>
                                                <option value="Booking clerk / TAB clerk / Ticket seller">Booking clerk / TAB clerk / Ticket seller</option>
                                                <option value="Business machine operator/Ledger keeper">Business machine operator/Ledger keeper</option>
                                                <option value="Charity collector / Debt collection clerk">Charity collector / Debt collection clerk</option>
                                                <option value="Clerk / Recordtaker">Clerk / Recordtaker</option>
                                                <option value="Computer operator / Data entry">Computer operator / Data entry</option>
                                                <option value="Courier / Messenger">Courier / Messenger</option>
                                                <option value="Data processing - specialist manager">Data processing - specialist manager</option>
                                                <option value="Human resource clerk / Training personnel specialists">Human resource clerk / Training personnel specialists</option>
                                                <option value="Mail order clerk / Stock and purchasing clerk">Mail order clerk / Stock and purchasing clerk</option>
                                                <option value="Mail sorter">Mail sorter</option>
                                                <option value="Office secretary / Stenographer">Office secretary / Stenographer</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Construction / Mechanical & Transport" && (<>
                                                <option value="Air traffic controller / Pilot / Air transport engineer">Air traffic controller / Pilot / Air transport engineer</option>
                                                <option value="Airconditioning mechanic / Refrigeration mechanic">Airconditioning mechanic / Refrigeration mechanic</option>
                                                <option value="Aircraft maintenance engineer">Aircraft maintenance engineer</option>
                                                <option value="Aircraft pilot">Aircraft pilot</option>
                                                <option value="Automotive electricians">Automotive electricians</option>
                                                <option value="Blasting worker">Blasting worker</option>
                                                <option value="Boat builder / repairer">Boat builder / repairer</option>
                                                <option value="Bricklayer">Bricklayer</option>
                                                <option value="Builder's labourer / Demolition worker / Crane chaser">Builder's labourer / Demolition worker / Crane chaser</option>
                                                <option value="Building / Surveying technician">Building / Surveying technician</option>
                                                <option value="Cabinetmaker">Cabinetmaker</option>
                                                <option value="Carpenter / Joiner">Carpenter / Joiner</option>
                                                <option value="Carpetlayers / Floor coverer / finisher">Carpetlayers / Floor coverer / finisher</option>
                                                <option value="Concrete labourers">Concrete labourers</option>
                                            </>)
                                        }

                                        {
                                            industryCategory === "Education / Knowledge" && (<>
                                                <option value="Accountant / Auditor / Bursar / Liquidator / Tax agent">Accountant / Auditor / Bursar / Liquidator / Tax agent</option>
                                                <option value="Dean / Faculty head / School principal">Dean / Faculty head / School principal</option>
                                                <option value="Education researcher / School inspector">Education researcher / School inspector</option>
                                                <option value="Geographer / Historian / Linguist / Social scientist">Geographer / Historian / Linguist / Social scientist</option>
                                                <option value="Interpreter / Translator">Interpreter / Translator</option>
                                                <option value="Librarian / Cataloguer">Librarian / Cataloguer</option>
                                                <option value="Library attendant">Library attendant</option>
                                                <option value="Specialist manager : Ambulance / Engineering / Library / Other">Specialist manager : Ambulance / Engineering / Library / Other</option>
                                                <option value="Teacher - TAFE">Teacher - TAFE</option>
                                                <option value="Teacher - preschool">Teacher - preschool</option>
                                                <option value="Teacher - primary">Teacher - primary</option>
                                                <option value="Teacher - secondary">Teacher - secondary</option>
                                                <option value="Teacher - special education">Teacher - special education</option>
                                                <option value="Teacher's aide">Teacher's aide</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Farm / Garden / Rural Services" && (<>
                                                <option value="Accountant / Auditor / Bursar / Liquidator / Tax agent">Accountant / Auditor / Bursar / Liquidator / Tax agent</option>
                                                <option value="Architect / Grazier">Architect / Grazier</option>
                                                <option value="Dairy farmer / Farmer - general non-specific">Dairy farmer / Farmer - general non-specific</option>
                                                <option value="Farmhand">Farmhand</option>
                                                <option value="Forestry labourer">Forestry labourer</option>
                                                <option value="Gardener / Landscaper">Gardener / Landscaper</option>
                                                <option value="landscapeLandscape architect_architect">Landscape architect</option>
                                                <option value="Market gardener">Market gardener</option>
                                                <option value="Nursery Staff">Nursery Staff</option>
                                                <option value="Operator/driver - machinery: Farm / Forestry / Road or Labourer: Nursery / Garden">Operator/driver - machinery: Farm / Forestry / Road or Labourer: Nursery / Garden</option>
                                                <option value="Orchardist">Orchardist</option>
                                                <option value="Sheep shearer">Sheep shearer</option>
                                                <option value="Shooter">Shooter</option>
                                                <option value="Tree surgeon">Tree surgeon</option>
                                            </>)
                                        }

                                        {
                                            industryCategory === "Finance / Retail Sales / Real Estate" && (<>
                                                <option value="Accountant / Auditor / Bursar / Liquidator / Tax agent">Accountant / Auditor / Bursar / Liquidator / Tax agent</option>
                                                <option value="Accounting clerk / Branch accountant financial institution">Accounting clerk / Branch accountant financial institution</option>
                                                <option value="Cashier / Checkout operator">Cashier / Checkout operator</option>
                                                <option value="Chief accountant">Chief accountant</option>
                                                <option value="Commodities broker">Commodities broker</option>
                                                <option value="Economist">Economist</option>
                                                <option value="Finance - branch manager">Finance - branch manager</option>
                                                <option value="Insurance - agent / broker / underwriter">Insurance - agent / broker / underwriter</option>
                                                <option value="Investment advisor / Dealer">Investment advisor / Dealer</option>
                                                <option value="Mail order clerk / Stock and purchasing clerk">Mail order clerk / Stock and purchasing clerk</option>
                                                <option value="Manager : Building and Construction / Wholesale">Manager : Building and Construction / Wholesale</option>
                                                <option value="Manager : Post Office / Real Estate / TAB / Rail Station">Manager : Post Office / Real Estate / TAB / Rail Station</option>
                                                <option value="Marketing / Advertising manager">Marketing / Advertising manager</option>
                                                <option value="Milkman / Street vendor / Canvasser">Milkman / Street vendor / Canvasser</option>
                                            </>)
                                        }

                                        {
                                            industryCategory === "Machine Operation / Process Work" && (<>
                                                <option value="Assembler">Assembler</option>
                                                <option value="Bedding and mattress maker">Bedding and mattress maker</option>
                                                <option value="Blacksmith / Farrier / Springmaker / Toolsmith">Blacksmith / Farrier / Springmaker / Toolsmith</option>
                                                <option value="Brickmaking machine operator">Brickmaking machine operator</option>
                                                <option value="Carpetlayers / Floor coverer / finisher">Carpetlayers / Floor coverer / finisher</option>
                                                <option value="Confectioner / Miller">Confectioner / Miller</option>
                                                <option value="Coppersmith / Sheetmetal worker">Coppersmith / Sheetmetal worker</option>
                                                <option value="Coremaker - metal / Metal casting / Moulder - metal / Patternmaker">Coremaker - metal / Metal casting / Moulder - metal / Patternmaker</option>
                                                <option value="Diesetter - metal / Metal polisher">Diesetter - metal / Metal polisher</option>
                                                <option value="Drainer / Gasfitter / Plumber">Drainer / Gasfitter / Plumber</option>
                                                <option value="Drycleaner / Sander machine operator">Drycleaner / Sander machine operator</option>
                                                <option value="Factory hand">Factory hand</option>
                                                <option value="Foreman / Apprentice">Foreman / Apprentice</option>
                                                <option value="Forklift driver Straddle carrier operator / Straddle carrier operator">Forklift driver Straddle carrier operator / Straddle carrier operator</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Medical / Health" && (<>
                                                <option value="Ambulance officer / Paramedic">Ambulance officer / Paramedic</option>
                                                <option value="Audiologist / Dietician / Nutritionist / Othoptist / Prosthetist">Audiologist / Dietician / Nutritionist / Othoptist / Prosthetist</option>
                                                <option value="Child care worker / Refuge worker">Child care worker / Refuge worker</option>
                                                <option value="Chiropodist / Podiatrist">Chiropodist / Podiatrist</option>
                                                <option value="Chiropractor / Osteopath">Chiropractor / Osteopath</option>
                                                <option value="Counsellor">Counsellor</option>
                                                <option value="Dental nurse / assistant">Dental nurse / assistant</option>
                                                <option value="Dental practitioner: Dentist / Oral Surgeon: Orthodontist">Dental practitioner: Dentist / Oral Surgeon: Orthodontist</option>
                                                <option value="Family support worker">Family support worker</option>
                                                <option value="Geographer / Historian / Linguist / Social scientist">Geographer / Historian / Linguist / Social scientist</option>
                                                <option value="Grip / Meterman / Veterinary nurse">Grip / Meterman / Veterinary nurse</option>
                                                <option value="Hospital food services / Hospital orderly / Wardsman">Hospital food services / Hospital orderly / Wardsman</option>
                                                <option value="Hospital manager">Hospital manager</option>
                                                <option value="Inspector: Building / Customers / Health / Safety">Inspector: Building / Customers / Health / Safety</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Personal Services / Miscellaneous" && (<>
                                                <option value="Barber / Hairdresser">Barber / Hairdresser</option>
                                                <option value="Beauty services / Funeral services / Massage services / Croupier / Guide">Beauty services / Funeral services / Massage services / Croupier / Guide</option>
                                                <option value="Carpet cleaner / Cleaner - domestic / industrial">Carpet cleaner / Cleaner - domestic / industrial</option>
                                                <option value="Child care centre director">Child care centre director</option>
                                                <option value="Child care worker / Refuge worker">Child care worker / Refuge worker</option>
                                                <option value="Labourer - earthmoving / Grave digger">Labourer - earthmoving / Grave digger</option>
                                                <option value="Laundromat - attendant / presser">Laundromat - attendant / presser</option>
                                                <option value="Priest / Minister / Chaplain / Rabbi">Priest / Minister / Chaplain / Rabbi</option>
                                                <option value="Shoemaker / repairer">Shoemaker / repairer</option>
                                                <option value="Teacher: drama, dance, music / Driving Instructor">Teacher: drama, dance, music / Driving Instructor</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Public Services / Legal / Emergency & Security" && (<>
                                                <option value="Ambassador / High commissioner / Politician / Mayor">Ambassador / High commissioner / Politician / Mayor</option>
                                                <option value="Articled clerk / Barrister / Solicitor / Legal Officer - corporation">Articled clerk / Barrister / Solicitor / Legal Officer - corporation</option>
                                                <option value="Bailiff / Usher / Sheriff / Legal clerk / Court clerk">Bailiff / Usher / Sheriff / Legal clerk / Court clerk</option>
                                                <option value="Commissioned officer defence forces">Commissioned officer defence forces</option>
                                                <option value="Commissioned officer police">Commissioned officer police</option>
                                                <option value="Firefighter / Prevention officer">Firefighter / Prevention officer</option>
                                                <option value="Guards and Security officers / Protective services officer">Guards and Security officers / Protective services officer</option>
                                                <option value="Inspector: Building / Customers / Health / Safety">Inspector: Building / Customers / Health / Safety</option>
                                                <option value="Judge / Magistrate / Coroner / Tribunal member">Judge / Magistrate / Coroner / Tribunal member</option>
                                                <option value="Parole officer / Welfare / Youth worker">Parole officer / Welfare / Youth worker</option>
                                                <option value="Police Officer / Detective">Police Officer / Detective</option>
                                                <option value="Prison officer">Prison officer</option>
                                                <option value="Public servant">Public servant</option>
                                                <option value="Senior public servant">Senior public servant</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Retired / Unpaid / Welfare recipients" && (<>
                                                <option value="Home duties">Home duties</option>
                                                <option value="Pensioner">Pensioner</option>
                                                <option value="Retired">Retired</option>
                                                <option value="Student">Student</option>
                                                <option value="Student over 21">Student over 21</option>
                                                <option value="Unemployed">Unemployed</option>
                                            </>)
                                        }
                                        {
                                            industryCategory === "Science / Engineering / Technology" && (<>
                                                <option value="Accountant / Auditor / Bursar / Liquidator / Tax agent">Accountant / Auditor / Bursar / Liquidator / Tax agent</option>
                                                <option value="Actuary / Mathematician / Statistician">Actuary / Mathematician / Statistician</option>
                                                <option value="Anatomist / Biochemist / Botanist / Physiologist">Anatomist / Biochemist / Botanist / Physiologist</option>
                                                <option value="Architect / Grazier">Architect / Grazier</option>
                                                <option value="Chemical engineer">Chemical engineer</option>
                                                <option value="Chemist / Food technologist">Chemist / Food technologist</option>
                                                <option value="Civil engineer">Civil engineer</option>
                                                <option value="Civil engineering technician / Draughtsperson">Civil engineering technician / Draughtsperson</option>
                                                <option value="Computing professional">Computing professional</option>
                                                <option value="Electrical engineers">Electrical engineers</option>
                                                <option value="Engineer - industrial / safety">Engineer - industrial / safety</option>
                                                <option value="Environmental scientist">Environmental scientist</option>
                                                <option value="Geographer / Historian / Linguist / Social scientist">Geographer / Historian / Linguist / Social scientist</option>
                                                <option value="Geologist / Geochemist / Oceanographer">Geologist / Geochemist / Oceanographer</option>
                                            </>)
                                        }

                                    </select>
                                </div>
                            </div>

                            <div className="controls">
                                <div className="input-group-label">
                                    <p>{(employmentType == "Full Time" || employmentType == "Part Time" || employmentType == "Casual/Seasonal" || employmentType == "Self Employed") ? "Company name(as appear on Payslips)" : "Business / Company Name"} </p>
                                </div>
                                <div className="input-group">
                                    <input type="text" value={CompanyName} ref={CompanyNameref} onChange={(e) => setCompanyName(e.target.value)} maxLength={70} placeholder=""></input>
                                </div>
                            </div>
                            <div className="controls">
                                <div className="input-group-label">
                                    <p>{(employmentType == "Full Time" || employmentType == "Part Time" || employmentType == "Casual/Seasonal" || employmentType == "Self Employed") ? "Length of time with this employer" : "Length of time self employed"} </p>
                                </div>
                                <div className="input-group ">
                                    <select value={Lengthoftimewiththisemployer} ref={Lengthoftimewiththisemployerref} onChange={(e) => setLengthoftimewiththisemployer(e.target.value)} >
                                        <option value="0" disabled selected>Select</option>
                                        <option value="0 - 5 months">0 - 5 months</option>
                                        <option value="6 - 11 months">6 - 11 months</option>
                                        <option value="1 year">1 year</option>
                                        <option value="1 year 6 months">1 year 6 months</option>
                                        <option value="2 years">2 years</option>
                                        <option value="2 years 6 months">2 years 6 months</option>
                                        <option value="3 years">3 years</option>
                                        <option value="3 years 6 months">3 years 6 months</option>
                                        <option value="4 years">4 years</option>
                                        <option value="4 years 6 months">4 years 6 months</option>
                                        <option value="5 years">5 years</option>
                                        <option value="6 years">6 years</option>
                                        <option value="7 years">7 years</option>
                                        <option value="8 years">8 years</option>
                                        <option value="9 years">9 years</option>
                                        <option value="10+ years">10+ years</option>
                                    </select>
                                </div>
                            </div>
                            {
                                (Lengthoftimewiththisemployer === "0 - 5 months" || Lengthoftimewiththisemployer === "6 - 11 months" || Lengthoftimewiththisemployer === "1 year" || Lengthoftimewiththisemployer === "1 year 6 months" || Lengthoftimewiththisemployer === "2 years" || Lengthoftimewiththisemployer === "2 years 6 months") && (<>
                                    <div style={{ borderTop: "1px solid var(--shade-color)", borderBottom: "1px solid var(--shade-color)", padding: "10px 10px", backgroundColor: "var(--shade-color)", width: "100%", position: "relative" }}>
                                        <div className="controls">
                                            <div className="input-group-label">
                                                <p>Previous Employment type</p>
                                            </div>
                                            <div className="input-group ">
                                                <select value={previousEmploymentType} ref={previousEmploymentTyperef} onChange={(e) => { setpreviousEmploymentType(e.target.value) }} >
                                                    <option value="0" disabled selected>Select</option>
                                                    <option value="Full Time">Full Time</option>
                                                    <option value="Part Time">Part Time</option>
                                                    <option value="Casual/Seasonal">Casual/Seasonal</option>
                                                    <option value="Self Employed">Self Employed</option>
                                                    <option value="Retired">Retired</option>
                                                    <option value="Home duties">Home duties</option>
                                                    <option value="Social Security">Social Security</option>
                                                    <option value="Unemployed">Unemployed</option>
                                                </select>
                                            </div>
                                        </div>
                                        {
                                            (previousEmploymentType === "Part Time" || previousEmploymentType === "Full Time" || previousEmploymentType === "Casual/Seasonal" || previousEmploymentType === "Self Employed") && (<>
                                                <div className="controls">
                                                    <div className="input-group-label">
                                                        <p>{(previousEmploymentType === "Part Time" || previousEmploymentType === "Full Time" || previousEmploymentType === "Casual/Seasonal" || previousEmploymentType === "Self Employed") ? "Previous employer's name(as appear on Payslips)" : "Previous Business / Company Name"} </p>
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="text" value={previousEmployerName} ref={previousEmployerNameref} onChange={(e) => setpreviousEmployerName(e.target.value)} maxLength={80} placeholder=""></input>
                                                    </div>
                                                </div>
                                                <div className="controls">
                                                    <div className="input-group-label">
                                                        <p>{(previousEmploymentType === "Part Time" || previousEmploymentType === "Full Time" || previousEmploymentType === "Casual/Seasonal" || previousEmploymentType === "Self Employed") ? "Length of time with previous employer" : "Length of time self employed"} </p>
                                                    </div>
                                                    <div className="input-group ">
                                                        <select value={Lengthoftimewithpreviousemployer} ref={Lengthoftimewithpreviousemployerref} onChange={(e) => setLengthoftimewithpreviousemployer(e.target.value)} >
                                                            <option value="0" disabled selected>Select</option>
                                                            <option value="0 - 5 months">0 - 5 months</option>
                                                            <option value="6 - 11 months">6 - 11 months</option>
                                                            <option value="1 year">1 year</option>
                                                            <option value="1 year 6 months">1 year 6 months</option>
                                                            <option value="2 years">2 years</option>
                                                            <option value="2 years 6 months">2 years 6 months</option>
                                                            <option value="3 years">3 years</option>
                                                            <option value="3 years 6 months">3 years 6 months</option>
                                                            <option value="4 years">4 years</option>
                                                            <option value="4 years 6 months">4 years 6 months</option>
                                                            <option value="5 years">5 years</option>
                                                            <option value="6 years">6 years</option>
                                                            <option value="7 years">7 years</option>
                                                            <option value="8 years">8 years</option>
                                                            <option value="9 years">9 years</option>
                                                            <option value="10+ years">10+ years</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </>)
                                        }



                                    </div>

                                </>)
                            }

                        </>
                    )
                }

            </div>
        </div >
        <div className="CarLoanFormContent" style={{ marginTop: "25px", display: "flex", justifyContent: "space-between" }}>
            <button className="btn btn-secondary" style={{ margin: "20px 10px 10px 0px" }} onClick={() => SaveforLaterAboutYou()}>Save for later</button>
            <button className="btn btn-danger" style={{ margin: "20px 10px 10px 0px" }} onClick={() => { props.fnSetStep("step3") }}>Continue</button>
        </div>
    </>;
}

export default AboutYou;
