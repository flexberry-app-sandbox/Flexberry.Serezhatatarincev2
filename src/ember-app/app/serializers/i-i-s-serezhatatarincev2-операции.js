import { Serializer as ОперацииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-serezhatatarincev2-операции';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОперацииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
