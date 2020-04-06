import React from 'react';
import { data } from "../../../data/imageData"

export const CompanyLogo = () => {
    const logo = data.logo;
    return (
        <img src={logo} className="w-100" alt="locobuzz-logo" />
    )
}
