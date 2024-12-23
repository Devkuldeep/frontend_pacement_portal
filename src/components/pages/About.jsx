import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid'

const About = () => {
    const teamMembers = [
        {
            name: 'Anurag bharadwaj',
            role: 'Founder & CEO',
            icon: UserIcon,
            bio: 'Passionate about connecting students with career opportunities.'
        },
        {
            name: 'Monal Yadav',
            role: 'Lead Developer',
            icon: UserIcon,
            bio: 'Tech enthusiast focused on building innovative solutions.'
        },
        {
            name: 'Anjali gavel',
            role: 'Marketing Manager',
            icon: UserIcon,
            bio: 'Expert in campus relations and student engagement.'
        },
        {
            name: 'Ishika patel',
            role: 'Operations Manager',
            icon: UserIcon,
            bio: 'Skilled in managing placement processes and student support.'
        }
    ]

    return (
        <main className="flex min-h-screen flex-col items-center px-6 py-12 bg-white">
            {/* Hero Section */}
            <section className="bg-primary-50 bg-cover bg-center py-10">
                <h1 className="text-3xl font-bold text-center">About Placemenia</h1>
            </section>
            <p className="text-gray-600 text-lg mb-8 text-center max-w-4xl">
                Placemenia is your comprehensive college placement portal, connecting talented students
                with leading employers. We streamline the campus recruitment process and help students
                launch their careers.
            </p>

            {/* Mission Section */}
            <section className="max-w-4xl mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
                <div className="bg-gray-50 p-8 rounded-lg">
                    <p className="text-gray-700">
                        Our mission is to bridge the gap between academic excellence and professional opportunities.
                        We empower students with the tools and resources they need to secure their dream jobs,
                        while helping companies find the perfect talent for their organizations.
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