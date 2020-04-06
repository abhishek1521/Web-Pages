import React from 'react'
import { data } from "../../data/imageData";

export const Sidebar = () => {
    const ticket = data.ticket;

    return (
        <nav id="collapsable-content"
            className="collapse-in-web navbar-collapse navigation-sidebar col-xl-2 col-sm-3 col-md-3 pl-0 pr-0">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/#" value=""><i className="fa fa-address-book mr-3"></i> <span>Account</span> <i
                        className="fa fa-angle-down float-right"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-user mr-3"></i> <span>Summary</span> <i
                        className="fa fa-angle-down float-right"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><img src={ticket} className="mr-3" alt="" />
                        <span>Tickets</span> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-cog mr-3"></i> <span>All Mentions</span> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-info-circle mr-3"></i> <span>Channels</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-users mr-3"></i> <span>Reports</span> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-tags mr-3"></i> <span>Add Content</span> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-shield mr-3"></i> <span>Campaign</span> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-area-chart mr-3"></i> <span>Analytics</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-envelope mr-3"></i> <span>Email
                                    Marketing</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-cog mr-3"></i> <span>Ticket Ageing
                                    Dashboard</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-cog mr-3"></i> <span>PR Dashboard</span> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-cog mr-3"></i> <span>Social Schedule</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-cog mr-3"></i> <span>UGC Management</span> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#"><i className="fa fa-cog mr-3"></i> <span>DIY Dashboard</span> </a>
                </li>
            </ul>
        </nav>
    )
}
