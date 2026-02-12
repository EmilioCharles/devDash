import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';

const Header = ({ title, toggleMobileMenu }) => {
  const { user } = useAuth();

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-surface-border bg-background-light dark:bg-background-dark z-10 sticky top-0 w-full">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-surface-border text-slate-600 dark:text-white"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white hidden sm:block">{title}</h2>
      </div>

      {/* Search and Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Search Bar - hidden on small screens */}
        <div className="hidden md:flex items-center bg-white dark:bg-surface-dark border border-gray-200 dark:border-none rounded-full px-4 h-10 w-64 focus-within:ring-2 focus-within:ring-primary transition-shadow">
          <span className="material-symbols-outlined text-slate-400 dark:text-[#95c6a9]">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#95c6a9]"
            placeholder="Search..."
            type="text"
          />
        </div>

        {/* Notifications */}
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-surface-border text-slate-600 dark:text-white relative transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-background-dark"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-2 border-l border-gray-200 dark:border-surface-border">
          <div
            className="w-9 h-9 rounded-full bg-cover bg-center cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0_soBoxgTYPHNi0UvJLMRCmQJEyMIlrZxbNY1ewecU-pXjG2amqPjYTxeSmlYJXGKy3u-LUMVUHaUZU2ZuxO2VGyHjX6X0KEIeAx9QE3PC9g2HrPV1jz8lHBCX_mf9wnM3iDWBn9EFUS_pJHQ0gA1MpNO9oS8p9Fh7JFPOfX1_JvAzGMLVqLsuIHe2nZctPXRDrWnP0yzW-QMa58MboVHBm97YGFvYeRp4ZqiYk6ebjukU-uVNQAV_aGkssrXfHeQKvMB0eEXDs')" }}
          ></div>
          <div className="hidden lg:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">{user?.name || 'Guest User'}</p>
            <p className="text-xs text-slate-500 dark:text-[#95c6a9] mt-1">{user?.role || 'Guest'}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  toggleMobileMenu: PropTypes.func,
};

export default Header;
