import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-serezhatatarincev2-операции', 'Unit | Model | i-i-s-serezhatatarincev2-операции', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-serezhatatarincev2-вендор',
    'model:i-i-s-serezhatatarincev2-оборудование',
    'model:i-i-s-serezhatatarincev2-операции',
    'model:i-i-s-serezhatatarincev2-п-о',
    'model:i-i-s-serezhatatarincev2-пользователь',
    'model:i-i-s-serezhatatarincev2-рабочее-место',
    'model:i-i-s-serezhatatarincev2-тип',
    'model:i-i-s-serezhatatarincev2-филиал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
