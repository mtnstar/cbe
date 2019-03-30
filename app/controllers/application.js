import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);

    // Where are we booting the Ember app from? (Content script | Popup)
    let metaScope = document.querySelector("meta[scope='ember-app-from']");
    let scope = metaScope ? metaScope.getAttribute('content') : 'content-script';
    this.set(this, 'appScope', scope);
  }
});
