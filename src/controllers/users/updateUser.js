const updateUser = async (req, res) => {
    try {
      const { email, firstName, lastName, age, password } = req.body;
  
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
  
      // Update user fields if provided
      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      if (age) user.age = age;
      if (password) {
        user.password = bcrypt.hashSync(password, parseInt(process.env.SALT_NUMBER));
      }
  
      // save updated user
      await user.save();
  
      // return response
      return res.status(200).json({
        ok: true,
        message: `User with ${email} has been updated successfully`
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        message: `Server error, ${error.message}`
      });
    }
  };
  