'use strict';

function Wizard(wz, id) {
    this.name = wz.name;
    this.fields = wz.fields;
    this.id = id;
}

Wizard.prototype.render = function render(btn) {
    var $content = $('<div class="container-fluid wizard" data-wizard=' + this.name + '>\n                <div class="row actions action-top"></div>\n                <div class="row form-content"><h1>' + this.name + '</h1></div>\n                <div class="row actions action-bottom"></div>\n            </div>');

    $.each(btn.top, function (i, btn) {
        $content.find('.action-top').append(actionTemplate(btn));
    });
    $.each(btn.bottom, function (i, btn) {
        $content.find('.action-bottom').append(actionTemplate(btn));
    });

    var form = new Form(this.fields, this.id);
    var $form = form.render();
    $content.find('.form-content').append($form);

    return $content;
};

function actionTemplate(btn) {
    return '<div class="col-md-12">\n            <input type="button" name="" data-action="' + btn.action + '" class="btn btn-primary form-control" id="" value="' + btn.label + '">\n        </div>';
}