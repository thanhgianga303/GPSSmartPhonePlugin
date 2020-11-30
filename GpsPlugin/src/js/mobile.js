jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';

  kintone.events.on('mobile.app.record.index.show', function() {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);
    console.log("hello mobile");
    var spaceElement = kintone.mobile.app.getHeaderSpaceElement();
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
