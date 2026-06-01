"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Home() {
  const whatsappNumarasi = "491634529127";
  const whatsappGorunen = "+49 163 4529127";

  const whatsappMesaji =
    "Merhaba, Neotvip paketleri hakkında bilgi almak istiyorum.";

  const whatsappLink = `https://wa.me/${whatsappNumarasi}?text=${encodeURIComponent(
    whatsappMesaji
  )}`;

  const logoResmi = "/neotvip-logo.jpg";

  const heroResimleri = [
    "/neotvip-stadium.jpg",
    "/neotvip-neon-poster.jpg",
    "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=80",
  ];

  const heroMetinleri = [
    {
      ust: "Avrupa’nın en iyi fiyatlarıyla",
      baslik: "TAKILMA YOK, DONMA YOK",
      aciklama:
        "Neotvip ile 4K, Full HD, HD ve SD kalitede kesintisiz izleme keyfi.",
    },
    {
      ust: "HD / 4K yayın, geriye sarım, internetten izle",
      baslik: "HEMEN ABONE OL",
      aciklama:
        "Telefon, tablet, bilgisayar, Smart TV ve TV Box cihazlarında premium IPTV deneyimi.",
    },
    {
      ust: "Spor, sinema, belgesel ve daha fazlası",
      baslik: "KESİNTİSİZ İZLEYİN",
      aciklama:
        "Maç yayınları, diziler, filmler, çocuk içerikleri ve VOD arşivi tek yerde.",
    },
    {
      ust: "Tüm cihazlarla uyumlu",
      baslik: "HER YERDE YANINDA",
      aciklama:
        "Smart TV, Android, iOS, TV Box, tablet ve bilgisayardan izleme özgürlüğü.",
    },
    {
      ust: "Premium izleme deneyimi",
      baslik: "SIKILMAYI UNUTUN",
      aciklama:
        "Film, dizi, spor, belgesel ve çocuk içerikleriyle dolu dolu yayın keyfi.",
    },
  ];

  const [aktifHero, setAktifHero] = useState(0);
  const [mobilMenuAcik, setMobilMenuAcik] = useState(false);

  useEffect(() => {
    heroResimleri.forEach((resim) => {
      const img = new Image();
      img.src = resim;
    });

    const interval = setInterval(() => {
      setAktifHero((onceki) => (onceki + 1) % heroResimleri.length);
    }, 5200);

    return () => clearInterval(interval);
  }, [heroResimleri.length]);

  const menuLinkleri = [
    { ad: "Ana Sayfa", href: "#anasayfa" },
    { ad: "Neden Biz", href: "#neden-biz" },
    { ad: "Paketlerimiz", href: "#paketler" },
    { ad: "Kanallar", href: "#kanallar" },
    { ad: "Cihazlar", href: "#cihazlar" },
    { ad: "İletişim", href: "#iletisim" },
  ];

  const paketler = [
    {
      ad: "12 Aylık Paket",
      fiyat: "70€",
      etiket: "En Çok Tercih Edilen",
      detay:
        "12 ay boyunca premium IPTV keyfi. Spor, sinema, belgesel, çocuk, ulusal ve VOD içerikleriyle dolu dolu izleme deneyimi.",
      ozellikler: [
        "4K, Full HD, HD ve SD kalite",
        "Android ve iOS uyumlu",
        "Smart TV, TV Box, telefon, tablet ve bilgisayar",
        "Spor, sinema, belgesel ve VOD içerikleri",
        "Hızlı sunucu altyapısı",
        "WhatsApp destek",
      ],
    },
    {
      ad: "Sınırsız Paket",
      fiyat: "200€",
      etiket: "Tek Seferlik Premium Seçim",
      detay:
        "Uzun vadeli kullanım isteyenler için sınırsız paket. Tek seferlik ödeme ile Neotvip deneyimini kalıcı hale getirin.",
      ozellikler: [
        "Sınırsız kullanım seçeneği",
        "4K, Full HD, HD ve SD kalite",
        "Tüm cihazlarla uyumlu kullanım",
        "Geniş kanal ve VOD seçenekleri",
        "Hızlı ve stabil sunucular",
        "Öncelikli WhatsApp destek",
      ],
    },
  ];

  const ozellikler = [
    {
      baslik: "Yüksek HD Kalite",
      aciklama:
        "4K, Full HD, HD ve SD kalite seçenekleriyle net görüntü deneyimi.",
    },
    {
      baslik: "Hızlı Sunucular",
      aciklama: "Takılma yok, donma yok; hızlı ve stabil IPTV keyfi.",
    },
    {
      baslik: "Geniş İçerik",
      aciklama: "Spor, sinema, belgesel, çocuk, ulusal ve VOD içerikleri.",
    },
    {
      baslik: "Tüm Cihazlarla Uyumlu",
      aciklama:
        "Smart TV, Android, iOS, TV Box, bilgisayar ve tablet uyumluluğu.",
    },
    {
      baslik: "Geriye Sarım",
      aciklama:
        "Yayınları kaçırmayın, geriye sarım özelliğiyle izlemeye devam edin.",
    },
    {
      baslik: "7/24 Destek",
      aciklama: "WhatsApp üzerinden hızlı müşteri hizmetleri.",
    },
  ];

  const kategoriler = [
    {
      ad: "Maç Yayınları",
      aciklama: "Futbol, basketbol, tenis ve birçok spor içeriği.",
    },
    {
      ad: "Diziler",
      aciklama: "Popüler diziler, yeni sezonlar ve geniş arşiv.",
    },
    {
      ad: "Filmler",
      aciklama: "Aksiyon, macera, komedi, dram ve popüler film seçenekleri.",
    },
    {
      ad: "VOD Kanallar",
      aciklama: "Film ve dizi arşiviyle istediğiniz zaman izleme keyfi.",
    },
    {
      ad: "Çocuk Kanalları",
      aciklama: "Aile ve çocuklara uygun eğlenceli içerikler.",
    },
    {
      ad: "Belgesel Kanalları",
      aciklama: "Doğa, tarih, bilim, uzay ve keşif içerikleri.",
    },
  ];

  const cihazlar = [
    "Smart TV",
    "Android Telefon",
    "iPhone / iPad",
    "TV Box",
    "Bilgisayar",
    "Tablet",
    "Android TV",
    "Fire Stick",
  ];

  const istatistikler = [
    { sayi: "HD / 4K", yazi: "Yüksek kalite" },
    { sayi: "7/24", yazi: "WhatsApp destek" },
    { sayi: "70€", yazi: "12 aylık paket" },
    { sayi: "200€", yazi: "Sınırsız paket" },
  ];

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const menuTikla = () => {
    setMobilMenuAcik(false);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.07); }
        }

        @keyframes goldMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .gold-text {
          background: linear-gradient(90deg, #f8d86b, #c99735, #fff1a8, #a66b18, #f8d86b);
          background-size: 260% 260%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: goldMove 6s ease infinite;
        }

        .hero-active {
          animation: heroZoom 9s linear forwards;
        }

        .dark-flow {
          background:
            radial-gradient(circle at 15% 20%, rgba(201, 151, 53, 0.12), transparent 25%),
            radial-gradient(circle at 85% 70%, rgba(132, 82, 20, 0.14), transparent 28%),
            #080808;
        }

        .line-flow {
          background:
            linear-gradient(90deg, transparent, rgba(248,216,107,0.08), transparent),
            #050505;
        }

        .image-soft {
          box-shadow: 0 30px 80px rgba(0,0,0,.45);
        }
      `}</style>

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2.5 md:px-8 md:py-3">
          <a
            href="#anasayfa"
            onClick={menuTikla}
            className="flex min-w-0 items-center"
          >
            <img
              src={logoResmi}
              alt="Neotvip Logo"
              className="h-14 w-[190px] object-contain object-left md:h-16 md:w-[260px] lg:h-[70px] lg:w-[310px]"
              loading="eager"
              decoding="async"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/75 lg:flex">
            {menuLinkleri.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-yellow-200"
              >
                {link.ad}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1fc45b] px-5 py-3 text-sm font-black text-white shadow-lg shadow-green-500/20"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobilMenuAcik((onceki) => !onceki)}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-yellow-300/30 bg-black/40 lg:hidden"
            aria-label="Menüyü aç"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-yellow-200 transition ${
                mobilMenuAcik ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-yellow-200 transition ${
                mobilMenuAcik ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-yellow-200 transition ${
                mobilMenuAcik ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {mobilMenuAcik && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="border-t border-white/10 bg-black/95 px-4 py-5 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {menuLinkleri.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={menuTikla}
                  className="border-b border-white/10 py-4 text-base font-black text-white/85 last:border-b-0 hover:text-yellow-200"
                >
                  {link.ad}
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={menuTikla}
                className="mt-5 rounded-full bg-[#1fc45b] px-6 py-4 text-center text-base font-black text-white shadow-lg shadow-green-500/20"
              >
                WhatsApp’tan Yaz
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <section
        id="anasayfa"
        className="relative min-h-screen overflow-hidden pt-24 md:pt-28"
      >
        {heroResimleri.map((resim, index) => (
          <div
            key={resim}
            className={`absolute inset-0 transition-opacity duration-700 ${
              aktifHero === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={resim}
              alt="Neotvip görsel"
              className={`h-full w-full object-cover ${
                aktifHero === index ? "hero-active" : ""
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/45" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-4 py-16 md:px-8">
          <motion.div
            key={aktifHero}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl"
          >
            <p className="mb-5 border-l-4 border-yellow-300 pl-5 text-sm font-black uppercase tracking-[0.25em] text-yellow-200 md:text-base">
              {heroMetinleri[aktifHero].ust}
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-8xl">
              {heroMetinleri[aktifHero].baslik}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              {heroMetinleri[aktifHero].aciklama}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1fc45b] px-8 py-4 text-center text-base font-black text-white shadow-2xl shadow-green-500/20"
              >
                Bize Hemen Ulaş
              </a>

              <a
                href="#paketler"
                className="rounded-full border border-yellow-300/40 bg-black/35 px-8 py-4 text-center text-base font-black text-yellow-100 backdrop-blur hover:bg-yellow-300 hover:text-black"
              >
                Paketleri İncele
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {heroResimleri.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setAktifHero(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    aktifHero === index
                      ? "w-10 bg-yellow-300"
                      : "w-2.5 bg-white/35"
                  }`}
                  aria-label={`Hero görsel ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black px-4 py-10 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 border-y border-white/10 py-8 md:grid-cols-4">
          {istatistikler.map((item) => (
            <div key={item.yazi} className="text-center md:text-left">
              <p className="gold-text text-4xl font-black">{item.sayi}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                {item.yazi}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#050505] px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative min-h-[460px] overflow-hidden image-soft">
            <img
              src="/neotvip-stadium.jpg"
              alt="Neotvip stadyum yayınları"
              className="h-[460px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-9">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-300">
                Maç yayınları · Diziler · Filmler
              </p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Neotvip ile izleme keyfi daha güçlü
              </h2>
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden image-soft">
            <img
              src="/neotvip-neon-poster.jpg"
              alt="Neotvip HD 4K yayın"
              className="h-[460px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
                HD / 4K Yayın
              </p>
              <h3 className="mt-3 text-3xl font-black">
                Hemen abone ol
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="neden-biz" className="dark-flow px-4 py-20 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Neden Neotvip
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              IPTV dünyasında{" "}
              <span className="gold-text">premium izleme deneyimi</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Neotvip; hızlı sunucular, geniş içerik seçenekleri, yüksek görüntü
              kalitesi ve tüm cihazlarla uyumlu yapısıyla kesintisiz izleme
              keyfi sunar.
            </p>
          </motion.div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {ozellikler.map((item, index) => (
              <motion.div
                key={item.baslik}
                variants={fadeUp}
                className="grid gap-5 py-8 md:grid-cols-[90px_1fr_1.4fr] md:items-center"
              >
                <div className="text-4xl font-black text-yellow-300">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black">{item.baslik}</h3>

                <p className="text-lg leading-8 text-white/60">
                  {item.aciklama}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#050505] px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              HD / 4K Yayın
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Geriye sarım, internetten izle,{" "}
              <span className="gold-text">dünya çapında yayın</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Neotvip ile maçlar, diziler, filmler ve canlı yayınlar her
              cihazda daha net, daha hızlı ve daha keyifli.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#1fc45b] px-8 py-4 font-black text-white"
            >
              Hemen Abone Ol
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative min-h-[520px] overflow-hidden image-soft"
          >
            <img
              src="/neotvip-neon-poster.jpg"
              alt="Neotvip HD 4K yayın"
              className="h-[520px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section id="paketler" className="bg-[#050505] px-4 py-20 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Avrupa Paketlerimiz
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              En iyi fiyatlarla{" "}
              <span className="gold-text">Neotvip paketleri</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              İster 12 aylık avantajlı paketi seçin, ister sınırsız paketle uzun
              vadeli premium deneyime geçin.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="relative min-h-[620px] overflow-hidden image-soft">
              <img
                src="/neotvip-stadium.jpg"
                alt="Neotvip paketler"
                className="h-[620px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
                  12 Aylık Paket 70€
                </p>
                <p className="mt-3 text-3xl font-black">
                  Sınırsız Paket 200€
                </p>
              </div>
            </div>

            <div className="border-y border-white/10">
              {paketler.map((paket) => (
                <motion.div
                  key={paket.ad}
                  variants={fadeUp}
                  className="grid gap-7 border-b border-white/10 py-10 last:border-b-0 xl:grid-cols-[1fr_160px] xl:items-start"
                >
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300/80">
                      {paket.etiket}
                    </p>

                    <h3 className="mt-3 text-3xl font-black text-white md:text-4xl">
                      {paket.ad}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-white/55">
                      {paket.detay}
                    </p>

                    <div className="mt-6 space-y-3">
                      {paket.ozellikler.map((ozellik) => (
                        <div
                          key={ozellik}
                          className="flex items-start gap-3 text-base font-semibold leading-7 text-white/65"
                        >
                          <span className="mt-0.5 text-yellow-300">✓</span>
                          <span>{ozellik}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300/80">
                      Fiyat
                    </p>
                    <p className="mt-3 text-5xl font-black text-yellow-200">
                      {paket.fiyat}
                    </p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex justify-center rounded-full bg-[#1fc45b] px-7 py-4 text-center font-black text-white shadow-lg shadow-green-500/20"
                    >
                      Detaylar
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="kanallar" className="line-flow px-4 py-20 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              İçerikler
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Maç yayınları, diziler, filmler ve{" "}
              <span className="gold-text">çocuk içerikleri</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Neotvip ile her zevke uygun içerikler tek yerde.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {kategoriler.map((kategori, index) => (
                <motion.div
                  key={kategori.ad}
                  variants={fadeUp}
                  className="grid gap-4 py-8 md:grid-cols-[90px_1fr_1.4fr] md:items-center"
                >
                  <div className="text-3xl font-black text-yellow-300">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {kategori.ad}
                  </h3>

                  <p className="text-lg font-semibold leading-8 text-white/55">
                    {kategori.aciklama}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6">
              <div className="relative min-h-[330px] overflow-hidden image-soft">
                <img
                  src="/neotvip-neon-poster.jpg"
                  alt="Neotvip içerikler"
                  className="h-[330px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
                    HD / 4K yayın
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    İnternetten izle
                  </p>
                </div>
              </div>

              <div className="relative min-h-[330px] overflow-hidden image-soft">
                <img
                  src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80"
                  alt="Sinema içerikleri"
                  className="h-[330px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
                    Film · Dizi · VOD
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    Sıkılmayı unutun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="cihazlar" className="dark-flow px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Platformlar
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              İstediğin yerde,{" "}
              <span className="gold-text">istediğin cihazda</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Neotvip; Smart TV, Android, iOS, TV Box, bilgisayar ve tablet
              cihazlarla uyumlu çalışır.
            </p>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {cihazlar.map((cihaz) => (
                <div
                  key={cihaz}
                  className="flex items-center justify-between gap-4 py-5"
                >
                  <span className="text-xl font-black text-white">{cihaz}</span>
                  <span className="text-right font-bold text-yellow-300">
                    Uyumlu
                  </span>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#1fc45b] px-8 py-4 font-black text-white"
            >
              WhatsApp’tan Yaz
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="grid gap-6"
          >
            <div className="relative min-h-[300px] overflow-hidden image-soft">
              <img
                src="/neotvip-stadium.jpg"
                alt="Neotvip cihaz uyumluluğu"
                className="h-[300px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
                  Canlı yayın · 4K kalite · Her cihazda
                </p>
                <p className="mt-3 text-3xl font-black">
                  Telefon, tablet, bilgisayar ve TV
                </p>
              </div>
            </div>

            <div className="relative min-h-[300px] overflow-hidden image-soft">
              <img
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80"
                alt="Smart TV izleme"
                className="h-[300px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
                  Smart TV · Android · iOS
                </p>
                <p className="mt-3 text-3xl font-black">
                  Her ekranda izleme keyfi
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#050505] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-y border-white/10 py-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
                Premium Deneyim
              </p>

              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Takılmadan, donmadan,{" "}
                <span className="gold-text">kesintisiz izleyin</span>
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-white/60">
              <p>
                Neotvip ile spor karşılaşmaları, sinema keyfi, belgesel dünyası,
                çocuk içerikleri ve VOD seçenekleri tek akışta buluşur.
              </p>

              <p>
                12 Aylık Paket 70€ ve Sınırsız Paket 200€ seçenekleriyle size en
                uygun paketi seçebilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="relative min-h-[320px] overflow-hidden image-soft md:col-span-2">
              <img
                src="/neotvip-stadium.jpg"
                alt="Neotvip premium deneyim"
                className="h-[320px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>

            <div className="relative min-h-[320px] overflow-hidden image-soft">
              <img
                src="/neotvip-neon-poster.jpg"
                alt="Neotvip yayın"
                className="h-[320px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="dark-flow px-4 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-10 border-y border-white/10 py-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
                Bize Hemen Ulaşın
              </p>

              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Neotvip paketleri için{" "}
                <span className="gold-text">WhatsApp’tan yazın</span>
              </h2>

              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-white/65">
                12 Aylık Paket 70€ · Sınırsız Paket 200€
              </p>
            </div>

            <div className="lg:text-right">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#1fc45b] px-10 py-4 text-lg font-black text-white shadow-2xl shadow-green-500/20"
              >
                {whatsappGorunen}
              </a>
            </div>
          </div>

          <div className="mt-12 relative min-h-[360px] overflow-hidden image-soft">
            <img
              src="/neotvip-neon-poster.jpg"
              alt="Neotvip iletişim"
              className="h-[360px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-200">
                Hemen abone ol
              </p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                HD / 4K yayın keyfine başla
              </h2>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 bg-black px-4 py-8 text-center text-sm leading-7 text-white/45 md:px-8">
        <p>© COPYRIGHT 2026 - NEOTVIP</p>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#1fc45b] px-6 py-4 text-sm font-black text-white shadow-2xl shadow-green-500/30"
      >
        WhatsApp
      </a>
    </main>
  );
}