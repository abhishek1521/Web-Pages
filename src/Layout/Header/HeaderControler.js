import React from 'react'

export const HeaderControler = () => {
    return (
        <div>
            <section className="mobile-only d-xl-none d-flex justify-content-between">
                <h4 className="text-bold">Menu</h4>
                <button className="navbar-toggler d-xl-none d-xs-inline-block" type="button" data-toggle="collapse"
                    data-target="#collapsable-content" className="collapse navbar-collapse" aria-expanded="true">
                    <span className="navbar-toggler-icon">
                        <i className="fa fa-bars"></i>
                    </span>
                </button>
            </section>
        </div>
    )
}
