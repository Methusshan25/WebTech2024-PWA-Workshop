console.log("Service Worker geladen!");

self.addEventListener("install", () => {
    console.log("Install aufgerufen");
})

self.addEventListener("activate", () => {
    console.log("Activate aufgerufen");
})