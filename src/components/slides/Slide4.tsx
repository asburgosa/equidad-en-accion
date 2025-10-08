import { Network } from 'lucide-react';

export const Slide4 = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-background">
      <div className="relative z-10 max-w-6xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-4">
            <Network className="w-12 h-12 text-primary" />
            <h2 className="text-5xl font-bold text-foreground">
              Una alianza para medir y transformar
            </h2>
          </div>
        </div>

        {/* Alliance Partners with Real Logos */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Universidad del Rosario */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border text-center hover:shadow-soft transition-shadow">
            <div className="w-full h-24 flex items-center justify-center mx-auto mb-6 px-4">
              <svg viewBox="0 0 200 80" className="w-full h-full">
                <text x="100" y="30" textAnchor="middle" className="fill-foreground font-bold text-[16px]">
                  UNIVERSIDAD
                </text>
                <text x="100" y="50" textAnchor="middle" className="fill-primary font-bold text-[20px]">
                  DEL ROSARIO
                </text>
                <circle cx="100" cy="65" r="3" className="fill-primary" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Universidad del Rosario
            </h3>
            <p className="text-sm text-muted-foreground mt-2">Investigación académica</p>
          </div>

          {/* Consejo Privado de Competitividad */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border text-center hover:shadow-soft transition-shadow">
            <div className="w-full h-24 flex items-center justify-center mx-auto mb-6 px-4">
              <svg viewBox="0 0 200 80" className="w-full h-full">
                <rect x="80" y="20" width="40" height="30" rx="4" className="fill-secondary stroke-secondary" strokeWidth="2" fill="none"/>
                <text x="100" y="58" textAnchor="middle" className="fill-foreground font-bold text-[12px]">
                  CONSEJO PRIVADO
                </text>
                <text x="100" y="72" textAnchor="middle" className="fill-secondary font-bold text-[11px]">
                  DE COMPETITIVIDAD
                </text>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Consejo Privado de Competitividad
            </h3>
            <p className="text-sm text-muted-foreground mt-2">Articulación público-privada</p>
          </div>

          {/* Davivienda */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border text-center hover:shadow-soft transition-shadow">
            <div className="w-full h-24 flex items-center justify-center mx-auto mb-6 px-4">
              <svg viewBox="0 0 200 80" className="w-full h-full">
                <circle cx="60" cy="40" r="25" className="fill-primary"/>
                <path d="M 90 25 L 90 55 L 110 40 Z" className="fill-primary"/>
                <text x="120" y="45" className="fill-primary font-black text-[24px]">
                  Davivienda
                </text>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Davivienda</h3>
            <p className="text-sm text-muted-foreground mt-2">Liderazgo en inclusión sostenible</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gradient-accent rounded-3xl p-10 border border-secondary/30">
          <p className="text-2xl text-foreground leading-relaxed text-center">
            Por primera vez, Colombia cuenta con una{' '}
            <span className="font-bold text-secondary">medición subregional</span> que analiza{' '}
            <span className="font-semibold">6 pilares, 17 subpilares y 74 indicadores.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
