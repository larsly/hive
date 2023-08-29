const router = require('express').Router();
const eventRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);

module.exports = router;
