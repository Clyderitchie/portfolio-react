const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: 'Each Teller must have a proper password',
            // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            //     'Invalid password please select a password that is at least contains 1 upper case letter, 1 lower case letter, and is at least 8 characters long. Your password may also have special characters if you like.']
        }
    },
    {
        toJSON:{},
        id: false,
        autoIndex: false
    }
);

AdminSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

AdminSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const Admin = model('admin', AdminSchema);

module.exports = Admin;