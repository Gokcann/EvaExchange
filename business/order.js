/*const share = require('../models/share')
const portfolio = require('../models/portfolio')
const portfolioDetail = require('../models/portfoliodetail')
const BadRequest = require('../exception/errorLibrary');*/

const db = require('../models');
const user = db.User;
const portfolio = db.Portfolio;
const share = db.Share;
const portfolioDetail = db.PortfolioDetail;

class Order {
    constructor(userId, quantity, symbol) {
      this.userId = userId;
      this.quantity = quantity;
      this.symbol = symbol;
    }

    //first check the existence of the portfolio.
    async portfolioControl() {
        this.portfolio = await portfolio.findOne({ where: { userId: this.userId } });
        if (!this.portfolio) throw new BadRequest("Create a portfolio before buying/selling");
      }

    async shareControl() {
        //await super.shareControl();
        this.share = await share.findOne({
            where: {
              shareSymbol: this.symbol // filter symbol
            },
            order: [['createDate', 'DESC']], // most recent selected
          });
    
        if (!this.share) throw new BadRequest("Symbol is not found. Enter a valid symbol");

}
    async savePortfolioDetail() {
        //calculate price
        const totalPrice = this.share.sharePrice * this.quantity;
        //create portfolioDetail
        console.log('save in');
        await portfolioDetail.create({
            portfolioId: this.portfolio.id,
            shareId: this.share.id,
            pricePaid: totalPrice,
            shareQuantity: this.quantity
          });
    }

  
}

class Buy extends Order {

    constructor(userId, quantity, symbol) {
      super(userId, quantity, symbol);
    }
  
    async portfolioControl() {
      await super.portfolioControl();
    }

    async shareControl() {
        await super.shareControl();
    }
    
    async savePortfolioDetail() {
      console.log('finish control');
        await super.savePortfolioDetail();
        console.log('finish control 2');
    }
  
  }

 class Sell extends Order {

    constructor(userId, quantity, symbol) {
      super(userId, quantity, symbol);
    }
  
    async portfolioControl() {
      await super.portfolioControl();
    }

    async shareControl() {
        await super.shareControl();
        
        async function getTotalSharesOfUserWithSymbol() {
            try {
              const totalShares = await portfolioDetail.findAll({
                attributes: [
                  'user_id',
                  [Sequelize.fn('sum', Sequelize.col('quantity')), 'total_quantity']
                ],
                where: {
                  symbol: symbol // 'EVA' sembolüne sahip kayıtları filtreleme
                },
                group: ['user_id'] // user_id'ye göre gruplama
              });
            } catch (error) {
              console.error(`Not enough funds for sale`);
              throw new BadRequest;
            }
          }

          getTotalSharesOfUserWithSymbol();
        
    }

    async savePortfolioDetail() {
        await super.savePortfolioDetail;
    }
  
  }

  module.exports = {
    Buy,
    Sell
}
