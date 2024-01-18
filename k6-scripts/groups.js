import http from 'k6/http';
import { sleep, group, check } from 'k6';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<250'],
        'group_duration{group:::Main page}': ['p(95)<9000'],
        'group_duration{group:::Main page::Assets}': ['p(95)<3000'],
        'group_duration{group:::News page}': ['p(95)<6000']
    }
}

export default function () {

    group('Main page', function () {
        let res = http.get('https://run.mocky.io/v3/9f6bd18c-29b7-4b92-8218-bfe5f9cd464f?mocky-delay=900ms');
        check(res, { 'status is 200': (r) => r.status === 200 });
    
        group('Assets', function () {
            http.get('https://run.mocky.io/v3/9f6bd18c-29b7-4b92-8218-bfe5f9cd464f?mocky-delay=900ms');
            http.get('https://run.mocky.io/v3/9f6bd18c-29b7-4b92-8218-bfe5f9cd464f?mocky-delay=900ms');
        });
    });


    group('News page', function () {
        http.get('https://run.mocky.io/v3/9f6bd18c-29b7-4b92-8218-bfe5f9cd464f?mocky-delay=5000ms');
    });

    sleep(1);
}
