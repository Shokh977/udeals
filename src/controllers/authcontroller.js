import bcryptjs from "bcryptjs";
import { generateToken } from "@/lib/generateToken.js"
import { User } from "@/models/User";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required to be filled in");
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already has an account" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
 
    // creating user
    const user = new User({
      email,
      password: hashedPassword,
      name,
        });

    await user.save();

    const token = generateToken(user._id);

    await sendVerificationEmail(user.email, verificationToken);

    console.log(user, "user");

    res.status(201).json({
      success: true,
      message: "User created successfully", 
      token,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
   const token =  generateToken(user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "logged in seccessfully",
      token,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("error in login fc:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  res.status(200).json({ success: true, message: "Logged out successfully" });
};


export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(400).json({ success: true, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};
