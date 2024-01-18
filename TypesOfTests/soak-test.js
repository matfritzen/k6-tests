import http from 'k6/http';
import { sleep } from 'k6'

// --------------------------------------------------------------------------

// The Soak test is used to test the endurance of the system, to check if the system can handle
// a certain amount of users for a long period of time.

// --------------------------------------------------------------------------




export const options = {
    stages: [
        {
            // Add 10 users rumping up in 10 seconds
            duration: '5m',
            target: 10
        },
        {
            // Keep 10 users for 30 seconds
            duration: '24h',
            target: 10
        },
        ,
        {
            // Decrease all the users to 0 rumping down in 10 seconds
            duration: '5m',
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