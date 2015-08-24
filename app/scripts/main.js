'use strict';
function stringInject(template, context) {
    var i = 0;
 
    if (context && context.length) {
      return template.replace(/\{\d+\}/g, function (subStr) {
          var strVal = context[i];

          if (strVal) {
            i += 1;
            return strVal;
          }
          else {
            return subStr;
          }
        });
    }
 
    return template;
  }


function ElementObjectManager(objsArray) {
    return {
        get: function (val, key) {
            var key = key ? key : 'pk';  // default key to primary key lookup
            return objsArray.filter(
              function (elem) {
                  return elem[key] === val;
                }
            );
          },
        all: function () {
            return objsArray;
          },
      };
  }

function ElementObject() {
    var self = this,
        nextPk = 1;
    this.__init__ = function () {
        this.pk = nextPk++;  // set the primary key of new instance
        this.created = new Date();
        ElementObject._objectsArray.push(this);  // push to object manager
      };
  }

ElementObject._objectsArray = [];

// create a new object manager for ElementObject
ElementObject.objects = new ElementObjectManager(ElementObject._objectsArray);



ElementObject.prototype.buildTemplate = function (templateId) {
  // looks for an element with templateId to use for template
  var templateId = templateId || 'elemObjContainer';
  this.baseTemplate = document.getElementById(templateId);
  // clone template
  this.htmlTemplate = this.baseTemplate.cloneNode(true);
};

ElementObject.prototype.buildHtml = function () {
  // takes variable arguments and injects into template
  var args = Array.prototype.slice.call(arguments);
  if (args.length == 1) {
    args = args[0];
  }
  var htmlString = stringInject(this.htmlTemplate.innerHTML,
                                args);
  var elem = document.createElement('div');
  elem.setAttribute('id', 'elem-obj_' + this.pk);
  elem.innerHTML = htmlString;
  elem.addEventListener('click', function(e) {
    this.action();  // do something here
  }.bind(this));
  this.html = elem;
};

ElementObject.prototype.display = function (containerElemId) {
  // inserts the html into the app-canvas element
  document.querySelector('#' + containerElemId).appendChild(this.html);
};

ElementObject.prototype.action = function () {
  alert(this.pk);
};


function PanelObject() {
  this.__init__();
  this.templateId = 'panelObjContainer';
}

PanelObject.prototype = new ElementObject();  // Make Panel object instances have ElementObject's attrs


PanelObject.prototype.build = function (title, content, cssClass) {
  var cssClass = cssClass || 'primary';  // use bootstrap color classes
  this.buildTemplate(this.templateId);
  this.buildHtml(cssClass, title, content);
};

function BlogPost() {
  // 0: title, 1: author, 2: content, 3: cssClass *optional
  this.__init__();
  this.templateId = 'blogPostTemplate';
  var args = Array.prototype.slice.call(arguments);
  this.title = args[0];
  this.author = args[1];
  this.content = args[2];
  this.cssClass = args[3] || 'primary';
}

BlogPost.prototype = new ElementObject();

BlogPost.prototype.build = function () {
  this.buildTemplate(this.templateId);
  this.buildHtml(this.cssClass, this.title, this.author, this.content,
                 this.created.toUTCString());
};



debugger;