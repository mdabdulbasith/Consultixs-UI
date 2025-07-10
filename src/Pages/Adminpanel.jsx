import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchContacts = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('No token found. Please login.');
        setLoading(false);
        navigate('/login');
        return;
      }

      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401 || res.status === 403) {
        setError('Session expired or unauthorized. Please login again.');
        localStorage.removeItem('adminToken');
        setLoading(false);
        navigate('/login');
        return;
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch contacts');
      setContacts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete');
      }

      setContacts(prev => prev.filter(c => c._id !== id));
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-400">Admin Dashboard</h1>
          <div className="flex gap-2">
            <button
              onClick={fetchContacts}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded shadow text-white transition cursor-pointer"
            >
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded shadow text-white transition cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">📬 Contacts Submitted</h2>

        {/* Content */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && contacts.length === 0 && (
          <p className="text-gray-400">No contacts yet.</p>
        )}

        {!loading && !error && contacts.length > 0 && (
          <ul className="space-y-4 max-h-[450px] overflow-y-auto scroll-smooth pr-2">
            {contacts.map((c) => (
              <li
                key={c._id}
                className="p-4 border border-gray-700 rounded bg-gray-800 shadow-sm relative"
              >
                <p><strong>Name:</strong> {c.name}</p>
                <p><strong>Email:</strong> {c.email}</p>
                <p><strong>Message:</strong> {c.message}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Submitted: {new Date(c.createdAt).toLocaleString()}
                </p>
                <button
                  onClick={() => handleDelete(c._id)}
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-400 px-3 py-1 text-sm rounded text-white cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
