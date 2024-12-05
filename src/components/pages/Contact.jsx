import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-20">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
                <p className="text-gray-600 mt-3">
                    We'd love to hear from you! Fill out the form below or reach out via the contact details.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-10 items-start">
                {/* Contact Form */}
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <form>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                id="name"
                                placeholder="Your Full Name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                id="email"
                                placeholder="Your Email Address"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                id="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-800">Contact Details</h2>
                        <p className="text-gray-600 mt-2">
                            You can also reach us directly through these contact methods.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-800">Address</h4>
                                <p className="text-gray-600">
                                    123 Main Street, City, Country
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-800">Email</h4>
                                <p className="text-gray-600">info@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                                <p className="text-gray-600">+1 234 567 890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
