import React from 'react'
import { data } from "../../data/imageData";
import { CompanyLogo } from "../Header/CompanyLogo/CompanyLogo";

export const Header = () => {
    const profile = data.profile;
    const questionMark = data.questionMark;
    return (
        <div>
            <header className="col-xl-12">
                <div className="row">
                    <div className="col-xl-2 col-sm-3 col-md-3">
                        <a href="/#" className="navbar-brand p-0" >
                            <CompanyLogo />
                        </a>
                    </div>
                    <div className="col-xl-10 col-sm-9 col-md-9">
                        <div className="row">
                            <div className="col-xl-2 col-sm-3 col-md-3">
                                <small className="text-muted mb-0">Duration</small>
                                <div className="dropdown">
                                    <button className="btn btn-default dropdown-toggle w-100 text-left text-bold bg-white pl-0"
                                        type="button" id="headerDropdownToggle" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Today <span className="caret"></span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="headerDropdownToggle">
                                        <a className="today text-bold" href="/#">Today</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-10 col-sm-9 col-md-9 mt-2">
                                <section className="profile-section float-xl-right float-md-right float-sm-right d-flex">
                                    <img src={profile} className="mr-2 profile-image rounded-circle" alt="" />
                                    <div className="mr-xl-5 mr-3">
                                        <h5 className="mb-0 profile-name">Jeremy Lee</h5>
                                        <p className="text-muted mb-0">Team Leader</p>
                                    </div>
                                    <span className="fa fa-microphone action-icons mr-3 rounded-circle cursor-pointer"></span>
                                    <img src={questionMark} className="mr-3 cursor-pointer" alt="" />
                                    <span className="fa fa-power-off action-icons rounded-circle cursor-pointer"></span>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
