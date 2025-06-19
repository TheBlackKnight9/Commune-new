import User from "../models/User";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  const {email, password, fullNmae } = req.body;

  try {

    if(!email || !password || !fullNmae) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if(password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    if(!email.includes("@")) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.status(400).json({ message: 'email already exists, please use different one' });
    }

    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const newUser = await User.create({
      email,
      password,
      fullNmae,
      profilePic: randomAvatar,
    })

    const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET, {
      expiresIn: '8d',
    })
    } catch (error){

  }
}

export function login(req, res) {
  res.send('Login Route');
}

export function logout(req, res) {
  res.send('Logout Route');
}