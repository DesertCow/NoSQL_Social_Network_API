const router = require('express').Router();
const thoughtsRoutes = require('./thoughts_routes')
const userRoutes = require('./user_routes')

// router.use('/thoughts', thoughtsRoutes)
router.use('/users', userRoutes)

module.exports = router;