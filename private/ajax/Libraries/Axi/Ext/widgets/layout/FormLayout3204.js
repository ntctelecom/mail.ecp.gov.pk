Ext.namespace("Axi.layout"),Axi.layout.FormLayout=Ext.extend(Ext.layout.FormLayout,{setContainer:function(e){Axi.layout.FormLayout.superclass.setContainer.call(this,e);var t=new Ext.Template('<div class="x-form-item {5}" tabIndex="-1">','<label for="{0}" style="{2}" class="x-form-item-label" placeholder="{7}">{1}{4}</label>','<div class="x-form-element" id="x-form-el-{0}" style="{3}">','</div><div class="{6}"></div>',"</div>");t.disableFormats=!0,t.compile(),Axi.layout.FormLayout.prototype.fieldTpl=t},renderItem:function(e,t,l){if(e&&!e.rendered&&e.isFormField&&"hidden"!=e.inputType){var a=[e.id,e.fieldLabel,this.getLabelStyle(e.labelStyle),this.elementStyle||"",void 0===e.labelSeparator?this.labelSeparator:e.labelSeparator,(e.itemCls||this.container.itemCls||"")+(e.hideLabel?" x-hide-label":""),e.clearCls||"x-form-clear-left",e.labelPlaceholder||""];"number"==typeof t&&(t=l.dom.childNodes[t]||null),t?this.fieldTpl.insertBefore(t,a):this.fieldTpl.append(l,a),e.render("x-form-el-"+e.id)}else Axi.layout.FormLayout.superclass.renderItem.apply(this,arguments);var o=e.el,i=Ext.get(Ext.DomQuery.selectNode("label",o.dom.parentNode.parentNode));o.on("focus",this.onFocus.createDelegate(this,[o,i]),this),o.on("blur",this.onBlur.createDelegate(this,[o,i]),this),document.activeElement===o.dom&&this.onFocus(o,i);var r=(new Date).getTime(),s=window.setInterval(function(){if(o.getValue())return i.addClass("x-axi-field-notempty"),void window.clearInterval(s);(new Date).getTime()-r>=5e3&&window.clearInterval(s)}.createDelegate(this),100)},onFocus:function(e,t){t.addClass("x-form-focus")},onBlur:function(e,t){t.removeClass("x-form-focus"),e.getValue()?t.addClass("x-axi-field-notempty"):t.removeClass("x-axi-field-notempty")}}),Ext.Container.LAYOUTS.axiform=Axi.layout.FormLayout;