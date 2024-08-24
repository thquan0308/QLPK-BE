import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)

    router.get('/about', homeController.getAboudPage)


    return app.use("/", router)
}

// module.exports = initWebRoutes;

export default initWebRoutes