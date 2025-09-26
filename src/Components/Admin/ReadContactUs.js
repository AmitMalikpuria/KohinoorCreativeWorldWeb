import React, { useEffect, useState } from "react";
import './ReadContactUs.css';

import { app } from "../../firebaseconfig.js";
import { getDatabase, ref, set, push, get } from "firebase/database";
import { useSnackbar } from "notistack";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ReadContactUs() {
    const { enqueueSnackbar } = useSnackbar();
    const [database, setDatabase] = useState([]);

    const fngetDatabase = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, 'ContactUs');
        const snapShot = await get(dbRef);
        if (snapShot.exists()) {
            const myData = snapShot.val();
            const tempArray = Object.keys(myData).map((key) => {
                return {
                    ...myData[key],
                    contactId: key
                }
            });

            setDatabase(tempArray);
        } else {
            console.log("No data available");
        }
    }

    const DeleteContactUs = async (contactId) => {
        const db = getDatabase(app);
        const dbRef = ref(db, 'ContactUs/' + contactId);
        await set(dbRef, null);
        enqueueSnackbar("Deleted Successfully", { variant: "success" });
        fngetDatabase();
    }

    const UpdateLeadToggle = async (contactId, Name, Email, Phone, Subject, Message, IsLead, CreatedDate) => {
        const db = getDatabase(app);
        const dbRef = ref(db, 'ContactUs/' + contactId);
        await set(dbRef, { Name, Email, Phone, Subject, Message, IsLead, CreatedDate });
        enqueueSnackbar("Updated Successfully", { variant: "success" });
        fngetDatabase();
    }

    const fnFilterData = async (value) => {
        const db = getDatabase(app);
        const dbRef = ref(db, 'ContactUs');
        const snapShot = await get(dbRef);
        if (snapShot.exists()) {
            const myData = snapShot.val();
            const tempArray = Object.keys(myData).map((key) => {
                return {
                    ...myData[key],
                    contactId: key
                }
            });

            if (value === "New") {
                const filteredData = tempArray.filter((item) => item.IsLead === true);
                setDatabase(filteredData);
            } else if (value === "Old") {
                const filteredData = tempArray.filter((item) => item.IsLead === false);
                setDatabase(filteredData);
            } else {
                setDatabase(tempArray);
            }
        } else {
            console.log("No data available");
        }
    }



    // const PopulateData = async (Name, Email, Phone, Subject, Message, IsLead) => {
    //     const db = getDatabase(app);
    //     const dbRef = ref(db, 'ContactUs/' + contactId);
    //     await set(dbRef, { Name, Email, Phone, Subject, Message, IsLead });
    //     enqueueSnackbar("Populated Successfully", { variant: "success" });
    // }


    return <div>
        <h1 style={{ textAlign: "center", marginTop: "50px", fontWeight: "800 !important", color: "var(--theme-color)" }}>Dream Dwell Realtors</h1>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>New Leads and Data</h2>

        <div className="table-container">
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", }}>
                <button onClick={fngetDatabase} style={{ textAlign: "center", margin: "10px", padding: "10px", backgroundColor: "var(--theme-color)", color: "white", borderRadius: "5px" }}>Refresh Data</button>
                <select onClick={(e) => fnFilterData(e.target.value)} style={{ margin: "10px", padding: "10px", backgroundColor: "var(--theme-color)", color: "white", borderRadius: "5px", width: "15%" }}>
                    <option value="select" disabled selected>Filter Data</option>
                    <option value="All">All Data</option>
                    <option value="New">New</option>
                    <option value="Old">Old</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Customer Detail</th>
                        <th>Subject / Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {database && database.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>Name : <strong> {item.Name} </strong><br></br>
                                    Phone : <strong>{item.Phone}</strong> <br></br>
                                    Email :<strong> {item.Email} </strong><br></br>
                                    Date :<strong> {new Date(item.CreatedDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })} </strong><br></br>
                                </td>
                                <td>Subject : <strong>{item.Subject}</strong><br></br>
                                    {item.Message}</td>

                                <td style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                                    {item.IsLead ? <label style={{ color: "green", borderRadius: "2px solid green", fontWeight: "900" }}>New Lead</label> : <label style={{ color: "red", borderRadius: "2px solid red", fontWeight: "900" }}>Old Lead</label>}
                                    <button className={item.IsLead ? "green" : "red"} style={{ borderRadius: "5px" }} onClick={() => UpdateLeadToggle(item.contactId, item.Name, item.Email, item.Phone, item.Subject, item.Message, !item.IsLead, item.CreatedDate)}>{item.IsLead ? "Make Old" : "Make New"}</button>
                                    <button style={{ backgroundColor: "orangered", borderRadius: "5px" }} onClick={() => DeleteContactUs(item.contactId)}><DeleteForeverIcon /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>;
}

export default ReadContactUs;
