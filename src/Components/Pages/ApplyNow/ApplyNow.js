import React, { useRef, useState } from "react"
import Layout from "../../Layout.js";

import { isValidEmail, handleKeyPress, handleKeyPressString } from '../../../Components/Pages/Calculator/Helper'
import { ContactUs } from "../../APIUrl.js"

import 'react-toastify/dist/ReactToastify.css';
import { useSnackbar } from "notistack";


function ApplyNow() {


    const { enqueueSnackbar } = useSnackbar();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const [CreatedBy, setCreatedBy] = useState(1);
    const [ModifiedBy, setModifiedBy] = useState(1);

    const nameref = useRef();
    const emailref = useRef();
    const phoneref = useRef();
    const subjectref = useRef();

    async function SubmitContact(event) {
        event.preventDefault();

        if (Name.length < 2) {
            nameref.current.focus();
            enqueueSnackbar("Name must be valid", { variant: "warning" });
            return false
        }
        // debugger
        const value = isValidEmail(Email)
        if (!value) {
            // debugger
            emailref.current.focus();
            enqueueSnackbar("Email must be valid", { variant: "warning" });
            return false;
        }
        if (Phone.length < 10) {
            phoneref.current.focus();
            enqueueSnackbar("Phone no must be valid", { variant: "warning" });
            return false;
        }

        if (Subject.length < 2) {
            subjectref.current.focus();
            enqueueSnackbar("Subject must be valid", { variant: "warning" });
            return false;
        }

        try {
            const data = { Name, Email, Phone, Subject, Message, CreatedBy, ModifiedBy }
            const response = await fetch(ContactUs + 'InsertContactUs',
                {
                    method: "Post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

            const mydata = response.json();
            //debugger
            if (mydata.data !== null) {
                ClearUsestate()
                enqueueSnackbar("Submitted Successfully", { variant: "success" });
            }
            else {
                // setdatapushed([]);
            }
        }
        catch (err) {
            console.loh(err)
        }
    }

    function ClearUsestate() {
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return <Layout>
        {/* Contact Form Section */}
        <section id="_form" className="contact-section pt_120 pb_120">
                    <div className="auto-container">

                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 info-column">
                                {/* Google Map Section */}
                                <section className="google-map-section">
                                    <div id="_map" className="auto-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13260.484279866307!2d150.97665715615574!3d-33.80918859280399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd45276df7e3%3A0x5017d681632cfd0!2sWestmead%20NSW%202145%2C%20Australia!5e0!3m2!1sen!2sin!4v1736504171597!5m2!1sen!2sin" height={500} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </section>
                                {/* Google Map Section End */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 info-column">
                                <div className="sec-title centred mb_70">
                                    <h6>Submit your message</h6>
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="form-inner">
                                    <form>
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="username" ref={nameref} value={Name} onChange={(e) => setName(e.target.value)} maxLength={40} placeholder="Your Name" onKeyDown={handleKeyPressString} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" ref={emailref} value={Email} onChange={(e) => setEmail(e.target.value)} maxLength={60} placeholder="Your email" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="phone" ref={phoneref} value={Phone} onChange={(e) => setPhone(e.target.value)} maxLength={15} placeholder="Phone" onKeyDown={handleKeyPress} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="subject" ref={subjectref} value={Subject} onChange={(e) => setSubject(e.target.value)} maxLength={200} placeholder="Subject" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" value={Message} onChange={(e) => setMessage(e.target.value)} maxLength={500} placeholder="Type message"></textarea>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                                <button className="theme-btn btn-one" type="submit" name="submit-form" onClick={(e) => SubmitContact(e)}>
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Form Section End */}

    </Layout>;
}

export default ApplyNow;
