import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомер: DS.attr('string'),
  кабинет: DS.attr('string'),
  место: DS.attr('string'),
  филиал: DS.belongsTo('i-i-s-serezhatatarincev2-филиал', { inverse: null, async: false }),
  оборудование: DS.hasMany('i-i-s-serezhatatarincev2-оборудование', { inverse: 'рабочееМесто', async: false }),
  пО: DS.hasMany('i-i-s-serezhatatarincev2-п-о', { inverse: 'рабочееМесто', async: false })
});

export let ValidationRules = {
  инвНомер: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-рабочее-место.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-рабочее-место.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-рабочее-место.validations.место.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  филиал: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-рабочее-место.validations.филиал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-рабочее-место.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  пО: {
    descriptionKey: 'models.i-i-s-serezhatatarincev2-рабочее-место.validations.пО.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РабочееМестоE', 'i-i-s-serezhatatarincev2-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 }),
    место: attr('Место', { index: 2 }),
    филиал: belongsTo('i-i-s-serezhatatarincev2-филиал', 'Филиал', {
      название: attr('Название', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'название' }),
    оборудование: hasMany('i-i-s-serezhatatarincev2-оборудование', 'Оборудование', {
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
    }),
    пО: hasMany('i-i-s-serezhatatarincev2-п-о', 'ПО', {
      название: attr('Название', { index: 0 }),
      версия: attr('Версия', { index: 1 }),
      freeware: attr('Freeware', { index: 2 }),
      вендор: belongsTo('i-i-s-serezhatatarincev2-вендор', 'Вендор', {
        название: attr('Название', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('РабочееМестоL', 'i-i-s-serezhatatarincev2-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 }),
    место: attr('Место', { index: 2 }),
    филиал: belongsTo('i-i-s-serezhatatarincev2-филиал', 'Название', {
      название: attr('Название', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
