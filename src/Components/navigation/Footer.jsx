import React from 'react'
import { CustomButton, CustomButtonOutline } from '../../assets/Button/CustomButton'
import { CustomDynamicInputs } from '../../assets/inputs/CustomDynamicInputs'

const Footer = () => {
    return (

        <div className="darkMode text-light bg-Mix p-3  FooterBlock">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>

                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3 d-none d-md-block">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <CustomDynamicInputs id="newsletter1" name="newsletter1" type="text"
                                    Placeholder={"Email address"} />
                                <CustomButton type={"button"} fun={() => { console.log("login Clicked") }} text="Subscribe" />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
                    <p>© 2024 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
