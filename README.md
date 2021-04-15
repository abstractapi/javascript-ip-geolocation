# AbstractAPI javascript-ip-geolocation library

Integrate the powerful [IP Geolocation API from Abstract](https://www.abstractapi.com/ip-geolocation-api) in your Javascript or NodeJS project in a few lines of code.

Abstract's IP Geolocation API is a fast, lightweight, modern, and RESTful JSON API allowing you to look up the location, timezone, country details, and more of an IPv4 or IPv6 address.

It's very simple to use: you only need to submit your API key and an IP address, and the API will respond with an assessment of its geographical location, as well as additional details like the timezone, if it's a VPN address, and more.

Validating and verifying IP addresses is a critical step to reducing the chances of low-quality data and fraudulent or risky users in your website or application.

# Documentation

## Installation

You can install **javascript-ip-geolocation** via npm, from our CDN, or download the source into your project.

### ES6

Download and install the library from npm:

```
npm install javascript-ip-geolocation --save
```

In your project, import it and configure your `API_KEY`:

```js
import {AbstractIpGeolocation} from 'javascript-ip-geolocation'

AbstractIpGeolocation.configure('API_KEY')
```

### Browser, from the built file

You can build the library yourself, or get the already built file from the `dist` directory and load it:

```js
<script src="dist/javascript-ip-geolocation.js"></script>
<script>
    AbstractIpGeolocation.configure('API_KEY');

    // use the library
</script>
```

## API key

Get your API key for free and without hassle from the [Abstact website](https://app.abstractapi.com/users/signup?target=/api/ip-geolocation/pricing/select).

## Quickstart

AbstractAPI **javascript-ip-geolocation** library returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) so you can use one of the following approaches:

### Async/Await

```js
async function validateIP(ipAddress) {
  let response = await AbstractIpGeolocation.look_up(ipAddress);
  console.log(response);
}
```

### Using .then()

```js
function validateIP(ipAddress) {
  AbstractIpGeolocation.look_up(ipAddress)
    .then(response => {
        console.log(response);
    })
}
```

## API response

The API response contains the following fields:

| PARAMETER | TYPE | DETAILS |
| - | - | - |
| Parameter | Type | Details |
| ip_address | String | The requested IP address |
| city | String | City's name. |
| city_geoname_id | String | City's geoname ID. |
| region | String | State or province in which the the city is located. |
| region_iso_code | Char[2] | State or province's ISO 3166-2 code. |
| region_geoname_id | String | State or province's geoname ID. |
| postal_code | String | ZIP or postal code. |
| country | String | Country's name. |
| country_code | Char[2] | Country's ISO 3166-1 alpha-2 code. |
| country_geoname_id | String | Country's geoname ID. |
| country_is_eu | Boolean | True if the country is in the EU, false if it is not. |
| continent | String | Continent's name. |
| continent_code | Char[2] | 2 letter continent code: AF, AS, EU, NA, OC, SA, AN |
| continent_geoname_id | String | Continent's geoname ID. |
| longitude | Float | Decimal of the longitude. |
| latitude | Float | Decimal of the latitude. |
| security > is_vpn | Boolean | Whether the IP address is using from a VPN or using a proxy |
| timezone > name | String | Timezone's name from the IANA Time Zone Database. |
| timezone > abbreviation | String | Timezone's abbreviation, also from the IANA Time Zone Database. |
| timezone > gmt_offset | String | Timezone's offset from Greenwich Mean Time (GMT). |
| timezone > current_time | String | Current time in the local time zone. |
| timezone > is_dst | Boolean | True if the location is currently in Daylight Savings Time (DST). |
| flag > svg | String | Link to a hosted version of the country's flag in SVG format. |
| flag > png | String | Link to a hosted version of the country's flag in PNG format. |
| flag > emoji | String | Country's flag as an emoji. |
| flag > unicode | String | Country's flag in unicode. |
| currency > currency_name | String | The currency's name. |
| currency > currency_code | String | The currency's code in ISO 4217 format. |
| connection > connection_type | String | Type of network connection: Dialup, Cable/DSL, Cellular, Corporate |
| connection > autonomous_system_number | Uint32 | Autonomous System number |
| connection > autonomous_system_organization | String | Autonomous System Organization name. |
| connection > isp_name | String | Internet Service Provider (ISP) name. |
| connection > organization_name | String | Organization name. |

## Detailed documentation

You will find additional information and request examples in the [Abstract help page](https://app.abstractapi.com/api/ip-geolocation/documentation).

## Getting help

If you need help installing or using the library, please contact [Abstract's Support](https://app.abstractapi.com/api/ip-geolocation/support).

For bug report and feature suggestion, please use [this repository issues page](https://github.com/abstractapi/javascript-ip-geolocation/issues).

# Contribution

Contributions are always welcome, as they improve the quality of the libraries we provide to the community.

Please provide your changes covered by the appropriate unit tests, and post them in the [pull requests page](https://github.com/abstractapi/javascript-ip-geolocation/pulls).

## NPM

### Installation

Run `npm install` in the command line to install the dependencies. To update those dependencies you need to run `npm update`.

### Building

To build the library and generate the minified file in the *dist* directory, you need to run `npm run build`.

To build the lib, you need to run `npm run build:lib`.

### Test

To run the test suite, you need to run: `npm run test`.

