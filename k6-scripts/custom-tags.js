import http from 'k6/http';
import {Counter} from 'k6/metrics';
import {check,sleep} from 'k6';

export const options = {
    thresholds: {
        http_req_duration: ['p(95) < 500'],
        'http_req_duration{page:order}': ['p(95) < 500'],
        http_errors: ['count==0'],
        'http_errors{page:order}': ['count==0'],
        checks: ['rate>=0.99'],
        'checks{page:order}': ['rate>=0.99']
    }
}

let httpErrors = new Counter('http_errors');

export default function() {
    let res = http.get('https://run.mocky.io/v3/6b267b1c-7811-4097-a65f-0174f3b4e877'); //200

    if (res.error) {
        httpErrors.add(1);
    }

    check(res, 
    {
        'status is 200': (r) => r.status === 200
    },
    {
        page: 'order'
    }
    )

    res = http.get(
        'https://run.mocky.io/v3/9f6bd18c-29b7-4b92-8218-bfe5f9cd464f?mocky-delay=2000ms',
        {
            tags: {
                page: 'order'
            }
        }
        
        ); //201

    if (!res.error) {
        httpErrors.add(1,
        {
            page: 'order'
        });
    }


    check(res, {
        'status is 201': (r) => r.status === 201
    })

    sleep(1);

}