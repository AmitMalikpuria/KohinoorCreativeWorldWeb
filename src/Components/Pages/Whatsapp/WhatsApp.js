import React from "react";
import './WhatsApp.css'; // Import your CSS file for styling
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function WhatsApp() {
    return <>
        {/* <a href="https://wa.me/917082392820?text=Hii%20Pushpender..." target="_blank" class="whatsapp-button">
            <WhatsAppIcon className="_img" />
            <span>Chat with us</span>
        </a> */}

        <a href="https://wa.me/917082392820?text=Hi%20Kohinoor..." target="_blank" class="whatsapp-button bottom-right animated">
            <WhatsAppIcon className="_img" />
            <span>Chat with us</span>
        </a>

        {/* <a href="https://wa.me/917082392820?text=Hii%20Pushpender..." target="_blank" class="whatsapp-button icon-only">
            <WhatsAppIcon className="_img" />
        </a> */}
    </>;
}

export default WhatsApp;
