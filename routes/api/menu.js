const router = require("express").Router();
const menuController = require("../../controllers/menuController");

//for the route api/menu/comment/:id
router.route("/comment/:id")
.post(menuController.createComment)
.get(menuController.findAllComments); 

//for the route api/menu/save
router.route("/save/:id")
.post(menuController.createMenu);

//for the route api/menu/save
router.route("/edit/:id")
.put(menuController.updateMenu);
module.exports=router;