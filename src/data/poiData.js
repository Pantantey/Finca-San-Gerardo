/**
 * Puntos de Interés (POIs) para mostrar en el mapa.
 *
 * Cómo agregar un nuevo punto:
 * 1. Agrega un objeto a este array con:
 *    - id:          Identificador único (número)
 *    - titulo:      Texto que se muestra en el modal
 *    - descripcion: Texto descriptivo más detallado
 *    - imagen:      Ruta a la imagen dentro de src/assets/ (ej: "mi-casa.png")
 *    - lat:         Latitud (dentro de BOUNDS)
 *    - lng:         Longitud (dentro de BOUNDS)
 *    - tamaño:      (opcional) Tamaño del marcador en píxeles. 40 por defecto.
 *                   Valores recomendados: 30 (pequeño), 40 (medio), 56 (grande).
 *                   Si no se especifica, usa 40px.
 *
 * 2. Coloca la imagen en: src/assets/
 *
 * Ejemplo:
 * {
 *   id: 1,
 *   titulo: "Mi Casa",
 *   descripcion: "Aquí vivo",
 *   imagen: "mi-casa.png",
 *   lat: 10.0685,
 *   lng: -84.4700,
 *   tamaño: 40,
 * }
 */
const poiData = [
  // ==============================
  //  AGREGA TUS PUNTOS AQUÍ ABAJO
  // ==============================
  {
    id: 1,
    titulo: "Arbol Hueco",
    descripcion: "Curioso arbol con gran hueco en el que pueden entrar varias personas",
    imagen: "arbol_hueco.png",
    lat: 10.044758,
    lng: -84.531559,
    tamaño: 59,
  },
  {
    id: 2,
    titulo: "Catarata",
    descripcion: "Bella catarata con poza en la que se puede nadar",
    imagen: "catarata.png",
    lat: 10.045760,
    lng: -84.524735,
    tamaño: 72,
  },
];

export default poiData;