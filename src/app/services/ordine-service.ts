import { Injectable, computed, signal } from '@angular/core';
import { Piatto, RigaOrdine } from '../modelli/piatto';
@Injectable({providedIn:'root'})
export class OrdineService {
 private readonly righe=signal<RigaOrdine[]>([]);
 readonly elenco=this.righe.asReadonly();
 readonly numeroPezzi=computed(()=>this.righe().reduce((s,r)=>s+r.quantita,0));
 readonly totale=computed(()=>this.righe().reduce((s,r)=>s+r.piatto.prezzo*r.quantita,0));
 readonly piattoPiuOrdinato=computed(()=>this.righe().reduce<RigaOrdine|undefined>((m,r)=>!m||r.quantita>m.quantita?r:m,undefined));
 constructor(){ console.log('OrdineService creato'); }
 aggiungi(p:Piatto):void { if(this.trova(p.id)) this.righe.update(l=>l.map(r=>r.piatto.id===p.id?{...r,quantita:r.quantita+1}:r)); else this.righe.update(l=>[...l,{piatto:p,quantita:1}]); }
 togliUno(id:number):void { this.righe.update(l=>l.map(r=>r.piatto.id===id?{...r,quantita:r.quantita-1}:r).filter(r=>r.quantita>0)); }
 rimuovi(id:number):void { this.righe.update(l=>l.filter(r=>r.piatto.id!==id)); }
 trova(id:number):RigaOrdine|undefined { return this.righe().find(r=>r.piatto.id===id); }
 svuota():void { this.righe.set([]); }
}