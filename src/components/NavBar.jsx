import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function NavBar() {
    const [isDark, setIsDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const navItems = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Animated Logo */}
                    <motion.div 
                        className="flex-shrink-0 cursor-pointer group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <motion.h1 
                                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-blue-600 group-hover:to-purple-800 transition-all duration-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Derrick
                                <motion.span 
                                    className="text-sm md:text-base font-medium bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent ml-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.3 }}
                                >
                                    Tech
                                </motion.span>
                            </motion.h1>
                            
                            {/* Animated underline */}
                            <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            />
                            
                            {/* Hover effect dot */}
                            <motion.div
                                className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.title}
                                </a>
                            ))}
                            <button
                                onClick={() => setIsDark(!isDark)}
                                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300"
                            >
                                {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 mr-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300"
                        >
                            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <motion.div
                    className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </nav>
    );
}