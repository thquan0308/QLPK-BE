
import bcrypt from 'bcryptjs';
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,

                roleId: data.roleId,

            })

            resolve('ok! create a new user success')
        } catch (e) {
            reject(e)
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync("B4c0/\/", salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resovle, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            })
            resovle(users)
        } catch (e) {
            reject(e)
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async (resovle, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
            })

            if (user) {
                resovle(user)
            }
            else {
                resovle({})
            }
        } catch (e) {
            reject(e)
        }
    })

}

let updateUserData = (data) => {
    return new Promise(async (resovle, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })

            if (user) {
                user.firstName = data.firstName
                user.lastName = data.lastName
                user.address = data.address

                await user.save()
                let allUsers = await db.User.findAll()
                resovle(allUsers)
            } else {
                resovle()
            }

        } catch (e) {
            console.log(e)
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
}