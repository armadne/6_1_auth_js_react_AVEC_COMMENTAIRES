// Importation des modules nécessaires depuis les bibliothèques React
import React, { useState } from 'react';
// Importation du module ReactDOM pour rendre l'application dans le DOM
import ReactDOM from 'react-dom';

// Définition du composant principal de l'application
const App = () => {
  // Déclaration des états locaux pour le nom d'utilisateur, le mot de passe, l'état de connexion et l'état de création de compte
  const [username, setUsername] = useState(''); // État local pour stocker le nom d'utilisateur
  const [password, setPassword] = useState(''); // État local pour stocker le mot de passe
  
  //ici on met false en parametre pour que quand on lance la page logg In les champs restent vide
  const [loggedIn, setLoggedIn] = useState(false); // État local pour indiquer si l'utilisateur est connecté ou non

  //ici on met false en parametre pour que quand on lance la page Creer un Compte les champs restent vide
  const [accountCreated, setAccountCreated] = useState(); // État local pour indiquer si un compte a été créé ou non
  const [createdUsername, setCreatedUsername] = useState(''); // État local pour stocker le nom d'utilisateur créé
  const [createdPassword, setCreatedPassword] = useState(''); // État local pour stocker le mot de passe créé

  // Fonction de gestion de la connexion
  const handleLogin = () => {
    // Vérification si le compte existe et si les informations de connexion sont correctes
    if (accountCreated && username === createdUsername && password === createdPassword) {
      // Si les informations sont correctes, définir loggedIn à true et afficher un message de réussite
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      // Si les informations sont incorrectes, afficher un message d'erreur
      alert('Invalid username or password.');
    }
  };

  // Fonction de gestion de la création de compte
  const handleCreateAccount = () => {
    // Vérification si les champs sont remplis
    if (username && password) {
      // Si les champs sont remplis, définir accountCreated à true et stocker les informations du compte
      setAccountCreated(true); // redirection vers la page logg In 
      setCreatedUsername(username);
      setCreatedPassword(password);
      alert('Account created successfully!');
    } else {
      // Si les champs ne sont pas remplis, afficher un message d'erreur
      alert('Please enter a username and password.');
    }
  };

  // Fonction de gestion de la déconnexion
  const handleLogout = () => {
    // Déconnexion de l'utilisateur en définissant loggedIn à false et en affichant un message de déconnexion réussie
    setLoggedIn();
    alert('Logged out successfully.');
  };

  // Rendu de l'interface utilisateur
  return (
    <div>
      {/* Si l'utilisateur est connecté, afficher un message de bienvenue et un bouton de déconnexion */}
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // Si l'utilisateur n'est pas connecté, afficher les champs de saisie du nom d'utilisateur et du mot de passe et des boutons de connexion et de création de compte
        <div>
          {!accountCreated ? (
            // Si le compte n'est pas encore créé, afficher les champs pour créer un compte
            <div>
              <h2>Create Account</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={handleCreateAccount}>Create Account</button>
            </div>
          ) : (
            // Si le compte est déjà créé, afficher les champs pour se connecter
            <div>
              <h2>Login Ou Raffraichir la page pour creer un Compte</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={handleLogin}>Login</button>
             
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Rendu du composant App dans l'élément avec l'ID 'root' du DOM
ReactDOM.render(<App />, document.getElementById('root'));
