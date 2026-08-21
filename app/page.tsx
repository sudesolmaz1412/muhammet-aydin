"use client";

import { useEffect, useState } from "react";

const milestones = [
  ["1983", "Başlangıç", "Denizli'nin Çivril ilçesinde başlayan bir hayat hikâyesi."],
  ["2009", "Tahtakale", "İstanbul Tahtakale'de teknoloji ve GSM ticaretiyle girişimcilik yolculuğu başladı."],
  ["2011", "Ayyıldız Teknoloji", "Teknoloji çözümleri, teknik servis ve kurumsal sistemlerle büyüyen yeni bir dönem."],
  ["2017", "Skylax", "E-ticaret, teknoloji dağıtımı ve kurumsal çözümler alanında yeni bir marka."],
  ["2024", "Uluslararası Açılım", "Skylax LLC ile Kuzey Amerika pazarına uzanan yeni bir vizyon."],
  ["2025", "Dijital Medya", "Skylax Limited ve HaberVeriyor.com ile teknoloji ve medyanın birleştiği dönem."],
];

const countries = [
  ["01", "TAYVAN", "Teknoloji & Tedarik"],
  ["02", "ÇİN", "Üretim & Ticaret"],
  ["03", "TAYLAND", "Pazar Araştırması"],
  ["04", "FİLİPİNLER", "İş Geliştirme"],
  ["05", "DUBAİ", "Küresel Ticaret"],
  ["06", "GÜRCİSTAN", "Bölgesel İş Ağı"],
  ["07", "UKRAYNA", "Uluslararası Saha"],
];

const countryPositions = [
  { left: "72%", top: "35%" }, // Tayvan
  { left: "66%", top: "31%" }, // Çin
  { left: "63%", top: "45%" }, // Tayland
  { left: "72%", top: "55%" }, // Filipinler
  { left: "43%", top: "58%" }, // Dubai
  { left: "40%", top: "40%" }, // Gürcistan
  { left: "45%", top: "30%" }, // Ukrayna
];


export default function Home() {
  const [intro, setIntro] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeCountry, setActiveCountry] = useState(0);


  useEffect(() => {
    const countryTimer = setInterval(() => {
      setActiveCountry((current) => (current + 1) % countries.length);
    }, 1000);

    return () => clearInterval(countryTimer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 3200);

    const scroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", scroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <main className={`site ${intro ? "introLoading" : "introReady"}`}>

      {intro && (
        <div className="introScreen">
          <div className="introGlow" />

          <div className="introPortrait">
            <img
              src="/muhammet-aydin.jpg"
              alt="Muhammet Aydın"
            />
          </div>

          <div className="introInfo">
            <div className="introName">MUHAMMET AYDIN</div>
            <div className="introRole">
              GİRİŞİMCİ · İŞ İNSANI · MEDYA
            </div>
            <div className="introLine" />
          </div>
        </div>
      )}

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="navInner">
          <a href="#" className="logo">
            M<span>A</span>
          </a>

          <div className="links">
            <a href="#hikaye">Hikâyem</a>
            <a href="#kariyer">Kariyer</a>
            <a href="#dunya">Dünya</a>
            <a href="#kurumlar">Kurumlar</a>
            <a href="#vizyon">Vizyon</a>
            <a href="#iletisim">İletişim</a>
          </div>

          <button className="menuBtn" onClick={() => setMenu(!menu)}>
            ☰
          </button>
        </div>

        {menu && (
          <div className="mobileMenu">
            {["hikaye","kariyer","dunya","kurumlar","vizyon","iletisim"].map((x) => (
              <a key={x} href={`#${x}`} onClick={() => setMenu(false)}>
                {x.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="hero">
        <div className="heroOrb" />

        <div className="heroContent">
          <div className="eyebrow">OTOBİYOGRAFİ · KARİYER · VİZYON</div>

          <h1>
            <span>Muhammet</span>
            <strong>Aydın</strong>
          </h1>

          <p>
            Tahtakale'nin dar sokaklarından uluslararası iş ortaklıklarına,
            teknolojiden dijital medyaya uzanan bir girişimcilik yolculuğu.
          </p>

          <div className="heroButtons">
            <a href="#hikaye" className="goldButton">HİKÂYEMİ KEŞFET <b>↗</b></a>
            <a href="#iletisim" className="outlineButton">İLETİŞİM</a>
          </div>
        </div>

        <div className="heroSide">
          <span>1983</span>
          <small>DENİZLİ</small>
        </div>

        <div className="scrollHint">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      <section className="stats">
        <div><strong>15<span>+</span></strong><small>YIL DENEYİM</small></div>
        <div><strong>3.500<span>+</span></strong><small>GSM BAYİ & İŞ AĞI</small></div>
        <div><strong>8<span>+</span></strong><small>ÜLKEDE SAHA</small></div>
        <div><strong>2</strong><small>KURUMSAL MARKA</small></div>
      </section>

      <section className="section story" id="hikaye">
        <div className="sectionTop">
          <div className="sectionNo">01 / HİKÂYEM</div>
          <div className="sectionMini">THE BEGINNING</div>
        </div>

        <div className="storyGrid">
          <div className="portrait">
            <div className="portraitImage">
              <img src="/muhammet-aydin.jpg" alt="Muhammet Aydın" />
            </div>

            <div className="portraitLabel">
              <span>MUHAMMET AYDIN</span>
              <small>Girişimci · İş İnsanı · Medya</small>
            </div>

            <div className="portraitYear">1983</div>
          </div>

          <div className="storyCopy">
            <h2>
              Bir telefoncu
              <br />
              <em>dükkânından.</em>
            </h2>

            <p className="lead">
              2009 yılında İstanbul Tahtakale'de başlayan yolculuk,
              bugün teknoloji, uluslararası ticaret ve dijital medyayı
              bir araya getiren bir vizyona dönüştü.
            </p>

            <div className="goldQuote">
              “Başarmaktan başka şansım yoktu.”
            </div>

            <p>
              Ben Muhammet Aydın. 1983 yılında Denizli'nin Çivril ilçesinde
              doğdum. Bugün teknoloji, uluslararası ticaret, dijital medya,
              yayıncılık ve PR alanlarında çalışmalarımı sürdürüyorum.
            </p>

            <p>
              Edindiğim deneyimi tek bir vizyon altında birleştiriyorum:
              doğru, hızlı ve tarafsız haberciliği teknolojiyle
              bütünleştirmek.
            </p>
          </div>
        </div>
      </section>

      <section className="darkSection" id="kariyer">
        <div className="section">
          <div className="sectionTop">
            <div className="sectionNo">02 / KARİYER</div>
            <div className="sectionMini">THE JOURNEY</div>
          </div>

          <h2 className="giantTitle">
            Yolculuğun
            <br />
            <em>dönüm noktaları.</em>
          </h2>

          <div className="timeline">
            {milestones.map(([year, title, text]) => (
              <div className="timelineItem" key={year}>
                <div className="timelineYear">{year}</div>
                <div className="timelineDot" />
                <div className="timelineContent">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section world" id="dunya">
        <div className="sectionTop">
          <div className="sectionNo">03 / KÜRESEL UFUK</div>
          <div className="sectionMini">FROM TURKEY TO THE WORLD</div>
        </div>

        <div className="worldHeading">
          <div>
            <h2>
              Türkiye'den
              <br />
              <em>dünyaya.</em>
            </h2>
          </div>

          <p>
            Farklı coğrafyalarda gerçekleştirilen saha ziyaretleri,
            üretici görüşmeleri, tedarik zinciri araştırmaları ve
            uluslararası iş geliştirme çalışmaları.
          </p>
        </div>

        <div className="worldMap">
          <div className="mapLine line1" />
          <div className="mapLine line2" />
          <div className="mapPoint turkey">
            <span />
            TÜRKİYE
          </div>

          {(() => {
            const [no, name, sub] = countries[activeCountry];
            const position = countryPositions[activeCountry];

            return (
              <div
                className="activeCountryPin"
                style={{
                  left: position.left,
                  top: position.top,
                }}
                key={name}
              >
                <span className="pinDot" />
                <span className="pinArrow">↗</span>

                <div className="pinLabel">
                  <strong>{name}</strong>
                  <small>{sub}</small>
                </div>
              </div>
            );
          })()}
        </div>

        <div className="worldFooter">
          <span>+ DEVAM EDEN YOLCULUK</span>
          <i />
          <span>INTERNATIONAL BUSINESS</span>
        </div>
      </section>

      <section className="darkSection" id="kurumlar">
        <div className="section">
          <div className="sectionTop">
            <div className="sectionNo">04 / KURUMLAR</div>
            <div className="sectionMini">BUSINESS PORTFOLIO</div>
          </div>

          <h2 className="giantTitle">
            Markalar ve
            <br />
            <em>projeler.</em>
          </h2>

          <div className="companies">
            <article>
              <small>01 / TEKNOLOJİ</small>
              <h3>Skylax A.Ş.</h3>
              <p>E-ticaret, teknoloji dağıtımı ve kurumsal teknoloji çözümleri.</p>
            </article>

            <article>
              <small>02 / DİJİTAL MEDYA</small>
              <h3>HaberVeriyor.com</h3>
              <p>Güvenilir, hızlı ve etik habercilik anlayışıyla dijital haber ekosistemi.</p>
            </article>

            <article>
              <small>03 / MEDYA & İLETİŞİM</small>
              <h3>Çekiç Medya</h3>
              <p>Haber, sanat, organizasyon, iletişim, PR ve danışmanlık çözümleri.</p>
            </article>

            <article>
              <small>04 / YAYINCILIK</small>
              <h3>A'dan Z'ye Eğitim</h3>
              <p>Basılı ve dijital yayıncılık alanında içerik üretimi ve yayın yönetimi.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section vision" id="vizyon">
        <div className="sectionTop">
          <div className="sectionNo">05 / ULUSLARARASI VİZYON</div>
          <div className="sectionMini">THE FUTURE</div>
        </div>

        <div className="visionContent">
          <div className="visionNumber">05</div>
          <h2>
            İyi işler
            <br />
            <em>üretmek.</em>
          </h2>
          <p>
            Uluslararası ticaret ve iş geliştirme alanlarında edindiğim
            deneyimi diplomatik tanınırlık ve kültürel etkileşim alanına
            taşımayı hedefliyorum.
          </p>
          <div className="visionLine" />
        </div>
      </section>

      <section className="section contact" id="iletisim">
        <div className="sectionNo">06 / İLETİŞİM</div>

        <h2>
          Birlikte
          <br />
          <em>üretelim.</em>
        </h2>

        <p>
          Muhammet Aydın<br />
          Kurucu & Yönetim Kurulu Başkanı — Skylax A.Ş.<br />
          Kurucu & İmtiyaz Sahibi — HaberVeriyor.com<br /><br />
          +90 507 999 35 55<br />
          skylaxmuhammet@gmail.com
        </p>

        <div className="heroButtons">
          <a className="goldButton" href="mailto:skylaxmuhammet@gmail.com">
            E-POSTA GÖNDER ↗
          </a>
          <a className="outlineButton" href="https://www.haberveriyor.com" target="_blank">
            HABERVERİYOR.COM
          </a>
        </div>
      </section>

      <footer>
        <span>MUHAMMET AYDIN · OTOBİYOGRAFİ</span>
        <span>GÜVENİLİR HABERCİLİK · GÜÇLÜ İŞ BİRLİKLERİ · DİJİTAL GELECEK</span>
      </footer>

      <style jsx global>{`
        .introScreen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(circle at center, rgba(166,123,40,.13), transparent 32%),
            #07101b;
          animation: introExit .9s cubic-bezier(.77,0,.18,1) 1.75s forwards;
          pointer-events: none;
        }

        .introGlow {
          position: absolute;
          width: 520px;
          height: 520px;
          border: 1px solid rgba(202,163,69,.18);
          border-radius: 50%;
          animation: introRing 2.2s ease-out forwards;
        }

        .introGlow::before,
        .introGlow::after {
          content: "";
          position: absolute;
          inset: 42px;
          border: 1px solid rgba(202,163,69,.10);
          border-radius: 50%;
        }

        .introGlow::after {
          inset: 85px;
        }

        .introPortrait {
          position: relative;
          z-index: 2;
          width: 230px;
          height: 300px;
          overflow: hidden;
          border: 1px solid rgba(202,163,69,.55);
          box-shadow:
            0 0 0 10px rgba(202,163,69,.025),
            0 25px 90px rgba(0,0,0,.55);
          opacity: 0;
          transform: scale(.92);
          filter: grayscale(100%) contrast(1.05);
          animation: introPortrait 1.25s cubic-bezier(.2,.8,.2,1) .15s forwards;
        }

        .introPortrait img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
        }

        .introInfo {
          position: absolute;
          z-index: 3;
          bottom: 12%;
          text-align: center;
          opacity: 0;
          transform: translateY(15px);
          animation: introText .8s ease .65s forwards;
        }

        .introName {
          color: #f4f0e8;
          font-family: "Cormorant Garamond", serif;
          font-size: 42px;
          letter-spacing: 6px;
          font-weight: 500;
        }

        .introRole {
          margin-top: 8px;
          color: #b58a32;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 4px;
        }

        .introLine {
          width: 55px;
          height: 1px;
          margin: 18px auto 0;
          background: #b58a32;
          transform: scaleX(0);
          animation: introLine .7s ease 1s forwards;
        }

        @keyframes introPortrait {
          0% {
            opacity: 0;
            transform: scale(.88) translateY(15px);
            filter: grayscale(100%) blur(8px);
          }
          60% {
            opacity: 1;
            filter: grayscale(70%) blur(1px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: grayscale(0%) blur(0);
          }
        }

        @keyframes introRing {
          0% {
            opacity: 0;
            transform: scale(.55);
          }
          35% {
            opacity: 1;
          }
          100% {
            opacity: .65;
            transform: scale(1.18);
          }
        }

        @keyframes introText {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes introLine {
          to {
            transform: scaleX(1);
          }
        }

        @keyframes introExit {
          0% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0 100% 0);
            opacity: 0;
          }
        }

        @media (max-width: 600px) {
          .introPortrait {
            width: 190px;
            height: 250px;
          }

          .introName {
            font-size: 34px;
            letter-spacing: 4px;
          }

          .introGlow {
            width: 390px;
            height: 390px;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background: #f2eee5;
          color: #18202a;
          font-family: "DM Sans", sans-serif;
        }

        a { color: inherit; text-decoration: none; }

        .site {
          overflow: hidden;
          background:
            radial-gradient(circle at 80% 15%, rgba(180,138,50,.08), transparent 25%),
            #f2eee5;
        }

        /* INTRO */

        .intro {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #09111b;
          animation: introOut .8s 1.65s forwards;
        }

        .introContent {
          position: relative;
          z-index: 3;
          text-align: center;
          animation: introUp 1.3s ease forwards;
        }

        .introMark {
          color: #d0a84f;
          font-family: "Cormorant Garamond", serif;
          font-size: 110px;
          line-height: .8;
          letter-spacing: 8px;
        }

        .introLine {
          width: 0;
          height: 1px;
          margin: 25px auto;
          background: #caa34b;
          animation: lineOpen 1s .35s forwards;
        }

        .introName {
          color: #f4efe4;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 8px;
          animation: fadeIn 1s .55s both;
        }

        .introSub {
          margin-top: 14px;
          color: #7d8996;
          font-size: 8px;
          letter-spacing: 4px;
          animation: fadeIn 1s .8s both;
        }

        .introGlow {
          position: absolute;
          width: 700px;
          height: 700px;
          border: 1px solid rgba(208,168,79,.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 80px rgba(208,168,79,.025),
            0 0 0 160px rgba(208,168,79,.018);
          animation: rotateWorld 15s linear infinite;
        }

        .introWorld span {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 900px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(208,168,79,.18), transparent);
          transform-origin: center;
        }

        .introWorld span:nth-child(1) { transform: translate(-50%,-50%) rotate(20deg); }
        .introWorld span:nth-child(2) { transform: translate(-50%,-50%) rotate(65deg); }
        .introWorld span:nth-child(3) { transform: translate(-50%,-50%) rotate(110deg); }
        .introWorld span:nth-child(4) { transform: translate(-50%,-50%) rotate(155deg); }

        @keyframes introOut {
          to { opacity: 0; visibility: hidden; }
        }

        @keyframes introUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes lineOpen {
          to { width: 150px; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes rotateWorld {
          to { transform: rotate(360deg); }
        }

        /* NAV */

        .nav {
          position: fixed;
          z-index: 100;
          width: 100%;
          padding: 28px 6%;
          transition: .4s;
        }

        .nav.scrolled {
          padding: 15px 6%;
          background: rgba(9,17,27,.88);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(202,163,75,.15);
        }

        .navInner {
          max-width: 1450px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-family: "Cormorant Garamond", serif;
          font-size: 48px;
          font-weight: 600;
          letter-spacing: 5px;
        }

        .logo span { color: #a67b28; }

        .links {
          display: flex;
          gap: 32px;
        }

        .links a {
          color: #737d87;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          transition: .3s;
        }

        .nav.scrolled .links a { color: #c5cbd0; }
        .links a:hover { color: #b58a32; }

        .menuBtn { display: none; }

        /* HERO */

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 160px 8%;
          isolation: isolate;
        }

        .hero:before {
          content: "";
          position: absolute;
          z-index: -2;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(242,238,229,1) 0%, rgba(242,238,229,.94) 52%, rgba(242,238,229,.55) 100%);
        }

        .heroOrb {
          position: absolute;
          z-index: -1;
          right: -230px;
          top: 80px;
          width: 800px;
          height: 800px;
          border: 1px solid rgba(166,123,40,.2);
          border-radius: 50%;
          box-shadow:
            0 0 0 100px rgba(166,123,40,.025),
            0 0 0 200px rgba(166,123,40,.018);
          animation: slowSpin 25s linear infinite;
        }

        @keyframes slowSpin {
          to { transform: rotate(360deg); }
        }

        .heroContent {
          max-width: 1100px;
          position: relative;
          z-index: 2;
        }

        .eyebrow,
        .sectionNo {
          color: #a67b28;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .eyebrow { margin-bottom: 30px; }

        .hero h1 {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(90px, 12vw, 180px);
          font-weight: 500;
          line-height: .73;
          letter-spacing: -7px;
        }

        .hero h1 span {
          display: block;
          color: #18202a;
        }

        .hero h1 strong {
          display: block;
          margin-left: 8%;
          color: #a67b28;
          font-weight: 500;
        }

        .heroLine {
          width: 130px;
          height: 2px;
          margin: 52px 0 25px;
          background: #b58a32;
        }

        .heroContent > p {
          max-width: 650px;
          margin: 0;
          color: #68737e;
          font-size: 16px;
          line-height: 1.9;
        }

        .heroButtons {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }

        .goldButton,
        .outlineButton {
          padding: 16px 24px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          transition: .3s;
        }

        .goldButton {
          background: #b58a32;
          color: white;
        }

        .outlineButton {
          border: 1px solid rgba(166,123,40,.3);
          color: #69737e;
        }

        .goldButton:hover,
        .outlineButton:hover {
          transform: translateY(-4px);
        }

        .heroSide {
          position: absolute;
          right: 8%;
          bottom: 100px;
          text-align: right;
        }

        .heroSide span {
          display: block;
          color: #a67b28;
          font-family: "Cormorant Garamond", serif;
          font-size: 90px;
          line-height: .8;
        }

        .heroSide small {
          color: #89919a;
          font-size: 8px;
          letter-spacing: 4px;
        }

        .scrollHint {
          position: absolute;
          bottom: 35px;
          left: 8%;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8c949c;
          font-size: 7px;
          letter-spacing: 3px;
        }

        .scrollHint span {
          width: 45px;
          height: 1px;
          background: #b58a32;
        }

        /* STATS */

        .stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          border-top: 1px solid rgba(166,123,40,.25);
          border-bottom: 1px solid rgba(166,123,40,.25);
        }

        .stats div {
          padding: 42px 20px;
          text-align: center;
          border-right: 1px solid rgba(166,123,40,.13);
        }

        .stats div:last-child { border: 0; }

        .stats strong {
          display: block;
          color: #a67b28;
          font-family: "Cormorant Garamond", serif;
          font-size: 58px;
          font-weight: 500;
        }

        .stats strong span { font-size: 35px; }

        .stats small {
          color: #7b858e;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        /* SECTIONS */

        .section {
          max-width: 1450px;
          margin: auto;
          padding: 140px 7%;
        }

        .sectionTop {
          display: flex;
          justify-content: space-between;
          margin-bottom: 65px;
        }

        .sectionMini {
          color: #9299a0;
          font-size: 8px;
          letter-spacing: 3px;
        }

        .storyGrid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 110px;
          align-items: center;
        }
.storyCopy h2,
        .worldHeading h2,
        .contact h2 {
          margin: 0 0 35px;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(65px, 7vw, 110px);
          font-weight: 500;
          line-height: .82;
          letter-spacing: -3px;
        }

        em {
          color: #a67b28;
          font-style: italic;
        }

        .storyCopy p {
          max-width: 670px;
          color: #747f89;
          font-size: 15px;
          line-height: 1.9;
        }

        .storyCopy .lead {
          color: #303a45;
          font-family: "Cormorant Garamond", serif;
          font-size: 27px;
          line-height: 1.3;
        }

        .goldQuote {
          margin: 35px 0;
          padding-left: 22px;
          border-left: 2px solid #b58a32;
          color: #a67b28;
          font-family: "Cormorant Garamond", serif;
          font-size: 25px;
          font-style: italic;
        }

        /* DARK */

        .darkSection {
          background: #0b1521;
          color: #eee9df;
        }

        .giantTitle {
          margin: 0 0 80px;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(70px, 8vw, 125px);
          font-weight: 500;
          line-height: .8;
          letter-spacing: -4px;
        }

        .darkSection .sectionMini { color: #697582; }

        /* TIMELINE */

        .timeline {
          max-width: 1000px;
          margin-left: auto;
        }

        .timelineItem {
          position: relative;
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 60px;
          padding: 40px 0;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .timelineItem:last-child {
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .timelineYear {
          color: #caa34b;
          font-family: "Cormorant Garamond", serif;
          font-size: 43px;
        }

        .timelineDot {
          position: absolute;
          left: 145px;
          top: 58px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #caa34b;
          box-shadow: 0 0 0 7px rgba(202,163,75,.08);
        }

        .timelineContent {
          padding-left: 35px;
        }

        .timelineContent h3 {
          margin: 0 0 12px;
          font-family: "Cormorant Garamond", serif;
          font-size: 37px;
          font-weight: 500;
        }

        .timelineContent p {
          margin: 0;
          max-width: 600px;
          color: #788592;
          font-size: 14px;
          line-height: 1.8;
        }

        /* WORLD */

        .worldHeading {
          display: grid;
          grid-template-columns: 1fr .7fr;
          gap: 100px;
          align-items: end;
          margin-bottom: 80px;
        }

        .worldHeading p {
          margin: 0;
          color: #737d87;
          font-size: 14px;
          line-height: 1.9;
        }

        .worldMap {
          position: relative;
          min-height: 620px;
          padding: 60px 0;
          border-top: 1px solid rgba(166,123,40,.25);
          border-bottom: 1px solid rgba(166,123,40,.25);
        }

        .mapLine {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(166,123,40,.2), transparent);
          transform-origin: left center;
        }

        .line1 {
          width: 70%;
          left: 8%;
          top: 48%;
          transform: rotate(-12deg);
        }

        .line2 {
          width: 55%;
          left: 25%;
          top: 53%;
          transform: rotate(18deg);
        }

        .mapPoint {
          position: absolute;
          left: 2%;
          top: 47%;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a67b28;
          font-size: 8px;
          letter-spacing: 3px;
        }

        .mapPoint span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #b58a32;
          box-shadow: 0 0 0 8px rgba(181,138,50,.08);
        }

        .countryCard {
          position: absolute;
          width: 260px;
          min-height: 110px;
          padding: 23px;
          display: flex;
          align-items: center;
          gap: 18px;
          justify-content: space-between;
          background: rgba(239,234,224,.72);
          border: 1px solid rgba(166,123,40,.18);
          backdrop-filter: blur(10px);
          transition: .35s;
        }

        .countryCard:hover {
          transform: translateY(-7px);
          background: #fffaf0;
          border-color: rgba(166,123,40,.55);
          box-shadow: 0 20px 50px rgba(30,35,40,.08);
        }

        .countryNo {
          color: #b58a32;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .countryCard strong {
          display: block;
          color: #202a34;
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          font-weight: 600;
        }

        .countryCard small {
          display: block;
          margin-top: 4px;
          color: #8b939a;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .arrow {
          color: #a67b28;
          font-size: 18px;
        }

        .c1 { left: 8%; top: 8%; }
        .c2 { left: 31%; top: 2%; }
        .c3 { left: 54%; top: 14%; }
        .c4 { right: 3%; top: 4%; }
        .c5 { left: 20%; bottom: 5%; }
        .c6 { left: 48%; bottom: 4%; }
        .c7 { right: 4%; bottom: 8%; }

        .worldFooter {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          margin-top: 35px;
          color: #929aa2;
          font-size: 8px;
          letter-spacing: 3px;
        }

        .worldFooter i {
          width: 45px;
          height: 1px;
          background: #b58a32;
        }

        /* COMPANIES */

        .companies {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(255,255,255,.08);
        }

        .companies article {
          min-height: 280px;
          padding: 42px;
          background: #0b1521;
          border: 1px solid rgba(255,255,255,.04);
          transition: .35s;
        }

        .companies article:hover {
          background: #111e2d;
        }

        .companies small {
          color: #caa34b;
          font-size: 8px;
          letter-spacing: 3px;
        }

        .companies h3 {
          margin: 30px 0 14px;
          font-family: "Cormorant Garamond", serif;
          font-size: 42px;
          font-weight: 500;
        }

        .companies p {
          max-width: 500px;
          margin: 0;
          color: #778492;
          line-height: 1.8;
        }

        /* VISION */

        .vision {
          min-height: 90vh;
          display: flex;
          align-items: center;
        }

        .visionContent {
          position: relative;
          max-width: 1000px;
        }

        .visionNumber {
          position: absolute;
          right: -180px;
          top: -100px;
          color: rgba(166,123,40,.07);
          font-family: "Cormorant Garamond", serif;
          font-size: 300px;
          line-height: 1;
        }

        .visionContent h2 {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(90px, 12vw, 180px);
          font-weight: 500;
          line-height: .75;
          letter-spacing: -6px;
        }

        .visionContent p {
          max-width: 720px;
          margin: 55px 0 0;
          color: #68737d;
          font-size: 17px;
          line-height: 1.9;
        }

        .visionLine {
          width: 160px;
          height: 2px;
          margin-top: 40px;
          background: #b58a32;
        }

        /* CONTACT */

        .contact {
          text-align: center;
        }

        .contact h2 {
          margin-top: 35px;
        }

        .contact > p {
          color: #747f89;
          font-size: 14px;
          line-height: 2;
        }

        .contact .heroButtons {
          justify-content: center;
        }

        footer {
          display: flex;
          justify-content: space-between;
          padding: 30px 7%;
          background: #09111b;
          color: #66717c;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        /* MOBILE */

        @media(max-width:850px) {
          .links { display: none; }

          .menuBtn {
            display: block;
            width: 45px;
            height: 45px;
            border: 1px solid rgba(166,123,40,.3);
            background: transparent;
            color: #a67b28;
            font-size: 20px;
          }

          .mobileMenu {
            position: absolute;
            top: 75px;
            left: 5%;
            right: 5%;
            display: grid;
            gap: 20px;
            padding: 25px;
            background: #0b1521;
            border: 1px solid rgba(166,123,40,.2);
          }

          .mobileMenu a {
            color: #d9d3c8;
            font-size: 9px;
            letter-spacing: 3px;
          }

          .hero {
            min-height: 850px;
            padding: 140px 7% 90px;
          }

          .hero h1 {
            font-size: 78px;
            letter-spacing: -4px;
          }

          .heroSide {
            display: none;
          }

          .stats {
            grid-template-columns: 1fr 1fr;
          }

          .stats div {
            padding: 30px 10px;
          }

          .stats strong {
            font-size: 45px;
          }

          .section {
            padding: 90px 7%;
          }

          .sectionTop {
            margin-bottom: 45px;
          }

          .sectionMini {
            display: none;
          }

          .storyGrid,
          .worldHeading {
            grid-template-columns: 1fr;
            gap: 55px;
          }
.storyCopy h2,
          .worldHeading h2 {
            font-size: 70px;
          }

          .timelineItem {
            grid-template-columns: 75px 1fr;
            gap: 15px;
          }

          .timelineDot {
            left: 70px;
          }

          .timelineContent {
            padding-left: 20px;
          }

          .timelineYear {
            font-size: 27px;
          }

          .countryCard {
            position: relative;
            width: 100%;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
            margin-bottom: 10px;
          }

          .worldMap {
            min-height: auto;
          }

          .mapLine,
          .mapPoint {
            display: none;
          }

          .companies {
            grid-template-columns: 1fr;
          }

          .visionNumber {
            display: none;
          }

          .visionContent h2 {
            font-size: 90px;
          }

          footer {
            flex-direction: column;
            gap: 15px;
          }
        }

        /* MOBİL SON DÜZELTMELER */
        @media (max-width: 600px) {

          /* Timeline */
          .timeline {
            width: 100%;
            max-width: 100%;
          }

          .timelineItem {
            grid-template-columns: 82px minmax(0, 1fr);
            gap: 14px;
            padding: 42px 0;
            overflow: hidden;
          }

          .timelineYear {
            font-size: 27px;
            line-height: 1;
            position: relative;
            z-index: 5;
          }

          .timelineDot {
            left: 76px;
            top: 51px;
            width: 7px;
            height: 7px;
            z-index: 6;
          }

          .timelineContent {
            padding-left: 8px;
            min-width: 0;
            position: relative;
            z-index: 4;
          }

          .timelineContent h3 {
            font-size: 30px;
            line-height: 1.05;
            margin: 0 0 14px;
            position: relative;
            z-index: 5;
          }

          .timelineContent p {
            font-size: 15px;
            line-height: 1.75;
            max-width: 100%;
          }

          /* Vizyon */
          .vision {
            min-height: auto;
            padding-top: 90px;
            padding-bottom: 90px;
          }

          .visionContent {
            width: 100%;
            max-width: 100%;
          }

          .visionContent h2 {
            font-size: clamp(58px, 17vw, 76px) !important;
            line-height: .88 !important;
            letter-spacing: -3px !important;
            word-break: normal;
            overflow-wrap: normal;
          }

          .visionContent p {
            margin-top: 42px !important;
            font-size: 16px !important;
            line-height: 1.8 !important;
            max-width: 100%;
          }

          .visionLine {
            width: 120px;
            margin-top: 32px;
          }

          .visionNumber {
            display: none !important;
          }
        }
/* SON MOBİL DÜZELTME - TIMELINE + PORTRAIT */

@media (max-width: 600px) {

  /* BİYOGRAFİ / PORTRAIT */
  .storyGrid {
    display: flex !important;
    flex-direction: column !important;
    gap: 55px !important;
    align-items: stretch !important;
  }
.storyCopy {
    width: 100% !important;
  }

  .storyCopy h2 {
    font-size: clamp(52px, 15vw, 70px) !important;
    line-height: .9 !important;
    letter-spacing: -2px !important;
    margin-bottom: 28px !important;
  }

  .storyCopy p {
    font-size: 16px !important;
    line-height: 1.8 !important;
    max-width: 100% !important;
  }


  /* TIMELINE */
  .timeline {
    width: 100% !important;
    overflow: hidden !important;
  }

  .timelineItem {
    display: grid !important;
    grid-template-columns: 75px minmax(0, 1fr) !important;
    gap: 18px !important;
    padding: 45px 0 !important;
    overflow: visible !important;
    position: relative !important;
  }

  .timelineYear {
    font-size: 27px !important;
    line-height: 1 !important;
    position: relative !important;
    z-index: 10 !important;
    white-space: nowrap !important;
  }

  .timelineDot {
    display: none !important;
  }

  .timelineContent {
    padding-left: 10px !important;
    min-width: 0 !important;
    position: relative !important;
    z-index: 10 !important;
  }

  .timelineContent h3 {
    font-size: 27px !important;
    line-height: 1.15 !important;
    margin: 0 0 18px !important;
    position: relative !important;
    z-index: 20 !important;
  }

  .timelineContent p {
    font-size: 16px !important;
    line-height: 1.7 !important;
    max-width: 100% !important;
    margin: 0 !important;
  }

  /* ALTIN OVAL/ÇİZGİ EFEKTİNİ MOBİLDE KALDIR */
  .timelineItem::before,
  .timelineItem::after,
  .timelineContent::before,
  .timelineContent::after {
    display: none !important;
  }

  /* Timeline içinde çizgi/oval oluşturan elemanlar */
  .timelineItem > * {
    transform: none !important;
  }
}

        /* YENİ PORTRE KARTI */
.photoCard
@media (max-width: 600px) {
.photoCard
}


        /* ACTIVE COUNTRY */
        #dunya .activeCountry {
          position: absolute !important;
          left: 50% !important;
          top: 50% !important;
          right: auto !important;
          bottom: auto !important;
          transform: translate(-50%, -50%) !important;

          width: min(390px, 72%) !important;
          min-height: 160px !important;
          margin: 0 !important;

          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;

          padding: 28px 30px !important;
          background: rgba(242,238,229,.9) !important;
          border: 1px solid rgba(166,123,40,.28) !important;

          opacity: 1 !important;
          animation: none !important;
          z-index: 30 !important;
          pointer-events: none !important;
          text-align: center !important;
        }

        #dunya .activeCountry strong {
          color: #18202a !important;
          font-family: "Cormorant Garamond", serif !important;
          font-size: clamp(42px, 5vw, 62px) !important;
          font-weight: 500 !important;
          line-height: .9 !important;
        }

        #dunya .activeCountry small {
          margin-top: 10px !important;
          color: #a67b28 !important;
          font-size: 9px !important;
          font-weight: 700 !important;
          letter-spacing: 2.5px !important;
          text-transform: uppercase !important;
        }

        .countryProgress {
          display: flex !important;
          gap: 5px !important;
          margin-top: 18px !important;
        }

        .countryProgress span {
          width: 14px !important;
          height: 2px !important;
          display: block !important;
          background: rgba(166,123,40,.18) !important;
        }

        .countryProgress span.active {
          background: #b58a32 !important;
        }

        @media (max-width: 850px) {
          #dunya .worldMap {
            height: 360px !important;
            min-height: 360px !important;
          }

          #dunya .activeCountry {
            width: 82% !important;
            min-height: 140px !important;
            padding: 22px 16px !important;
          }

          #dunya .activeCountry strong {
            font-size: 38px !important;
          }
        }

        @media (max-width: 480px) {
          #dunya .worldMap {
            height: 330px !important;
            min-height: 330px !important;
          }

          #dunya .activeCountry {
            width: 84% !important;
          }

          #dunya .activeCountry strong {
            font-size: 34px !important;
          }
        }


        /* GLOBAL JOURNEY - COUNTRY PIN */

        #dunya .worldMap {
          position: relative !important;
        }

        #dunya .activeCountryPin {
          position: absolute !important;
          transform: translate(-50%, -50%) !important;

          display: flex !important;
          align-items: center !important;
          gap: 8px !important;

          z-index: 50 !important;
          pointer-events: none !important;

          animation: countryPinIn .28s ease-out both !important;
        }

        #dunya .pinDot {
          width: 9px !important;
          height: 9px !important;
          flex: 0 0 9px !important;

          border-radius: 50% !important;
          background: #b58a32 !important;

          box-shadow:
            0 0 0 5px rgba(181,138,50,.10),
            0 0 18px rgba(181,138,50,.50) !important;

          animation: pinPulse 1s ease-in-out infinite !important;
        }

        #dunya .pinArrow {
          color: #b58a32 !important;
          font-size: 19px !important;
          font-weight: 500 !important;
          line-height: 1 !important;
          text-shadow: 0 4px 15px rgba(181,138,50,.24);
        }

        #dunya .pinLabel {
          display: flex !important;
          flex-direction: column !important;
          gap: 2px !important;

          padding: 7px 11px !important;

          background: rgba(242,238,229,.88) !important;
          border: 1px solid rgba(166,123,40,.20) !important;

          backdrop-filter: blur(8px) !important;

          white-space: nowrap !important;
        }

        #dunya .pinLabel strong {
          color: #18202a !important;
          font-family: "Cormorant Garamond", serif !important;
          font-size: 22px !important;
          font-weight: 500 !important;
          line-height: 1 !important;
        }

        #dunya .pinLabel small {
          color: #9a7a3b !important;
          font-size: 7px !important;
          font-weight: 700 !important;
          letter-spacing: 1.5px !important;
          text-transform: uppercase !important;
        }

        @keyframes countryPinIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.82);
          }

          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes pinPulse {
          0%, 100% {
            transform: scale(.85);
            opacity: .7;
          }

          50% {
            transform: scale(1.25);
            opacity: 1;
          }
        }

        @media (max-width: 850px) {
          #dunya .worldMap {
            height: 360px !important;
            min-height: 360px !important;
          }

          #dunya .pinLabel strong {
            font-size: 18px !important;
          }

          #dunya .pinLabel small {
            font-size: 6px !important;
            letter-spacing: 1px !important;
          }

          #dunya .pinArrow {
            font-size: 16px !important;
          }
        }

        @media (max-width: 480px) {
          #dunya .worldMap {
            height: 330px !important;
            min-height: 330px !important;
          }

          #dunya .pinLabel {
            padding: 6px 8px !important;
          }

          #dunya .pinLabel strong {
            font-size: 16px !important;
          }
        }

      `}</style>
    </main>
  );
  
}
