const router = require('express').Router();

router.get('/usertest', (req, res) => {
    res.send('user test is successful')
});

router.post('/userposttest', (req, res) => {
    const username = req.body.username;
    //body is what we are passing to our server
    console.log(username);
})

module.exports = router;