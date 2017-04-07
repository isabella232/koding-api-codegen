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
    define(['ApiClient', 'koding-api/JMachineAssignee', 'koding-api/JMachineGeneratedFrom', 'koding-api/JMachineStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JMachineAssignee'), require('./JMachineGeneratedFrom'), require('./JMachineStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.JMachine = factory(root.KodingApi.ApiClient, root.KodingApi.JMachineAssignee, root.KodingApi.JMachineGeneratedFrom, root.KodingApi.JMachineStatus);
  }
}(this, function(ApiClient, JMachineAssignee, JMachineGeneratedFrom, JMachineStatus) {
  'use strict';




  /**
   * The JMachine model module.
   * @module koding-api/JMachine
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JMachine</code>.
   * @alias module:koding-api/JMachine
   * @class
   * @param uid {String} 
   * @param provider {String} 
   */
  var exports = function(uid, provider) {
    var _this = this;


    _this['uid'] = uid;



    _this['provider'] = provider;












  };

  /**
   * Constructs a <code>JMachine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JMachine} obj Optional instance to populate.
   * @return {module:koding-api/JMachine} The populated <code>JMachine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('queryString')) {
        obj['queryString'] = ApiClient.convertToType(data['queryString'], 'String');
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('provisioners')) {
        obj['provisioners'] = ApiClient.convertToType(data['provisioners'], ['String']);
      }
      if (data.hasOwnProperty('credential')) {
        obj['credential'] = ApiClient.convertToType(data['credential'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [Object]);
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [Object]);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = JMachineStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], Object);
      }
      if (data.hasOwnProperty('assignee')) {
        obj['assignee'] = JMachineAssignee.constructFromObject(data['assignee']);
      }
      if (data.hasOwnProperty('generatedFrom')) {
        obj['generatedFrom'] = JMachineGeneratedFrom.constructFromObject(data['generatedFrom']);
      }
      if (data.hasOwnProperty('channelId')) {
        obj['channelId'] = ApiClient.convertToType(data['channelId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {String} queryString
   */
  exports.prototype['queryString'] = undefined;
  /**
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * @member {String} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * @member {Array.<String>} provisioners
   */
  exports.prototype['provisioners'] = undefined;
  /**
   * @member {String} credential
   */
  exports.prototype['credential'] = undefined;
  /**
   * @member {Array.<Object>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * @member {Array.<Object>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {module:koding-api/JMachineStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Object} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {module:koding-api/JMachineAssignee} assignee
   */
  exports.prototype['assignee'] = undefined;
  /**
   * @member {module:koding-api/JMachineGeneratedFrom} generatedFrom
   */
  exports.prototype['generatedFrom'] = undefined;
  /**
   * @member {String} channelId
   */
  exports.prototype['channelId'] = undefined;



  return exports;
}));

