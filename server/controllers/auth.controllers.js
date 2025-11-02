import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import gentoken from "../utils/token.js"




export const signup = async (req, res) => {
  try {
    const { fullName, email, password, mobile, role } = req.body;

    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Validate password and mobile
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: "Password must be at least 6 characters long" });
    }

    if (!mobile || mobile.length !== 10) {
      return res.status(400).json({ success: false, message: "Mobile number must be 10 digits" });
    }

    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Create new user
    const user = await User.create({
      fullName,
      email,
      role, // "student" or "teacher"
      mobile,
      password: hashedPassword,
    });

    //  Generate token
    const token = await gentoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // change to true in production (https)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    //  Return success (without password)
    const { password: _, ...userData } = user._doc;

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: userData,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};



export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checking if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User does not exist" });
    }

    // Comparing passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Incorrect password" });
    }

    // Generate JWT token
    const token = await gentoken(user._id);

    // Setting secure cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // change to true in production (https)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Respond with user data (excluding password)
    const { password: _, ...userData } = user._doc;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: userData, // includes name, email, role, etc.
    });
  } catch (error) {
    console.error("Sign-in error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


export const signOut=async (req,res)=>{
    try{
        res.clearCookie("token")
        return res.status(200).json({message:"logout successfully"})
    }catch(error){
        return res.status(500).json(`sign out error ${error}`)
    }
}
