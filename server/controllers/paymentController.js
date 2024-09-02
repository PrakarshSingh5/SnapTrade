const stripe= require("stripe")(process.env.STRIPE_KEY)
const User = require("../models/User");

const generateOrder = async (req, res) => {
    const purchaserId= req.id;
    const { price } = req.body;
    try{
        let user= await User.findById(purchaserId);
        if(!user){
            return res.status(404).json({success: false, message: "User not found"})
        }
        const options={
            unit_amount: price * 100,
            currency:"inr",
            receipt: crypto.randomBytes(10).toString("hex")
        }
        const session= await stripe.checkout.session.create({
            payment_method_types: ["card"],
            mode:"payment",
            line_items:options,
            success_url: "http://localhost:5173/success",
            cancel_url: "http://lcoalhost:5173/"
        })
        return res.json({url:session.url});
    }catch(error){
        return res.status(500).json({ success: false, message: error.message });
    }

}
