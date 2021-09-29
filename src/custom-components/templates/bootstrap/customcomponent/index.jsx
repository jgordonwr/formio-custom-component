import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import {TestReactComponent} from './Component';
import AddressLookupUIPatterns from '@wr/ui-patterns/dist/js/components/molecules/AddressLookup';

const dummyProps = {
    fieldOrGroup: JSON.parse("{\"fieldOrGroup\":{\"id\":\"address\",\"label\":\"Address\",\"readonly\":false,\"addressLookupEnabled\":true,\"layout\":\"SubForm\",\"fields\":[{\"id\":\"SenderFlatUnit\",\"label\":\"Apt/Unit No.\",\"labelMarkups\":[],\"inputType\":\"string\",\"groupId\":\"address\",\"rules\":{\"required\":false,\"regex\":\"^[0-9]*$\"},\"readonly\":false,\"itemType\":\"field\"},{\"id\":\"SenderBuilding\",\"label\":\"Street No.\",\"labelMarkups\":[],\"inputType\":\"string\",\"groupId\":\"address\",\"rules\":{\"required\":false},\"readonly\":false,\"itemType\":\"field\"},{\"id\":\"SenderStreet\",\"label\":\"Street\",\"labelMarkups\":[],\"inputType\":\"string\",\"groupId\":\"address\",\"rules\":{\"maxLength\":200,\"required\":true,\"regex\":\"^['a-zA-Z ]*$\"},\"readonly\":false,\"itemType\":\"field\"},{\"id\":\"SenderCity\",\"label\":\"City/Town\",\"labelMarkups\":[],\"inputType\":\"string\",\"groupId\":\"address\",\"rules\":{\"maxLength\":200,\"required\":true},\"readonly\":false,\"itemType\":\"field\"},{\"id\":\"SenderRegion\",\"label\":\"State\",\"labelMarkups\":[],\"inputType\":\"select\",\"options\":[{\"id\":\"AL\",\"label\":\"Alabama\"},{\"id\":\"AK\",\"label\":\"Alaska\"},{\"id\":\"AS\",\"label\":\"American Samoa\"},{\"id\":\"AZ\",\"label\":\"Arizona\"},{\"id\":\"AR\",\"label\":\"Arkansas\"},{\"id\":\"CA\",\"label\":\"California\"},{\"id\":\"CO\",\"label\":\"Colorado\"},{\"id\":\"CT\",\"label\":\"Connecticut\"},{\"id\":\"DE\",\"label\":\"Delaware\"},{\"id\":\"DC\",\"label\":\"District of Columbia\"},{\"id\":\"FL\",\"label\":\"Florida\"},{\"id\":\"GA\",\"label\":\"Georgia\"},{\"id\":\"GU\",\"label\":\"Guam\"},{\"id\":\"HI\",\"label\":\"Hawaii\"},{\"id\":\"ID\",\"label\":\"Idaho\"},{\"id\":\"IL\",\"label\":\"Illinois\"},{\"id\":\"IN\",\"label\":\"Indiana\"},{\"id\":\"IA\",\"label\":\"Iowa\"},{\"id\":\"KS\",\"label\":\"Kansas\"},{\"id\":\"KY\",\"label\":\"Kentucky\"},{\"id\":\"LA\",\"label\":\"Louisiana\"},{\"id\":\"ME\",\"label\":\"Maine\"},{\"id\":\"MD\",\"label\":\"Maryland\"},{\"id\":\"MA\",\"label\":\"Massachusetts\"},{\"id\":\"MI\",\"label\":\"Michigan\"},{\"id\":\"MN\",\"label\":\"Minnesota\"},{\"id\":\"MS\",\"label\":\"Mississippi\"},{\"id\":\"MO\",\"label\":\"Missouri\"},{\"id\":\"MT\",\"label\":\"Montana\"},{\"id\":\"NE\",\"label\":\"Nebraska\"},{\"id\":\"NV\",\"label\":\"Nevada\"},{\"id\":\"NH\",\"label\":\"New Hampshire\"},{\"id\":\"NJ\",\"label\":\"New Jersey\"},{\"id\":\"NM\",\"label\":\"New Mexico\"},{\"id\":\"NY\",\"label\":\"New York\"},{\"id\":\"NC\",\"label\":\"North Carolina\"},{\"id\":\"ND\",\"label\":\"North Dakota\"},{\"id\":\"MP\",\"label\":\"Northern Mariana Islands\"},{\"id\":\"OH\",\"label\":\"Ohio\"},{\"id\":\"OK\",\"label\":\"Oklahoma\"},{\"id\":\"OR\",\"label\":\"Oregon\"},{\"id\":\"PW\",\"label\":\"Palau\"},{\"id\":\"PA\",\"label\":\"Pennsylvania\"},{\"id\":\"PR\",\"label\":\"Puerto Rico\"},{\"id\":\"RI\",\"label\":\"Rhode Island\"},{\"id\":\"SC\",\"label\":\"South Carolina\"},{\"id\":\"SD\",\"label\":\"South Dakota\"},{\"id\":\"TN\",\"label\":\"Tennessee\"},{\"id\":\"TX\",\"label\":\"Texas\"},{\"id\":\"UT\",\"label\":\"Utah\"},{\"id\":\"VT\",\"label\":\"Vermont\"},{\"id\":\"VI\",\"label\":\"Virgin Islands\"},{\"id\":\"VA\",\"label\":\"Virginia\"},{\"id\":\"WA\",\"label\":\"Washington\"},{\"id\":\"WV\",\"label\":\"West Virginia\"},{\"id\":\"WI\",\"label\":\"Wisconsin\"},{\"id\":\"WY\",\"label\":\"Wyoming\"}],\"groupId\":\"address\",\"rules\":{\"maxLength\":40,\"required\":true},\"readonly\":false,\"itemType\":\"field\"},{\"id\":\"SenderPostalCode\",\"label\":\"Zip Code\",\"labelMarkups\":[],\"inputType\":\"string\",\"groupId\":\"address\",\"rules\":{\"required\":true,\"regex\":\"^(?:\\\\d{5}\\\\-\\\\d{4}|\\\\d{5}|)$\",\"regexFailureMessage\":\"The 5-digit or 9-digit postal code must follow this format: 12345 or 12345-1234\"},\"readonly\":false,\"itemType\":\"field\"}]}}"),
    translations: JSON.parse("{\"enterAddressManually\":\"Enter address manually\",\"lookup\":\"Look up my address\",\"placeholder\":\"Start typing your address\",\"keepTyping\":\"Keep typing your address to see more results\",\"lookupHint\":\"Don't you see your address?\",\"enterManually\":\"Enter it manually\",\"foundMatches\":\"We found {{MATCHES}} matches for your address\",\"addressCount\":\"{{COUNT}} addresses\",\"addressCountry\":\"Your address must be in the {{COUNTRY_NAME}}\"}"),
    group: { fields: [] },
    lookupResult: { isContainer: false, addresses: [] },
}

const form = ctx => {
    console.log({ dummyProps })
    let id = `root=${ctx.id}`;
    id += ctx.builder ? 'builder' : 'preview';

    const component = (
        <AddressLookupUIPatterns 
            {...dummyProps}
            searchAddress={async () => console.log(await ctx.addressSearch())}
        />
    )

    setTimeout(() => {
        const element = document.getElementById(id);
        try {
            ReactDOM.render(component, element)
        } catch (e) {
            console.error(e);
        }
    });

    return `<div id="${id}">${renderToStaticMarkup(component)}</div>`;
}

export default {form};

