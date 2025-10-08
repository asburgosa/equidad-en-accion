import { Zap, Sparkles, Map, Users } from 'lucide-react';

export const Slide7 = () => {
  const paradigms = [
    {
      icon: Sparkles,
      text: 'De la inclusión financiera a la inclusión integral',
    },
    {
      icon: Zap,
      text: 'De la banca tradicional a la banca sostenible',
    },
    {
      icon: Map,
      text: 'De lo nacional a lo territorial',
    },
    {
      icon: Users,
      text: 'De la acción aislada a la corresponsabilidad multiactor',
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-background">
      <div className="relative z-10 max-w-6xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Rompiendo paradigmas
          </h2>
          <p className="text-xl text-muted-foreground">
            Nuevas formas de pensar y actuar
          </p>
        </div>

        {/* Paradigms Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {paradigms.map((paradigm, index) => {
            const Icon = paradigm.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-3xl p-10 shadow-card border border-border hover:border-primary/50 transition-all hover:shadow-soft"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center transition-colors">
                    <Icon className="w-9 h-9 text-primary" />
                  </div>

                  {/* Text */}
                  <p className="text-2xl text-foreground font-semibold leading-relaxed pt-3">
                    {paradigm.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
