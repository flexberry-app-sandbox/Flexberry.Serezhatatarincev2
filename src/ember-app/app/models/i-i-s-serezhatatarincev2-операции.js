import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОперацииMixin
} from '../mixins/regenerated/models/i-i-s-serezhatatarincev2-операции';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОперацииMixin, Validations, {
});

defineProjections(Model);

export default Model;
