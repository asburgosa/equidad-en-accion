import { FileSearch, Calculator, Layers, BarChart, TrendingUp } from 'lucide-react';

export const Slide5 = () => {
  const steps = [
    {
      icon: FileSearch,
      title: 'Selección de indicadores',
      number: '1',
    },
    {
      icon: Calculator,
      title: 'Cálculo de brechas',
      number: '2',
    },
    {
      icon: Layers,
      title: 'Incorporación de la capacidad territorial',
      number: '3',
    },
    {
      icon: BarChart,
      title: 'Normalización de resultados',
      number: '4',
    },
    {
      icon: TrendingUp,
      title: 'Ranking departamental (2023–2024)',
      number: '5',
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-background">
      <div className="relative z-10 max-w-6xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-foreground mb-3">
            Cómo se construyó el índice
          </h2>
          <p className="text-xl text-muted-foreground">Metodología en 5 pasos</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary hidden md:block" />

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-card rounded-3xl p-6 shadow-card border border-border hover:shadow-soft transition-shadow text-center">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-soft">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-foreground leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
