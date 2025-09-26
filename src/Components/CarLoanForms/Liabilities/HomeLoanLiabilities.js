import React, { useState, useEffect, useRef } from "react";
import { useSnackbar } from "notistack";
import { getLoanFormJSON } from "../CarLoanFormJSON";
import { add } from "date-fns";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { handleKeyPress, handleKeyPressString } from "../../../Components/Pages/Calculator/Helper";

function HomeLoanLiabilities(props) {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const financialInstitutionref = useRef(null);
    const loanLimitref = useRef(null);
    const amountOwedref = useRef(null);
    const repaymentAmountref = useRef(null);
    const repaymentTyperef = useRef(null);
    const IsJointAccountref = useRef(null);


    const [financialInstitution, setfinancialInstitution] = useState("");
    const [loanLimit, setloanLimit] = useState("");
    const [amountOwed, setamountOwed] = useState("");
    const [repaymentAmount, setrepaymentAmount] = useState("");
    const [repaymentType, setrepaymentType] = useState("Monthly");
    const [IsJointAccount, setIsJointAccount] = useState("0");

    const [homeloanDetails, setHomeLoanDetails] = useState([]);

    useEffect(() => {
        retrieveHomeLoanLocalStorage();
    }, [])

    function clearStates(){
        setfinancialInstitution("");
        setloanLimit("");
        setamountOwed("");
        setrepaymentAmount("");
        setrepaymentType("Monthly");
        setIsJointAccount("0");
    }

    function addLoan(lstLoanDetails, financialInstitution, loanLimit, amountOwed, repaymentAmount, repaymentType, IsJointAccount) {
        //debugger;
        const newLoan = {
            id: lstLoanDetails.length + 1,
            institutionName: financialInstitution,
            loanLimit: loanLimit,
            amountOwed: amountOwed,
            repaymentAmount: repaymentAmount,
            repaymentType: repaymentType,
            IsJointAccount: IsJointAccount,
        };

        lstLoanDetails.push(newLoan); // Push the new loan object into the array.       
        setHomeLoanDetails(lstLoanDetails); // Update the state with the new list.
        return lstLoanDetails; // Return the newly added loan object.
    }

    function fnSetNewHomeLoanDetails() {
        //debugger;
        let json = {};

        try {
            json = { ...getLoanFormJSON() };
        } catch (error) {
            console.error("Error fetching loan details:", error);
            return;
        }



        if (json.HomeLoanDetails) {
            let storedData = localStorage.getItem('homeloan');
            if (storedData) {
                setHomeLoanDetails(JSON.parse(storedData));
                json.HomeLoanDetails = JSON.parse(storedData);
            } else {
                json.HomeLoanDetails = [];
            }
        }

        if (financialInstitution.length === 0) {
            enqueueSnackbar("Please enter financial institution", { variant: "warning" });
            if (financialInstitutionref.current) {
                financialInstitutionref.current.focus();
            }
            return;
        }
        if (loanLimit.length === 0) {
            enqueueSnackbar("Please enter loan limit", { variant: "warning" });
            if (loanLimitref.current) {
                loanLimitref.current.focus();
            }
            return;
        }
        if (amountOwed.length === 0) {
            enqueueSnackbar("Please enter amount owed", { variant: "warning" });
            if (amountOwedref.current) {
                amountOwedref.current.focus();
            }
            return;
        }
        if (repaymentAmount.length === 0) {
            enqueueSnackbar("Please enter repayment amount", { variant: "warning" });
            if (repaymentAmountref.current) {
                repaymentAmountref.current.focus();
            }
            return;
        }
        if (IsJointAccount == "0") {
            enqueueSnackbar("Please enter IsJointAccount", { variant: "warning" });
            if (IsJointAccountref.current) {
                IsJointAccountref.current.focus();
            }
            return;
        }
        const newjsonLoanList = addLoan(json.HomeLoanDetails, financialInstitution, loanLimit, amountOwed, repaymentAmount, repaymentType, IsJointAccount);

        try {
            localStorage.setItem("homeloan", JSON.stringify(newjsonLoanList));
            clearStates();
            financialInstitutionref.current.focus();
        } catch (error) {
            console.error("Error saving to localStorage:", error);
            enqueueSnackbar("Failed to save data. Please try again.", { variant: "error" });
        }
    }


    const handleHomeLoanChange = (e) => {
        setHomeLoanDetails({ ...homeloanDetails, [e.target.name]: e.target.value });
    };

   

    const clearHomeLoanLocalStorage = (Id, arraylist) => {
        //debugger;
        console.log("clearHomeLoanLocalStorage Id calls", Id);
        // localStorage.removeItem('homeloan');
        // alert('Local storage cleared!');
        // setHomeLoanDetails({});
        let newArray = arraylist.filter((item) => item.id !== Id);
        localStorage.setItem('homeloan', JSON.stringify(newArray));
        setHomeLoanDetails(newArray);
    }

    const retrieveHomeLoanLocalStorage = () => {
        let storedData = localStorage.getItem('homeloan');
        if (storedData) {
            setHomeLoanDetails(JSON.parse(storedData));

        }
    }

    const updateloandeatils = (loantype) => (

        <div id="homeloanID" style={{ borderTop: "1px solid var(--shade-color)", borderBottom: "1px solid var(--shade-color)", padding: "10px 10px", backgroundColor: "var(--shade-color)", width: "100%", position: "relative" }}>
            <div className="controls" style={{ marginTop: "20px" }}>
                <div className="input-group-label">
                    <p className="loans-heads">{loantype}</p>
                </div>
                <div className="input-group">
                </div>
            </div>
            <div className="controls">
                <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                    <p>Financial institution</p>
                    <p style={{ color: "var(--text-color)", fontSize: "10px", position: "absolute", right: "0px", top: "17px" }}>(If your financial institution is not listed, select other)</p>
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        id="institutionName"
                        name="institutionName"
                        value={financialInstitution || ''}
                        ref={financialInstitutionref}
                        onChange={(e) => setfinancialInstitution(e.target.value)}
                        placeholder="" maxLength={100}
                        onKeyDown={handleKeyPressString}
                    ></input>
                </div>
            </div>
            <div className="controls">
                <div className="input-group-label">
                    <p>Loan limit</p>
                </div>
                <div className="input-group">
                    <div className="join-dollar">
                        <label className="form-group-dollar">$</label>
                        <input
                            type="text"
                            id="loanLimit"
                            name="loanLimit"
                            value={loanLimit}
                            onChange={(e) => setloanLimit(e.target.value)}
                            ref={loanLimitref}
                            placeholder=""
                            maxLength={10}
                            onKeyDown={handleKeyPress}
                            style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} >
                        </input>
                    </div>
                </div>
            </div>
            <div className="controls">
                <div className="input-group-label">
                    <p>Amount owed</p>
                </div>
                <div className="input-group">
                    <div className="join-dollar">
                        <label className="form-group-dollar">$</label>
                        <input
                            type="text"
                            id="amountOwed"
                            name="amountOwed"
                            value={amountOwed}
                            onChange={(e) => setamountOwed(e.target.value)} ref={amountOwedref}
                            placeholder=""
                            maxLength={10}
                            onKeyDown={handleKeyPress}
                            style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                    </div>
                </div>
            </div>
            <div className="controls" style={{ alignItems: "flex-start" }}>
                <div className="input-group-label">
                    <p>Repayment amount</p>
                </div>
                <div className="input-group" style={{ flexDirection: "column", gap: "10px" }}>
                    <div className="join-dollar">
                        <label className="form-group-dollar">$</label>
                        <input type="text"
                            id="repaymentAmount"
                            name="repaymentAmount"
                            value={repaymentAmount}
                            onChange={(e) => setrepaymentAmount(e.target.value)} ref={repaymentAmountref}
                            placeholder=""
                            onKeyDown={handleKeyPress}
                            maxLength={10}
                            style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} >
                        </input>
                        <select id="repaymentType"
                            name="repaymentType"
                            value={homeloanDetails || 'Monthly'}
                            onChange={(e) => setrepaymentType(e.target.value)}
                            ref={repaymentAmountref}
                            style={{ backgroundColor: "var(--theme-color)", color: "var(--white-color)", border: "1px solid var(--shade-color)", borderRadius: "2px 0px 0px 2px", padding: "5px", width: "100px" }}>

                            <option value="Monthly" selected>Monthly</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Fortnightly">Fortnightly</option>
                            <option value="Annual">Annual</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="controls" style={{ alignItems: "flex-start" }}>
                <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                    <p style={{}}>Is this a joint account? </p>
                    <p style={{ color: "var(--text-color)", fontSize: "10px", position: "absolute", right: "0px", top: "17px" }}>(Liability that has 2 or more account holders)</p>
                </div>
                <div className="input-group">
                    <select
                        id="isJointAccount"
                        name="isJointAccount"
                        value={IsJointAccount || '0'}
                        onChange={(e) => setIsJointAccount(e.target.value)}
                        ref={IsJointAccountref}
                    >
                        <option value="0" disabled selected>Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="controls" >
                <div className="input-group-label" >

                </div>
                <div className="input-group">
                    <button onClick={() => fnSetNewHomeLoanDetails()} className="btnAdd">Add</button>
                </div>
            </div>
        </div>

    );

    const Populateloandeatils = (loantype) => {
        //debugger;
        
        if (homeloanDetails.length === 0) return null;

        return homeloanDetails.map((item, index, array) => (
            <div key={index} style={{ marginBottom: "10px", borderTop: "1px solid var(--shade-color)", borderBottom: "1px solid var(--shade-color)", padding: "10px 10px", backgroundColor: "var(--shade-color)", width: "100%", position: "relative" }}>
                <CloseIcon style={{ position: "absolute", color: "red", fontSize: "18px", right: "5", top: "5" }} onClick={() => clearHomeLoanLocalStorage(item.id, array)} />
                <div className="controls" style={{ marginTop: "20px" }}>
                    <div className="input-group-label">
                        <p className="loans-heads">{loantype}</p>
                    </div>
                    <div className="input-group"></div>
                </div>
                <div className="controls">
                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                        <p>Financial institution</p>
                        <p style={{ color: "var(--text-color)", fontSize: "10px", position: "absolute", right: "0px", top: "17px" }}>(If your financial institution is not listed, select other)</p>
                    </div>
                    <div className="input-group">
                        <input type="text" value={item.institutionName} disabled placeholder=""></input>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Loan limit</p>
                    </div>
                    <div className="input-group">
                        <div className="join-dollar">
                            <label className="form-group-dollar">$</label>
                            <input type="text" value={item.loanLimit} disabled placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                        </div>
                    </div>
                </div>
                <div className="controls">
                    <div className="input-group-label">
                        <p>Amount owed</p>
                    </div>
                    <div className="input-group">
                        <div className="join-dollar">
                            <label className="form-group-dollar">$</label>
                            <input type="text" value={item.amountOwed} disabled placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                        </div>
                    </div>
                </div>
                <div className="controls" style={{ alignItems: "flex-start" }}>
                    <div className="input-group-label">
                        <p>Repayment amount</p>
                    </div>
                    <div className="input-group" style={{ flexDirection: "column", gap: "10px" }}>
                        <div className="join-dollar">
                            <label className="form-group-dollar">$</label>
                            <input type="text" value={item.repaymentAmount} disabled placeholder="" style={{ borderRadius: "0px 2px 2px 0px", width: "100%" }} ></input>
                            <select disabled value={item.repaymentType} style={{ backgroundColor: "var(--theme-color)", color: "var(--white-color)", border: "1px solid var(--shade-color)", borderRadius: "2px 0px 0px 2px", padding: "5px", width: "100px" }}>
                                <option value="Monthly" selected>Monthly</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Fortnightly">Fortnightly</option>
                                <option value="Annual">Annual</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="controls" style={{ alignItems: "flex-start" }}>
                    <div className="input-group-label" style={{ flexDirection: "column", position: "relative" }}>
                        <p style={{}}>Is this a joint account? </p>
                        <p style={{ color: "var(--text-color)", fontSize: "10px", position: "absolute", right: "0px", top: "17px" }}>(Liability that has 2 or more account holders)</p>
                    </div>
                    <div className="input-group">
                        <select disabled value={item.IsJointAccount}>
                            <option value="0" disabled selected>Please select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
            </div>
        ));


    };


    return (<>
        {
            Populateloandeatils('Home loan')
        }

        {
            updateloandeatils('Home loan')
        }
    </>)
}

export default HomeLoanLiabilities;
