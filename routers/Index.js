const express = require('express');
const router = express.Router();
const userRoute = require('./users/user.route')

const RouteList = [ 
    {
        path: '/users',
        route: userRoute
    }
]

RouteList.forEach((route) => {
    router.use(route.path, route.route)
} ) 

module.exports = router;