// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value }) => {
  const spring = useSpring(0, { bounce: 0, duration: 2000 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Section */}
      <motion.div className="flex flex-col gap-1" variants={itemVariants}>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Hello, Developer! </h1>
        <p className="text-slate-500 dark:text-[#95c6a9]">Here's what's happening in your projects today.</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div
          className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-surface-border flex flex-col justify-between h-40 group hover:border-primary/50 transition-colors"
          variants={itemVariants}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-[#95c6a9] text-sm font-medium mb-1">Users Online</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                <Counter value={1245} />
              </h3>
            </div>
            <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined">group</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-500 font-medium">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+12% from yesterday</span>
          </div>
        </motion.div>
        {/* Card 2 */}
        <motion.div
          className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-surface-border flex flex-col justify-between h-40 group hover:border-primary/50 transition-colors"
          variants={itemVariants}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-[#95c6a9] text-sm font-medium mb-1">Tasks Completed</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                 <Counter value={85} />%
              </h3>
            </div>
            <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
          </div>
          {/* Progress Bar Visual */}
          <div className="w-full bg-gray-200 dark:bg-black/30 rounded-full h-2 mt-2">
            <motion.div
              className="bg-primary h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>
        {/* Card 3 */}
        <motion.div
          className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-surface-border flex flex-col justify-between h-40 group hover:border-primary/50 transition-colors"
          variants={itemVariants}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-[#95c6a9] text-sm font-medium mb-1">Total Revenue</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                $<Counter value={4300} />
              </h3>
            </div>
            <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined">attach_money</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-500 font-medium">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+8% this week</span>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity Table */}
      <motion.div
        className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-surface-border overflow-hidden"
        variants={itemVariants}
      >
        <div className="p-6 border-b border-gray-100 dark:border-surface-border flex flex-wrap justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">System Logs</h3>
            <p className="text-sm text-slate-500 dark:text-[#95c6a9]">Recent activity across the platform</p>
          </div>
          <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-surface-border text-sm font-medium text-slate-600 dark:text-white hover:bg-gray-50 dark:hover:bg-surface-border transition-colors">
            View All Logs
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 dark:text-[#95c6a9]">
            <thead className="bg-gray-50 dark:bg-[#1b3224] text-xs uppercase font-semibold text-slate-900 dark:text-white">
              <tr>
                <th className="px-6 py-4">Log ID</th>
                <th className="px-6 py-4">Event Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-surface-border">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-surface-border/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">#1023</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-blue-500/10 text-blue-500">
                      <span className="material-symbols-outlined text-sm">dns</span>
                    </div>
                    System Boot
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 text-right">10:00 AM</td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-surface-border/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">#1024</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-purple-500/10 text-purple-500">
                      <span className="material-symbols-outlined text-sm">login</span>
                    </div>
                    User Login
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 text-right">10:05 AM</td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-surface-border/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">#1025</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-orange-500/10 text-orange-500">
                      <span className="material-symbols-outlined text-sm">upload_file</span>
                    </div>
                    File Upload
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-right">10:12 AM</td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-surface-border/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">#1026</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-red-500/10 text-red-500">
                      <span className="material-symbols-outlined text-sm">logout</span>
                    </div>
                    Logout
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 text-right">10:45 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Footer / Extra Space */}
      <footer className="mt-4 pb-8 text-center md:text-left">
        <p className="text-xs text-slate-400 dark:text-[#95c6a9]/50">© 2023 DevDash Dashboard. Designed for Builders.</p>
      </footer>
    </motion.div>
  );
};

export default Home;
