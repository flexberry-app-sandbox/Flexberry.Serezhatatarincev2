import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  действие: DS.attr('i-i-s-serezhatatarincev2-действие'),
  состояние: DS.attr('i-i-s-serezhatatarincev2-состояние'),
  пользователь: DS.belongsTo('i-i-s-serezhatatarincev2-пользователь', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-операции.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  действие: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-операции.validations.действие.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-операции.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-операции.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОперацииE', 'i-i-s-serezhatatarincev2-операции', {
    дата: attr('Дата', { index: 0 }),
    действие: attr('Действие', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    пользователь: belongsTo('i-i-s-serezhatatarincev2-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОперацииL', 'i-i-s-serezhatatarincev2-операции', {
    дата: attr('Дата', { index: 0 }),
    действие: attr('Действие', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    пользователь: belongsTo('i-i-s-serezhatatarincev2-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
