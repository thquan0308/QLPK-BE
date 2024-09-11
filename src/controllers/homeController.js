import db from '../models/index'
import CRUDService from '../services/CRUDService'

let getHomePage = async (req, res) => {
    let data = await db.User.findAll()

    return res.render('homepage.ejs', {
        data: JSON.stringify(data)
    })
}

let getAboudPage = (req, res) => {
    return res.render('test/about.ejs')
}

let getCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.render('crud.ejs')

}

let postCRUD = async (req, res) => {
    await CRUDService.createNewUser(req.body)
    return res.send('post crud from server')
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    // console.log('_____________________________')
    // console.log(data)
    // console.log('_____________________________')
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        //check user data not found

        //let userData
        return res.render('editCRUD.ejs', {
            user: userData
        })

    }
    else {
        return res.send('Users not found!')

    }

}

let putCRUD = async (req, res) => {
    let data = req.body
    let allUsers = await CRUDService.updateUserData(data)
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}
module.exports = {
    getHomePage: getHomePage,
    getAboudPage: getAboudPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
}