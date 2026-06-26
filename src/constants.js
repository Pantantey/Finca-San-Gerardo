/**
 * Límites geográficos del mapa (bounding box).
 * Esquina superior izquierda = (norte, oeste)
 * Esquina inferior derecha = (sur, este)
 *
 * CAMBIA estos valores según tu imagen.
 */
export const BOUNDS = {
  north: 10.057998,
  south: 10.032728,
  west: -84.562881,
  east: -84.517648,
};

/**
 * Dimensiones REALES de la imagen del mapa en píxeles.
 * La imagen actual es 602×905.
 * Si cambias la imagen, actualiza estos valores.
 */
export const MAP_IMAGE = {
  width: 1057,
  height: 597,
};

/**
 * Distancia mínima entre puntos de ruta en grados (aprox. 1° = 111 km).
 *
 * - 0.00005 ≈ 5.5 metros (bueno para caminar, evita ruido del GPS)
 * - 0.00010 ≈ 11 metros (ideal para bicicleta o carro en ciudad)
 * - 0.00001 ≈ 1 metro  (demasiado sensible, genera muchos puntos)
 * - 0.00050 ≈ 55 metros (solo para trayectos largos)
 *
 * Ajusta este valor si quieres más o menos puntos en tus rutas.
 */
export const MIN_DISTANCE = 0.00005;
