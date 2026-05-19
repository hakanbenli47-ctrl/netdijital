"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Home() {
  const whatsappNumarasi = "905307231266";

  const whatsappMesaji =
    "Merhaba, dijital yayın hizmetleri hakkında bilgi almak istiyorum.";

  const whatsappLink = `https://wa.me/${whatsappNumarasi}?text=${encodeURIComponent(
    whatsappMesaji
  )}`;

  const hizmetler = [
    {
      baslik: "Dijital Yayın Bilgilendirme",
      aciklama:
        "Kullanım süreci, cihaz uyumluluğu ve hizmet kapsamı hakkında WhatsApp üzerinden bilgi alabilirsiniz.",
      etiket: "Bilgi",
    },
    {
      baslik: "Kurulum Rehberi",
      aciklama:
        "Telefon, tablet, Smart TV ve medya cihazları için kurulum süreci hakkında yönlendirme yapılır.",
      etiket: "Kurulum",
    },
    {
      baslik: "Cihaz Uyumluluğu",
      aciklama:
        "Android, iOS, Smart TV, TV Box ve benzeri cihazlarda kullanım seçenekleri hakkında bilgi alabilirsiniz.",
      etiket: "Cihaz",
    },
    {
      baslik: "WhatsApp Destek",
      aciklama:
        "Hizmet detayları, kullanım süreci ve teknik destek bilgileri WhatsApp üzerinden paylaşılır.",
      etiket: "Destek",
    },
  ];

  const paketler = [
    {
      ad: "1 Aylık",
      fiyat: "200 TL",
      aciklama:
        "Kısa süreli kullanım, kurulum yönlendirmesi ve cihaz uyumluluğu hakkında bilgi alın.",
    },
    {
      ad: "3 Aylık",
      fiyat: "450 TL",
      aciklama:
        "Orta vadeli kullanım süreci, destek kapsamı ve cihaz seçenekleri hakkında bilgi alın.",
    },
    {
      ad: "6 Aylık",
      fiyat: "700 TL",
      aciklama:
        "Daha uzun süreli kullanım seçenekleri ve teknik destek süreci için WhatsApp’tan ulaşın.",
    },
    {
      ad: "1 Yıllık",
      fiyat: "1.500 TL",
      aciklama:
        "Uzun dönem kullanım, kurulum desteği ve hizmet kapsamı hakkında bilgi alın.",
    },
    {
      ad: "2 Yıllık",
      fiyat: "2.000 TL",
      aciklama:
        "Uzun vadeli kullanım seçenekleri ve destek detayları için WhatsApp üzerinden bilgi alın.",
    },
  ];

  const adimlar = [
    {
      baslik: "WhatsApp’tan Yazın",
      aciklama:
        "Bilgi almak istediğiniz cihazı ve kullanım ihtiyacınızı belirtin.",
    },
    {
      baslik: "Cihazınızı Belirtin",
      aciklama:
        "Telefon, televizyon, tablet veya medya cihazı kullanımına göre bilgilendirme yapılır.",
    },
    {
      baslik: "Detayları Öğrenin",
      aciklama:
        "Kullanıcı seçeneği, süre ve teknik destek kapsamı size açıklanır.",
    },
    {
      baslik: "Yönlendirme Alın",
      aciklama:
        "Kurulum ve kullanım süreciyle ilgili gerekli bilgiler WhatsApp üzerinden paylaşılır.",
    },
  ];

  const sss = [
    {
      soru: "Bu sitede film, dizi, spor veya yayın bağlantısı var mı?",
      cevap:
        "Hayır. Bu web sitesi üzerinde canlı yayın, film, dizi, maç yayını, kanal listesi veya izleme bağlantısı bulunmaz.",
    },
    {
      soru: "Paket fiyatları neyi kapsıyor?",
      cevap:
        "Fiyatlar; kullanım süreci bilgilendirmesi, cihaz uyumluluğu, kurulum yönlendirmesi ve destek süreci hakkında sunulan hizmet seçeneklerini ifade eder.",
    },
    {
      soru: "Hizmet detaylarını nasıl öğrenebilirim?",
      cevap:
        "WhatsApp butonuna tıklayarak cihaz uyumluluğu, kullanım süreci, süre seçenekleri ve destek kapsamı hakkında bilgi alabilirsiniz.",
    },
    {
      soru: "Bu site medya içeriği barındırıyor mu?",
      cevap:
        "Hayır. Site yalnızca tanıtım, bilgilendirme, fiyat sunumu ve WhatsApp iletişim yönlendirmesi amacı taşır.",
    },
  ];

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.25, 1]);

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 42,
      filter: "blur(12px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080102] text-white">
      <style>{`
        @keyframes premiumText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes heroFilm {
          0% { transform: translateX(-10%) skewX(-8deg); opacity: 0; }
          20% { opacity: .28; }
          100% { transform: translateX(120%) skewX(-8deg); opacity: 0; }
        }

        @keyframes softPulse {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .9; transform: scale(1.12); }
        }

        @keyframes scanMove {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: .24; }
          100% { transform: translateY(100%); opacity: 0; }
        }

        @keyframes borderRun {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        @keyframes floatingCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .premium-text {
          background: linear-gradient(90deg, #facc15, #fb923c, #ef4444, #7f1d1d, #f59e0b, #facc15);
          background-size: 320% 320%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: premiumText 5.5s ease infinite;
        }

        .cinema-section {
          background:
            radial-gradient(circle at 15% 8%, rgba(250, 204, 21, .16), transparent 26%),
            radial-gradient(circle at 82% 20%, rgba(239, 68, 68, .22), transparent 32%),
            radial-gradient(circle at 50% 70%, rgba(251, 146, 60, .13), transparent 38%),
            linear-gradient(180deg, #080102 0%, #170406 42%, #080102 100%);
        }

        .cinema-grid {
          background-image:
            linear-gradient(rgba(250,204,21,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,204,21,.04) 1px, transparent 1px);
          background-size: 46px 46px;
        }

        .cinema-noise {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,.13) 1px, transparent 0);
          background-size: 24px 24px;
        }

        .film-strip {
          background-image:
            linear-gradient(90deg, rgba(0,0,0,.85) 0 18px, transparent 18px calc(100% - 18px), rgba(0,0,0,.85) calc(100% - 18px)),
            repeating-linear-gradient(0deg, transparent 0 18px, rgba(250,204,21,.16) 18px 24px, transparent 24px 42px);
        }

        .gold-border {
          position: relative;
        }

        .gold-border::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(120deg, rgba(250,204,21,.95), rgba(251,146,60,.7), rgba(239,68,68,.8), rgba(127,29,29,.9), rgba(250,204,21,.9));
          background-size: 300% 300%;
          animation: borderRun 7s linear infinite;
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .shine-layer {
          position: relative;
          overflow: hidden;
        }

        .shine-layer::after {
          content: "";
          position: absolute;
          top: -20%;
          bottom: -20%;
          left: -50%;
          width: 42%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.16), transparent);
          animation: heroFilm 7s ease-in-out infinite;
          pointer-events: none;
        }

        .scan-card {
          position: relative;
          overflow: hidden;
        }

        .scan-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(250,204,21,.14), transparent);
          animation: scanMove 6.5s linear infinite;
          pointer-events: none;
        }

        .floating-card {
          animation: floatingCard 5.8s ease-in-out infinite;
        }

        .soft-pulse {
          animation: softPulse 5s ease-in-out infinite;
        }
      `}</style>

      <section className="cinema-section relative min-h-screen px-4 py-6 md:px-8 lg:px-14">
        <div className="cinema-grid absolute inset-0 opacity-30" />
        <div className="cinema-noise absolute inset-0 opacity-[0.045]" />
        <div className="film-strip pointer-events-none absolute inset-y-0 left-0 w-10 opacity-30 md:w-14" />
        <div className="film-strip pointer-events-none absolute inset-y-0 right-0 w-10 opacity-30 md:w-14" />

        <motion.div
          style={{ y: glowY, scale: glowScale }}
          className="soft-pulse absolute left-[-160px] top-[-140px] h-[390px] w-[390px] rounded-full bg-[#facc15]/20 blur-[120px]"
        />
        <motion.div
          style={{ y: heroY }}
          className="soft-pulse absolute right-[-170px] top-[150px] h-[430px] w-[430px] rounded-full bg-[#ef4444]/25 blur-[130px]"
        />
        <div className="soft-pulse absolute bottom-[-180px] left-1/2 h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-[#fb923c]/20 blur-[140px]" />

        <motion.header
          initial={{ opacity: 0, y: -22, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="gold-border relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-[30px] bg-black/35 px-4 py-4 shadow-2xl shadow-black/40 backdrop-blur-xl md:px-6"
        >
          <div>
            <p className="premium-text text-2xl font-black tracking-tight md:text-3xl">
              NET DİJİTAL
            </p>
            <p className="text-xs font-medium text-orange-100/70">
              Dijital yayın bilgilendirme ve teknik destek
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] px-5 py-3 text-sm font-black text-black shadow-lg shadow-orange-500/20"
          >
            WhatsApp
          </motion.a>
        </motion.header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-200 backdrop-blur"
            >
              Premium sinema modu • Süre seçenekleri • Teknik destek
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl"
            >
              Dijital Yayın Hizmetleri İçin{" "}
              <span className="premium-text">Kurulum, Fiyat ve Teknik Bilgi</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-orange-50/75 md:text-lg"
            >
              Film, dizi, spor, belgesel ve eğlence kategorilerine yönelik dijital
              yayın hizmetleri hakkında; cihaz uyumluluğu, süre seçenekleri,
              kurulum süreci ve destek kapsamı için WhatsApp üzerinden bilgi
              alabilirsiniz.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] px-8 py-4 text-center text-base font-black text-black shadow-2xl shadow-orange-500/25"
              >
                WhatsApp’tan Bilgi Al
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#paketler"
                className="rounded-full border border-yellow-400/20 bg-white/10 px-8 py-4 text-center text-base font-bold text-white backdrop-blur hover:bg-white/15"
              >
                Fiyatları İncele
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-[28px] border border-yellow-400/25 bg-black/35 p-5 text-sm leading-7 text-yellow-100/90 backdrop-blur"
            >
              Bu web sitesi yalnızca tanıtım, fiyat bilgilendirmesi ve iletişim
              yönlendirmesi amacıyla hazırlanmıştır. Site üzerinde canlı yayın,
              kanal listesi, izleme bağlantısı, m3u/xtream kodu veya üçüncü taraf
              medya içeriği bulunmamaktadır.
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -14, filter: "blur(16px)" }}
            animate={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="relative perspective-[1200px]"
          >
            <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-yellow-400/20 via-orange-500/25 to-red-700/25 blur-2xl" />

            <motion.div
              whileHover={{ rotateX: 2, rotateY: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              className="gold-border scan-card shine-layer floating-card relative overflow-hidden rounded-[40px] bg-black/55 p-5 shadow-2xl shadow-black/60 backdrop-blur-xl"
            >
              <div className="rounded-[30px] border border-yellow-400/10 bg-[#120405]/90 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-orange-100/60">Destek Hattı</p>
                    <h2 className="premium-text text-4xl font-black">Aktif</h2>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/25 bg-yellow-400/10 text-3xl text-yellow-300 shadow-lg shadow-yellow-500/20">
                    ▶
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    ["Telefon", "0530 723 12 66"],
                    ["Başlangıç", "200 TL"],
                    ["Bilgilendirme", "WhatsApp üzerinden"],
                    ["Kapsam", "Kurulum, cihaz ve destek bilgisi"],
                  ].map(([label, value], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 22 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.12, duration: 0.5 }}
                      className="rounded-2xl border border-yellow-400/15 bg-white/[0.05] p-4"
                    >
                      <p className="text-sm text-orange-100/55">{label}</p>
                      <p className="mt-1 text-xl font-black text-white">
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block rounded-2xl bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] px-6 py-4 text-center font-black text-black"
                >
                  Detaylı Bilgi Al
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="hizmetler"
        className="relative bg-[#080102] px-4 py-20 md:px-8 lg:px-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,.11),transparent_35%)]" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Hizmet Bilgileri
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Aradığınız bilgiyi{" "}
              <span className="premium-text">tek yerden alın</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50/60">
              Dijital yayın hizmetleri, kurulum rehberi, cihaz uyumluluğu,
              süre seçenekleri ve teknik destek hakkında bilgi almak için
              WhatsApp üzerinden iletişime geçebilirsiniz.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {hizmetler.map((item) => (
              <motion.div
                key={item.baslik}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="gold-border shine-layer rounded-[32px] bg-[#150406] p-6 shadow-2xl shadow-black/30"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-yellow-400/10 px-4 py-3 text-sm font-black text-yellow-300">
                  {item.etiket}
                </div>
                <h3 className="text-xl font-black text-white">
                  {item.baslik}
                </h3>
                <p className="mt-3 leading-7 text-orange-50/60">
                  {item.aciklama}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="paketler"
        className="relative bg-[#120405] px-4 py-20 md:px-8 lg:px-14"
      >
        <div className="cinema-grid absolute inset-0 opacity-20" />
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-700/20 blur-[120px]" />
        <div className="absolute right-[-140px] bottom-10 h-[360px] w-[360px] rounded-full bg-yellow-400/16 blur-[120px]" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">
              Fiyat Seçenekleri
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Süreye göre{" "}
              <span className="premium-text">fiyat ve bilgi seçenekleri</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-orange-50/60">
              Aşağıdaki fiyatlar kullanım süreci, kurulum yönlendirmesi, cihaz
              uyumluluğu ve destek bilgilendirmesi için sunulmuştur. Site üzerinde
              yayın, kanal listesi veya izleme bağlantısı bulunmaz.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {paketler.map((item) => (
              <motion.div
                key={item.ad}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="group rounded-[32px] border border-yellow-400/15 bg-black/35 p-6 backdrop-blur hover:border-yellow-300/60 hover:bg-black/50"
              >
                <p className="premium-text text-3xl font-black">{item.ad}</p>

                <div className="mt-5 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-5 py-4">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-200/80">
                    Fiyat
                  </p>
                  <p className="mt-1 text-4xl font-black text-white">
                    {item.fiyat}
                  </p>
                </div>

                <p className="mt-4 min-h-[120px] leading-7 text-orange-50/60">
                  {item.aciklama}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block rounded-full border border-yellow-400/20 bg-white/10 px-5 py-3 text-center text-sm font-black text-white transition group-hover:bg-gradient-to-r group-hover:from-[#facc15] group-hover:via-[#fb923c] group-hover:to-[#ef4444] group-hover:text-black"
                >
                  WhatsApp’tan Bilgi Al
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="kurulum"
        className="bg-[#080102] px-4 py-20 md:px-8 lg:px-14"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Kurulum Rehberi
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Bilgi alma süreci{" "}
              <span className="premium-text">4 adımda tamamlanır</span>
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {adimlar.map((item, index) => (
              <motion.div
                key={item.baslik}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.018 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="rounded-[32px] border border-yellow-400/15 bg-[#150406] p-6 shadow-2xl shadow-black/25 hover:border-orange-400/60"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#facc15] via-[#fb923c] to-[#ef4444] text-xl font-black text-black">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black">{item.baslik}</h3>
                <p className="mt-3 leading-7 text-orange-50/60">
                  {item.aciklama}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative bg-[#120405] px-4 py-20 md:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 42, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-2"
        >
          <motion.div
            whileHover={{ y: -8 }}
            className="gold-border rounded-[38px] bg-black/40 p-7 backdrop-blur md:p-10"
          >
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Yasal Bilgilendirme
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Site yalnızca{" "}
              <span className="premium-text">tanıtım, fiyat ve iletişim</span>{" "}
              içindir
            </h2>
            <p className="mt-6 leading-8 text-orange-50/65">
              Bu web sitesinde medya oynatıcı, kanal listesi, yayın akışı,
              izleme bağlantısı, m3u/xtream kodu, üçüncü taraf içerik veya
              üyelikle içerik erişimi bulunmaz. Tüm detaylar bilgi amaçlı olarak
              WhatsApp üzerinden paylaşılır.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[38px] border border-yellow-400/15 bg-white/[0.06] p-7 backdrop-blur md:p-10"
          >
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">
              Hızlı İletişim
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Detaylı bilgi için hemen yazın
            </h2>
            <p className="mt-6 leading-8 text-orange-50/65">
              Dijital yayın hizmetleri, kurulum rehberi, cihaz uyumluluğu, süre
              seçenekleri ve kullanım bilgileri hakkında WhatsApp üzerinden
              iletişime geçebilirsiniz.
            </p>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] px-9 py-4 font-black text-black shadow-2xl shadow-orange-500/25"
            >
              0530 723 12 66
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <section id="sss" className="bg-[#080102] px-4 py-20 md:px-8 lg:px-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Sık Sorulan Sorular
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Merak edilenler
            </h2>
          </motion.div>

          <div className="space-y-4">
            {sss.map((item) => (
              <motion.div
                key={item.soru}
                variants={fadeUp}
                whileHover={{ x: 8 }}
                className="rounded-[28px] border border-yellow-400/15 bg-[#150406] p-6"
              >
                <h3 className="text-lg font-black">{item.soru}</h3>
                <p className="mt-3 leading-7 text-orange-50/60">
                  {item.cevap}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative bg-[#120405] px-4 py-20 md:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="shine-layer mx-auto max-w-5xl rounded-[42px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/15 via-orange-500/15 to-red-800/20 p-8 text-center shadow-2xl shadow-black/50 md:p-12"
        >
          <h2 className="text-3xl font-black md:text-5xl">
            Dijital yayın hizmetleri hakkında{" "}
            <span className="premium-text">bilgi almak ister misiniz?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50/70">
            Kurulum, cihaz uyumluluğu, kullanıcı seçenekleri, fiyat bilgisi ve
            teknik destek kapsamı için WhatsApp üzerinden iletişime
            geçebilirsiniz.
          </p>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] px-9 py-4 font-black text-black"
          >
            WhatsApp’tan Bilgi Al
          </motion.a>
        </motion.div>
      </section>

      <footer className="border-t border-yellow-400/10 bg-[#080102] px-4 py-8 text-center text-sm leading-7 text-orange-50/45 md:px-8 lg:px-14">
        <p>
          Yasal Bilgilendirme: Bu site yalnızca bilgilendirme, fiyat sunumu ve
          iletişim yönlendirmesi amacı taşır. Yayın, medya içeriği, kanal
          listesi, izleme bağlantısı, m3u/xtream kodu veya üçüncü taraf içerik
          barındırmaz.
        </p>
      </footer>

      <motion.a
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] px-6 py-4 text-sm font-black text-black shadow-2xl shadow-orange-500/30"
      >
        WhatsApp
      </motion.a>
    </main>
  );
}