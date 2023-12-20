import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-serezhatatarincev2-рабочее-место-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-serezhatatarincev2-оборудование+тип':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'тип',
            projection: 'ТипL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-serezhatatarincev2-оборудование+операции':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'дата',
            required: true,
            relationName: 'операции',
            projection: 'ОперацииL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-serezhatatarincev2-оборудование+пользователь':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'пользователь',
            projection: 'ПользовательL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-serezhatatarincev2-п-о+вендор':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'вендор',
            projection: 'ВендорL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
