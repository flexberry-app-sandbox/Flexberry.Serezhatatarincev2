import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-serezhatatarincev2-филиал', 'Unit | Serializer | i-i-s-serezhatatarincev2-филиал', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-serezhatatarincev2-филиал',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-serezhatatarincev2-действие',
    'transform:i-i-s-serezhatatarincev2-состояние',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
