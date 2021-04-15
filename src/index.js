import * as core from '@abstractapi/javascript-core';

export class AbstractIpGeolocation {
    static apiKey;

    static configure = (apiKey) => {
        this.apiKey = apiKey;
    }

    static look_up = (ipAddress) => {
        let ipAddressParam = '';

        if (ipAddress) {
            ipAddressParam = `ip_address=${ipAddress}`
        }

        return core.makeApiCall('ipgeolocation', this.apiKey, ipAddressParam)
    };
}
