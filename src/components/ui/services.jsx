import React from "react";
import { Link } from "react-router";

const Services = () => {
    const services = [
        {
            title: "EMPLOYERS",
            subtitle: "End-to-end virtual campus hiring",
            buttonText: "For Employers",
            href: "/company/registration",
            icon: "👔",
        },
        {
            title: "COLLEGES",
            subtitle: "Digitize & automate placements online",
            buttonText: "For Colleges",
            href: "/college/dashboard",
            icon: "🎓",
        },
        {
            title: "STUDENTS",
            subtitle: "Learn, prepare & apply to jobs",
            buttonText: "For Students",
            href: "/student/registration",
            icon: "📚",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Join Us
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Moved Card component definition before the export
const Card = ({ title, subtitle, description, buttonText, icon, href }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex flex-col items-start gap-4">
                <span className="text-5xl bg-blue-50 p-4 rounded-lg">{icon}</span>
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                    <h4 className="text-lg font-medium text-blue-600">{subtitle}</h4>
                 
                </div>
                <Link 
                    to={href}
                    className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-lg
                    bg-blue-600 text-white font-semibold hover:bg-blue-700 
                    transform hover:-translate-y-0.5 transition-all duration-200"
                >
                    {buttonText}
                </Link>
            </div>
        </div>
    );
};

export default Services;
