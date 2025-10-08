import { MapPin, Users, Briefcase, Award } from 'lucide-react';
import colombiaMap from '@/assets/colombia-map.jpg';

export const Slide3 = () => {
  const facts = [
    {
      icon: Award,
      text: 'Puesto 45 de 146 en el Índice Global de Brecha de Género',
    },
    {
      icon: Users,
      text: 'Paridad en educación y salud, rezago en economía y política',
    },
    {
      icon: Briefcase,
      text: 'Participación laboral: 50% mujeres vs. 70% hombres',
    },
    {
      icon: MapPin,
      text: 'Tasa de suicidio masculina 4 veces mayor',
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-background">
      <div className="relative z-10 max-w-6xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Colombia: avances y desafíos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <img src={colombiaMap} alt="Mapa de Colombia" className="w-full h-full object-cover" />
          </div>

          {/* Facts */}
          <div className="space-y-6">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border flex items-start gap-4 hover:shadow-soft transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    {fact.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
