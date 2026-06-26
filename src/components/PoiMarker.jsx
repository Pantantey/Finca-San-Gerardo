import { useState } from "react";
import PoiModal from "./PoiModal";

// Importar todas las imágenes de assets para que Vite las procese en build time
const images = import.meta.glob("../assets/*", { eager: true });

/**
 * Obtiene la URL de una imagen de assets por su nombre de archivo.
 */
function getImageUrl(filename) {
  const key = `../assets/${filename}`;
  return images[key]?.default || "";
}

/**
 * Marcador de Punto de Interés (POI) en el mapa.
 * Muestra un cuadrado con esquinas redondeadas y la imagen dentro.
 * El tamaño depende del campo "tamaño" en poiData (default 40px).
 * Al hacer clic abre un modal con la info completa.
 *
 * @param {{
 *   poi: { id: number, titulo: string, descripcion: string, imagen: string, lat: number, lng: number, tamaño?: number },
 *   x: number,
 *   y: number,
 * }} props
 */
export default function PoiMarker({ poi, x, y }) {
  const [isOpen, setIsOpen] = useState(false);
  const imgSrc = getImageUrl(poi.imagen);
  const size = poi.tamaño || 40;
  const borderRadius = Math.round(size * 0.3); // 20% del tamaño para las esquinas

  return (
    <>
      <div
        className="poi-marcador"
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
        onClick={() => setIsOpen(true)}
        title={poi.titulo}
      >
        <div
          className="poi-cuadrado"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          {imgSrc && (
            <img
              src={imgSrc}
              alt={poi.titulo}
              className="poi-imagen"
              draggable={false}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <PoiModal poi={poi} imgSrc={imgSrc} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}