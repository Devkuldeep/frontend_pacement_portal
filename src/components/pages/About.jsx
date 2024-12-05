import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid'

const About = () => {
    const teamMembers = [
        {
            name: 'kuldeep patel',
            role: 'Founder & CEO',
            icon: UserIcon,
            bio: 'Passionate about bringing people together through events.'
        },
        {
            name: 'Tanvi Mehta',
            role: 'Lead Developer',
            icon: UserIcon,
            bio: 'Tech enthusiast in web development.'
        },
        {
            name: 'Riya Soni',
            role: 'Marketing Manager',
            icon: UserIcon,
            bio: 'Our Mrketing Manger with greator presetation skills.'
        },
        {
            name: 'Lokesh Patel',
            role: 'Finance Manager',
            icon: UserIcon,
            bio: 'Finance Manager who audit and manage finance.'
        }
    ]

    return (
        <main className="flex min-h-screen flex-col items-center px-6 py-12 bg-white">
            {/* Hero Section */}
            <section className="bg-primary-50  bg-cover bg-center py-10 ">
                <h1 className=" text-3xl font-bold text-center ">About Evently</h1>
            </section>
            <p className="text-gray-600 text-lg mb-8 text-center max-w-4xl ">
                Evently is your premier platform for discovering, creating, and managing events that matter.
                We believe in bringing people together and creating memorable experiences.
            </p>

            {/* Mission Section */}
            <section className="max-w-4xl mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
                <div className="bg-gray-50 p-8 rounded-lg">
                    <p className="text-gray-700">
                        Our mission is to simplify event management and enhance the way people connect through events.
                        Whether you're organizing a small meetup or a large conference, Evently provides the tools
                        you need to succeed.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-4xl">
                <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex flex-col items-center">
                                <div className="relative w-32 h-32 mb-4">
                                    <member.icon className="w-32 h-32 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600 mb-2">{member.role}</p>
                                <p className="text-gray-700 text-center">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default About