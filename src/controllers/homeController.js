import db from '../models/index'

let getHomePage = async (req, res) => {
    let data = await db.User.findAll()

    return res.render('homepage.ejs', {
        data: JSON.stringify(data)
    })
}

let getAboudPage = (req, res) => {
    return res.render('test/about.ejs')
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')

}

let postCRUD = (req, res) => {
    console.log(req.body)
    return res.send('post crud from server')
}

module.exports = {
    getHomePage: getHomePage,
    getAboudPage: getAboudPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}