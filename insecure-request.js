import http from 'k6/http';
import { sleep } from 'k6';


// --------------------------------------------
//  To bypass insecure requests, it's just run the command : k6 run test-file.js --insecure-skip-tls-verify

//  Otherwise will be displayed as failed request in the result metrics.
// --------------------------------------------

export default function () {
    http.get('https://self-signed.badssl.com/');
    sleep(1);
}
