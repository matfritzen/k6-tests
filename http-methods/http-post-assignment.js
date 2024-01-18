import http from 'k6/http';
import { check } from 'k6';


// --------------------------------------------
//  To debug a request execution, run the parameter --http-debug="full" on the k6 CLI
// --------------------------------------------


export default function () {

    const credentials = JSON.stringify({
        username: 'test_1705410661937',
        password: 'test'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const res = http.post('https://test-api.k6.io/auth/token/login/', credentials, params);

    console.log(res.json().access)
}