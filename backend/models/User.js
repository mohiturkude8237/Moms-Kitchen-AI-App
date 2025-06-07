const mongoose = require('mongoose');
const bcrypt =  require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true,'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true,'Email is required']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

module.exports = mongoose.model('User', userSchema);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  // Compare password method for login
  userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };