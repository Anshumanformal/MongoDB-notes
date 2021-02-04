//bcryptjs npm package demonstration.

const bcrypt = require("bcryptjs");

const securePassword = async (password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  console.log(passwordHash);

  const passwordmatch = await bcrypt.compare("wow@123", passwordHash);
  console.log(passwordmatch);
};

securePassword("wow@123");
