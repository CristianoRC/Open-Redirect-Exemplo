document.getElementById("login-form").addEventListener("submit", login);

function login(event) {
    event.preventDefault();
    RedirectToPageAfterLogin();
}

function RedirectToPageAfterLogin() {
    const parameters = new URLSearchParams(window.location.search);
    const redirectToPage = parameters.get('redirectTo');
    window.location.href = getUrlById(redirectToPage);
}

function getUrlById(id) {
    if (id === "home")
        return "/Sem-Falha/home.html"
    return "";
}