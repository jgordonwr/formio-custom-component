import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import CustomComponentEditDisplay from './editForm/CustomComponent.edit.display';

export default function (...extend) {
    return nestedComponentForm([
        {
            key: 'display',
            components: CustomComponentEditDisplay
        }
    ], ...extend);
}
