jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';
  var appId = kintone.app.getId();
  kintone.events.on('app.record.index.show', function() {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);
    var body = {
    "app": appId
    };

    kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, function(resp) {
        // success
        console.log(resp);
    }, function(error) {
        // error
        console.log(error);
    });
    var spaceElement = kintone.app.getHeaderSpaceElement();
    var fragment = document.createDocumentFragment();
    var headingEl = document.createElement('h3');
    var messageEl = document.createElement('p');

    messageEl.classList.add('plugin-space-message');
    messageEl.textContent = config.message;
    headingEl.classList.add('plugin-space-heading');
    headingEl.textContent = 'Hello kintone plugin!';

    fragment.appendChild(headingEl);
    fragment.appendChild(messageEl);
    spaceElement.appendChild(fragment);
  });

})(jQuery, kintone.$PLUGIN_ID);
