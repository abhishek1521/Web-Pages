import React from 'react'
import { Sidebar } from "../Sidebar/Sidebar";
import { Breadcrumbs } from "../Dashboard/Breadcrumbs/Breadcrumbs";
import { ProfileConfigurationTab } from "../Dashboard/ProfileConfigurationTab/ProfileConfigurationTab"
import { HeaderControler } from "../Header/HeaderControler";
import { BankSocialProfileCard } from './BankCard/BankSocialProfileCard';
import { BankSocialProfileCard2 } from './BankCard/BankSocialProfileCard2';

export const Dashboard = (props) => {
    console.log(window.location.pathname); 
  
    return (
        <article className="dashboard-section col-xl-12">
            <HeaderControler />
            <div className="row">
                <Sidebar />
                <section className="col-xl-10 col-sm-9 col-md-9">
                    <Breadcrumbs />
                    <ProfileConfigurationTab togglePopover={props.togglePopover}/>
                    {window.location.pathname ==="/dashboard-1" ?<BankSocialProfileCard /> :<BankSocialProfileCard2 />}
                    
                </section>
            </div>
        </article>
    )
}
