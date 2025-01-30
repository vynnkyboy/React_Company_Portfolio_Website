import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" id="home">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        SELAMAT DATANG DI  
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
          {" "}
          STIKOM TUNAS BANGSA
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Selamat datang di STIKOM Tunas Bangsa! Kami bangga menyambut Anda di lingkungan akademik yang dinamis dan inovatif, di mana setiap individu didorong untuk mencapai potensi terbaiknya. Di sini, kami berkomitmen untuk memberikan pendidikan berkualitas yang mengintegrasikan teori dan praktik, serta mempersiapkan mahasiswa untuk menghadapi tantangan global. Bersama-sama, mari kita wujudkan masa depan yang cerah dengan semangat belajar yang tinggi, kreativitas tanpa batas, dan integritas yang kokoh. Selamat bergabung dengan keluarga besar STIKOM Tunas Bangsa, tempat di mana impian dan cita-cita menjadi nyata!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-900 py-3 px-4 mx-3 rounded-md"
        >
          Daftar Sekarang
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Jelajahi 
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
