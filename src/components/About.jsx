import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaThumbsUp, FaDownload, FaChevronDown } from 'react-icons/fa';
import { 
    SiJavascript, 
    SiHtml5, 
    SiCss3, 
    SiRuby, 
    SiReact, 
    SiBootstrap, 
    SiRubyonrails, 
    SiNodedotjs,
    SiPostgresql,
    SiGithub,
    SiGit
} from 'react-icons/si';

const About = () => {
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
        { icon: <FaGithub />, url: 'https://github.com/derrick1451/', label: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/okongo-derrick/', label: 'LinkedIn' },
        { icon: <FaTwitter />, url: 'https://x.com/DerrickHayle', label: 'Twitter' },
        { icon: <FaThumbsUp />, url: '#', label: 'Thumbs Up' }
    ];

    const languages = [
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500' },
        { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-600' },
        { name: 'CSS', icon: <SiCss3 />, color: 'text-blue-500' },
        { name: 'Ruby', icon: <SiRuby />, color: 'text-red-600' }
    ];

    const frameworks = [
        { name: 'React', icon: <SiReact />, color: 'text-blue-400' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-600' },
        { name: 'Ruby on Rails', icon: <SiRubyonrails />, color: 'text-red-600' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' }
    ];

    const tools = [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700' },
        { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-800 dark:text-white' },
        { name: 'Git', icon: <SiGit />, color: 'text-orange-600' }
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Section Header */}
                    <motion.div 
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            About Myself
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* About Text Section */}
                        <motion.div variants={itemVariants}>
                            <div className="space-y-6">
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Kickstarting your vision through code. I am a certified full-stack web developer 
                                    with a passion for building interactive web applications. Experienced in building 
                                    responsive web applications using HTML, CSS, JavaScript, React, Node.js, and Ruby on Rails.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Let's turn your ideas into exceptional digital experiences.
                                </p>
                            </div>

                            {/* Social Links */}
                            <motion.div 
                                className="mt-8"
                                variants={itemVariants}
                            >
                                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wider mb-4">
                                    LET'S CONNECT
                                </h3>
                                <div className="flex space-x-4 mb-6">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white p-3 rounded-lg transition-all duration-300"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            title={social.label}
                                        >
                                            <span className="text-xl">{social.icon}</span>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Resume Button */}
                                <motion.button
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaDownload /> Get my resume
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Skills Section */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            {/* Languages */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Languages</h3>
                                    <FaChevronDown className="text-gray-500" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {languages.map((lang, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-3 hover:shadow-md transition-shadow"
                                            whileHover={{ scale: 1.02 }}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className={`text-2xl ${lang.color}`}>{lang.icon}</span>
                                            <span className="font-medium text-gray-800 dark:text-gray-200">{lang.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Frameworks */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frameworks</h3>
                                    <FaChevronDown className="text-gray-500" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {frameworks.map((framework, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-3 hover:shadow-md transition-shadow"
                                            whileHover={{ scale: 1.02 }}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className={`text-2xl ${framework.color}`}>{framework.icon}</span>
                                            <span className="font-medium text-gray-800 dark:text-gray-200">{framework.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills & Tools */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Skills & Tools</h3>
                                    <FaChevronDown className="text-gray-500" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {tools.map((tool, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-3 hover:shadow-md transition-shadow"
                                            whileHover={{ scale: 1.02 }}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className={`text-2xl ${tool.color}`}>{tool.icon}</span>
                                            <span className="font-medium text-gray-800 dark:text-gray-200">{tool.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;