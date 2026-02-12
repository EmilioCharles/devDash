import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      signup({
        name: name,
        email: email,
        role: 'User',
        title: 'Developer'
      });
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-background-dark relative overflow-hidden">
      {/* Decorative Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Navbar */}
      <header className="w-full border-b border-black/10 dark:border-white/10 z-10 bg-transparent">
        <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary flex items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-[20px]">code_blocks</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight">DevDash</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Support</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 z-10">
        <motion.div
            className="w-full max-w-[440px] flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          {/* Signup Card */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-2xl border border-black/5 dark:border-white/5 p-8 sm:p-10">
            {/* Headline */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Create Account</h1>
              <p className="text-slate-500 dark:text-slate-400">Join us and start building today.</p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
               {/* Name Field */}
               <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                <div className="relative flex items-center">
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full h-12 pl-12 pr-4 bg-slate-50 dark:bg-surface-input text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all"
                  />
                  <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none text-[20px]">person</span>
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                <div className="relative flex items-center">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full h-12 pl-12 pr-4 bg-slate-50 dark:bg-surface-input text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all"
                  />
                  <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none text-[20px]">mail</span>
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Password</label>
                <div className="relative flex items-center">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full h-12 pl-12 pr-12 bg-slate-50 dark:bg-surface-input text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all"
                  />
                  <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none text-[20px]">lock</span>
                  <button type="button" className="absolute right-4 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 mt-2 bg-primary hover:bg-green-400 active:scale-[0.98] text-background-dark text-base font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(54,226,123,0.3)] hover:shadow-[0_0_25px_rgba(54,226,123,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
                {!loading && <span className="material-symbols-outlined text-[20px] font-bold">arrow_forward</span>}
              </button>

              {/* Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                <span className="flex-shrink mx-4 text-slate-400 text-sm">or sign up with</span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-3 h-12 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors bg-transparent text-sm font-medium text-slate-700 dark:text-white">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc4c4KASw0OczlONPfrpV_icSe9iIltvIX-QGeQyMyJD2NCgc_HP06SaFNlKHMQjs8bCjpRg5E-kw6MPQJD7oq4BsCE1jKBzlXSe8Gb8FUedclsn7__GBU2OfXm0EN6szzdc-PRthKvxA1M6-tfPFNTU3dxW_RhhyGn1ECup1dqb3HU5pYxoEKEHH-c2vu-IjzSTM2-KK06F5kxmLekcrScfu1m17XlfpHaSPux9cmgqxoaHTSAg30QL4xB0ZM6e9WgtSnrKpwGgk" alt="Google" className="w-5 h-5" />
                  <span>Google</span>
                </button>
                <button type="button" className="flex items-center justify-center gap-3 h-12 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors bg-transparent text-sm font-medium text-slate-700 dark:text-white">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV8chA-iQWH2y1xElrHHAYulQqaL9fWrVAENRq8wElln2E01h-n__IQ7-YhNZiFfxMDcasirFlUAw7sdQCNu6D5JiUV9kRfKXurIwwYWk9tYVfawU6xlKxM__87wwmivwYdZkoUCYCKcrmGHuVEm6hrzZkWi7CD5Aoi4uJjC8gSjB6kyd_2eT_r_ImfQzjuhYlb5K9zpmGiQR5ls8WC-3Y4L2KltgaAuzroUZm8ShrODzBLbTw1Z9wd5GVuTLwas6PgB6FsjD3BY0" alt="GitHub" className="w-5 h-5 dark:invert" />
                  <span>GitHub</span>
                </button>
              </div>
            </form>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Already have an account?
              <Link to="/login" className="font-bold text-primary hover:text-green-300 ml-1 transition-colors">Log in</Link>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Signup;
