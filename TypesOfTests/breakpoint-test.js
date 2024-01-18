import http from 'k6/http';
import { sleep } from 'k6'

export const options = {
    stages: [
        {
            // Add the amount of VUs that the system will not be able to handle
            duration: '2h',
            target: 10000 // NOT RUN THIS SCENARIO, IT IS JUST AN EXAMPLE OF SPIKE TEST
        }
    ]
}

export default function() {
    http.get('https://test.k6.io');
    sleep(1);
}