import React from "react";
import Activities from "@/components/Activities/Activities";
import Contacts from "@/components/Contacts/Contacts";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const ContactsPage = () => {
    return (
        <div>
            <Header/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default ContactsPage;