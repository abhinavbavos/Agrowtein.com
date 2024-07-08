// src/components/AdminDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    role: 'user',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('/admin/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUsers(users.filter(user => user._id !== id));
      setSelectedUser(null);
      setSuccess('User deleted successfully');
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  const handleAddUser = async () => {
    try {
      const { data } = await axios.post('/admin/users', newUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUsers([...users, data]);
      setNewUser({ name: '', phone: '', email: '', username: '', password: '', role: 'user' });
      setSuccess('User added successfully');
    } catch (err) {
      setError('Failed to add user');
    }
    const api = axios.create({
      baseURL: 'http://localhost:5000', // Ensure this is correct
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    
    const handleAddUser = async () => {
      try {
        const { data } = await api.post('/admin/users', newUser);
        setUsers([...users, data]);
        setNewUser({ name: '', phone: '', email: '', username: '', password: '', role: 'user' });
        setSuccess('User added successfully');
      } catch (err) {
        setError('Failed to add user');
      }
    };
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <button onClick={() => setSelectedUser(null)}>Add User</button>
        <ul>
          {users.map(user => (
            <li key={user._id} onClick={() => handleSelectUser(user)}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
        <button onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}>Logout</button>
      </div>
      <div className="main-content">
        {selectedUser ? (
          <div className="user-details">
            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Username: {selectedUser.username}</p>
            <p>Role: {selectedUser.role}</p>
            <button onClick={() => handleDeleteUser(selectedUser._id)}>Delete User</button>
          </div>
        ) : (
          <div className="add-user-form">
            <h2>Add New User</h2>
            <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
            <input type="text" placeholder="Phone" value={newUser.phone} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
            <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
            <input type="text" placeholder="Username" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
            <input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
            <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button onClick={handleAddUser}>Add User</button>
          </div>
        )}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
};

export default AdminDashboard;
