import { elegirAleatorio } from "./asignacion.js";
import { crearMatriz, lugaresLibres, ocupar } from "./matriz.js";
import { esPlacaValida } from "./placa.js";

const matriz = crearMatriz();

export function estacionar(placa: string): string {
  if (!esPlacaValida(placa)) {
    return "La placa debe tener 9 caracteres";
  }

  const libres = lugaresLibres(matriz);

  if (libres.length === 0) {
    return "El Estacionamiento está lleno";
  }

  const lugar = elegirAleatorio(libres);
  ocupar(matriz, lugar, placa);

  return `${placa} ${lugar.codigo}`;
}
