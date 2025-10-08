import { Heart } from 'lucide-react';
import purposeImage from '@/assets/purpose-house.jpg';

export const Slide4 = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={purposeImage} 
          alt="El Mundo es Nuestra Casa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-12 text-left">
        <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-12 shadow-soft border border-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-5xl font-bold text-foreground">
              De la intención a la acción
            </h2>
          </div>
          
          <p className="text-3xl text-foreground leading-relaxed font-light">
            En Davivienda creemos que la inclusión no se logra solo con buenas intenciones…{' '}
            <span className="font-semibold text-primary">
              sino con acciones que transforman realidades.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
