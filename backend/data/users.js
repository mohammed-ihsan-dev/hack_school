import bcrypt from 'bcryptjs';

// Pre-hash password so seeding doesn't get slowed down
const password = bcrypt.hashSync('123456', 10);

const users = [
  {
    name: 'Admin User',
    email: 'admin@hackschool.com',
    password: password,
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: password,
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: password,
  },
];

export default users;
