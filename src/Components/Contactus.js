import React, { useRef, useState } from "react"
import Layout from "./Layout"
import { Link } from "react-router-dom"
import { isValidEmail, handleKeyPress, handleKeyPressString } from '../Components/Pages/Calculator/Helper'
import { ContactUs } from "../Components/APIUrl.js"
//import { enqueueSnackbar, SuccessAlertMessage } from "./Admin/AppToast.js"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSnackbar } from "notistack";
import DirectorDetails from "./Pages/Board/DirectorDetails.js"
import DirectorDetailsSecond from "./Pages/Board/DirectorDetailsSecond.js"
import ContactusBanner from '../assets/images/banner/contactusBanner.jpg'


import { app } from '../firebaseconfig.js'
import { getDatabase, ref, set, push } from "firebase/database";


export default function Home() {
    const { enqueueSnackbar } = useSnackbar();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const [IsLead, setLead] = useState(true);
    const [CreatedDate, setCreatedDate] = useState(Date.now());
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

        if (Message.length < 2) {
            enqueueSnackbar("Message must be valid", { variant: "warning" });
            return false;
        }

        try {
            const db = getDatabase(app);
            const newDoc = push(ref(db, 'ContactUs'));
            set(newDoc, {
                Name: Name,
                Email: Email,
                Phone: Phone,
                Subject: Subject,
                Message: Message,
                IsLead: IsLead,
                CreatedDate: CreatedDate
            }).then(() => {
                ClearUsestate()
                enqueueSnackbar("Submitted Successfully", { variant: "success" });
            }).catch((error) => {
                console.error("Error writing new message to Firebase Database", error);
                enqueueSnackbar("Error writing new message to Firebase Database", { variant: "error" });
            });

        }
        catch (err) {
            console.log(err)
        }
    }

    function ClearUsestate() {
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <>
            <Layout breadcrumbTitle="Contact Us" breadcrumbBanner={ContactusBanner}>

                <DirectorDetails />
                <DirectorDetailsSecond />
                {/* contact-info-section */}
                <section className="contact-info-section centred pt_50 pb_30">
                    <div className="auto-container">
                        {/* <div className="sec-title mb_70">
                            <h6>Contact US</h6>
                            <h2>Contact Details</h2>
                        </div> */}
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                <div className="info-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-2"></i></div>
                                        <h3>Our Location</h3>
                                        {/* <p>Unit 2 36-38 Lydbrook Street,<br /> WESTMEAD NSW 2145</p> */}
                                        <p>Omega Hotel, Plot 2018, GF, Sector-45, Near Huda City Centre Metro Station,<br />
                                            Gurgaon, Haryana - 122001</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                <div className="info-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-43"></i></div>
                                        <h3>Email Address</h3>
                                        <p><Link to="mailto:yadavpushpender22@gmail.com">yadavpushpender22@gmail.com</Link></p>
                                        <p><Link to="mailto:sainiritesh704@gmail.com">sainiritesh704@gmail.com</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                <div className="info-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-44"></i></div>
                                        <h3>Phone Number</h3>
                                        <p>Pushpender Yadav
                                            <br /><Link to="tel:919929800823">+91 9929800823</Link> (24/7)</p>
                                        <p className="mt_20">Ritesh Saini
                                            <br /><Link to="tel:919929800823">+91 9958425477</Link> (24/7)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact-info-section End */}




                {/* Contact Form Section */}
                <section id="_form" className="contact-section pt_120 pb_120">
                    <div className="auto-container">

                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 info-column">
                                {/* Google Map Section */}
                                <section className="google-map-section">
                                    <div id="_map" className="auto-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2186.77378759471!2d77.06673696073483!3d28.45136627778305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193a05a04377%3A0xe67b6317b6265486!2sHotel%20Omega!5e0!3m2!1sen!2sin!4v1744009417757!5m2!1sen!2sin" height={500} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                                                <input type="text" name="phone" ref={phoneref} value={Phone} maxLength={10} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" onKeyDown={handleKeyPress} />
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




            </Layout>
        </>
    )
}