class IdentityXConfiguration {
  /**
   *
   * @param {string} appId
   */
  constructor(appId) {
    if (!appId) throw new Error('Unable to configure IdentityX: no Application ID was provided.');
    this.appId = appId;
  }

  getAppId() {
    return this.appId;
  }
}

module.exports = IdentityXConfiguration;
