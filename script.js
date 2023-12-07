document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Hier sollte die Überprüfung der eingegebenen Benutzerdaten erfolgen
  if (username === 'alex' && password === '123456') {
    // Wenn die Benutzerdaten korrekt sind, leite zur Bildupload-Seite weiter
    window.location.href = 'bildupload.html'; // Ändere 'bildupload.html' zur tatsächlichen Upload-Seite
  } else {
    alert('Ungültige Anmeldeinformationen. Bitte versuche es erneut.');
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const imageUrl = urlParams.get('image');

  if (imageUrl) {
    // Hier kannst du die Logik für das Hochladen des Bildes implementieren
    // Beispiel: Hier wird die URL des Bildes in der Konsole ausgegeben
    console.log('Bild hochgeladen von URL:', imageUrl);
    // Füge die Logik für das Hochladen des Bildes hinzu
    // Zum Beispiel könntest du AJAX verwenden, um das Bild hochzuladen
    // Hier ist ein Beispiel mit fetch():
    fetch(imageUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.blob();
      })
      .then(blob => {
        // Hier hast du das Bild als Blob, und du kannst es weiterverarbeiten
        // Beispiel: Zeige das Bild in einer Image-Tag auf der Seite an
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(blob);
        document.body.appendChild(imageElement);

        // Hier könntest du auch die Logik für das Hochladen des Bildes auf deinen Server einfügen
        // Du müsstest den Blob an deinen Server senden und dort verarbeiten
      })
      .catch(error => {
        console.error('There was a problem with fetching the image:', error);
      });
  }
});
