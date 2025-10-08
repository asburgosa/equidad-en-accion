import heroImage from '@/assets/hero-community.jpg';

export const Slide1 = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Comunidad diversa colombiana" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-12 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          Medición Subregional de<br />Brechas de Género
        </h1>
        
        <p className="text-2xl mb-8 font-light opacity-95 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          Una alianza entre Davivienda, Universidad del Rosario<br />
          y el Consejo Privado de Competitividad
        </p>

        <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <p className="text-xl font-semibold">
            Innovación para una Colombia más equitativa e incluyente
          </p>
        </div>
      </div>
    </div>
  );
};
