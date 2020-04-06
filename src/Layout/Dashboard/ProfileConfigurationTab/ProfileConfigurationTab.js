import React from 'react'
import { data } from "../../../data/imageData"

export const ProfileConfigurationTab = (props) => {

    const facebook = data.facebook;
    const instagram = data.instagram;
    const togglePopover = props.togglePopover;

    return (
        <section className="card row form-group">
            <div className="card-body">
                <h5 className="text-bold">Profile Configuration</h5>
                <h6 className="text-muted form-group">Condiv all your channels/profile keywords</h6>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#socialProfiles">Social Profiles
        <span>(3)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#keywords">Keywords</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#adAccounts">Ad Accounts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#otherProfiles">Other Profiles</a>
                    </li>
                </ul>
                <div className="tab-content config-tab-content">
                    <div className="tab-pane active" id="socialProfiles">
                        <p className="text-bold mb-0">Active Profiles / Total Profiles: <span
                            className="text-success"><b>3</b></span> <b>/ 8</b> <button
                                className="btn btn-primary float-right btn-sm" onClick={togglePopover}> <i
                                    className="fa fa-plus-circle mr-2"></i>
            Add
            Profiles </button></p>
                        <div className="social-media-popover card mt-3" id="media-popover">
                            <h6 className="text-bold form-group">Add Your Social Media Profiles</h6>
                            <div className="d-flex form-group">
                                <img src={facebook} alt="facebook-logo" className="mr-2" />
                                <span className="text-bold">Facebook</span>
                            </div>
                            <div className="d-flex">
                                <img src={instagram} alt="instagram-logo" className="mr-2" />
                                <span className="text-bold">Instagram</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="tab-pane fade" id="keywords">
                        <p className="text-bold mb-0">Keywords</p>
                    </div>
                    <div className="tab-pane fade" id="adAccounts">
                        <p className="text-bold mb-0">Ad Accounts</p>
                    </div>
                    <div className="tab-pane fade" id="otherProfiles">
                        <p className="text-bold mb-0">Other Profiles</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
