'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.js');
  }

  async proxy() {
    const ctx = this.ctx;
    // use roadhog mock api first
    // const url = 'http://127.0.0.1:8000' + ctx.path + '?' + ctx.querystring;
    const url = 'http://127.0.0.1:8000';

    const res = await this.ctx.curl(url, {
      method: this.ctx.method,
    });
    ctx.body = res.data;
    ctx.status = res.status;
  }
}

module.exports = HomeController;
