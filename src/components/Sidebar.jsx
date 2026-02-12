import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';

const SidebarLink = ({ to, icon, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-full transition-colors group ${
        isActive
          ? 'bg-primary text-background-dark'
          : 'hover:bg-gray-200 dark:hover:bg-surface-border text-slate-600 dark:text-[#95c6a9] hover:text-slate-900 dark:hover:text-white'
      }`
    }
  >
    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </NavLink>
);

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const Sidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/login');
    if (onClose) onClose();
  };

  return (
    <>
       {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Container */}
      <aside
        className={`w-64 bg-background-light dark:bg-background-dark border-r border-gray-200 dark:border-surface-border flex flex-col flex-shrink-0 transition-all duration-300 h-full fixed left-0 top-0 z-30
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:flex`}
      >
        <div className="flex flex-col h-full p-4">
           {/* Close button for mobile */}
           <div className="flex justify-end md:hidden mb-2">
            <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              <span className="material-symbols-outlined">close</span>
            </button>
           </div>

          {/* Logo Section */}
          <div className="mb-8 px-2 pt-2">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-background-dark font-bold">
                <span className="material-symbols-outlined text-[20px]">terminal</span>
              </div>
              <div>
                <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">DevDash</h1>
                <p className="text-slate-500 dark:text-[#95c6a9] text-xs font-normal">v1.0.0</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 flex-1">
            <SidebarLink to="/" icon="home" label="Home" onClick={onClose} />
            <SidebarLink to="/analytics" icon="bar_chart" label="Analytics" onClick={onClose} />
            <SidebarLink to="/profile" icon="person" label="Profile" onClick={onClose} />
            <SidebarLink to="/settings" icon="settings" label="Settings" onClick={onClose} />
          </nav>

          {/* Bottom Action */}
          <div className="mt-auto">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-3 rounded-full hover:bg-red-500/10 text-slate-600 dark:text-[#95c6a9] hover:text-red-500 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:text-red-500">logout</span>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Sidebar;
