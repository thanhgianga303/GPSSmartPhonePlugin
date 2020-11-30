jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';
  var appId = kintone.app.getId();
  function initForm()
  {
    var body = {
      'app': appId,
      'properties': {
        'Table_1':{
          'code':'Table_1',
          'label': "Table",
          'noLabel': true,
          'type': "SUBTABLE",
          'fields':
            { 
              'clockin_attendance':{
                code: "clockin_attendance",
                defaultNowValue: true,
                defaultValue: "",
                label: "出勤時間",
                noLabel: false,
                required: false,
                type: "TIME",
              },
              'location_of_working':{
                code: "location_of_working",
                defaultValue: "",
                expression: "",
                hideExpression: false,
                label: "出勤場所",
                maxLength: "",
                minLength: "",
                noLabel: false,
                required: false,
                type: "SINGLE_LINE_TEXT",
                unique: false,
              },
              'GPS_working':{
                code: "GPS_working",
                defaultValue: "",
                expression: "",
                hideExpression: false,
                label: "GPS",
                maxLength: "",
                minLength: "",
                noLabel: false,
                required: false,
                type: "SINGLE_LINE_TEXT",
                unique: false,
            },
          },
          
        },
        'Table_2':{
          'code':'Table_2',
          'label': "Table",
          'noLabel': true,
          'type': "SUBTABLE",
          'fields':
            { 
              'clockout_attendance':{
                code: "clockout_attendance",
                defaultNowValue: true,
                defaultValue: "",
                label: "退勤時間",
                noLabel: false,
                required: false,
                type: "TIME",
              },
              'location_off_work':{
                code: "location_off_work",
                defaultValue: "",
                expression: "",
                hideExpression: false,
                label: "退勤場所",
                maxLength: "",
                minLength: "",
                noLabel: false,
                required: false,
                type: "SINGLE_LINE_TEXT",
                unique: false,
              },
              'GPS_off_work':{
                code: "GPS_off_work",
                defaultValue: "",
                expression: "",
                hideExpression: false,
                label: "GPS",
                maxLength: "",
                minLength: "",
                noLabel: false,
                required: false,
                type: "SINGLE_LINE_TEXT",
                unique: false,
            },
          }
          
        },
         'memo_attendance': {
          'type':  'MULTI_LINE_TEXT',
          'code': 'memo_attendance' ,  
          'label':'MEMO' ,
          'noLabel' : false,
          'required': false,
          'defaultValue': ''
        }
        
      }
    };
    kintone.api(kintone.api.url('/k/v1/preview/app/form/fields', true), 'POST', body, function(resp) {
      console.log("init form: success");
      // init_form_complete = true;
    }, function(error) {
      // init_form_complete = true;
      console.log("init form: error");
    });
  }
  function initLayout()
  {
  //   var body = {
  //   'app': appId,
  //   'layout': [
  //     {
  //       'type':'ROW',
  //       'fields':[
  //         {
  //           'type':'Space',
  //           'elementId':  'spacer_1',
  //           'size':{
  //             'width': 200,
  //             'height': 100
  //             }
  //         },
  //       ]
  //     }
  //   ]
  // };
  var body = {
  'app': appId,
  'layout': [
    {
      'type': 'ROW',
      'fields': [
        {
          'type': 'SINGLE_LINE_TEXT',
          'code': 'string__1 line_',
          'size': {
            'width' : 200
          }
        },
        {
          'type': 'MULTI_LINE_TEXT',
          'code': 'string__multi-line_',
          'size': {
            'width': 200,
            'innerHeight': 100
          }
        },
        {
          'type': 'LABEL',
          'label': 'label',
          'size': {
            'width' : 200
          }
        },
        {
          'type': 'SPACER',
          'elementId': 'spacer',
          'size': {
            'width': 200,
            'height' : 100
          }
        },
        {
          'type': 'HR',
          'size': {
            'width' : 200
          }
        }
      ]
    }
  ]
};
  kintone. api(kintone. api. url('/k/v1/preview/app/form/layout', true), 'POST',  body, function(resp) {
      console.log(resp);
      console.log("success");
    }, function(error){
      console.log(error);
      console.log("error");
    });
  }
  var $form = $('.js-submit-settings');
  var $cancelButton = $('.js-cancel-button');
  var $message = $('.js-text-message');
  var config = kintone.plugin.app.getConfig(PLUGIN_ID);

  if (config.message) {
    $message.val(config.message);
  }
  $form.on('submit', function(e) {
    e.preventDefault();
    initLayout();
    // initForm();
    console.log("giang");
    kintone.plugin.app.setConfig({message: $message.val()}, function() {
      alert('The plug-in settings have been saved. Please update the app!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  });
  $cancelButton.on('click', function() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });
})(jQuery, kintone.$PLUGIN_ID);
