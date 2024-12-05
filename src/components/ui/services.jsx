import React from "react";
import { Link } from "react-router";

const Services = () => {
    const services = [
        {
            title: "EMPLOYERS",
            subtitle: "End-to-end virtual campus hiring",
            description: "Complete automation, right from outreach to 24,000 campuses, engagement, assessments, virtual interviews to industry benchmarking and analytics.",
            buttonText: "For Employers",
            href: "/company/registration",
            icon: "👔",
        },
        {
            title: "COLLEGES",
            subtitle: "Digitize & automate placements online",
            description: "Effortlessly streamline your campus placement process by accessing the latest job openings, managing student data, and securing interviews.",
            buttonText: "For Colleges",
            href: "/college/registration",
            icon: "🎓",
        },
        {
            title: "STUDENTS",
            subtitle: "Learn, prepare & apply to jobs",
            description: "Discover new opportunities, learn and practice on the go, prepare better for interviews.",
            buttonText: "For Students",
            href: "/student/registration",
            icon: "📚",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Our Services
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
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <h4 className="text-lg font-semibold text-gray-600 mb-4">{subtitle}</h4>
            <p className="text-gray-600 mb-6">{description}</p>
            <Link className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300" to={href}>
                {buttonText}
            </Link>
        </div>
    );
};

export default Services;
