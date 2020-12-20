document.getElementById("login-form").addEventListener("submit", login);

function login(event) {
    event.preventDefault();
    RedirectToPageAfterLogin();
}

function RedirectToPageAfterLogin() {
    const parameters = new URLSearchParams(window.location.search);
    const redirectTo = parameters.get('redirectTo');
    window.location.href = redirectTo;
}