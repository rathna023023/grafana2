///<reference path="../../../headers/common.d.ts" />

import angular from 'angular';
import _ from 'lodash';
import {sqlDatasource} from './datasource';
import {sqlQueryCtrl} from './query_ctrl';

class sqlConfigCtrl {
  static templateUrl = 'partials/config.html';
}

export {
  sqlDatasource,
  sqlDatasource as Datasource,
  sqlQueryCtrl as QueryCtrl,
  sqlConfigCtrl as ConfigCtrl,
};
