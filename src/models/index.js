/**
 * Created by zhujiaqi on 2017/4/20.
 */

import Users from './Users';
import Dragula from './Dragula';

export default function registerModels(app) {
  app.model(Users);
  app.model(Dragula);
}
