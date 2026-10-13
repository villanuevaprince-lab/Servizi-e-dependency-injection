# Risposte alle domande di verifica

1. Il messaggio spariva perché cambiando pagina il router distrugge il componente. Lo stato condiviso va conservato in un servizio.
2. Un servizio è una classe TypeScript con dati e logica condivisi. Esempi: ordine/carrello e utente autenticato.
3. Il comando crea il file del servizio nella cartella services e il relativo test; la classe usa il nome CarrelloService. Il suffisso evita confusione con modelli o componenti.
4. @Service() e @Injectable({ providedIn: 'root' }) rendono disponibile un'unica istanza condivisa. Con @Injectable() senza provider può comparire NG0201.
5. Singleton significa una sola istanza per l'app. Un console.log nel costruttore, navigando più volte, compare una sola volta.
6. È come un banco prestiti: i componenti chiedono una risorsa comune e Angular consegna loro la stessa istanza.
7. Con new OrdineService() ogni componente avrebbe una copia diversa e i dati non sarebbero condivisi.
8. Si può usare inject(OrdineService) oppure la constructor injection. La dispensa indica inject() come forma utilizzabile anche dentro un servizio @Service().
9. asReadonly() permette di leggere il signal ma impedisce set e update ai componenti, obbligandoli a usare i metodi del servizio.
10. `aggiorna(id:number, nuovoPrezzo:number){ this.piatti.update(lista => lista.map(p => p.id===id ? {...p, prezzo:nuovoPrezzo} : p)); }`
11. F5 riavvia l'app e quindi lo stato in memoria. Per conservarlo si può usare localStorage oppure un server/database.
12. Cambia principalmente il servizio, che può caricare il menu via HTTP; i componenti possono continuare a leggere signal e chiamare metodi. Questa separazione riduce l'accoppiamento.
