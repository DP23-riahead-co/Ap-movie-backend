const express = require('express');
const router = express.Router();
const useRouter=require('./Films.router');

router.use("/films",useRouter);
module.exports = router;