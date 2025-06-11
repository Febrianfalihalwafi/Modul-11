document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Cek jika input kosong
        if (username === '' || password === '') {
            showMessage('Username and password cannot be empty.', 'error');
        } 
        // Login berhasil jika sesuai
        else if (username === 'Febrian' && password === '12345') {
            showMessage('Login successful!', 'success');
            setTimeout(() => {
                alert('Welcome, user!');
            }, 1500);
        } 
        // Jika tidak cocok
        else {
            showMessage('Invalid username or password.', 'error');
        }
    });

    function showMessage(msg, type) {
        messageDiv.textContent = msg;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';

        setTimeout(() => {
            messageDiv.style.display = 'none';
            messageDiv.textContent = '';
            messageDiv.className = 'message';
        }, 3000);
    }
});
