import {
  defineNamespace,
  defineProjections,
  Model as ТипMixin
} from '../mixins/regenerated/models/i-i-s-serezhatatarincev2-тип';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТипMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
