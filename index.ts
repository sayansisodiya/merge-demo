import { token } from './constants';

function processData(data: string): string {
    if (token === 'production') {
        return `PRODUCTION MODE: ${data.toUpperCase()}`;
    } else if (token === 'staging') {
        return `STAGING MODE: ${data}`;
    } else {
        return `DEVELOPMENT MODE: ${data.toLowerCase()}`;
    }
}

console.log(processData('Sample Text'));
console.log(`Current environment: ${token}`);
