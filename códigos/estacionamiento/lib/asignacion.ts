export function elegirAleatorio<T>(lista: T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}
