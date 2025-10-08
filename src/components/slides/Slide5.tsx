import { Network } from 'lucide-react';

export const Slide5 = () => {
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

        {/* Alliance Partners */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary">UR</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Universidad del Rosario
            </h3>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-card border border-border text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary">CPC</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Consejo Privado de Competitividad
            </h3>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-card border border-border text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary">D</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Davivienda</h3>
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
