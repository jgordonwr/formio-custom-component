import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {TestReactComponent} from './Component';

const form = ctx => {
    let id = `root=${ctx.id}`;
    id += ctx.builder ? 'builder' : 'preview';
    console.log({ ctx })
    if (!window.hasRendered) {
        setTimeout(() => {
            const element = document.getElementById(id);
            try {
                ReactDOM.render(
                    <TestReactComponent
                        property={ctx.key}
                        // id={ctx.component.jsonId}
                        id={ctx.id}
                        setValue={ctx.setValue} value={ctx.value}
                    />,
                    element
                )
            } catch (e) {
                console.error(e);
            }
        });
    };

    return `<div id="${id}" />`;
}

export default {form};

