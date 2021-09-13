import React, {PureComponent} from 'react';
import Form from '@formio/react/lib/components/Form';
import { Formio } from 'formiojs/index.js'

import custom from './custom-components';

Formio.use(custom);

export class DynamicFormRenderer extends PureComponent {
    render() {
        return (
            <div className="dynamic-form-renderer">
                <Form src={"https://dynamic-form-manager.wremittst.com/wr-tst/customcomponenttest"} />
            </div>
        );
    }
}

export default DynamicFormRenderer;
