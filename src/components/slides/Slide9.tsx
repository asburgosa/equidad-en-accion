import { Home } from 'lucide-react';
import closingImage from '@/assets/closing-community.jpg';

export const Slide9 = () => {
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

        {/* Logos */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {/* Davivienda Logo */}
          <div className="bg-white/95 backdrop-blur-sm px-10 py-5 rounded-2xl">
            <svg viewBox="0 0 150 40" className="h-10">
              <circle cx="20" cy="20" r="15" className="fill-primary"/>
              <path d="M 40 10 L 40 30 L 52 20 Z" className="fill-primary"/>
              <text x="60" y="26" className="fill-primary font-black text-[16px]">
                Davivienda
              </text>
            </svg>
          </div>
          
          {/* Universidad del Rosario Logo */}
          <div className="bg-white/95 backdrop-blur-sm px-10 py-5 rounded-2xl">
            <svg viewBox="0 0 150 40" className="h-10">
              <text x="75" y="16" textAnchor="middle" className="fill-foreground font-bold text-[10px]">
                UNIVERSIDAD
              </text>
              <text x="75" y="28" textAnchor="middle" className="fill-primary font-bold text-[12px]">
                DEL ROSARIO
              </text>
              <circle cx="75" cy="35" r="2" className="fill-primary" />
            </svg>
          </div>
          
          {/* CPC Logo */}
          <div className="bg-white/95 backdrop-blur-sm px-10 py-5 rounded-2xl">
            <svg viewBox="0 0 120 40" className="h-10">
              <rect x="40" y="8" width="40" height="15" rx="3" className="stroke-secondary" strokeWidth="2" fill="none"/>
              <text x="60" y="30" textAnchor="middle" className="fill-foreground font-bold text-[8px]">
                CONSEJO PRIVADO
              </text>
              <text x="60" y="38" textAnchor="middle" className="fill-secondary font-bold text-[7px]">
                DE COMPETITIVIDAD
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
