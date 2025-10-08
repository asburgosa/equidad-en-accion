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

        <div className="mt-12 bg-gradient-to-r from-primary via-[#ff4d3d] to-[#ff6b3d] backdrop-blur-sm px-12 py-8 rounded-3xl border-2 border-white/30 shadow-[0_20px_60px_rgba(228,29,19,0.4)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <p className="text-4xl font-bold tracking-wide leading-tight text-white drop-shadow-lg">
            INNOVACIÓN PARA UNA COLOMBIA<br />MÁS EQUITATIVA E INCLUYENTE
          </p>
        </div>
      </div>
    </div>
  );
};
