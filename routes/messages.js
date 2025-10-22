const express = require ('express');
const messagesController = require('../controllers/messages');
const { identifier } = require('../middlewares/identification');
const router = express.Router();

router.get('/messages',identifier,messagesController.getMessages);
router.post('/message',messagesController.createMessage);
    

module.exports = router;