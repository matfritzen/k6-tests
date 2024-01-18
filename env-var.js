import http from 'k6/http';

// --------------------------------------------------------------------------

// You setup the envrionment variable in the CLI with the parameter -e 

// For example:
// k6 run -e BASE_URL=https://test-api.k6.io env-var.js

// --------------------------------------------------------------------------



export default function () {

    http.get(`${__ENV.BASE_URL}/public/crocodiles/`);
}