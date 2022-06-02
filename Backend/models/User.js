const mongoose = require('mongoose');
const bycript = require('bcrypt-nodejs');
const crypto = require('crypto');


const UserSchema = mongoose.Schema({
    email: { type: String, unique: true, lowercase: true, required: true },
    displayName: String,
    avatar: String,
    password: { type: String, delect: false, required: true },
    singupDate: { type: Date, default: Date.now() },
    lastLogin: Date
});

UserSchema.pre('save', (next) => {
    let user = this;
    if (!user.isModified('password')) return next()

    bycript.genSalt(10, (err, salt) =>{
        if(err) return next(err);
        bycript.hash(user.password,salt,null,(err,hash) =>{
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.gravatar = function ( ) {  
    if(!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

    const md5 = crypto.createHash(md5).update(this.email).digest('hex');
    return `https://gravar.com/avatar/${md5}?s=200&d=retro`;
 }

module.exports = mongoose.model('User', UserSchema);
