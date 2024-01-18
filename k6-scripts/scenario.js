import http from 'k6/http';
import {check} from 'k6';
import {sleep} from 'k6';
import exec from 'k6/execution';

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<400', 'max<2000'],
        http_req_failed: ['rate<0.01'], // The rate metric value is 0 to 1, like 1 for 100%, 0.1 for 10%, 0.01% for 1%
        http_reqs: ['count>20', 'rate>4'],
        vus: ['value>9'],
        checks:['rate >= 0.98']
    }
}

export default function() {
    const res = http.get('https://test.k6.io/' + (exec.scenario.iterationInTest === 1 ? 'foo' : ''))
    check(res, {
        'status is 200' : (r) => r.status === 200,
        'page is expected' : (r) => r.body.includes('Collection of simple web-pages suitable for load testing.')
    })
    sleep(2);
}