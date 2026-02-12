// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value, suffix = '' }) => {
    const spring = useSpring(0, { bounce: 0, duration: 2000 });
    const display = useTransform(spring, (current) => {
        // Handle float for bounce rate?
        if (value % 1 !== 0) return current.toFixed(1) + suffix;
        return Math.floor(current).toLocaleString() + suffix;
    });

    useEffect(() => {
      spring.set(value);
    }, [spring, value]);

    return <motion.span>{display}</motion.span>;
};

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    suffix: PropTypes.string
};

const Analytics = () => {
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
      {/* Header Section */}
      <motion.div className="flex flex-col md:flex-row md:items-center justify-between gap-4" variants={itemVariants}>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Traffic Overview</h1>
          <p className="text-slate-500 dark:text-[#95c6a9]">Monitor your website performance and visitor behavior.</p>
        </div>
        <div className="relative group">
          <select className="appearance-none bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border text-slate-900 dark:text-white text-sm rounded-full py-2.5 pl-5 pr-12 focus:ring-2 focus:ring-primary outline-none cursor-pointer w-44">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 dark:text-[#95c6a9]">
            <span className="material-symbols-outlined text-xl">expand_more</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <motion.div
            className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-surface-border shadow-sm group hover:border-primary/50 transition-colors"
            variants={itemVariants}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/10 text-green-500">-2.4%</span>
          </div>
          <p className="text-slate-500 dark:text-[#95c6a9] text-sm font-medium">Bounce Rate</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              <Counter value={42.8} suffix="%" />
          </h3>
        </motion.div>
        {/* Card 2 */}
        <motion.div
            className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-surface-border shadow-sm group hover:border-primary/50 transition-colors"
            variants={itemVariants}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined">timer</span>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/10 text-green-500">+18%</span>
          </div>
          <p className="text-slate-500 dark:text-[#95c6a9] text-sm font-medium">Avg. Session Duration</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">4m 32s</h3>
        </motion.div>
        {/* Card 3 */}
        <motion.div
            className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-surface-border shadow-sm group hover:border-primary/50 transition-colors"
            variants={itemVariants}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/10 text-green-500">+12%</span>
          </div>
          <p className="text-slate-500 dark:text-[#95c6a9] text-sm font-medium">Page Views</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              <Counter value={12845} />
          </h3>
        </motion.div>
        {/* Card 4 */}
        <motion.div
            className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-surface-border shadow-sm group hover:border-primary/50 transition-colors"
            variants={itemVariants}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-red-500/10 text-red-500">-5%</span>
          </div>
          <p className="text-slate-500 dark:text-[#95c6a9] text-sm font-medium">New Visitors</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            <Counter value={2104} />
          </h3>
        </motion.div>
      </div>

      {/* Traffic Trends Chart */}
      <motion.div
        className="bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-surface-border shadow-sm overflow-hidden"
        variants={itemVariants}
      >
        <div className="p-6 border-b border-gray-100 dark:border-surface-border flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Traffic Trends</h3>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-[#95c6a9]">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span>Direct</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-[#95c6a9]">
              <span className="w-3 h-3 rounded-full bg-surface-border"></span>
              <span>Social</span>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="h-64 w-full relative">
            <div className="absolute inset-0 flex flex-col justify-between opacity-50">
              <div className="border-t border-dashed border-gray-200 dark:border-surface-border w-full"></div>
              <div className="border-t border-dashed border-gray-200 dark:border-surface-border w-full"></div>
              <div className="border-t border-dashed border-gray-200 dark:border-surface-border w-full"></div>
              <div className="border-t border-dashed border-gray-200 dark:border-surface-border w-full"></div>
              <div className="border-t border-dashed border-gray-200 dark:border-surface-border w-full"></div>
            </div>
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 80 Q 15 70, 25 50 T 50 40 T 75 60 T 100 20 L 100 100 L 0 100 Z" fill="url(#gradient)" opacity="0.1"></path>
              <motion.path
                d="M0 80 Q 15 70, 25 50 T 50 40 T 75 60 T 100 20"
                fill="none"
                stroke="#36e27b"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              ></motion.path>
              <defs>
                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#36e27b"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-[10px] text-slate-500 dark:text-[#95c6a9] font-medium uppercase tracking-wider">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Channels */}
        <motion.div
            className="lg:col-span-2 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-surface-border shadow-sm p-6"
            variants={itemVariants}
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Top Channels</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-24 text-sm text-slate-500 dark:text-[#95c6a9]">Search Engine</span>
              <div className="flex-1 bg-gray-100 dark:bg-black/30 h-3 rounded-full overflow-hidden">
                <motion.div
                    className="bg-primary h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">65%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-sm text-slate-500 dark:text-[#95c6a9]">Direct Link</span>
              <div className="flex-1 bg-gray-100 dark:bg-black/30 h-3 rounded-full overflow-hidden">
                <motion.div
                    className="bg-primary h-full rounded-full opacity-70"
                    initial={{ width: 0 }}
                    animate={{ width: '42%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                ></motion.div>
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">42%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-sm text-slate-500 dark:text-[#95c6a9]">Referrals</span>
              <div className="flex-1 bg-gray-100 dark:bg-black/30 h-3 rounded-full overflow-hidden">
                <motion.div
                    className="bg-primary h-full rounded-full opacity-40"
                    initial={{ width: 0 }}
                    animate={{ width: '28%' }}
                    transition={{ duration: 1, delay: 0.9 }}
                ></motion.div>
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">28%</span>
            </div>
          </div>
        </motion.div>

        {/* Device Split */}
        <motion.div
            className="bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-surface-border shadow-sm p-6 flex flex-col items-center justify-center text-center"
            variants={itemVariants}
        >
          <motion.div
            className="size-28 rounded-full border-8 border-primary border-r-surface-border/50 rotate-45 mb-4"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 45, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          ></motion.div>
          <h4 className="font-bold text-slate-900 dark:text-white">Device Split</h4>
          <p className="text-xs text-slate-500 dark:text-[#95c6a9] mb-4">Desktop vs Mobile vs Tablet</p>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-lg font-bold text-primary">68%</p>
              <p className="text-[10px] text-slate-500 dark:text-[#95c6a9] uppercase">Desktop</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-slate-900 dark:text-white">24%</p>
              <p className="text-[10px] text-slate-500 dark:text-[#95c6a9] uppercase">Mobile</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-slate-400">8%</p>
              <p className="text-[10px] text-slate-500 dark:text-[#95c6a9] uppercase">Tablet</p>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="mt-4 pb-8 text-center md:text-left">
        <p className="text-xs text-slate-400 dark:text-[#95c6a9]/50">© 2023 DevDash Analytics Dashboard. Built with focus.</p>
      </footer>
    </motion.div>
  );
};

export default Analytics;
