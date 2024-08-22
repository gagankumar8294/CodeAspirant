import React from "react";
import help from './help.module.css'

function Help() {
    return (    
        <section className={help.helpSection}>
            <h2 className={help.help_heading}>Who We Do Help</h2>
            <div className={help.services}>
            </div>
        </section>
    )
}

export default Help;