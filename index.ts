import { ALPHA } from './constants';

function processData(data: string): string {
    if (ALPHA === 'production') {
        return `PRODUCTION MODE: ${data.toUpperCase()}`;
    } else if (ALPHA === 'staging') {
        return `STAGING MODE: ${data}`;
    } else {
        return `DEVELOPMENT MODE: ${data.toLowerCase()}`;
    }
}

console.log(processData('Sample Text'));
console.log(`Current environment: ${ALPHA}`);