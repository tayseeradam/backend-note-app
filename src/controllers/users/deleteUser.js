const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;

    // validate email
    if (!email) {
      return res.status(400).json({
        ok: false,
        message: 'Email is required'
      });
    }

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        ok: false,
        message: `User with ${email} does not exist`
      });
    }

    // delete the user
    await User.deleteOne({ email });

    // return response
    return res.status(200).json({
      ok: true,
      message: `User with ${email} is deleted successfully`
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: `Server error, ${error.message}`
    });
  }
};
