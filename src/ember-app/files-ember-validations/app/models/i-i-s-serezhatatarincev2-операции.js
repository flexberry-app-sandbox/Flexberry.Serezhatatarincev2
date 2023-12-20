import {
  defineNamespace,
  defineProjections,
  Model as ОперацииMixin
} from '../mixins/regenerated/models/i-i-s-serezhatatarincev2-операции';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОперацииMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
