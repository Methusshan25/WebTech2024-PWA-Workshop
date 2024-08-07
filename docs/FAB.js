// Ignore this part
console.info('FAB.js loaded')

let installFABButton;
let installFABButtonWrapper;

window.addEventListener('load', () => {
    installFABButton = document.getElementById('installFABButton');
    installFABButtonWrapper = document.getElementById('installFABWrapper');
})

/**
 * Shows the "install" button and registers a click event listener which will trigger installing using on the passed Event
 *
 * @param event
 */
function showInstallButton(event) {
    installFABButtonWrapper.style.display = 'block';
    installFABButton.addEventListener('click', async () => {
        if (!event) return;

        const result = await event.prompt();
        if (result.outcome === 'accepted') {
            alert('Installation wurde akzeptiert 🥳');
            installFABButtonWrapper.style.display = 'none';
        } else {
            alert('Installation wurde abgelehnt 😟');
            installFABButton.innerHTML = '😭';
            installFABButtonWrapper.title = 'Installation wurde abgelehnt 😢'
        }
    });
}

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    showInstallButton(event);
})

// Start implementing here:
// TODO: Implement a `beforeinstallprompt` event listener which prevents the default browser behaviour
//       and shows our custom install button instead by calling the `showInstallButton` function with the captured event
