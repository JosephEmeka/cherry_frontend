import PlanCard from "@/components/PlanCard"

export default function Component() {
    return (
        <div className="flex-1 overflow-auto p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Elderly Care</h1>
                    <h2 className="text-2xl font-semibold mt-4 text-gray-800">Comprehensive Care for the Elderly</h2>
                    <p className="text-gray-600 mt-2">
                        At Cherry Medicals, we have developed an elderly care program designed to enhance the health and wellness of the elderly.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <PlanCard
                        title="Basic"
                        price="₦75,000"
                        priceColor="text-gray-500"
                        features={[
                            "Weekly Physiotherapist Visits",
                            "Doctor takes Calls",
                            "Doctor Chats with you",
                            "Medical Reports",
                            "Access to Cherry App",
                        ]}
                        bgColor="bg-white"
                        textColor="text-gray-600"
                    />
                    <PlanCard
                        title="Standard"
                        price="₦100,000"
                        priceColor="text-rose-100"
                        features={[
                            "Weekly Physiotherapist Visits",
                            "Monthly Basic Lab Health checkup",
                            "(Blood sugar, Blood pressure, BMI, Lung function)",
                            "Doctor takes Calls",
                            "Doctor Chats with you",
                            "Medical Reports",
                            "Access to Cherry App",
                        ]}
                        bgColor="bg-rose-600"
                        textColor="text-white"
                        isHighlighted={true}
                    />
                    <PlanCard
                        title="Premium"
                        price="₦120,000"
                        priceColor="text-gray-500"
                        features={[
                            "Personalised Meal Plan",
                            "Medical Analysis and Report",
                            "Weekly Physiotherapist Visits",
                            "Monthly Basic Lab Health checkup",
                            "(Blood sugar, Blood pressure, BMI, Lung function)",
                            "Doctor takes Calls",
                            "Doctor Chats with you",
                            "Medical Reports",
                            "Access to Cherry App",
                        ]}
                        bgColor="bg-rose-50"
                        textColor="text-gray-600"
                    />
                </div>
            </div>
        </div>
    )
}