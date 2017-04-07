/**
 * Koding API
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'koding-api/JGroupCustomize'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JGroupCustomize'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.JGroup = factory(root.KodingApi.ApiClient, root.KodingApi.JGroupCustomize);
  }
}(this, function(ApiClient, JGroupCustomize) {
  'use strict';




  /**
   * The JGroup model module.
   * @module koding-api/JGroup
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JGroup</code>.
   * @alias module:koding-api/JGroup
   * @class
   * @param title {String} 
   */
  var exports = function(title) {
    var _this = this;


    _this['title'] = title;















  };

  /**
   * Constructs a <code>JGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JGroup} obj Optional instance to populate.
   * @return {module:koding-api/JGroup} The populated <code>JGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('socialApiChannelId')) {
        obj['socialApiChannelId'] = ApiClient.convertToType(data['socialApiChannelId'], 'String');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('privacy')) {
        obj['privacy'] = ApiClient.convertToType(data['privacy'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
      if (data.hasOwnProperty('customize')) {
        obj['customize'] = JGroupCustomize.constructFromObject(data['customize']);
      }
      if (data.hasOwnProperty('disabledFeatures')) {
        obj['disabledFeatures'] = ApiClient.convertToType(data['disabledFeatures'], Object);
      }
      if (data.hasOwnProperty('stackTemplates')) {
        obj['stackTemplates'] = ApiClient.convertToType(data['stackTemplates'], ['String']);
      }
      if (data.hasOwnProperty('defaultChannels')) {
        obj['defaultChannels'] = ApiClient.convertToType(data['defaultChannels'], ['String']);
      }
      if (data.hasOwnProperty('allowedDomains')) {
        obj['allowedDomains'] = ApiClient.convertToType(data['allowedDomains'], ['String']);
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = ApiClient.convertToType(data['config'], Object);
      }
      if (data.hasOwnProperty('isApiEnabled')) {
        obj['isApiEnabled'] = ApiClient.convertToType(data['isApiEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('payment')) {
        obj['payment'] = ApiClient.convertToType(data['payment'], Object);
      }
      if (data.hasOwnProperty('countly')) {
        obj['countly'] = ApiClient.convertToType(data['countly'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {String} socialApiChannelId
   */
  exports.prototype['socialApiChannelId'] = undefined;
  /**
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * @member {String} privacy
   */
  exports.prototype['privacy'] = undefined;
  /**
   * @member {String} visibility
   */
  exports.prototype['visibility'] = undefined;
  /**
   * @member {module:koding-api/JGroupCustomize} customize
   */
  exports.prototype['customize'] = undefined;
  /**
   * @member {Object} disabledFeatures
   */
  exports.prototype['disabledFeatures'] = undefined;
  /**
   * @member {Array.<String>} stackTemplates
   */
  exports.prototype['stackTemplates'] = undefined;
  /**
   * @member {Array.<String>} defaultChannels
   */
  exports.prototype['defaultChannels'] = undefined;
  /**
   * @member {Array.<String>} allowedDomains
   */
  exports.prototype['allowedDomains'] = undefined;
  /**
   * @member {Object} config
   */
  exports.prototype['config'] = undefined;
  /**
   * @member {Boolean} isApiEnabled
   */
  exports.prototype['isApiEnabled'] = undefined;
  /**
   * @member {Object} payment
   */
  exports.prototype['payment'] = undefined;
  /**
   * @member {Object} countly
   */
  exports.prototype['countly'] = undefined;



  return exports;
}));

