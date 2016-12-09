// This const set the default apiUrl for the application.
export const apiUrl = 'http://yoursite/wp-json/wp/v2'

// This is the application id on Wordpress panel.
export const apiAppUsername = 'applicazione'

// This is the application password on Wordpress panel.
export const apiAppPassword = 'AoOHeYI2JZ96zKs)Lr)0AYER'

// This const set the default pagination number of posts on application views.
export const postsPagination = 10

// This const set the default pagination number of comments on application views.
export const postCommentsPagination = 3

// Alerts configurations.
export const alertsMessages = {
  connectionError: {
    title: 'Errore di connessione',
    message: 'Sembrano esserci dei problemi con la connessione al sito. Ti preghiamo di verificare di essere connesso a internet o di riprovare più tardi.'
  },
  noInputCompleted: {
    title: 'Dati non corretti',
    message: 'I dati inseriti non risultano completi. Ti preghiamo di compilare tutti i campi per proseguire.'
  },
  loginResult: {
    titlePositive: 'Login avvenuto con successo',
    messagePositive: "Ora potrai accedere a tutte le funzionalità dell'applicazione.",
    titleNegative: 'Login non avvenuto con successo',
    messageNegative: "Ti preghiamo di ricontrollare i dati inseriti. Se il problema rimane ti preghiamo di contattare l'assistenza."
  },
  signupResult: {
    titlePositive: 'Registrazione avvenuta con successo',
    messagePositive: "Ora potrai accedere a tutte le funzionalità dell'applicazione.",
    titleNegative: 'Registrazione non avvenuta con successo',
    messageNegative: "Ti preghiamo di ricontrollare i dati inseriti. Se il problema rimane ti preghiamo di contattare l'assistenza."
  }
}
