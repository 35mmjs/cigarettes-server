'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('*', controller.home.index);
  router.post('/startPay', controller.home.startPay);
  router.post('/queryPayResult', controller.home.queryPayResult);
  router.post('/print', controller.home.print);
};
