import React from 'react';
import { data } from "../../../data/imageData";

export const BankSocialProfileCard2 = () => {
    const facebook = data.facebook;
    const instagram = data.instagram;
    const bankLogo1 = data.bankLogo1;
    const linkButton = data.linkButton;
    const bankLogo2 = data.bankLogo2;
    const clientLogo = data.clientLogo;
    return (
        <section className="social-media-profiles card col-xl-12">
            <div className="card-body pl-0">
                <h5 className="form-group text-bold"> <img src={facebook} className="mr-2"
                    alt="" />
                    <img src={instagram} className="mr-2" alt="" /> Facebook &
                    Instagram
                    Profile <span>(3)</span></h5>
                <div className="row" id="bank-card-container">
                    <div className="col-xl-4 col-lg-6 pr-web-0">
                        <div className="bank-parent-wrapper">
                            <div className="card bank-status-card">
                                <div className="card-header bank-card-header">
                                    <div className="image-wrapper">
                                        <img src={bankLogo1}
                                            className="mr-3 white-border rounded-circle" alt="" />
                                    </div>
                                    <div className="bank-details">
                                        <p className="mb-0 text-white"><b>State Bank Of India</b></p>
                                        <small className="text-white mb-0"><span className="added-on">Added on :</span>
                                            12 <sup>th</sup> Dec 2019,
                                            1:56
                                            PM</small>
                                    </div>
                                    <div className="bank-status bg-success">Owned</div>
                                </div>
                                <div className="card-body">
                                    <p className="form-group"><span className="text-bold">Last Updated On : </span><span
                                        className="text-muted added-on">12
                                            <sup>th</sup> Dec 2019, 1:56 PM</span></p>
                                    <div className="button-group d-flex justify-content-between">
                                        <button type="button" className="btn btn-light bg-white text-muted"><i
                                            className="fa fa-remove mr-2"></i>Delete</button>
                                        <button type="button" className="btn btn-light bg-white text-muted"><i
                                            className="fa fa-pause mr-2"></i>Pause</button>
                                    </div>
                                </div>
                            </div>
                            <div className="divider-section">
                                <hr />
                                <img src={linkButton} className="link-image" alt="" />
                            </div>
                            <div className="card bank-status-card">
                                <div className="card-header gradient-background">
                                    <div className="image-wrapper">
                                        <img src={bankLogo1}
                                            className="mr-3 white-border rounded-circle" alt="" />
                                        <span className="badge">
                                            <img src={instagram}
                                                className="white-border rounded-circle" alt="" />
                                        </span>
                                    </div>
                                    <div className="bank-details">
                                        <p className="mb-0 text-white"><b>State Bank Of India</b></p>
                                        <small className="text-white mb-0"><span className="added-on">Added on :
                                            </span>12 <sup>th</sup> Dec 2019,
                                            1:56
                                            PM</small>
                                    </div>
                                    <div className="bank-status bg-success">Owned</div>
                                </div>
                                <div className="card-body">
                                    <p className="form-group"><span className="text-bold">Last Updated On : </span><span
                                        className="text-muted">12
                                            <sup>th</sup> Dec 2019, 1:56 PM</span></p>
                                    <div className="button-group d-flex justify-content-between">
                                        <button type="button" className="btn btn-light bg-white text-muted"><i
                                            className="fa fa-remove mr-2"></i>Delete</button>
                                        <button type="button" className="btn btn-light bg-white text-muted"><i
                                            className="fa fa-pause mr-2"></i>Pause</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 pr-web-0">
                        <div className="bank-parent-wrapper form-group">
                            <div className="card bank-status-card">
                                <div className="card-header bank-card-header">
                                    <div className="image-wrapper">
                                        <img src={bankLogo2}
                                            className="mr-3 white-border rounded-circle" alt="" />
                                    </div>
                                    <div className="bank-details">
                                        <p className="mb-0 text-white"><b>HDFC</b></p>
                                        <small className="text-white mb-0"><span className="added-on">Added on :
                                            </span>12 <sup>th</sup> Dec 2019,
                                            1:56
                                            PM</small>
                                    </div>
                                    <div className="bank-status bg-warning text-secondary text-right">
                                    <div class="triangle-left"></div>
                                        Public</div>
                                </div>
                                <div className="card-body">
                                    <p className="form-group"><span className="text-bold">Last Updated On : </span><span
                                        className="text-muted">12
                                            <sup>th</sup> Dec 2019, 1:56 PM</span></p>
                                    <div className="button-group d-flex justify-content-between">
                                        <button type="button" className="btn btn-light bg-white text-muted"><i
                                            className="fa fa-remove mr-2"></i>Delete</button>
                                        <button type="button" className="btn btn-light bg-white text-muted"><i
                                            className="fa fa-pause mr-2"></i>Pause</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="associated-pages-card card form-group">
                            <div className="card-header d-flex align-items-center bg-white">
                                <img src={clientLogo} className="mr-2 profile-image rounded-circle" alt="client-logo" />
                                <h6 className="mb-0 text-bold">Shayeri Das</h6>
                            </div>
                            <div className="card-body">
                                <p className="text-bold">Associated Facebook Pages</p>
                                <div className="image-group fb-pages-group form-group">
                                    <img src={bankLogo2}
                                        className="mr-3 white-border rounded-circle" alt="" />
                                    <img src={bankLogo1}
                                        className="mr-3 white-border rounded-circle" alt="" />
                                          <img src={bankLogo2}
                                        className="mr-3 white-border rounded-circle" alt="" />
                                </div>
                                <span className="mb-0 text-bold added-on">Facebook Ads Accounts</span>
                                <span className="mb-0 text-bold text-primary ml-2"> <i className="fa fa-chain-broken mr-1"></i> Unlink Accounts</span>
                                <div className="card-content-wrapper mt-2">
                                <p className="text-muted text-bold"> <i></i> <span className="white-space-pre-wrap">Locobuzz Ads</span> <span className="status-icon float-right"> <i className="fa fa-check-circle text-success"></i> </span> </p>
                                <hr className="card-divider"/>
                                <p className="text-muted text-bold"> <i></i> <span>Social Media Marketing</span> <span className="status-icon float-right"> <i className="fa fa-check-circle text-success"></i> </span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 pr-web-0">
                        <div className="associated-pages-card card form-group">
                            <div className="card-header d-flex align-items-center bg-white">
                                <img src={clientLogo} className="mr-2 profile-image rounded-circle" alt="client-logo" />
                                <h6 className="mb-0 text-bold">Firstname lastname</h6>
                            </div>
                            <div className="card-body">
                                <p className="text-bold">Associated Facebook Pages</p>
                                <div className="image-group fb-pages-group form-group">
                                    <img src={bankLogo2}
                                        className="mr-3 white-border rounded-circle" alt="" />
                                    <img src={bankLogo1}
                                        className="mr-3 white-border rounded-circle" alt="" />
                                          <img src={bankLogo2}
                                        className="mr-3 white-border rounded-circle" alt="" />
                                </div>
                                <span className="mb-0 text-bold added-on">Facebook Ads Accounts</span>
                                <span className="mb-0 text-bold text-primary ml-2"> <i className="fa fa-chain-broken mr-1"></i> Unlink Accounts</span>
                                <div className="card-content-wrapper mt-2">
                                <p className="text-muted text-bold"> <i></i> <span className="white-space-pre-wrap">Locobuzz Ads</span> <span className="status-icon float-right"> <i className="fa fa-check-circle text-success"></i> </span> </p>
                                <hr className="card-divider"/>
                                <p className="text-muted text-bold"> <i></i> <span>Social Media Marketing</span> <span className="status-icon float-right"> <i className="fa fa-check-circle text-success"></i> </span> </p>
                                <button className="btn btn-outline-primary btn-block btn-sm">
                                       <i className="fa fa-plus-circle text-primary mr-1"></i> Link These Ads Account
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
