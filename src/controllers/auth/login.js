const login = (req, res) => {
  const { email, password } = req.body;

  console.log({ email, password });
  return res.status(200).json({
    message: "Login Successfully"
  });
};

module.exports = login;