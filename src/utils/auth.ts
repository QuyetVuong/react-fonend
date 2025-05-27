export const allowedUsers = [
  { username: "admin", password: "123456" },
  { username: "user1", password: "abc123" },
  { username: "quyet", password: "123123" },
  { username: "vuong", password: "456456" },
];

export const authenticate = (username: string, password: string): boolean => {
  return allowedUsers.some(
    (user) => user.username === username && user.password === password
  );
};
