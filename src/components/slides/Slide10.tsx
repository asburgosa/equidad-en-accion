import { Home } from 'lucide-react';
import closingImage from '@/assets/closing-community.jpg';

export const Slide10 = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={closingImage} 
          alt="Comunidad próspera e incluyente" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-12 text-center text-white">
        <div className="mb-8">
          <div className="inline-flex items-center gap-4 mb-6">
            <Home className="w-14 h-14" />
            <h2 className="text-5xl font-bold">
              Una casa más próspera,<br />incluyente y verde
            </h2>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 mb-10">
          <p className="text-3xl leading-relaxed font-light italic">
            "La Medición Subregional de Brechas de Género es más que un índice:
          </p>
          <p className="text-3xl leading-relaxed font-semibold mt-4">
            es una manifestación de nuestro compromiso con la inclusión y la sostenibilidad."
          </p>
        </div>

        {/* Logos Placeholder */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          <div className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl">
            <p className="text-primary text-2xl font-bold">Davivienda</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl">
            <p className="text-foreground text-xl font-semibold">Universidad del Rosario</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl">
            <p className="text-foreground text-xl font-semibold">CPC</p>
          </div>
        </div>
      </div>
    </div>
  );
};
