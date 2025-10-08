import { Globe2, TrendingUp } from 'lucide-react';
import globalImage from '@/assets/global-context.jpg';

export const Slide2 = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img src={globalImage} alt="Contexto global" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Globe2 className="w-10 h-10 text-primary" />
            <h2 className="text-5xl font-bold text-foreground">
              ¿Por qué hablar de brechas de género hoy?
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Big Number */}
          <div className="bg-card rounded-3xl p-10 shadow-card border border-border">
            <div className="text-primary text-7xl font-bold mb-4">134</div>
            <p className="text-2xl text-foreground font-semibold">
              años para cerrar la brecha global
            </p>
          </div>

          {/* Complementary Fact */}
          <div className="bg-secondary/10 rounded-3xl p-10 shadow-card border border-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-12 h-12 text-secondary" />
              <div className="text-secondary text-6xl font-bold">+20%</div>
            </div>
            <p className="text-2xl text-foreground font-semibold">
              PIB global si se cierran las brechas de género
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gradient-accent rounded-3xl p-10 border border-secondary/30">
          <p className="text-2xl text-foreground italic leading-relaxed">
            "Cerrar las brechas de género no es solo lo correcto: es inteligente, rentable y nos conviene a todos."
          </p>
        </div>
      </div>
    </div>
  );
};
