import 'regenerator-runtime/runtime';
import {AbstractIpGeolocation} from '../src'

const API_KEY = process.env.IP_GEOLOCATION_API_KEY;

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
    AbstractIpGeolocation.configure(API_KEY);
    let response = await AbstractIpGeolocation.look_up('166.171.248.255')
    expect(response.ip_address).toBe('166.171.248.255')
});