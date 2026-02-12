import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [emailNotifications, setEmailNotifications] = useState(() => {
    const saved = localStorage.getItem('emailNotifications');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  const [message, setMessage] = useState('');

  const handleSave = () => {
    localStorage.setItem('emailNotifications', JSON.stringify(emailNotifications));
    localStorage.setItem('language', language);
    setMessage('Settings saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">
      {/* Success Message */}
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {message}</span>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">App Settings</h1>
        <p className="text-slate-500 dark:text-[#95c6a9]">Manage your account preferences and application environment.</p>
      </div>

      <div className="space-y-6">
        {/* Notifications */}
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-surface-border overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-surface-border">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">notifications_active</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Notifications</h3>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Email Notifications</p>
                <p className="text-xs text-slate-500 dark:text-[#95c6a9]">Receive weekly digest and security alerts via email.</p>
              </div>
              <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
                <input
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  type="checkbox"
                  name="toggle"
                  id="email-toggle"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:ring-0 outline-none"
                />
                <label
                  htmlFor="email-toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-surface-border cursor-pointer"
                ></label>
              </div>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-surface-border overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-surface-border">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">palette</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Appearance</h3>
            </div>
          </div>
          <div className="p-6 space-y-6">
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Dark Mode</p>
                <p className="text-xs text-slate-500 dark:text-[#95c6a9]">Adjust the interface to reduce eye strain in low light.</p>
              </div>
              <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
                <input
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                  type="checkbox"
                  name="toggle"
                  id="darkmode-toggle"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:ring-0 outline-none"
                />
                <label
                  htmlFor="darkmode-toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-surface-border cursor-pointer"
                ></label>
              </div>
            </div>

            {/* Language Selection */}
            <div className="pt-4 border-t border-gray-100 dark:border-surface-border">
              <label htmlFor="language" className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                Language Selection
              </label>
              <div className="relative">
                <select
                  id="language"
                  className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-surface-border text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-3 appearance-none"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">English (United States)</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="jp">日本語</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-[#95c6a9]">
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-4">
          <button className="px-6 py-2.5 rounded-full text-sm font-medium text-slate-600 dark:text-[#95c6a9] hover:text-slate-900 dark:hover:text-white transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-2.5 bg-primary text-background-dark font-bold rounded-full hover:shadow-[0_0_20px_rgba(54,226,123,0.3)] transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">save</span>
            Save Changes
          </button>
        </div>
      </div>

      <footer className="mt-4 pb-8 text-center md:text-left">
        <p className="text-xs text-slate-400 dark:text-[#95c6a9]/50">© 2023 DevDash Dashboard. Designed for Builders.</p>
      </footer>
    </div>
  );
};

export default Settings;
