import {
  defineNamespace,
  defineProjections,
  Model as ФилиалMixin
} from '../mixins/regenerated/models/i-i-s-serezhatatarincev2-филиал';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФилиалMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
