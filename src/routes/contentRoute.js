const contentController = require("../controllers/contentController");
// const {userAuth} = require('../middlewares');
const router = require("express").Router();

router.get("/contents", contentController.getContents); //done
router.post("/contents", contentController.addContent); //done
router.patch("/updateContent/:id", contentController.updateContent); //done
router.get("/contents/:id", contentController.getContent); //done

router.delete("/deleteContent", contentController.deleteContent); //done
router.delete("/deleteContent/:id", contentController.deleteContentById); //done

router.post("/addField/:id", contentController.addField); //done
router.delete("/deleteField/:id", contentController.deleteField); //done
router.put("/updateField/:id", contentController.updateField); //done

router.get("/getContentCount", contentController.getContentCount);
router.get("/getFieldCount/:id", contentController.getFieldCount);

router.get("/getAllEntry/:contentId", contentController.getAllEntry);
router.post("/addEntry/:contentId", contentController.addEntry);
router.put("/updateEntry/:contentId", contentController.updateEntry);

module.exports = {
  contentRoute: router,
};
