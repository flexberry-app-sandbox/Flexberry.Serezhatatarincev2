import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  админ: DS.attr('boolean'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  админ: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-пользователь.validations.админ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-пользователь.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПользовательE', 'i-i-s-serezhatatarincev2-пользователь', {
    фИО: attr('ФИО', { index: 0 }),
    админ: attr('Админ', { index: 1 })
  });

  modelClass.defineProjection('ПользовательL', 'i-i-s-serezhatatarincev2-пользователь', {
    фИО: attr('ФИО', { index: 0 }),
    админ: attr('Админ', { index: 1 })
  });
};
