import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  инвНомер: DS.attr('string'),
  название: DS.attr('string'),
  операции: DS.belongsTo('i-i-s-serezhatatarincev2-операции', { inverse: null, async: false }),
  пользователь: DS.belongsTo('i-i-s-serezhatatarincev2-пользователь', { inverse: null, async: false }),
  тип: DS.belongsTo('i-i-s-serezhatatarincev2-тип', { inverse: null, async: false }),
  рабочееМесто: DS.belongsTo('i-i-s-serezhatatarincev2-рабочее-место', { inverse: 'оборудование', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-оборудование.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  инвНомер: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-оборудование.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-оборудование.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  операции: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-оборудование.validations.операции.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-оборудование.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-оборудование.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рабочееМесто: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-оборудование.validations.рабочееМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'i-i-s-serezhatatarincev2-оборудование', {
    название: attr('Название', { index: 0 }),
    инвНомер: attr('Инв номер', { index: 1 }),
    дата: attr('Дата добавления', { index: 2 }),
    тип: belongsTo('i-i-s-serezhatatarincev2-тип', 'Тип', {
      название: attr('Название', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'название' }),
    операции: belongsTo('i-i-s-serezhatatarincev2-операции', 'Операции', {
      дата: attr('Дата ', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'дата' }),
    пользователь: belongsTo('i-i-s-serezhatatarincev2-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' })
  });
};
