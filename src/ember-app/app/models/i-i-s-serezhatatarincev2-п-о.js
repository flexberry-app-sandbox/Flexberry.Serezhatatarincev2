import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПОMixin
} from '../mixins/regenerated/models/i-i-s-serezhatatarincev2-п-о';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПОMixin, Validations, {
});

defineProjections(Model);

export default Model;
