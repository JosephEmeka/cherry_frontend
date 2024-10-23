import React from "react";
import doc_pic from "../assets/DocPic.png";

const WelcomeSection = () => (
    <section className="mb-8">
        <h1 className="text-[20px] text-[#98A1A8] font-bold mb-8">
            Dashboard
        </h1>
        <div className="bg-custom-cherry text-white  rounded-lg flex justify-between items-end shadow-md h-56">
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Good Morning, Adeyemi</h2>
                <p className="mb-4">Hope you are having a great day. What would you like to do today?</p>
                <button className="bg-white text-custom-cherry px-4 py-2 rounded-full hover:bg-gray-200">
                    Create An Appointment
                </button>
            </div>
            <div className="pr-28 pb-0">
                <img src={doc_pic} alt="Doctor" className=" w-[224px] h-[336px]"/>
            </div>
        </div>
    </section>
);

export default WelcomeSection;
