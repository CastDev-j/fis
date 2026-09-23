import { volumenEsfera } from "./lib/esfera.js";
import { volumenPrisma } from "./lib/prisma.js";
import { volumenPiramide } from "./lib/piramide.js";

console.log("Volumen de una esfera de radio 3:", volumenEsfera(3));
console.log("Volumen de un prisma (base=10, altura=5):", volumenPrisma(10, 5));
console.log(
  "Volumen de una piramide (base=12, altura=6):",
  volumenPiramide(12, 6),
);
