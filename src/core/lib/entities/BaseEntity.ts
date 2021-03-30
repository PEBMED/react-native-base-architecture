import * as _ from 'lodash';

export abstract class BaseEntity {
  static hydrate(data: Object): any {
    const instance = Reflect.construct(this, []);
    Object.entries(data).map(([property, value]) => {
      const formatedProperty = `_${_.camelCase(property)}`;
      if (Reflect.has(instance, formatedProperty)) {
        Reflect.set(instance, formatedProperty, value);
      }
    });
    return instance;
  }
}
