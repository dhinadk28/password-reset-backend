const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dbgp3j7j9/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1674279367/samples/people/profile_i5hex0.jpg"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)