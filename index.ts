import { token } from './constants';

function getAuthHeader(token: string): string {
    if (token.includes(':')) {
        // Legacy system expects raw token with colons removed
        return token.replace(/:/g, '');
    } else {
        // Modern system expects Bearer-prefixed JWT-style token
        return `Bearer ${token}`;
    }
}

async function callApi(token: string) {
    const authHeader = getAuthHeader(token);

    const response = await fetch('https://api.example.com/data', {
        method: 'GET',
        headers: {
            Authorization: authHeader,
        },
    });

    if (!response.ok) {
        console.error('API call failed with status:', response.status);
    }
}

callApi(token);
