async function fetchDataWithFallback(primaryUrl, secondaryUrl) {
    try {
        const response = await fetch(primaryUrl);

        if (!response.ok) {
            throw new Error(`Primary request failed with status ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.log(`Primary request failed: ${error.message}. Trying fallback.`);
        try {
            const fallbackResponse = await fetch(secondaryUrl);

            if (!fallbackResponse.ok) {
                throw new Error(`Secondary request failed with status ${fallbackResponse.status}`);
            }

            return fallbackResponse.json();
        } catch (fallbackError) {
            throw new Error(`Secondary request failed. Error: ${fallbackError.message}`);
        }
    }
}

const primaryUrl = 'https://this-api-does-not-exist.com/data';
const secondaryUrl = 'https://jsonplaceholder.typicode.com/todos/2';

fetchDataWithFallback(primaryUrl, secondaryUrl)
    .then((data) => console.log('Final response:', data))
    .catch((error) => console.error('Final error:', error.message));
    
