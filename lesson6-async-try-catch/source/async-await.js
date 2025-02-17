async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            switch (Math.floor(response.status / 100)) {
                case 3:
                    throw new Error(`Redirection error! Status: ${response.status}`);
                case 4:
                    throw new Error(`Client error! Status: ${response.status}`);
                case 5:
                    throw new Error(`Server error! Status: ${response.status}`);
                default:
                    throw new Error(`Unexpected HTTP error. Status: ${response.status}`);
            }
        }
        const data = await response.json();
        printData(data);
        printUserId(data);
    } catch (error) {
        console.error(`Fetch error:`, error);
    }
}

function printData(data) {
    console.log(`Received JSON:`, data);
}

function printUserId(data) {
    console.log(`userId:`, data.userId);
}

(async () => {
    try {
        await fetchData('https://jsonplaceholder.typicode.com/todos/2');
    } catch (error) {
        console.error('Error during execution:', error);
    }
})();
