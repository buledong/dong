/**
 * Created by  blue dong on 2017/11/30.
 */
'use strict';
import {commonParams, options} from './config';
import jsonp from 'common/js/jsonp';
import axios from 'axios';

export function getVideo() {
  const url = 'http://iu.snssdk.com/neihan/stream/mix/v1/';
  const data = Object.assign({}, commonParams, {
    content_type: -104
  });
  return jsonp(url, data, options);
}

export function getNeihanOld() {
  const url = 'api/getVideo';
  const data = Object.assign({}, commonParams, {
    content_type: -102
  });
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  });
}

export function getNeihan() {
  const url = 'http://iu.snssdk.com/neihan/stream/mix/v1/';
  const data = Object.assign({}, commonParams, {
    content_type: -102
  });
  return jsonp(url, data, options);
}
