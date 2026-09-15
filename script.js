document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('url-input');
    const button = document.getElementById('shorten-btn');
    const resultArea = document.getElementById('result-area');
    const shortLink = document.getElementById('short-link');
    const errorMessage = document.getElementById('error-message');

    const API_URL = 'http://localhost:3000';

    const showError = (text) => {
        errorMessage.textContent = text;
        errorMessage.classList.remove('hidden');
        resultArea.classList.add('hidden');
    };

    const hideError = () => {
        errorMessage.classList.add('hidden');
    };

    button.addEventListener('click', async () => {
        const originalUrl = input.value.trim();
        hideError();
        if (!originalUrl) {
            return showError('Enter the URL!');
        }

        button.textContent = 'Shortening the URL...';
        button.disabled = true;

        try {
            const response = await fetch(`${API_URL}/shorten`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: originalUrl })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || data.error || 'Server Error');
            }

            shortLink.textContent = data.shortedURL;
            shortLink.href = data.shortedURL;
            resultArea.classList.remove('hidden');

        } catch (error) {
            showError(error.message);
        } finally {
            button.textContent = 'Shorten';
            button.disabled = false;
        }
    });
});