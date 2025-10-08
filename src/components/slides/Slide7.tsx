import { Heart, Briefcase } from 'lucide-react';
import heroImage from '@/assets/hero-community.jpg';

export const Slide7 = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Impacto social y de negocio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-foreground drop-shadow-lg">
            Resultados tangibles
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Impact */}
          <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-10 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary">Impacto social</h3>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-3" />
                <p className="text-lg text-foreground leading-relaxed">
                  Cobertura total <span className="font-semibold">(32 departamentos + Bogotá)</span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-3" />
                <p className="text-lg text-foreground leading-relaxed">
                  Implementación en <span className="font-semibold">2023 y 2024</span> con comparabilidad
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-3" />
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-semibold">20 entidades</span> públicas y privadas involucradas
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-3" />
                <p className="text-lg text-foreground leading-relaxed">
                  Herramienta para <span className="font-semibold">políticas públicas basadas en evidencia</span>
                </p>
              </li>
            </ul>
          </div>

          {/* Business Impact */}
          <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-10 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">Impacto en el negocio</h3>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3" />
                <p className="text-lg text-foreground leading-relaxed">
                  Lanzamiento en <span className="font-semibold">marzo de 2024</span> ante +100 organizaciones
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3" />
                <p className="text-lg text-foreground leading-relaxed">
                  Valor mediático: <span className="font-semibold">COP 320 millones</span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3" />
                <p className="text-lg text-foreground leading-relaxed">
                  Cartera territorial: <span className="font-semibold">4,3 billones de pesos</span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3" />
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-semibold">Nuevos productos</span> con enfoque de género
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
