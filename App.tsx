
import React, { useState } from 'react';
import { InstagramIcon, CameraIcon } from './components/icons';

const App: React.FC = () => {
  const instagramHandle = "abdallah.score.football";
  const instagramUrl = `https://www.instagram.com/${instagramHandle}`;
  const [imageUrl, setImageUrl] = useState<string>('https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const newImageUrl = URL.createObjectURL(file);
      // Optional: Clean up the old object URL to avoid memory leaks if you change the image multiple times.
      if (imageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(imageUrl);
      }
      setImageUrl(newImageUrl);
    }
  };


  return (
    <div
      className="relative min-h-screen w-full bg-gray-900 text-white flex items-center justify-center p-4 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <main className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 animate-fade-in-up">
          
          <div className="relative w-28 h-28 mx-auto mb-6 group">
             <div className="w-full h-full rounded-full border-4 border-green-400 p-1 shadow-lg">
                <img 
                  src={imageUrl}
                  alt="شعار كرة القدم" 
                  className="w-full h-full rounded-full object-cover"
                />
             </div>
             <label 
                htmlFor="image-upload" 
                className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                aria-label="Change profile picture"
             >
                <CameraIcon className="w-8 h-8 text-white" />
                <input 
                    id="image-upload" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageChange}
                />
            </label>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400 mb-2">
            Abdallah Score Football
          </h1>
          
          <p className="text-lg text-gray-200 mb-6">
            محتوى كروي استثنائي يليق بك
          </p>

          <p className="text-gray-300 text-md md:text-lg mb-8 leading-relaxed">
            انضم إلينا على انستقرام لتحليلات حصرية، أهداف رائعة، وكل ما هو جديد في عالم كرة القدم.
          </p>
          
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto text-lg font-bold text-gray-900 bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 rounded-full px-8 py-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <InstagramIcon className="w-6 h-6" />
            <span>@{instagramHandle}</span>
          </a>

        </div>

        <footer className="mt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Abdallah Score. كل الحقوق محفوظة.</p>
        </footer>
      </main>
      
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
