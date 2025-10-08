import { Rocket, TrendingUp } from 'lucide-react';

export const Slide9 = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-background">
      <div className="relative z-10 max-w-5xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-4">
            <Rocket className="w-12 h-12 text-primary" />
            <h2 className="text-5xl font-bold text-foreground">
              Esto apenas comienza
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card rounded-3xl p-12 shadow-card border border-border mb-10">
          <p className="text-2xl text-foreground leading-relaxed mb-6">
            El índice está diseñado para ser{' '}
            <span className="font-bold text-primary">sostenible y escalable.</span>
          </p>
          <p className="text-2xl text-foreground leading-relaxed">
            En 2025 se actualizarán los resultados y se integrará con las líneas de negocio territorial, fortaleciendo la financiación con enfoque de equidad.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          
          <div className="grid grid-cols-3 gap-4">
            {[
              { year: '2023', label: 'Primera medición' },
              { year: '2024', label: 'Lanzamiento público' },
              { year: '2025+', label: 'Integración y escalamiento' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-soft">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">{item.year}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
