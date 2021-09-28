/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */

import { Formio, Components } from 'formiojs/index.js'

import editForm from './CustomComponent.form';

/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */

export default class CustomComponent extends Components.components.field {
  constructor(component, options, data) {
    super(component, options, data);
    this.editForm = editForm
    this.value = ''
  }

  static schema() {
    return Components.components.field.schema({
      type: 'customcomponent',
      jsonId: 1
    });
  }

  static builderInfo = {
    title: 'Custom Component',
    group: 'basic',
    icon: 'fa fa-table',
    weight: 70,
    documentation: 'http://help.form.io/userguide/#table',
    schema: CustomComponent.schema()
  }

  getValue() {
    console.log('getValue')
    return this.value
  }

  setValue(value) {
    this.value = value
    this.updateValue()
  }

  render(children) {
    // const value = this.value
    // console.log({ value })
    return super.render(this.renderTemplate('customcomponent', {
      setValue: this.setValue.bind(this),
      addressSearch: () => fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
      // value
    }));
  }
}
