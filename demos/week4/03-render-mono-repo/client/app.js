async function getMessage() {
  const response = await fetch(
    "https://mono-repo-client-2kqz.onrender.com/message"
  );

  const message = await response.json();

  const app = document.getElementById("app");
  app.textContent = message;
}

getMessage();
