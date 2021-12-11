const staticPagesRouter = require('./staticPages');
const homestays = require('./homestays');
const userRouter = require('./user');
const cityRouter = require('./city');
const serviceRouter = require('./service');
const booking = require('./booking');
const manageBooking = require('./manage-booking');
const schedule = require('./schedule')
const auth = require('../app/middleware/auth');
const roomRouter = require('./room');

function route(app) {
  app.use('/booking', booking);
  app.use('/manage-booking', manageBooking);
  app.use('/schedule', schedule);
  app.use('/homestays', auth.requireAuth, homestays);
  app.use('/cities', auth.requireAuth, cityRouter);
  app.use('/services', auth.requireAuth, serviceRouter);
  app.use('/', staticPagesRouter);
  app.use('/roomTypes', auth.requireAuth, roomRouter);
  app.use('/users', auth.requireAuth, userRouter);
  app.use('/', staticPagesRouter);
}

module.exports = route;
