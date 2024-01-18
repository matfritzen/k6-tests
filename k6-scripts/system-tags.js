import http from 'k6/http';

export const options = {
    thresholds: {
        http_req_duration: ['p(95) < 1000'],
        'http_req_duration{status:200}': ['p(95) < 1000'],
        'http_req_duration{status:201}': ['p(95) < 1000']
    }
}

export default function() {
    http.get('https://run.mocky.io/v3/6b267b1c-7811-4097-a65f-0174f3b4e877'); //200

    http.get('https://run.mocky.io/v3/9f6bd18c-29b7-4b92-8218-bfe5f9cd464f?mocky-delay=2000ms'); //201
}