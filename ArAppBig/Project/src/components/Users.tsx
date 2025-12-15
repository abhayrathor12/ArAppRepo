import { useState } from 'react';
import { Search, Plus, Mail, Phone, Calendar, Edit2, Trash2, X } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  joinDate: string;
  status: 'Active' | 'Inactive';
  avatar: string;
}

const initialUsers: User[] = [
  {
    id: 1,
    name: 'Amit Kumar',
    email: 'amit.kumar@vrtraining.com',
    phone: '+91 98765 43210',
    role: 'Trainee',
    joinDate: '2024-01-15',
    status: 'Active',
    avatar: 'AK',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@vrtraining.com',
    phone: '+91 98765 43211',
    role: 'Admin',
    joinDate: '2023-11-20',
    status: 'Active',
    avatar: 'PS',
  },
  {
    id: 3,
    name: 'Rahul Singh',
    email: 'rahul.singh@vrtraining.com',
    phone: '+91 98765 43212',
    role: 'Trainee',
    joinDate: '2024-02-10',
    status: 'Active',
    avatar: 'RS',
  },
  {
    id: 4,
    name: 'Vishal Patel',
    email: 'vishal.patel@vrtraining.com',
    phone: '+91 98765 43213',
    role: 'Admin',
    joinDate: '2023-09-05',
    status: 'Active',
    avatar: 'VP',
  },
  {
    id: 5,
    name: 'Anjali Mehta',
    email: 'anjali.mehta@vrtraining.com',
    phone: '+91 98765 43214',
    role: 'Trainee',
    joinDate: '2024-03-01',
    status: 'Active',
    avatar: 'AM',
  },
  {
    id: 6,
    name: 'Rohan Verma',
    email: 'rohan.verma@vrtraining.com',
    phone: '+91 98765 43215',
    role: 'Trainee',
    joinDate: '2024-01-20',
    status: 'Inactive',
    avatar: 'RV',
  },
];

export function Users() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [deleteConfirmUser, setDeleteConfirmUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Trainee',
    status: 'Active' as 'Active' | 'Inactive',
  });

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUser) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === editingUser.id 
          ? {
              ...user,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              role: formData.role,
              status: formData.status,
              avatar: formData.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase(),
            }
          : user
      ));
      setEditingUser(null);
    } else {
      // Create new user
      const newUser: User = {
        id: users.length + 1,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        joinDate: new Date().toISOString().split('T')[0],
        status: formData.status,
        avatar: formData.name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .toUpperCase(),
      };
      setUsers([...users, newUser]);
    }

    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'Trainee',
      status: 'Active',
    });
  };

  const handleEditClick = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      status: user.status,
    });
    setShowForm(true);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
    setDeleteConfirmUser(null);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingUser(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'Trainee',
      status: 'Active',
    });
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-gray-900 dark:text-white">Users Management</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Manage all users and their access to the training platform
          </p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#203f78] dark:bg-[#4a6fa5] hover:bg-[#203f78]/90 dark:hover:bg-[#4a6fa5]/90 text-white gap-2 w-full sm:w-auto"
        >
          {showForm ? (
            <>
              <X className="w-4 h-4" />
              Cancel
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Add User
            </>
          )}
        </Button>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-md w-full border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                <Trash2 className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 dark:text-white mb-2">Delete User</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Are you sure you want to delete <strong>{deleteConfirmUser.name}</strong>? This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => setDeleteConfirmUser(null)}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleDeleteUser(deleteConfirmUser.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create User Form */}
      {showForm && (
        <Card className="p-4 md:p-6 bg-[#203f78]/5 dark:bg-[#4a6fa5]/5 border-[#203f78]/20 dark:border-[#4a6fa5]/20">
          <h3 className="text-gray-900 dark:text-white mb-4">
            {editingUser ? 'Edit User' : 'Create New User'}
          </h3>
          <form onSubmit={handleCreateUser} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter full name"
                  required
                  className="bg-white dark:bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email@example.com"
                  required
                  className="bg-white dark:bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="bg-white dark:bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-700 dark:text-gray-300">
                  Role *
                </Label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#203f78] dark:focus:ring-[#4a6fa5]"
                  required
                >
                  <option value="Trainee">Trainee</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status" className="text-gray-700 dark:text-gray-300">
                  Status *
                </Label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as 'Active' | 'Inactive',
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#203f78] dark:focus:ring-[#4a6fa5]"
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="submit"
                className="bg-[#203f78] dark:bg-[#4a6fa5] hover:bg-[#203f78]/90 dark:hover:bg-[#4a6fa5]/90 text-white"
              >
                {editingUser ? 'Update User' : 'Create User'}
              </Button>
              <Button
                type="button"
                onClick={handleCancelForm}
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Search and Stats */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1 max-w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search users by name, email, or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white dark:bg-gray-800"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#203f78]/10 dark:bg-[#4a6fa5]/10 border border-[#203f78]/20 dark:border-[#4a6fa5]/20">
            <p className="text-xs text-gray-600 dark:text-gray-400">Total Users</p>
            <p className="text-[#203f78] dark:text-[#4a6fa5]">{users.length}</p>
          </div>
          <div className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
            <p className="text-xs text-gray-600 dark:text-gray-400">Active</p>
            <p className="text-green-600 dark:text-green-400">
              {users.filter((u) => u.status === 'Active').length}
            </p>
          </div>
        </div>
      </div>

      {/* Users List - Desktop Table */}
      <Card className="overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#203f78]/5 dark:bg-[#4a6fa5]/10 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">
                  Contact
                </th>
                <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">
                  Join Date
                </th>
                <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-xs text-gray-600 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#203f78] dark:bg-[#4a6fa5] flex items-center justify-center text-white text-sm flex-shrink-0">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">ID: {user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <Mail className="w-3 h-3" />
                        {user.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <Phone className="w-3 h-3" />
                        {user.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${
                        user.role === 'Admin'
                          ? 'bg-[#203f78]/10 dark:bg-[#4a6fa5]/20 text-[#203f78] dark:text-[#4a6fa5] border border-[#203f78]/20 dark:border-[#4a6fa5]/30'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <Calendar className="w-3 h-3" />
                      {new Date(user.joinDate).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${
                        user.status === 'Active'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          user.status === 'Active'
                            ? 'bg-green-500 dark:bg-green-400'
                            : 'bg-gray-400'
                        }`}
                      />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleEditClick(user)}
                        className="bg-[#203f78]/10 dark:bg-[#4a6fa5]/10 hover:bg-[#203f78]/20 dark:hover:bg-[#4a6fa5]/20 text-[#203f78] dark:text-[#4a6fa5] border border-[#203f78]/20 dark:border-[#4a6fa5]/20"
                      >
                        <Edit2 className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => setDeleteConfirmUser(user)}
                        className="bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredUsers.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-500 dark:text-gray-400">No users found matching your search.</p>
            </div>
          )}
        </div>
      </Card>

      {/* Users List - Mobile Cards */}
      <div className="md:hidden space-y-3">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#203f78] dark:bg-[#4a6fa5] flex items-center justify-center text-white flex-shrink-0">
                {user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white truncate">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">ID: {user.id}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                      user.role === 'Admin'
                        ? 'bg-[#203f78]/10 dark:bg-[#4a6fa5]/20 text-[#203f78] dark:text-[#4a6fa5] border border-[#203f78]/20 dark:border-[#4a6fa5]/30'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    {user.role}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                      user.status === 'Active'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-1 ${
                        user.status === 'Active' ? 'bg-green-500 dark:bg-green-400' : 'bg-gray-400'
                      }`}
                    />
                    {user.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <Mail className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <Phone className="w-3 h-3 flex-shrink-0" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <Calendar className="w-3 h-3 flex-shrink-0" />
                <span>
                  {new Date(user.joinDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => handleEditClick(user)}
                className="flex-1 bg-[#203f78]/10 dark:bg-[#4a6fa5]/10 hover:bg-[#203f78]/20 dark:hover:bg-[#4a6fa5]/20 text-[#203f78] dark:text-[#4a6fa5] border border-[#203f78]/20 dark:border-[#4a6fa5]/20 gap-2"
              >
                <Edit2 className="w-3 h-3" />
                Edit
              </Button>
              <Button
                size="sm"
                onClick={() => setDeleteConfirmUser(user)}
                className="flex-1 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 gap-2"
              >
                <Trash2 className="w-3 h-3" />
                Delete
              </Button>
            </div>
          </Card>
        ))}

        {filteredUsers.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">No users found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}