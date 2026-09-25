export const LONGITUD_PLACA = 9;

export function esPlacaValida(placa: string): boolean {
  return placa.length === LONGITUD_PLACA;
}
