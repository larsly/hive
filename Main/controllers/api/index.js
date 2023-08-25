const router = require('express').Router();
const eventRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', eventRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
