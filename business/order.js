const db = require('../models');
const user = db.User;
const portfolio = db.Portfolio;
const share = db.Share;
const portfolioDetail = db.PortfolioDetail;
const err = require('../exception/errorLibrary');
//const err = error.BadRequest;
  


class Order {
    constructor(userId, quantity, symbol) {
      this.userId = userId;
      this.quantity = quantity;
      this.symbol = symbol;
    }

    async firstCheck() {
      const decimalPart = this.quantity.toString().split('.')[1];
        if ( decimalPart && decimalPart.length > 2) {
          throw new err.BadRequest("share should be exactly 2 decimal digits.");
        }

        if (this.symbol.length !== 3) {
          throw new err.BadRequest("the symbol must consist of exactly 3 letters.");
        }
      
        // Değerin sadece büyük harflerden oluştuğunu kontrol edelim
        const upperCaseRegex = /^[A-Z]{3}$/;
        if ( !upperCaseRegex.test(this.symbol) ) {
          throw new err.BadRequest("symbol should be uppercase");
        }

        
      
    }

    async savePortfolioDetail() {
      //calculate price
      var totalPrice = this.share.sharePrice * this.quantity;
      //create portfolioDetail
      console.log('save in');
      try {
        await portfolioDetail.create({
          portfolioId: this.portfolio.id,
          shareId: this.share.id,
          pricePaid: totalPrice,
          shareQuantity:this.quantity
        });
  }catch(e) {
console.log(e);
  }
}


    //first check the existence of the portfolio.
    async portfolioControl() {
        this.portfolio = await portfolio.findOne({ where: { userId: this.userId } });
        if (!this.portfolio) throw new err.BadRequest("Create a portfolio before buying/selling");
      }

    async shareControl() {
        //await super.shareControl();
        this.share = await share.findOne({
            where: {
              shareSymbol: this.symbol // filter symbol
            },
            order: [['createDate', 'DESC']], // most recent selected
          });
    console.log(this.share.shareSymbol);
        if (!this.share) throw new err.BadRequest("Symbol is not found. Enter a valid symbol");

}
    

    async portfolioQuantityControl() {
      console.log('log3');
      var totalQuantity = 0.0;
      try {
        totalQuantity = await portfolioDetail.sum('shareQuantity', {
          where: {
            portfolioId: this.portfolio.id,
            shareId: this.share.id
          }
        });
        
    } catch (e) {
      console.error(e);
      //throw new err.BadRequest('Error fetching total share quantity');
    }
    console.log(totalQuantity);
    console.log(this.quantity);
    if (totalQuantity - this.quantity >= 0) {
      console.log('save port');
      var totalPrice = -1 * this.share.sharePrice * this.quantity;
      //create portfolioDetail
      console.log('save in');
      try {
        await portfolioDetail.create({
          portfolioId: this.portfolio.id,
          shareId: this.share.id,
          pricePaid: totalPrice,
          shareQuantity: -1 * this.quantity
        });
  }catch(e) {
console.log(e);
  }
    }
    else {
      console.error(`Not enough funds for sale`);
        throw new err.BadRequest('There is not enough quantity available for the sales transaction');
    }

    }

  
}

class Buy extends Order {

    constructor(userId, quantity, symbol) {
      super(userId, quantity, symbol);
    }

    async firstCheck() {
      await super.firstCheck();

    }
  
    async portfolioControl() {
      console.log('log6');
      await super.portfolioControl();

    }

    async shareControl() {
      console.log('log7');
        await super.shareControl();
    }
    
    async savePortfolioDetail() {
      console.log('log8');
        await super.savePortfolioDetail();
    }
  
  }

 class Sell extends Order {

    constructor(userId, quantity, symbol) {
      super(userId, quantity, symbol);
    }

    async firstCheck() {
      await super.firstCheck();

    }
  
    async portfolioControl() {
      await super.portfolioControl();
    }

    async shareControl() {
      console.log('log1');
        await super.shareControl();
        console.log('log1.1');
    }
    
    async portfolioQuantityControl() {
      console.log('log2');
      await super.portfolioQuantityControl();
  }

  
  }

  module.exports = {
    Buy,
    Sell
}
