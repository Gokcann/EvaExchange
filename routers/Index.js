const express = require('express');
const router = express.Router();
const userRoute = require('./users/user.route')
const portfolioRoute = require('./portfolio/portfolio.route')
const portfolioDetailRoute = require('./portfoliodetail/portfolioDetail.route')
const shareRoute = require('./share/share.route')
const orderRoute = require('./order/order.route')

const RouteList = [ 
    {
        path: '/user',
        route: userRoute
    },
    {
        path: '/portfolio',
        route: portfolioRoute
    },
    {
        path: '/portfolioDetail',
        route: portfolioDetailRoute
    },
    {
        path: '/share',
        route: shareRoute
    },
    {
        path: '/order',
        route: orderRoute
    }
]

RouteList.forEach((route) => {
    router.use(route.path, route.route)
} ) 

module.exports = router;