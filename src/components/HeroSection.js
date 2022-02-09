import Button from "./Button"
import Navbar from "./Navbar";

function HeroSection() {
    return (
        <div className="bg-blue-900 h-[550px]">
            <div className="container mx-auto">
             <Navbar/>
             <div className="text-center mt-12">
             <h1 className="text-white text-3xl w-8/12 leading-relaxed font-semibold font-mono mx-auto">
             saya seorang front-end engineer , back-end egineer, dan juga UI designer
             </h1>
             <p className="mt-6 text-lg text-opasity text-zinc-400 w-4/12 mx-auto my-6 ">
             sejak 17 tahun saya memulai programing. sejak 2 tahun memulqai UI design.
             </p>
<Button >
           pelajari
           </Button>
          
       </div>
        </div>
        </div>
    );
}

export default HeroSection;