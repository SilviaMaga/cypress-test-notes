// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './gui-commands/login-commands';
import './gui-commands/note-commands';
import './gui-commands/create-note.commands';
import './gui-commands/edit-note.commands';
import './gui-commands/delete-note.commands';
import './gui-commands/api-commands/login-api.commands';
import './gui-commands/api-commands/note-api.commands';
import './gui-commands/api-commands/edit-note-api.commands';
import './gui-commands/api-commands/delete-note.commands';
import './gui-commands/api-commands/create-note.commands';
// Alternatively you can use CommonJS syntax:
// require('./commands')