import { useEffect, useState } from "react";

function FooterSection(){
    useEffect(() => {
        document.getElementById('year').textContent = new Date().getFullYear()
    })

    return (
        <footer className="text-center text-[#292929] pb-[1%]">
            <p>&copy; <span id="year"></span> Deepak Saini. All rights reserved.</p>
        </footer>
    )
}

export default FooterSection;