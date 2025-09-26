import React, { useState, useEffect, useRef } from "react";
import { useSnackbar } from "notistack";
import { getLoanFormJSON } from "../CarLoanFormJSON";
import { add } from "date-fns";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { handleKeyPress, handleKeyPressString } from "../../../Components/Pages/Calculator/Helper";

function TaxResidence() {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const taxResidenceCountryref = useRef(null);
    const ForiegnTINref = useRef(null);

    const [taxResidenceCountry, settaxResidenceCountry] = useState("");
    const [ForiegnTIN, setForiegnTIN] = useState("");

    const [taxResidenceDetails, settaxResidenceDetails] = useState([]);

    useEffect(() => {
        retrieveTaxResidenceLocalStorage();
    }, [])

    function clearStates() {
        settaxResidenceCountry("");
        setForiegnTIN("");
    }

    function addTaxResidence(lstTaxResidenceDetails, taxResidenceCountry, ForiegnTIN) {
        const newTaxResidence = {
            id: lstTaxResidenceDetails.length + 1,
            taxResidenceCountry: taxResidenceCountry,
            ForiegnTIN: ForiegnTIN,
        };

        lstTaxResidenceDetails.push(newTaxResidence); // Push the new tax residence object into the array.
        settaxResidenceDetails(lstTaxResidenceDetails); // Update the state with the new list.
        return lstTaxResidenceDetails; // Return the newly added tax residence object.
    }

    function fnSetNewTaxResidenceDetails() {
        //debugger;
        let json = {};

        try {
            json = { ...getLoanFormJSON() };
        } catch (error) {
            console.error("Error fetching loan details:", error);
            return;
        }



        if (json.TaxResidence) {
            let storedData = localStorage.getItem('taxresidence');
            if (storedData) {
                settaxResidenceDetails(JSON.parse(storedData));
                json.TaxResidence = JSON.parse(storedData);
            } else {
                json.TaxResidence = [];
            }
        }



        if (taxResidenceCountry.length === 0) {
            enqueueSnackbar("Enter tax residence country", { variant: "warning" });
            if (taxResidenceCountryref.current) {
                taxResidenceCountryref.current.focus();
            }
            return;
        }

        if (ForiegnTIN.length === 0) {
            enqueueSnackbar("Enter a valid foreign tax identification number for your selected country.", { variant: "warning" });
            if (ForiegnTINref.current) {
                ForiegnTINref.current.focus();
            }
            return;
        }

        const newjsonLoanList = addTaxResidence(json.TaxResidence, taxResidenceCountry, ForiegnTIN);

        try {
            localStorage.setItem("taxresidence", JSON.stringify(newjsonLoanList));
            clearStates();
            taxResidenceCountryref.current.focus();
        } catch (error) {
            console.error("Error saving to localStorage:", error);
            enqueueSnackbar("Failed to save data. Please try again.", { variant: "error" });
        }
    }


    const handleTaxResidenceChange = (e) => {
        settaxResidenceDetails({ ...taxResidenceDetails, [e.target.name]: e.target.value });
    };



    const clearTaxResidenceLocalStorage = (Id, arraylist) => {
        //debugger;
        console.log("clearTaxResidenceLocalStorage Id calls", Id);
        // localStorage.removeItem('taxresidence');
        // alert('Local storage cleared!');
        // settaxResidenceDetails({});
        let newArray = arraylist.filter((item) => item.id !== Id);
        localStorage.setItem('taxresidence', JSON.stringify(newArray));
        settaxResidenceDetails(newArray);
    }

    const retrieveTaxResidenceLocalStorage = () => {
        let storedData = localStorage.getItem('taxresidence');
        if (storedData) {
            settaxResidenceDetails(JSON.parse(storedData));

        }
    }

    const updatetaxresidencedetails = () => (

        <div id="taxresidenceID" style={{ borderTop: "1px solid var(--shade-color)", borderBottom: "1px solid var(--shade-color)", padding: "10px 10px", backgroundColor: "var(--shade-color)", width: "100%", position: "relative",marginBottom:"20px" }}>

            <div className="controls">
                <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                    <p>Tax Residence Country</p>
                    <p style={{ color: "var(--text-color)", fontSize: "10px", position: "absolute", right: "0px", top: "17px" }}>(If your financial institution is not listed, select other)</p>
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        id="taxResidenceCountry"
                        name="taxResidenceCountry"
                        value={taxResidenceCountry || ''}
                        ref={taxResidenceCountryref}
                        onChange={(e) => settaxResidenceCountry(e.target.value)}
                        placeholder="Tax Residence Country..." maxLength={30}
                        onKeyDown={handleKeyPressString}
                    ></input>
                </div>
            </div>
            <div className="controls">
                <div className="input-group-label">
                    <p>Foreign Tax Identification Number</p>
                </div>
                <div className="input-group">
                    <div className="join-dollar">

                        <input
                            type="text"
                            id="foriegnTIN"
                            name="foriegnTIN"
                            value={ForiegnTIN}
                            onChange={(e) => setForiegnTIN(e.target.value)}
                            ref={ForiegnTINref}
                            placeholder="Foreign Tax Identification Number..."
                            maxLength={30}
                            style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} >
                        </input>
                    </div>
                    <p style={{ color: "var(--text-color)", fontSize: "10px",lineHeight:"14px" }}>Identifying number or equivalent (e.g. Social security number, personal identification number, national identification number) issued by the country of tax residency, that is used for tax purposes.</p>
                </div>
            </div>
            <div className="controls" >
                <div className="input-group-label" >

                </div>
                <div className="input-group">
                    <button onClick={() => fnSetNewTaxResidenceDetails()} className="btnAdd">Add</button>
                </div>
            </div>
        </div>

    );

    const PopulateTaxResidenceDetails = () => {
        //debugger;

        if (taxResidenceDetails.length === 0) return null;

        return taxResidenceDetails.map((item, index, array) => (
            <div key={index} style={{ marginBottom: "10px", borderTop: "1px solid var(--shade-color)", borderBottom: "1px solid var(--shade-color)", padding: "10px 10px", backgroundColor: "var(--shade-color)", width: "100%", position: "relative" }}>
                <CloseIcon style={{ position: "absolute", color: "red", fontSize: "18px", right: "5", top: "5" }} onClick={() => clearTaxResidenceLocalStorage(item.id, array)} />
                <div className="controls" style={{marginTop:"25px"}}>
                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                        <p>Tax Residence Country</p>
                        <p style={{ color: "var(--text-color)", fontSize: "10px", position: "absolute", right: "0px", top: "17px" }}>(If your financial institution is not listed, select other)</p>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            id="taxResidenceCountry"
                            name="taxResidenceCountry"
                            value={item.taxResidenceCountry}
                        ></input>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Foreign Tax Identification Number</p>
                    </div>
                    <div className="input-group">
                        <div className="join-dollar">                           
                            <input
                                type="text"
                                id="foriegnTIN"
                                name="foriegnTIN"
                                value={item.ForiegnTIN}
                                style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} >
                            </input>
                        </div>
                    </div>
                </div>
            </div>
        ));


    };


    return (<>
        {
            PopulateTaxResidenceDetails()
        }

        {
            updatetaxresidencedetails()
        }
    </>)
}

export default TaxResidence;
