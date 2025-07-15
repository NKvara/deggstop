import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          
          <div className="space-y-4 text-gray-600">
            <p>
              This is a modern React application built with the latest technologies:
            </p>
            
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="list-disc list-inside space-y-2 ml-4"
            >
              <li>React 19 with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>Framer Motion for animations</li>
              <li>React Router for navigation</li>
              <li>Vite for fast development</li>
            </motion.ul>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6"
            >
              This combination provides a powerful foundation for building modern web applications with smooth animations and responsive design.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <Link
              to="/"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
