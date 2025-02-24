
function Contact() {

    return (
        <header>
            <div className="contactContainer" id="contact">

                <section className="contactSection">
                    <h2 className="letsConnect">Let's <br></br>Connect</h2>

                    <div className="formContainer">

                        <form action="https://api.web3forms.com/submit" method="POST" target="_blank">
                            <input type="hidden" name="access_key" value="7d657a0f-b2be-4590-bade-8cae8414fad6"></input>
                            <div className="row100">
                                <div className="col">
                                    <div className="inputBox">
                                        <input type="text" name="first_name" required="required"></input>
                                        <span className="text">First Name</span>
                                        <span className="line"></span>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="inputBox">
                                        <input type="text" name="last_name" required="required"></input>
                                        <span className="text">Last Name</span>
                                        <span className="line"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row100">
                                <div className="col">
                                    <div className="inputBox">
                                        <input type="text" name="email" required="required"></input>
                                        <span className="text">Email</span>
                                        <span className="line"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row100">
                                <div className="col">
                                    <div className="inputBox textarea">
                                        <textarea required="required" name="messgae"></textarea>
                                        <span className="text">Your Message...</span>
                                        <span className="line"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row100">
                                <div className="col">
                                    <input className="formButton" type="submit" value="Send"></input>
                                </div>
                            </div>

                        </form>
                    </div>

                </section>

            </div>




        </header>
    );
}

export default Contact