import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        name: user.name || '',
        email: user.email || '',
        title: user.title || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setMessage('Profile updated successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8">
      {/* Success Message */}
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {message}</span>
        </div>
      )}

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-surface-border shadow-sm">
        <div className="relative group">
          <div
            className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-primary/20"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0_soBoxgTYPHNi0UvJLMRCmQJEyMIlrZxbNY1ewecU-pXjG2amqPjYTxeSmlYJXGKy3u-LUMVUHaUZU2ZuxO2VGyHjX6X0KEIeAx9QE3PC9g2HrPV1jz8lHBCX_mf9wnM3iDWBn9EFUS_pJHQ0gA1MpNO9oS8p9Fh7JFPOfX1_JvAzGMLVqLsuIHe2nZctPXRDrWnP0yzW-QMa58MboVHBm97YGFvYeRp4ZqiYk6ebjukU-uVNQAV_aGkssrXfHeQKvMB0eEXDs')" }}
          ></div>
          <button className="absolute bottom-0 right-0 p-2 bg-primary text-background-dark rounded-full shadow-lg hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-sm">photo_camera</span>
          </button>
        </div>
        <div className="flex-1 text-center md:text-left space-y-1">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{user?.name || 'Guest User'}</h1>
          <p className="text-slate-500 dark:text-[#95c6a9] font-medium">{user?.title || 'Developer'}</p>
          <p className="text-sm text-slate-400 dark:text-[#95c6a9]/60">Member since {user?.joined || 'January 2023'}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              {user?.role || 'Guest'}
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold rounded-full uppercase tracking-wider">
              Pro Tier
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Account Details Form */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-surface-border shadow-sm">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-surface-border pb-4">
              <span className="material-symbols-outlined text-primary">person_outline</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Account Details</h3>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-[#95c6a9]">Full Name</label>
                  <input
                    name="name"
                    className="w-full bg-gray-50 dark:bg-background-dark border-gray-200 dark:border-surface-border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-[#95c6a9]">Email Address</label>
                  <input
                    name="email"
                    className="w-full bg-gray-50 dark:bg-background-dark border-gray-200 dark:border-surface-border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-[#95c6a9]">Job Title</label>
                  <input
                    name="title"
                    className="w-full bg-gray-50 dark:bg-background-dark border-gray-200 dark:border-surface-border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-primary/20"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Security Settings */}
        <div className="space-y-6">
          <section className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-surface-border shadow-sm h-full">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-surface-border pb-4">
              <span className="material-symbols-outlined text-primary">security</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Security</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 dark:bg-background-dark rounded-xl border border-gray-100 dark:border-surface-border">
                <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Two-Factor Auth</p>
                <p className="text-xs text-slate-500 dark:text-[#95c6a9] mb-4">Add an extra layer of security to your account.</p>
                <button className="text-xs font-bold text-primary hover:underline">Enable Now</button>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-500 dark:text-[#95c6a9]">Need to update your access credentials?</p>
                <button className="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-surface-border hover:bg-gray-50 dark:hover:bg-surface-border py-3 px-4 rounded-full text-sm font-bold text-slate-900 dark:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">lock_reset</span>
                  Change Password
                </button>
              </div>
              <div className="pt-6 border-t border-gray-100 dark:border-surface-border">
                <p className="text-xs text-slate-400 dark:text-[#95c6a9]/50 leading-relaxed">
                  Last password change: <br />
                  <span className="font-medium">3 months ago</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-4 pb-8 text-center md:text-left">
        <p className="text-xs text-slate-400 dark:text-[#95c6a9]/50">© 2023 DevDash Dashboard. Designed for Builders.</p>
      </footer>
    </div>
  );
};

export default Profile;
