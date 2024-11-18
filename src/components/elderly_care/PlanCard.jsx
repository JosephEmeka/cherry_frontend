import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

export default function PlanCard({ title, price, features, bgColor = 'bg-white', textColor = 'text-gray-600', btnTextColor = 'text-white', btnBgColor = 'bg-rose-600', btnHoverColor = 'hover:bg-rose-700' }) {
    return (
        <Card className={`${bgColor} ${textColor}`}>
            <CardHeader>
                <CardTitle className={textColor}>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-baseline text-2xl font-semibold">
                        {price}
                        <span className="text-sm font-normal text-gray-500 ml-1">/month</span>
                    </div>
                    <ul className="space-y-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <Check className={`h-4 w-4 ${btnTextColor} mr-2`} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <PrimaryButton
                        text="Start Now"
                        bgColor={btnBgColor}
                        hoverColor={btnHoverColor}
                        textColor={btnTextColor}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
