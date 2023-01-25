const router = require('express').Router();

const {
    addComment,
    addReply,
    removeComment,
    removeReply
} = require('../../controllers/comment-controller');

// set up POST /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// set up PUT and DELETE /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;