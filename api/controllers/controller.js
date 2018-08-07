"use strict";
//controllers
const TemplateController = require("./Template.controller.js");

//exports
var exports = {};
exports.v1_TemplateCreate = TemplateController.create;
exports.v1_TemplateList = TemplateController.index;
exports.v1_TemplateShow = TemplateController.show;
exports.v1_TemplateDestroy = TemplateController.destroy;
exports.v1_TemplateUpdate = TemplateController.update;

module.exports = exports;
    