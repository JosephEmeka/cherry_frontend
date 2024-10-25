import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import MedicalHistory from "../components/medical_history/MedicalHistory";
import UpcomingSchedules from "../components/medical_history/UpcomingSchedules";
import WelcomeSection from "../components/WelcomeSection";

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1">
                <Sidebar className="max-h-screen" />
                <main className="flex-1 p-4 md:p-6 bg-gray-100">
                    <Header />
                    <WelcomeSection />
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <MedicalHistory />
                        <UpcomingSchedules />
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;