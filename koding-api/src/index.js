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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'koding-api/Body', 'koding-api/Body1', 'koding-api/Body2', 'koding-api/Body3', 'koding-api/Body4', 'koding-api/ComputeProviderCreateMeta', 'koding-api/DefaultResponse', 'koding-api/DefaultSelector', 'koding-api/Error', 'koding-api/InlineResponse200', 'koding-api/InlineResponse200Data', 'koding-api/InlineResponse200DataDefaults', 'koding-api/JAccount', 'koding-api/JAccountProfile', 'koding-api/JApiToken', 'koding-api/JCombinedAppStorage', 'koding-api/JComputeStack', 'koding-api/JCounter', 'koding-api/JCredential', 'koding-api/JCredentialData', 'koding-api/JCustomPartials', 'koding-api/JDomainAlias', 'koding-api/JEarnedReward', 'koding-api/JForeignAuth', 'koding-api/JGroup', 'koding-api/JGroupCustomize', 'koding-api/JGroupData', 'koding-api/JGroupLimit', 'koding-api/JGroupLimitRestrictions', 'koding-api/JGroupRole', 'koding-api/JInvitation', 'koding-api/JLog', 'koding-api/JMachine', 'koding-api/JMachineAssignee', 'koding-api/JMachineGeneratedFrom', 'koding-api/JMachineStatus', 'koding-api/JName', 'koding-api/JPasswordRecovery', 'koding-api/JPermissionSet', 'koding-api/JProposedDomain', 'koding-api/JProposedDomainProxy', 'koding-api/JProvisioner', 'koding-api/JReward', 'koding-api/JRewardCampaign', 'koding-api/JSession', 'koding-api/JSessionForeignAuth', 'koding-api/JStackTemplate', 'koding-api/JStackTemplateTemplate', 'koding-api/JTeamInvitation', 'koding-api/JUrlAlias', 'koding-api/JUser', 'koding-api/JUserRegisteredFrom', 'koding-api/JVerificationToken', 'koding-api/UnauthorizedRequest', 'koding-api/CollaborationApi', 'koding-api/ComputeProviderApi', 'koding-api/DataDogApi', 'koding-api/GitProviderApi', 'koding-api/GithubApi', 'koding-api/JAccountApi', 'koding-api/JApiTokenApi', 'koding-api/JCombinedAppStorageApi', 'koding-api/JComputeStackApi', 'koding-api/JCredentialApi', 'koding-api/JCustomPartialsApi', 'koding-api/JDomainAliasApi', 'koding-api/JGroupApi', 'koding-api/JGroupDataApi', 'koding-api/JInvitationApi', 'koding-api/JMachineApi', 'koding-api/JNameApi', 'koding-api/JPasswordRecoveryApi', 'koding-api/JProposedDomainApi', 'koding-api/JProvisionerApi', 'koding-api/JRewardApi', 'koding-api/JRewardCampaignApi', 'koding-api/JSessionApi', 'koding-api/JStackTemplateApi', 'koding-api/JTeamInvitationApi', 'koding-api/JUrlAliasApi', 'koding-api/JUserApi', 'koding-api/KloudApi', 'koding-api/OAuthApi', 'koding-api/S3Api', 'koding-api/SharedMachineApi', 'koding-api/SidebarApi', 'koding-api/SocialChannelApi', 'koding-api/SocialMessageApi', 'koding-api/SocialNotificationApi', 'koding-api/SystemApi', 'koding-api/TrackerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./koding-api/Body'), require('./koding-api/Body1'), require('./koding-api/Body2'), require('./koding-api/Body3'), require('./koding-api/Body4'), require('./koding-api/ComputeProviderCreateMeta'), require('./koding-api/DefaultResponse'), require('./koding-api/DefaultSelector'), require('./koding-api/Error'), require('./koding-api/InlineResponse200'), require('./koding-api/InlineResponse200Data'), require('./koding-api/InlineResponse200DataDefaults'), require('./koding-api/JAccount'), require('./koding-api/JAccountProfile'), require('./koding-api/JApiToken'), require('./koding-api/JCombinedAppStorage'), require('./koding-api/JComputeStack'), require('./koding-api/JCounter'), require('./koding-api/JCredential'), require('./koding-api/JCredentialData'), require('./koding-api/JCustomPartials'), require('./koding-api/JDomainAlias'), require('./koding-api/JEarnedReward'), require('./koding-api/JForeignAuth'), require('./koding-api/JGroup'), require('./koding-api/JGroupCustomize'), require('./koding-api/JGroupData'), require('./koding-api/JGroupLimit'), require('./koding-api/JGroupLimitRestrictions'), require('./koding-api/JGroupRole'), require('./koding-api/JInvitation'), require('./koding-api/JLog'), require('./koding-api/JMachine'), require('./koding-api/JMachineAssignee'), require('./koding-api/JMachineGeneratedFrom'), require('./koding-api/JMachineStatus'), require('./koding-api/JName'), require('./koding-api/JPasswordRecovery'), require('./koding-api/JPermissionSet'), require('./koding-api/JProposedDomain'), require('./koding-api/JProposedDomainProxy'), require('./koding-api/JProvisioner'), require('./koding-api/JReward'), require('./koding-api/JRewardCampaign'), require('./koding-api/JSession'), require('./koding-api/JSessionForeignAuth'), require('./koding-api/JStackTemplate'), require('./koding-api/JStackTemplateTemplate'), require('./koding-api/JTeamInvitation'), require('./koding-api/JUrlAlias'), require('./koding-api/JUser'), require('./koding-api/JUserRegisteredFrom'), require('./koding-api/JVerificationToken'), require('./koding-api/UnauthorizedRequest'), require('./koding-api/CollaborationApi'), require('./koding-api/ComputeProviderApi'), require('./koding-api/DataDogApi'), require('./koding-api/GitProviderApi'), require('./koding-api/GithubApi'), require('./koding-api/JAccountApi'), require('./koding-api/JApiTokenApi'), require('./koding-api/JCombinedAppStorageApi'), require('./koding-api/JComputeStackApi'), require('./koding-api/JCredentialApi'), require('./koding-api/JCustomPartialsApi'), require('./koding-api/JDomainAliasApi'), require('./koding-api/JGroupApi'), require('./koding-api/JGroupDataApi'), require('./koding-api/JInvitationApi'), require('./koding-api/JMachineApi'), require('./koding-api/JNameApi'), require('./koding-api/JPasswordRecoveryApi'), require('./koding-api/JProposedDomainApi'), require('./koding-api/JProvisionerApi'), require('./koding-api/JRewardApi'), require('./koding-api/JRewardCampaignApi'), require('./koding-api/JSessionApi'), require('./koding-api/JStackTemplateApi'), require('./koding-api/JTeamInvitationApi'), require('./koding-api/JUrlAliasApi'), require('./koding-api/JUserApi'), require('./koding-api/KloudApi'), require('./koding-api/OAuthApi'), require('./koding-api/S3Api'), require('./koding-api/SharedMachineApi'), require('./koding-api/SidebarApi'), require('./koding-api/SocialChannelApi'), require('./koding-api/SocialMessageApi'), require('./koding-api/SocialNotificationApi'), require('./koding-api/SystemApi'), require('./koding-api/TrackerApi'));
  }
}(function(ApiClient, Body, Body1, Body2, Body3, Body4, ComputeProviderCreateMeta, DefaultResponse, DefaultSelector, Error, InlineResponse200, InlineResponse200Data, InlineResponse200DataDefaults, JAccount, JAccountProfile, JApiToken, JCombinedAppStorage, JComputeStack, JCounter, JCredential, JCredentialData, JCustomPartials, JDomainAlias, JEarnedReward, JForeignAuth, JGroup, JGroupCustomize, JGroupData, JGroupLimit, JGroupLimitRestrictions, JGroupRole, JInvitation, JLog, JMachine, JMachineAssignee, JMachineGeneratedFrom, JMachineStatus, JName, JPasswordRecovery, JPermissionSet, JProposedDomain, JProposedDomainProxy, JProvisioner, JReward, JRewardCampaign, JSession, JSessionForeignAuth, JStackTemplate, JStackTemplateTemplate, JTeamInvitation, JUrlAlias, JUser, JUserRegisteredFrom, JVerificationToken, UnauthorizedRequest, CollaborationApi, ComputeProviderApi, DataDogApi, GitProviderApi, GithubApi, JAccountApi, JApiTokenApi, JCombinedAppStorageApi, JComputeStackApi, JCredentialApi, JCustomPartialsApi, JDomainAliasApi, JGroupApi, JGroupDataApi, JInvitationApi, JMachineApi, JNameApi, JPasswordRecoveryApi, JProposedDomainApi, JProvisionerApi, JRewardApi, JRewardCampaignApi, JSessionApi, JStackTemplateApi, JTeamInvitationApi, JUrlAliasApi, JUserApi, KloudApi, OAuthApi, S3Api, SharedMachineApi, SidebarApi, SocialChannelApi, SocialMessageApi, SocialNotificationApi, SystemApi, TrackerApi) {
  'use strict';

  /**
   * Koding API for integrating your application with Koding services.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var KodingApi = require('index'); // See note below*.
   * var xxxSvc = new KodingApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new KodingApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new KodingApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new KodingApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Body model constructor.
     * @property {module:koding-api/Body}
     */
    Body: Body,
    /**
     * The Body1 model constructor.
     * @property {module:koding-api/Body1}
     */
    Body1: Body1,
    /**
     * The Body2 model constructor.
     * @property {module:koding-api/Body2}
     */
    Body2: Body2,
    /**
     * The Body3 model constructor.
     * @property {module:koding-api/Body3}
     */
    Body3: Body3,
    /**
     * The Body4 model constructor.
     * @property {module:koding-api/Body4}
     */
    Body4: Body4,
    /**
     * The ComputeProviderCreateMeta model constructor.
     * @property {module:koding-api/ComputeProviderCreateMeta}
     */
    ComputeProviderCreateMeta: ComputeProviderCreateMeta,
    /**
     * The DefaultResponse model constructor.
     * @property {module:koding-api/DefaultResponse}
     */
    DefaultResponse: DefaultResponse,
    /**
     * The DefaultSelector model constructor.
     * @property {module:koding-api/DefaultSelector}
     */
    DefaultSelector: DefaultSelector,
    /**
     * The Error model constructor.
     * @property {module:koding-api/Error}
     */
    Error: Error,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:koding-api/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse200Data model constructor.
     * @property {module:koding-api/InlineResponse200Data}
     */
    InlineResponse200Data: InlineResponse200Data,
    /**
     * The InlineResponse200DataDefaults model constructor.
     * @property {module:koding-api/InlineResponse200DataDefaults}
     */
    InlineResponse200DataDefaults: InlineResponse200DataDefaults,
    /**
     * The JAccount model constructor.
     * @property {module:koding-api/JAccount}
     */
    JAccount: JAccount,
    /**
     * The JAccountProfile model constructor.
     * @property {module:koding-api/JAccountProfile}
     */
    JAccountProfile: JAccountProfile,
    /**
     * The JApiToken model constructor.
     * @property {module:koding-api/JApiToken}
     */
    JApiToken: JApiToken,
    /**
     * The JCombinedAppStorage model constructor.
     * @property {module:koding-api/JCombinedAppStorage}
     */
    JCombinedAppStorage: JCombinedAppStorage,
    /**
     * The JComputeStack model constructor.
     * @property {module:koding-api/JComputeStack}
     */
    JComputeStack: JComputeStack,
    /**
     * The JCounter model constructor.
     * @property {module:koding-api/JCounter}
     */
    JCounter: JCounter,
    /**
     * The JCredential model constructor.
     * @property {module:koding-api/JCredential}
     */
    JCredential: JCredential,
    /**
     * The JCredentialData model constructor.
     * @property {module:koding-api/JCredentialData}
     */
    JCredentialData: JCredentialData,
    /**
     * The JCustomPartials model constructor.
     * @property {module:koding-api/JCustomPartials}
     */
    JCustomPartials: JCustomPartials,
    /**
     * The JDomainAlias model constructor.
     * @property {module:koding-api/JDomainAlias}
     */
    JDomainAlias: JDomainAlias,
    /**
     * The JEarnedReward model constructor.
     * @property {module:koding-api/JEarnedReward}
     */
    JEarnedReward: JEarnedReward,
    /**
     * The JForeignAuth model constructor.
     * @property {module:koding-api/JForeignAuth}
     */
    JForeignAuth: JForeignAuth,
    /**
     * The JGroup model constructor.
     * @property {module:koding-api/JGroup}
     */
    JGroup: JGroup,
    /**
     * The JGroupCustomize model constructor.
     * @property {module:koding-api/JGroupCustomize}
     */
    JGroupCustomize: JGroupCustomize,
    /**
     * The JGroupData model constructor.
     * @property {module:koding-api/JGroupData}
     */
    JGroupData: JGroupData,
    /**
     * The JGroupLimit model constructor.
     * @property {module:koding-api/JGroupLimit}
     */
    JGroupLimit: JGroupLimit,
    /**
     * The JGroupLimitRestrictions model constructor.
     * @property {module:koding-api/JGroupLimitRestrictions}
     */
    JGroupLimitRestrictions: JGroupLimitRestrictions,
    /**
     * The JGroupRole model constructor.
     * @property {module:koding-api/JGroupRole}
     */
    JGroupRole: JGroupRole,
    /**
     * The JInvitation model constructor.
     * @property {module:koding-api/JInvitation}
     */
    JInvitation: JInvitation,
    /**
     * The JLog model constructor.
     * @property {module:koding-api/JLog}
     */
    JLog: JLog,
    /**
     * The JMachine model constructor.
     * @property {module:koding-api/JMachine}
     */
    JMachine: JMachine,
    /**
     * The JMachineAssignee model constructor.
     * @property {module:koding-api/JMachineAssignee}
     */
    JMachineAssignee: JMachineAssignee,
    /**
     * The JMachineGeneratedFrom model constructor.
     * @property {module:koding-api/JMachineGeneratedFrom}
     */
    JMachineGeneratedFrom: JMachineGeneratedFrom,
    /**
     * The JMachineStatus model constructor.
     * @property {module:koding-api/JMachineStatus}
     */
    JMachineStatus: JMachineStatus,
    /**
     * The JName model constructor.
     * @property {module:koding-api/JName}
     */
    JName: JName,
    /**
     * The JPasswordRecovery model constructor.
     * @property {module:koding-api/JPasswordRecovery}
     */
    JPasswordRecovery: JPasswordRecovery,
    /**
     * The JPermissionSet model constructor.
     * @property {module:koding-api/JPermissionSet}
     */
    JPermissionSet: JPermissionSet,
    /**
     * The JProposedDomain model constructor.
     * @property {module:koding-api/JProposedDomain}
     */
    JProposedDomain: JProposedDomain,
    /**
     * The JProposedDomainProxy model constructor.
     * @property {module:koding-api/JProposedDomainProxy}
     */
    JProposedDomainProxy: JProposedDomainProxy,
    /**
     * The JProvisioner model constructor.
     * @property {module:koding-api/JProvisioner}
     */
    JProvisioner: JProvisioner,
    /**
     * The JReward model constructor.
     * @property {module:koding-api/JReward}
     */
    JReward: JReward,
    /**
     * The JRewardCampaign model constructor.
     * @property {module:koding-api/JRewardCampaign}
     */
    JRewardCampaign: JRewardCampaign,
    /**
     * The JSession model constructor.
     * @property {module:koding-api/JSession}
     */
    JSession: JSession,
    /**
     * The JSessionForeignAuth model constructor.
     * @property {module:koding-api/JSessionForeignAuth}
     */
    JSessionForeignAuth: JSessionForeignAuth,
    /**
     * The JStackTemplate model constructor.
     * @property {module:koding-api/JStackTemplate}
     */
    JStackTemplate: JStackTemplate,
    /**
     * The JStackTemplateTemplate model constructor.
     * @property {module:koding-api/JStackTemplateTemplate}
     */
    JStackTemplateTemplate: JStackTemplateTemplate,
    /**
     * The JTeamInvitation model constructor.
     * @property {module:koding-api/JTeamInvitation}
     */
    JTeamInvitation: JTeamInvitation,
    /**
     * The JUrlAlias model constructor.
     * @property {module:koding-api/JUrlAlias}
     */
    JUrlAlias: JUrlAlias,
    /**
     * The JUser model constructor.
     * @property {module:koding-api/JUser}
     */
    JUser: JUser,
    /**
     * The JUserRegisteredFrom model constructor.
     * @property {module:koding-api/JUserRegisteredFrom}
     */
    JUserRegisteredFrom: JUserRegisteredFrom,
    /**
     * The JVerificationToken model constructor.
     * @property {module:koding-api/JVerificationToken}
     */
    JVerificationToken: JVerificationToken,
    /**
     * The UnauthorizedRequest model constructor.
     * @property {module:koding-api/UnauthorizedRequest}
     */
    UnauthorizedRequest: UnauthorizedRequest,
    /**
     * The CollaborationApi service constructor.
     * @property {module:koding-api/CollaborationApi}
     */
    CollaborationApi: CollaborationApi,
    /**
     * The ComputeProviderApi service constructor.
     * @property {module:koding-api/ComputeProviderApi}
     */
    ComputeProviderApi: ComputeProviderApi,
    /**
     * The DataDogApi service constructor.
     * @property {module:koding-api/DataDogApi}
     */
    DataDogApi: DataDogApi,
    /**
     * The GitProviderApi service constructor.
     * @property {module:koding-api/GitProviderApi}
     */
    GitProviderApi: GitProviderApi,
    /**
     * The GithubApi service constructor.
     * @property {module:koding-api/GithubApi}
     */
    GithubApi: GithubApi,
    /**
     * The JAccountApi service constructor.
     * @property {module:koding-api/JAccountApi}
     */
    JAccountApi: JAccountApi,
    /**
     * The JApiTokenApi service constructor.
     * @property {module:koding-api/JApiTokenApi}
     */
    JApiTokenApi: JApiTokenApi,
    /**
     * The JCombinedAppStorageApi service constructor.
     * @property {module:koding-api/JCombinedAppStorageApi}
     */
    JCombinedAppStorageApi: JCombinedAppStorageApi,
    /**
     * The JComputeStackApi service constructor.
     * @property {module:koding-api/JComputeStackApi}
     */
    JComputeStackApi: JComputeStackApi,
    /**
     * The JCredentialApi service constructor.
     * @property {module:koding-api/JCredentialApi}
     */
    JCredentialApi: JCredentialApi,
    /**
     * The JCustomPartialsApi service constructor.
     * @property {module:koding-api/JCustomPartialsApi}
     */
    JCustomPartialsApi: JCustomPartialsApi,
    /**
     * The JDomainAliasApi service constructor.
     * @property {module:koding-api/JDomainAliasApi}
     */
    JDomainAliasApi: JDomainAliasApi,
    /**
     * The JGroupApi service constructor.
     * @property {module:koding-api/JGroupApi}
     */
    JGroupApi: JGroupApi,
    /**
     * The JGroupDataApi service constructor.
     * @property {module:koding-api/JGroupDataApi}
     */
    JGroupDataApi: JGroupDataApi,
    /**
     * The JInvitationApi service constructor.
     * @property {module:koding-api/JInvitationApi}
     */
    JInvitationApi: JInvitationApi,
    /**
     * The JMachineApi service constructor.
     * @property {module:koding-api/JMachineApi}
     */
    JMachineApi: JMachineApi,
    /**
     * The JNameApi service constructor.
     * @property {module:koding-api/JNameApi}
     */
    JNameApi: JNameApi,
    /**
     * The JPasswordRecoveryApi service constructor.
     * @property {module:koding-api/JPasswordRecoveryApi}
     */
    JPasswordRecoveryApi: JPasswordRecoveryApi,
    /**
     * The JProposedDomainApi service constructor.
     * @property {module:koding-api/JProposedDomainApi}
     */
    JProposedDomainApi: JProposedDomainApi,
    /**
     * The JProvisionerApi service constructor.
     * @property {module:koding-api/JProvisionerApi}
     */
    JProvisionerApi: JProvisionerApi,
    /**
     * The JRewardApi service constructor.
     * @property {module:koding-api/JRewardApi}
     */
    JRewardApi: JRewardApi,
    /**
     * The JRewardCampaignApi service constructor.
     * @property {module:koding-api/JRewardCampaignApi}
     */
    JRewardCampaignApi: JRewardCampaignApi,
    /**
     * The JSessionApi service constructor.
     * @property {module:koding-api/JSessionApi}
     */
    JSessionApi: JSessionApi,
    /**
     * The JStackTemplateApi service constructor.
     * @property {module:koding-api/JStackTemplateApi}
     */
    JStackTemplateApi: JStackTemplateApi,
    /**
     * The JTeamInvitationApi service constructor.
     * @property {module:koding-api/JTeamInvitationApi}
     */
    JTeamInvitationApi: JTeamInvitationApi,
    /**
     * The JUrlAliasApi service constructor.
     * @property {module:koding-api/JUrlAliasApi}
     */
    JUrlAliasApi: JUrlAliasApi,
    /**
     * The JUserApi service constructor.
     * @property {module:koding-api/JUserApi}
     */
    JUserApi: JUserApi,
    /**
     * The KloudApi service constructor.
     * @property {module:koding-api/KloudApi}
     */
    KloudApi: KloudApi,
    /**
     * The OAuthApi service constructor.
     * @property {module:koding-api/OAuthApi}
     */
    OAuthApi: OAuthApi,
    /**
     * The S3Api service constructor.
     * @property {module:koding-api/S3Api}
     */
    S3Api: S3Api,
    /**
     * The SharedMachineApi service constructor.
     * @property {module:koding-api/SharedMachineApi}
     */
    SharedMachineApi: SharedMachineApi,
    /**
     * The SidebarApi service constructor.
     * @property {module:koding-api/SidebarApi}
     */
    SidebarApi: SidebarApi,
    /**
     * The SocialChannelApi service constructor.
     * @property {module:koding-api/SocialChannelApi}
     */
    SocialChannelApi: SocialChannelApi,
    /**
     * The SocialMessageApi service constructor.
     * @property {module:koding-api/SocialMessageApi}
     */
    SocialMessageApi: SocialMessageApi,
    /**
     * The SocialNotificationApi service constructor.
     * @property {module:koding-api/SocialNotificationApi}
     */
    SocialNotificationApi: SocialNotificationApi,
    /**
     * The SystemApi service constructor.
     * @property {module:koding-api/SystemApi}
     */
    SystemApi: SystemApi,
    /**
     * The TrackerApi service constructor.
     * @property {module:koding-api/TrackerApi}
     */
    TrackerApi: TrackerApi
  };

  return exports;
}));
