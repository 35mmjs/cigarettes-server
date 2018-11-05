'use strict';

const Service = require('egg').Service;
const soap = require('soap');
const crypto = require('crypto');

const url = 'http://paytest.zxhsd.com/services/Exchange?wsdl';
const commonStatus = {
  sessionId: null,
};

const constants = {
  userid: 'PEIXUN_JH',
  password: '1',
  type: '1',
  dh: '9999999999',
  khbh: '9999999999',
  user_pass: '1548070138',
  unit_pass: '2515D842E14054425A7122403F196ACB',
};

class Cigarettes extends Service {
  async login() {
    const loginParams = {
      userid: constants.userid,
      password: constants.password,
      type: constants.type,
      dh: constants.dh,
    };

    await new Promise(resolve => {
      soap.createClient(url, (err, client) => {
        if (err) { resolve(fail(err)); }

        client.login(loginParams, (err, result) => {
          if (err) { resolve(fail(err)); }

          const { loginReturn } = result;
          if (loginReturn.errorCode.$value > 0) {
            resolve(fail(err, '登录失败'));
          } else {
            commonStatus.sessionId = loginReturn.stringValue.$value;
            this.ctx.body = commonStatus.sessionId;
            resolve(success(result));
          }
        });
      });
    });
  }

  async startPay(payRequest = {}) {
    payRequest.paytype = 'MICROPAY';
    payRequest.trade_type = 'NATIVE';
    payRequest.khbh = constants.khbh;
    payRequest.storeid = '01';
    payRequest.subject = '烟草';
    payRequest.body = '烟草交易';
    payRequest.spbill_create_ip = '192.168.1.100';
    payRequest.w_khbh_id = `P${new Date().getTime()}`;
    payRequest.operator_id = '001';
    payRequest.terminal_id = '001';
    payRequest.xslx = 'LS';
    // payRequest.total_amount = '0.01';

    const parValueString = encodeURIComponent(JSON.stringify(payRequest));
    const payParams = {
      sessionId: commonStatus.sessionId,
      svr_type: 'WAPPC1',
      par_value: parValueString,
      md5_value: crypto.createHash('md5').update(
        `${parValueString}${constants.khbh}${constants.user_pass}${getYYYYMM()}${constants.unit_pass}`
      ).digest('hex')
        .toUpperCase(),
    };

    await new Promise(resolve => {
      soap.createClient(url, (err, client) => {
        if (err) { resolve(fail(err)); }

        client.service(payParams, (err, result) => {
          if (err) { resolve(fail(err)); }

          const { serviceReturn } = result;
          if (parseInt(serviceReturn.errorCode.$value) > 0) {
            this.ctx.body = fail(err);
          } else {
            this.ctx.body = success(serviceReturn.stringValue.$value);
          }
          resolve();
        });
      });
    });

  }

  async queryPayResult(query = {}) {
    query.khbh = constants.khbh;

    const parValueString = encodeURIComponent(JSON.stringify(query));
    const queryParams = {
      sessionId: commonStatus.sessionId,
      svr_type: 'QUERYW1',
      par_value: parValueString,
      md5_value: crypto.createHash('md5').update(
        `${parValueString}${constants.khbh}${constants.user_pass}${getYYYYMM()}${constants.unit_pass}`
      ).digest('hex')
        .toUpperCase(),
    };

    await new Promise(resolve => {
      soap.createClient(url, (err, client) => {
        if (err) {
          this.ctx.body = fail(err);
          resolve();
        }

        client.service(queryParams, (err, result) => {
          if (err) {
            this.ctx.body = fail(err);
            resolve();
          }

          const { serviceReturn } = result;

          if (parseInt(serviceReturn.errorCode.$value) === 0) {
            const result = success({});
            result.payStatus = 'success';
            this.ctx.body = result;
          } else if (parseInt(serviceReturn.errorCode.$value) === 1) {
            const result = success({});
            result.payStatus = 'polling';
            this.ctx.body = result;
          } else {
            const result = success({});
            result.payStatus = 'failed';
            this.ctx.body = result;
          }

          resolve();
        });
      });
    });

  }

  async print(product) {
    const printData = {};
    printData.printType = 'ZZG';
    printData.khbh = constants.khbh;
    printData.bmbh = '01';
    printData.bmmc = 'bm001';
    printData.machine_code = '4004537959';
    printData.printmsg = product.items.map(i => {
      let row = `${i.id}: `;
      if (i.cartonNum) {
        row += `${i.cartonNum} 条 `;
      }

      if (i.packetNum) {
        row += `${i.packetNum} 包`;
      }
      return row;
    }).join('\r\t');

    console.log('===> printData', printData);

    const parValueString = encodeURIComponent(JSON.stringify(printData));
    const printParams = {
      sessionId: commonStatus.sessionId,
      svr_type: 'PRINT',
      par_value: parValueString,
      md5_value: crypto.createHash('md5').update(
        `${parValueString}${constants.khbh}${constants.user_pass}${getYYYYMM()}${constants.unit_pass}`
      ).digest('hex')
        .toUpperCase(),
    };


    await new Promise(resolve => {
      soap.createClient(url, (err, client) => {
        if (err) {
          this.ctx.body = fail(err);
          resolve();
        }

        client.service(printParams, (err, result) => {
          if (err) {
            this.ctx.body = fail(err);
            resolve();
          }

          const { serviceReturn } = result;

          if (parseInt(serviceReturn.errorCode.$value) > 0) {
            const result = fail('打印失败', serviceReturn.errorMessage.$value);
            this.ctx.body = result;
          } else {
            const result = success(serviceReturn.stringValue.$value);
            this.ctx.body = result;
          }

          resolve();
        });
      });
    });

  }
}

module.exports = Cigarettes;

// utils
function fail(error, errorMessage) {
  return ({
    success: false,
    error,
    errorMessage,
  });
}

function success(data) {
  return {
    success: true,
    data,
  };
}

function getYYYYMM() {
  const dt = new Date();
  const y = dt.getFullYear();
  const m = ('00' + (dt.getMonth() + 1)).slice(-2);
  return `${y}${m}`;
}
