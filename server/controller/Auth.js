const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/Auth");

exports.Signup = async (req, res) => {
  const { username, phone, email, password } = req.body;
  try {
   
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).send('User already exists');
    }

 
    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({ username, phone, email, password: hashedPassword });
    await newUser.save();

    res.status(201).send('Signup successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }


    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid username or password');
    }


    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: '1y' });

    res.status(200).json({ token, message:"Successfully Login" });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
