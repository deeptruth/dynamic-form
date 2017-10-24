(function(){
    var components = []
    function TextBoxComponent(comp){
        return `
        <label for="">${comp['field-label']}</label>
        <input type="textbox" id="" class="form-control" placeholder="1">`;
    }
    
    function EmailComponent(comp){
        return `
        <label for="">${comp['field-label']}</label>
        <input type="email" id="" class="form-control" placeholder="1">`;
    }
    
    function LocationComponent(comp){
        return `
        <label for="">Province</label>
        <input type="textbox" id="" class="form-control" placeholder="location">`.wrapFormGroup() + 
        `<label for="">City</label>
        <input type="textbox" id="" class="form-control" placeholder="location">
        `.wrapFormGroup();
    }
    
    function DateComponent(comp){
        return `
        <label for="">${comp['field-label']}</label>
        <div class="input-group date">
            <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
        </div>`;
    }
    
    function TextAreaComponent(comp){
        return `
        <label  for="">${comp['field-label']}</label>
        <textarea type="textbox" id="" class="form-control" placeholder=""></textarea>`;
    }
    
    function LabelComponent(comp){
        return `<h3 style="color:${comp['label-color']}">${comp['label-title']}</h3>`
    }
    
    function DividerComponent(comp){
        return `<hr style="border-top: ${comp['divider-size']} solid ${comp['divider-color']}; border-right-style: solid; border-bottom-style: solid; border-left-style: solid"/>`
    }

    function DropdownComponent(comp){
        return `<label  for="">${comp['field-label']}</label>
                <select id="" class="form-control" placeholder="">
                ${
                    comp['field-options'].map(function(opt, index){
                    return  `<option value="${opt.value}">${opt.label}</option>`;
                    })
                }
                </select>`;
    }

    function RadioComponent(comp){


        return `<label  for="">${comp['field-label']}</label>
                <div class="form-group" placeholder="">
                ${
                    $.map(comp['field-options'],function(opt, index){
                    return  `<div class="radio"><label><input type="radio" name="${comp['field-name']}" value="${opt.value}">${opt.label}</label></div>`;
                    }).join(' ')
                }
                </div>`;
    }

    function CheckboxComponent(comp){
        return `<label  for="">${comp['field-label']}</label>
                <div class="form-group" placeholder="">
                ${
                    $.map(comp['field-options'],function(opt, index){
                    return  `<div class="checkbox"><label><input type="checkbox" name="${comp['field-name']}" value="${opt.value}">${opt.label}</label></div>`;
                    }).join(' ')
                }
                </div>`;
    }

    function SubformComponent(comp){
        
        var frm = new Form(comp.fields);
        window.app = window.app || {};
        window.app.subforms = window.app.subforms || [];
        window.app.subforms[comp['form_id']] = frm;
        return `<div class="subform" data-type="subform" data-form-id="${comp['form_id']}">
                    <label for="">${comp['field-label']}</label>
                    <div class="container-fluid subform-content">
                        ${frm.render()[0].outerHTML}
                    </div>
                    <div class="form-group pull-right"> <input type="button" data-form-id=${comp['form_id']} class="btn btn-primary subform-add" value="+ Add"/></div>
                </div>`;
    }



    components['label'] = LabelComponent;
    components['divider'] = DividerComponent;
    components['textbox'] = TextBoxComponent;
    components['textarea'] = TextAreaComponent;
    components['date'] = DateComponent;
    components['location'] = LocationComponent;
    components['email'] = EmailComponent;
    components['dropdown'] = DropdownComponent;
    components['radio'] = RadioComponent;
    components['checkbox'] = CheckboxComponent;
    components['subform'] = SubformComponent;
    

    window.app = window.app || {};
    window.app.Components = components;
    
})();