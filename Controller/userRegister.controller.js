import bcrypt from 'bcrypt';
import User from "../Models/user.model.js";

const userRegister = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Validate input fields
        if (!fullName || !email || !password) {
            return res.status(422).json({ error: "Please fill all fields" });
        }

        // Check if email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "Email is already registered" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the user
        const user = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "An error occurred during registration" });
    }
};

export { userRegister };
