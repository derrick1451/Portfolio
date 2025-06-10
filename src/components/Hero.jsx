import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const socialLinks = [
        { icon: <FaTwitter />, url: 'https://x.com/DerrickHayle' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/okongo-derrick/' },
        { icon: <FaMedium />, url: 'https://medium.com/@haylederrick14' },
        { icon: <FaGithub />, url: 'https://github.com/derrick1451/' }
    ];

    return (
        <section id="home" className="flex items-center justify-center bg-white dark:bg-gray-900 px-8 sm:px-6 max-sm:pt-16 lg:px-8">
            <motion.div 
                className="max-w-7xl mx-auto py-12 sm:py-24"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className=" sm:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants}>
                        <motion.span 
                            className="text-xl  text-gray-900 dark:text-white font-medium"
                            variants={itemVariants}
                        >
                            Hi, I'm Derrick
                        </motion.span>
                        <motion.h1 
                            className="mt-4 text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400  "
                            variants={itemVariants}
                        >
                            Full-Stack Web Developer
                        </motion.h1>
                        <motion.p 
                            className="mt-2 text-xl text-gray-600 dark:text-gray-300"
                            variants={itemVariants}
                        >
                            Glad to see you!
                        </motion.p>
                        <motion.p 
                            className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                            variants={itemVariants}
                        >
                            Kickstarting your vision through code. I am a certified full-stack web developer 
                            with a passion for building interactive web applications. Experienced in building 
                            responsive web applications using HTML, CSS, JavaScript, React, Node.js, and 
                            Ruby on Rails. Let's turn your ideas into exceptional digital experiences! 
                            Check out my portfolio and let's discuss your next project.
                        </motion.p>
                        
                        <motion.div 
                            className="mt-8"
                            variants={itemVariants}
                        >
                            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wider">
                                LET'S CONNECT
                            </h2>
                            <div className="mt-4 flex space-x-6 sm:justify-start">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="hidden lg:block"
                        variants={itemVariants}
                    >
                        {/* Add your hero image here */}
                        <img 
                            src="../src/assets/developer-dark.3f07bd13.svg "
                            alt="Hero illustration" 
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;