import logoHalf from '../../../assets/images/logo/logosideimage.png'
import shape5 from '../../../assets/images/shape/shape-5.png';


export default function Subscribe() {
    return (
        <>
            <section className="subscribe-section">
                <div className="pattern-layer" style={{ backgroundImage: `url(${shape5})` }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                            <div className="text-box">
                                <h2>WE
                                    CREATE
                                    WAYS
                                    FOR
                                    ARTIST'S</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                            <div className="form-inner ml_40">
                                <img src={logoHalf} style={{ transform: "scale(0.5)" }} />
                                {/* <form method="post" action="/contact">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Your email" required />
                                        <button type="submit" className="theme-btn btn-two">Subscribe Now</button>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
