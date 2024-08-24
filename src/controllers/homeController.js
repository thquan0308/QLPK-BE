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
module.exports = {
    getHomePage: getHomePage,
    getAboudPage: getAboudPage
}