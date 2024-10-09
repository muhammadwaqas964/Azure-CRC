async function getVisitorCount() {
    try {
        const response = await fetch('https://waqascanadacentral.azurewebsites.net/api/http_triggerwaqas?code=aAvU8coR4pCv9TbrTjCyhxa_pYt3hiEInvRLQRr1kl_yAzFuZQl7tw%3D%3D'); // Replace with your actual API URL
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        console.log('Full API Response:', data); // Log full response for debugging
        return data.visitor_count; // Access the visitor_count from the JSON response
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        return null;
    }
}

async function updateVisitorCount() {
    const currentCount = await getVisitorCount();
    if (currentCount !== null) {
        document.getElementById('counter').innerText = currentCount; // Update the displayed count
    } else {
        document.getElementById('counter').innerText = 'Unable to retrieve visitor count at the moment.';
    }
}

// Call this function on page load or at intervals
document.addEventListener('DOMContentLoaded', () => {
    updateVisitorCount();
    setInterval(updateVisitorCount, 60000); // Update every minute
});