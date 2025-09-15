import { useState } from "react";
import Button from "../components/Button.jsx";

function ExploreVault() {
  const images = Object.values(
    import.meta.glob("/src/assets/vaultimages/*.png", { eager: true, import: "default" })
  );

  // Estado para la imagen seleccionada
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col items-center p-6 gap-6">
      {/* Contenedor de la imagen seleccionada */}
      {selected && (
        <div className="w-[40%] max-w-2xl mb-10">
          <div className="card bg-base-200 shadow-xl p-4 gap-4">
            <img
              src={selected}
              alt="Selected item"
              className="w-full max-h-[30vh] object-contain rounded-lg mb-4"
            />
            <div className="card-body p-2">
              <h2 className="card-title text-xl text-center">Hola</h2>
              <p className="text-sm text-base-content/70">
                Aquí puedes mostrar información adicional del ítem clicado
                (ejemplo: nombre, descripción, metadatos…).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grid inferior de items */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-h-[30vh] overflow-y-auto w-full max-w-6xl p-3">
          {images.map((img, i) => (
            <Button
              content={img}
              key={i}
              isSelected = {selected === img}
              onClick={() => setSelected(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreVault;
