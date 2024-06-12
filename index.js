document.getElementById('submissionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const code = document.getElementById('code').value;

    const payload = {
        username: username,
        password: password,
        code: code
    };

    try {
        const response = await axios.post('https://bb3a-118-218-37-245.ngrok-free.app/submission', payload);

        console.log('Response status:', response.status);
        console.log('Response data:', response.data);

        if (response.status === 200 || response.status === 201) {
            alert('Submission successful! Reservation number: ' + response.data.id);
        } else {
            alert('Submission failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        if (error.response) {
            // 서버에서 응답을 받았으나 2xx 범위가 아닌 경우
            alert('Submission failed! ' + error.response.data.detail);
        } else {
            // 요청을 보내지 못했거나 기타 오류 발생
            alert('Submission failed! Unable to connect to the server.');
        }
    }
});
