import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ДействиеEnum from '../enums/i-i-s-serezhatatarincev2-действие';

export default FlexberryEnum.extend({
  enum: ДействиеEnum,
  sourceType: 'IIS.Serezhatatarincev2.Действие'
});
