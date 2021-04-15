import 'regenerator-runtime/runtime';
import {AbstractIpGeolocation} from '../src'
const mocks = require('./mocks.js')

function mockFetch(status, data) {
    const xhrMockObj = {
        open: jest.fn(),
        send: jest.fn(),
        setRequestHeader: jest.fn(),
        onreadystatechange: jest.fn(),
        readyState: 4,
        status,
        responseText: JSON.stringify(data),
    };

    const xhrMockClass = () => xhrMockObj;

    global.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

    setTimeout(() => {
        xhrMockObj.onreadystatechange();
    }, 0);
}

test('Should throw error when no key is configured', () => {
    let thrownError;
    try {
        AbstractIpGeolocation.look_up('1.2.3.4')
    }
    catch(error) {
        thrownError = error;
    }

    let expectedErrorObj = new Error('No api key is set.');
    expect(thrownError).toEqual(expectedErrorObj);
});

test('Request OK when everything is set up correctly', async () => {
    mockFetch(200, mocks);

    AbstractIpGeolocation.configure('API_KEY');
    let response = await AbstractIpGeolocation.look_up('166.171.248.255')
    expect(response.ip_address).toBe('166.171.248.255')
});