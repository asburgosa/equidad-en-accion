import { Globe, Award, Users, Briefcase, MapPin, TrendingUp } from 'lucide-react';

export const Slide2 = () => {
  const globalFacts = [
    {
      number: '134 años',
      text: 'para cerrar la brecha global',
    },
    {
      number: '+20%',
      text: 'PIB global si se cierran las brechas',
    },
  ];

  const nationalFacts = [
    {
      icon: Award,
      text: 'Puesto 45 de 146 en el Índice Global',
    },
    {
      icon: Users,
      text: 'Paridad en educación y salud, rezago en economía',
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
      <div className="relative z-10 max-w-6xl mx-auto px-12 py-8">
        {/* Global Context - Upper Half */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <Globe className="w-10 h-10 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                Contexto global
              </h2>
            </div>
            <p className="text-lg text-muted-foreground italic">
              "Cerrar las brechas de género no es solo lo correcto: es inteligente, rentable y nos conviene a todos."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {globalFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border-2 border-primary/20 text-center"
              >
                <div className="text-6xl font-black text-primary mb-3">{fact.number}</div>
                <p className="text-xl font-semibold text-foreground">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-dashed border-muted-foreground/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Colombia
            </span>
          </div>
        </div>

        {/* National Context - Lower Half */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <TrendingUp className="w-10 h-10 text-secondary" />
              <h2 className="text-4xl font-bold text-foreground">
                Avances y desafíos
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {nationalFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border flex items-start gap-4 hover:shadow-soft transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed pt-2">
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
