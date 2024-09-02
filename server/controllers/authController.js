const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("../helpers/accessToken");
const { generateRefreshToken } = require("../helpers/refreshToken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already in use" });
    }
  const salt= await bcrypt.genSalt(10);
   const hashedPass= await bcrypt.hash(password, salt);

    user = new User({
      username,
      email,
      password:hashedPass,
      accountType,
    });
    await user.save();
    return res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Please signup" });
    }
    
    const validate = await bcrypt.compare(password, user.password);
    if (!validate) return res.status(401).json({ success: false, message: "Wrong credentails" });

    const data = {
      id: user._id,
      accountType: user.accountType,
      author: user.username,
    };

    const accessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      refreshToken,
      role: user.accountType,
      author: user.username,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const refresh = async (req, res) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ success: false, message: "Please login" });

  try {
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err)
        return res.status(403).json({ success: false, message: err.message });

      const accessToken = generateAccessToken({
        id: user.id,
        accountType: user.accountType,
        author: user.author,
      });
      const refreshToken = generateRefreshToken({
        id: user.id,
        accountType: user.accountType,
        author: user.author,
      });

      return res.status(200).json({
        success: true,
        message: "Token refreshed successfully",
        accessToken,
        refreshToken,
        role: user.accountType,
        author: user.author,
      });
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const switchProfile = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;
  try {
    const user = await User.findByIdAndUpdate(authorId, {
      accountType: authorAccountType === "buyer" ? "seller" : "buyer",
    });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    const data = {
      id: user._id,
      accountType: user.accountType,
      author: user.username,
    };

    const accessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);

    return res.status(200).json({
      success: true,
      message: `Switched to ${user.accountType}`,
      accessToken,
      refreshToken,
      role: user.accountType,
      author: user.username,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { login, signup, refresh, switchProfile };