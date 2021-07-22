const express = require('express');
const authRouter = require('./auth.routers');
const router = express.Router();
const useRouter=require('./Films.router');

router.use("/films",useRouter);
router.use("/auth",authRouter)



module.exports = router;