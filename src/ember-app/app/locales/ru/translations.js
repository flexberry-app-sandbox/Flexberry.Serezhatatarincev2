import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSerezhatatarincev2ВендорLForm from './forms/i-i-s-serezhatatarincev2-вендор-l';
import IISSerezhatatarincev2ОперацииLForm from './forms/i-i-s-serezhatatarincev2-операции-l';
import IISSerezhatatarincev2ПользовательLForm from './forms/i-i-s-serezhatatarincev2-пользователь-l';
import IISSerezhatatarincev2РабочееМестоLForm from './forms/i-i-s-serezhatatarincev2-рабочее-место-l';
import IISSerezhatatarincev2ТипLForm from './forms/i-i-s-serezhatatarincev2-тип-l';
import IISSerezhatatarincev2ФилиалLForm from './forms/i-i-s-serezhatatarincev2-филиал-l';
import IISSerezhatatarincev2ВендорEForm from './forms/i-i-s-serezhatatarincev2-вендор-e';
import IISSerezhatatarincev2ОперацииEForm from './forms/i-i-s-serezhatatarincev2-операции-e';
import IISSerezhatatarincev2ПользовательEForm from './forms/i-i-s-serezhatatarincev2-пользователь-e';
import IISSerezhatatarincev2РабочееМестоEForm from './forms/i-i-s-serezhatatarincev2-рабочее-место-e';
import IISSerezhatatarincev2ТипEForm from './forms/i-i-s-serezhatatarincev2-тип-e';
import IISSerezhatatarincev2ФилиалEForm from './forms/i-i-s-serezhatatarincev2-филиал-e';
import IISSerezhatatarincev2ВендорModel from './models/i-i-s-serezhatatarincev2-вендор';
import IISSerezhatatarincev2ОборудованиеModel from './models/i-i-s-serezhatatarincev2-оборудование';
import IISSerezhatatarincev2ОперацииModel from './models/i-i-s-serezhatatarincev2-операции';
import IISSerezhatatarincev2ПОModel from './models/i-i-s-serezhatatarincev2-п-о';
import IISSerezhatatarincev2ПользовательModel from './models/i-i-s-serezhatatarincev2-пользователь';
import IISSerezhatatarincev2РабочееМестоModel from './models/i-i-s-serezhatatarincev2-рабочее-место';
import IISSerezhatatarincev2ТипModel from './models/i-i-s-serezhatatarincev2-тип';
import IISSerezhatatarincev2ФилиалModel from './models/i-i-s-serezhatatarincev2-филиал';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-serezhatatarincev2-вендор': IISSerezhatatarincev2ВендорModel,
    'i-i-s-serezhatatarincev2-оборудование': IISSerezhatatarincev2ОборудованиеModel,
    'i-i-s-serezhatatarincev2-операции': IISSerezhatatarincev2ОперацииModel,
    'i-i-s-serezhatatarincev2-п-о': IISSerezhatatarincev2ПОModel,
    'i-i-s-serezhatatarincev2-пользователь': IISSerezhatatarincev2ПользовательModel,
    'i-i-s-serezhatatarincev2-рабочее-место': IISSerezhatatarincev2РабочееМестоModel,
    'i-i-s-serezhatatarincev2-тип': IISSerezhatatarincev2ТипModel,
    'i-i-s-serezhatatarincev2-филиал': IISSerezhatatarincev2ФилиалModel
  },

  'application-name': 'Serezhatatarincev2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Serezhatatarincev2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Serezhatatarincev2',
          title: 'Serezhatatarincev2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'учет-оборудования-и-п-о': {
          caption: 'Учет Оборудования и ПО',
          title: 'Учет Оборудования и ПО',
          'i-i-s-serezhatatarincev2-операции-l': {
            caption: 'Операции',
            title: ''
          },
          'i-i-s-serezhatatarincev2-рабочее-место-l': {
            caption: 'Рабочее место',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-serezhatatarincev2-пользователь-l': {
            caption: 'Пользователь',
            title: 'Пользователь'
          },
          'i-i-s-serezhatatarincev2-тип-l': {
            caption: 'Тип',
            title: 'Тип'
          },
          'i-i-s-serezhatatarincev2-вендор-l': {
            caption: 'Вендор',
            title: 'Вендор'
          },
          'i-i-s-serezhatatarincev2-филиал-l': {
            caption: 'Филиал',
            title: 'Филиал'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-serezhatatarincev2-вендор-l': IISSerezhatatarincev2ВендорLForm,
    'i-i-s-serezhatatarincev2-операции-l': IISSerezhatatarincev2ОперацииLForm,
    'i-i-s-serezhatatarincev2-пользователь-l': IISSerezhatatarincev2ПользовательLForm,
    'i-i-s-serezhatatarincev2-рабочее-место-l': IISSerezhatatarincev2РабочееМестоLForm,
    'i-i-s-serezhatatarincev2-тип-l': IISSerezhatatarincev2ТипLForm,
    'i-i-s-serezhatatarincev2-филиал-l': IISSerezhatatarincev2ФилиалLForm,
    'i-i-s-serezhatatarincev2-вендор-e': IISSerezhatatarincev2ВендорEForm,
    'i-i-s-serezhatatarincev2-операции-e': IISSerezhatatarincev2ОперацииEForm,
    'i-i-s-serezhatatarincev2-пользователь-e': IISSerezhatatarincev2ПользовательEForm,
    'i-i-s-serezhatatarincev2-рабочее-место-e': IISSerezhatatarincev2РабочееМестоEForm,
    'i-i-s-serezhatatarincev2-тип-e': IISSerezhatatarincev2ТипEForm,
    'i-i-s-serezhatatarincev2-филиал-e': IISSerezhatatarincev2ФилиалEForm
  },

});

export default translations;
