const order = require('../business/order')


const buy = async(req,resp) => {
    try {
        const process = new order.Buy(req.body.userId,req.body.quantity,req.body.symbol);
        
        await process.firstCheck();
        await process.portfolioControl();
        await process.shareControl();
        await process.savePortfolioDetail();
        return resp.status(200).json({ 'msg': 'Success' });
    } catch (err) {
        return resp.status(err.statusCode).json({ 'msg': 'Bad Request' });
  }
}

const sell = async(req,resp) => {
    try {
        const process = new order.Sell(req.body.userId,req.body.quantity,req.body.symbol);
        await process.firstCheck();
        await process.portfolioControl();
        await process.shareControl();
        await process.portfolioQuantityControl();
        //await process.savePortfolioDetail();
        return resp.status(200).json({ 'msg': 'Success' });
    } catch (err) {
        return resp.status(err.statusCode).json({ 'msg': 'Bad Request' });
  }
}


module.exports = {
    buy,
    sell
}