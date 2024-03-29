import { Equipo } from './equipo.model';
import { Imagen } from './imagen.model';
import { Usuario } from "./usuario.model";

export class Jugador extends Usuario {

  public codigojugador: number;
  public posicionjugador: number;
  public dorsaljugador: string;
  public equiposjugador: Equipo[];

  constructor(cod: number, foto:Imagen, doc: string, tipo: string, nom: string, ape:string, cor:string, cla:string,codju: number, pos: number, dor: string, equ: Equipo[]){
    super(cod, foto, doc, tipo, nom, ape, cor, cla);
    this.codigojugador = codju;
    this.posicionjugador = pos;
    this.dorsaljugador = dor;
    this.equiposjugador = equ;
  }

}
