/**
 * Created by  blue dong on 2017/11/30.
 */
'use strict';
export const commonParams = {
  webp: 1,
  essence: 1,
  message_cursor: 1,
  am_longitude: '',
  am_latitude: '',
  am_city: '%E5%8C%97%E4%BA%AC%E5%B8%82',
  am_loc_time: +new Date(),
  count: 100,
  double_col_mode: 0,
  aid: 7,
  app_name: 'joke_essay',
  ssmix: 'a',
  ac: 'wifi',
  device_platform: 'ios'
};
export const options = {
  param: ''
};
export const MESSAGE = 'success';
/*
 content_type:从[获取 content_type](#get) 中获取得到的 list_id 字段值。目前[推荐](#recommend)的是101，[视频](#video)的是104，[段友秀](#video_show)的是301，[图片](#picture)的是103，[段子](#joke)的是102
 min_time:上次更新时间的 Unix 时间戳，秒为单位
 screen_width:屏幕宽度，px为单位
  dpi:手机 dpi
 iid:???，一个长度为10的纯数字字符串，用于标识用户唯一性
 device_id:设备 id，一个长度为11的纯数字字符串
 channel:下载渠道，可360、tencent等
 version_code:版本号去除小数点，例如612
 version_name:版本号，例如6.1.2
 device_type:设备型号，例如 hongmi
 device_brand:设备品牌，例如 xiaomi
 os_api:操作系统版本，例如20
 os_version:操作系统版本号，例如7.1.0
 uuid:用户 id，一个长度为15的纯数字字符串
 openudid:一个长度为16的数字和小写字母混合字符串
 manifest_version_code:版本号去除小数点，例如612
 resolution:屏幕宽高，例如 1920*1080
 update_version_code:版本号去除小数点后乘10，例如6120
 */
