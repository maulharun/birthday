'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import deaImage from '/public/profil-dea.png'; // Gantilah dengan path gambar yang sesuai
import cuteBear from "../public/cute-bear.png";  // Gambar bear imut animasi gif
import './homepage.css';

const Page = () => {
  const [clickCount, setClickCount] = useState(0);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true); // Untuk animasi loading saat halaman pertama kali dimuat
  const [loadingProgress, setLoadingProgress] = useState(0); // Progress loading

  useEffect(() => {
    // Simulasi progress loading selama halaman dimuat
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsPageLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Update progress setiap 30ms

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);

    if (clickCount === 0) {
      // Klik pertama: Memutar musik
      const audio = new Audio('/niki.mp3'); // File berada di dalam folder public
      audio.play();
      setAudioPlayed(true);
    }
  };

  const renderContent = () => {
    switch (clickCount) {
      case 1:
        return <p>Widiiiihh ada yang ulang tahun nih, Happy Birthday Deaa! Mabrukk Alfaa maabruk..
                  Semogaa Deaa diberikan panjang umur, sehat selalu, dipermudah segala urusan, dikabulkan segala keinginannya,
                  diberi keberkahan dalam ilmunya. Aamiin..
                  </p>
      case 2:
        return  <p>Disembuhkan dari hal-hal yang bikin Deaa sakit, sembuh dari hal-hal yang gak pernah Deaa ceritain,
                  sembuh dari maaf yang mungkin gapernah Deaa dapetin. Semoga hal-hal baik selalu ada dan terjadi sama Deaa,
                  dan saat hal baik tersebut terjadi, yaa Deaa harus yakinn hal tersebut emang pantes Deaa dapetin. Aamiin </p>;
      case 3:
        return <p>Ohh iyaa, keknya aku harus jujur sekarang deh, I just wanna say i have crush on you. Yaa Deaa juga mungkin
                  udah tau sihhh.. Tapi yaa aku cuman pengen ngungkapin aja ga berharap lebihh apapunnn. BENERAN INI MAH YAA 
                  GAK BOONG. Aku ngungkapin ini biar hati aku tenang aja sih, biar plong.. yaaa karena dah lama juga sih mendem 
                  gini gaa kuat aja sih kalau tetep maksain mendem hehe.. 
                </p>;
      case 4:
        return <p>Gausah jadi canggung yaa.. ehh keknya aku sih yang suka canggung kalau ketemu Deaa wkwkwk..
                Makasih udah mau nyempetin baca, nyempetin buka hal alay kayak ginian, Terimakasih Banyakk Deaa!!
                Wish you all the best.. 
                <br></br>
                Oh iyaaa maaf ini foto yang kemarin project aku pakek disini yaa
                </p>;
      default:
        return <p>Klik tombolnya yaa!</p>;
    }
  };

  return (
    <div>
      {/* Loading screen */}
      {isPageLoading && (
        <div className="loading-screen">
              <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image src={cuteBear} alt="Bear Cute" width={250} height={250} />
            </motion.div>      
          <div className="loading-title">Sedang memuat halaman...</div>
          <div className="loading-bar-container">
            <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
          </div>
          <div className="loading-percent">{loadingProgress}%</div>
          <div className="loading-note">Harap tunggu sebentar...</div>
        </div>
      )}

      {!isPageLoading && (
        <section className="section-hero">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="hero-date"
          >
            29.04.2025
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="hero-happy"
          >
            Happy
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 1 }}
            className="hero-birthday"
          >
            BIRTHDAY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="hero-image"
          >
            <Image src={deaImage} alt="Dea" width={620} height={800} className="hero-img" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="hero-instagram"
          >
            @deaprades
          </motion.p>

          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`balloon-${i}`}
              className="hero-balloon"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: [0.3, 1, 0.3], y: -100 }}
              transition={{ repeat: Infinity, duration: 8 + i * 2, delay: i }}
              style={{
                left: `${i % 2 === 0 ? 10 + i * 5 : 70 + i * 3}%`,
                bottom: 0,
              }}
            >
              🎈
            </motion.div>
          ))}

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`spin-star-${i}`}
              className="hero-star"
              initial={{ rotate: 0, scale: 0.8, opacity: 0.6 }}
              animate={{ rotate: 360, scale: [0.8, 1, 0.8], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 4 + i }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 2) * 30}%`,
              }}
            >
              ✨
            </motion.div>
          ))}

          <div className="hero-separator">
            <hr />
          </div>
        </section>
      )}

{/* Wish Section */}
<section className="wish-section">
  <div className="card">
    <motion.button
      onClick={handleClick}
      disabled={audioPlayed && clickCount >= 4}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      Klik Untuk Melihat Kejutan
    </motion.button>
    {renderContent()}
  </div>

  {/* Dekorasi Balon */}
  <div className="balloon balloon1">🎈</div>
  <div className="balloon balloon2">🎈</div>
  <div className="balloon balloon3">🎈</div>

  {/* Dekorasi Hati */}
  <div className="heart heart1">❤️</div>
  <div className="heart heart2">❤️</div>
  <div className="heart heart3">❤️</div>
</section>
    </div>
  );
};

export default Page;
