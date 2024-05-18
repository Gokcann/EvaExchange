const order = require('../business/order')


const buy = async(req,resp) => {
    try {
        const process = new order.Buy(req.body.userId,req.body.quantity,req.body.symbol);
        /*process.userId = req.userId;
        process.quantity = req.quantity;
        process.symbol = req.symbol;*/
        
        await process.portfolioControl();
        await process.shareControl();
        await process.savePortfolioDetail();
        return resp.status(200).json({ 'msg': 'Success' });
    } catch (err) {
        console.error(err);
  }
}

const sell = async(req,resp) => {
    try {
        var process = new order.Sell(req.body.userId,req.body.quantity,req.body.symbol);
        await process();
        return resp.status(200).json({ 'msg': 'Success' });
    } catch (err) {
        console.error(err);
  }
}


module.exports = {
    buy,
    sell
}