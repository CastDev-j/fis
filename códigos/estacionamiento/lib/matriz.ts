export type Matriz = (string | null)[][];

export type Lugar = {
  fila: number;
  columna: number;
  codigo: string;
};

const FILAS = ["3", "2", "1"];
const COLUMNAS = ["A", "B", "C"];

export function codigo(fila: number, columna: number): string {
  return `${FILAS[fila]}${COLUMNAS[columna]}`;
}

export function crearMatriz(): Matriz {
  return FILAS.map(() => COLUMNAS.map(() => null));
}

export function lugaresLibres(matriz: Matriz): Lugar[] {
  const libres: Lugar[] = [];

  for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
      if (matriz[fila][columna] === null) {
        libres.push({ fila, columna, codigo: codigo(fila, columna) });
      }
    }
  }

  return libres;
}

export function ocupar(matriz: Matriz, lugar: Lugar, placa: string): void {
  matriz[lugar.fila][lugar.columna] = placa;
}
