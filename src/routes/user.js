import getLogger from '../lib/log';
import { User } from '../models';

const log = getLogger('HTTP:');
export default (router) => {
  router.get('users', '/users', async (ctx) => {
    log(`GET ${ctx.request.href}`);
    const users = await User.findAll();
    console.log('users:', users);
    ctx.render('users/hellow', { users });
  });
};