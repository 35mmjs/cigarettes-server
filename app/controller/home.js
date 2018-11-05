'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.tpl');
  }

  async login() {
    await this.ctx.service.cigarettes.login();
  }

  async startPay() {
    await this.ctx.service.cigarettes.login();
    await this.ctx.service.cigarettes.startPay(this.ctx.request.body);
  }

  async queryPayResult() {
    await this.ctx.service.cigarettes.login();
    await this.ctx.service.cigarettes.queryPayResult(this.ctx.request.body);
  }

  async print() {
    await this.ctx.service.cigarettes.login();
    await this.ctx.service.cigarettes.print(this.ctx.request.body);
  }
}

module.exports = HomeController;
