import React from 'react'

export const Breadcrumbs = () => {
    return (
        <ul className="breadcrumb row">
            <li className="mr-3 ml-1"><i className="fa fa-refresh text-muted"></i></li>
            <li className="mr-2"><a href="/#" className="text-secondary">Locobuzz / </a></li>
            <li className="mr-2"><a href="/#" className="text-secondary">Ticket</a></li>
        </ul>
    )
}
