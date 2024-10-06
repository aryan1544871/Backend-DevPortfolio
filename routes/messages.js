const express = require ('express');
const messagesController = require('../controllers/messages');
const router = express.Router();

router.get('/messages',messagesController.getMessages);
router.post('/message',messagesController.createMessage);
    

module.exports = router;