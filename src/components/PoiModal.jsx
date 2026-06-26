import { useEffect, useCallback, useRef } from "react";

/**
 * Modal que muestra la información de un Punto de Interés (POI).
 *
 * El zoom del navegador (Ctrl++) escala todo el contenido CSS.
 * Detectamos el zoom y ajustamos el maxWidth/maxHeight inline
 * para que el modal quepa siempre. Al cerrar, los estilos se
 * pierden al desmontar el componente.
 *
 * @param {{ poi, imgSrc, onClose }} props
 */
export default function PoiModal({ poi, imgSrc, onClose }) {
  const modalRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const z = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;

    // Ajustar el DOM directamente si hay zoom
    if (z > 1 && modalRef.current) {
      modalRef.current.style.maxWidth = `${Math.round(440 / z)}px`;
      modalRef.current.style.maxHeight = `${Math.round(85 / z)}vh`;
    }
    if (z > 1 && imgRef.current) {
      imgRef.current.style.maxHeight = `${Math.round(40 / z)}vh`;
    }

    // Bloquear scroll
    const saved = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = saved; };
  }, []);

  // Escape para cerrar
  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div className="poi-modal-overlay" onClick={onClose}>
      <div className="poi-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <button className="poi-modal-cerrar" onClick={onClose}>&times;</button>
        {imgSrc && (
          <img
            ref={imgRef}
            src={imgSrc}
            alt={poi.titulo}
            className="poi-modal-imagen"
          />
        )}
        <div className="poi-modal-contenido">
          <h2 className="poi-modal-titulo">{poi.titulo}</h2>
          <p className="poi-modal-descripcion">{poi.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
