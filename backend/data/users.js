import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@xample.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name: 'Juandi',
        email: 'juandi@xample.com',
        password: bcrypt.hashSync('123456', 10),
    },

    {
        name: 'Erika',
        email: 'erika@xample.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users