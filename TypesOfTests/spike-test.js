import http from 'k6/http';
import { sleep } from 'k6'

export const options = {
    stages: [
        {
            // Add 4x the amount of the VUs in the stress tests as the SPIKE TEST
            duration: '2m',
            // target: 4000 // NOT RUN THIS SCENARIO, IT IS JUST AN EXAMPLE OF SPIKE TEST
        },
        {
            // Decrease all the users to 0 rumping down in 10 seconds
            duration: '1m',
            target: 0
        }
    ]
}

export default function() {
    http.get('https://test.k6.io');
    sleep(1);
}