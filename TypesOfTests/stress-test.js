import http from 'k6/http';
import { sleep } from 'k6'

// --------------------------------------------------------------------------

// The Stress test should be run only after the completion of the Load test

// --------------------------------------------------------------------------


export const options = {
    stages: [
        {
            // Add 1000 users rumping up in 10 seconds
            duration: '10s',
            target: 1000
        },
        {
            // Keep 1000 users for 30 seconds
            duration: '30s',
            target: 1000
        },
        ,
        {
            // Decrease all the users to 0 rumping down in 10 seconds
            duration: '10s',
            target: 0
        }
    ]
}

export default function() {
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}