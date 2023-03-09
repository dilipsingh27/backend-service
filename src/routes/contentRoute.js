const contentController = require('../controllers/contentController');
const router = require('express').Router();

router.post('/contents', contentController.addContent);
router.post('/addField/:id', contentController.addField);
router.delete('/deleteField/:id', contentController.deleteField);
router.get('/contents', contentController.getContents);
// router.patch('/updateField/:id', contentController.updateField);

module.exports = {
    contentRoute: router
}