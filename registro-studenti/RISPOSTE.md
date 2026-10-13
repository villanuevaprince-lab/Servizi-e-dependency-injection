# Risposte

1. app.routes.ts definisce le route: /home → Home, /elenco → Elenco, /inserimento → Inserimento, /elenco/:id → DettaglioStudente, /modifica/:id → ModificaStudente; la radice reindirizza a /home.
2. Un service contiene dati e logica condivisi. Gli studenti sono nel servizio così tutte le pagine lavorano sullo stesso stato.
3. L'id si legge da paramMap e si converte con Number perché i parametri URL sono stringhe.
4. dati è privato per impedire modifiche dirette; studenti è readonly. Altrimenti un componente potrebbe sostituire lo stato senza rispettare le regole del servizio.
5. Si usa massimo id + 1. Se restano id 1,3,4,5, il numero di studenti + 1 sarebbe 5, già esistente; il massimo + 1 è 6.
6. ngModel aggiorna filtroClasse; il computed filtrati si ricalcola e Angular aggiorna la tabella.
7. #modulo="ngForm" espone lo stato del form; modulo.invalid disabilita Salva se mancano campi obbligatori o la media è fuori 1-10.
8. router.navigate viene eseguito come conseguenza del salvataggio, senza richiedere un link cliccato dall'utente.
9. StudenteCard ha input studente e azioni, e output rimosso. Emette un evento così il padre decide cosa fare e la card resta riutilizzabile.
10. paramMap.subscribe reagisce anche quando cambia solo l'id mantenendo lo stesso componente. Con snapshot l'URL cambierebbe ma la scheda potrebbe restare sul vecchio studente.
