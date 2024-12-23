import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router';
import { useAuth } from '@/context/AuthContext';

const NavBar = () => {
    const { user, logout } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
    };

    const commonNavigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Login', href: '/login' },
        { name: 'Signup', href: '/signup' },
        { name: 'Logout', href: '/' }
    ];

    const studentNav = [
        { name: 'Dashboard', href: '/student/dashboard' },
        { name: 'Profile', href: `/student/profile/${user?.id}` },
        { name: 'Support', href: '/student/support' },
    ];

    const companyNav = [
        { name: 'Dashboard', href: '/company/dashboard' },
        { name: 'Profile', href: `/company/profile/${user?.id}` },
        { name: 'Support', href: '/company/support' },
    ];

    const collegeNav = [
        { name: 'Dashboard', href: '/college/dashboard' },
        { name: 'Profile', href: '/college/profile' },
    ];

    const roleSpecificNav = user?.userRole === 'student' ? studentNav : user?.userRole === 'company' ? companyNav : collegeNav;

    return (
        <header className="inset-x-0 top-0 z-50 fixed bg-white border-b border-gray-300 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-2xl font-bold text-blue-600">Placemenia</Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {commonNavigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                                    onClick={item.name === 'Logout' ? handleLogout : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {user && roleSpecificNav.map((item) => (
                                <Link key={item.name} to={item.href} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </nav>
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {commonNavigation.map((item) => (
                            <Link key={item.name} to={item.href} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                                {item.name}
                            </Link>
                        ))}
                        {user && roleSpecificNav.map((item) => (
                            <Link key={item.name} to={item.href} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
