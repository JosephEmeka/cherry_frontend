import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import MedicalHistory from "../components/medical_history/MedicalHistory";
import UpcomingSchedules from "../components/medical_history/UpcomingSchedules";
import WelcomeSection from "../components/WelcomeSection";

const Home = () => {
    return (
        <div>
        <div className="flex">

            <Sidebar className="max-h-screen"/>
            <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                <Header/>
                <WelcomeSection/>
                    <section className="grid grid-cols-2 gap-8">
                        <MedicalHistory/>
                        <UpcomingSchedules/>
                    </section>
            </main>
        </div>
            <Footer/>
        </div>

);
};

export default Home