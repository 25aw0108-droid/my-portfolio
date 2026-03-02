import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypingText from '../components/TypingText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { worksList } from '../data/projects';
import VibratingButton from '../components/VibratingButton';

const Home = () => {
  useScrollAnimation();
  const trackRef = useRef(null);

  const AnimatedCounter = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // If the target is 0, just show 0
    if (target === 0) return;

    // Calculate how fast each number should tick based on the total duration
    const stepTime = Math.abs(Math.floor(duration / target));
    let current = 0;
    
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      
      // Stop the timer when it reaches the target
      if (current >= target) {
        clearInterval(timer);
      }
    }, stepTime);

    // Cleanup the timer if the component unmounts
    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
};

  const scrollSlider = (direction) => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.querySelector('.work-card').offsetWidth + 35;
      trackRef.current.scrollBy({ left: direction === 'next' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="full-section" id="home">
        <div className="content-wrap">
          <div className="home-inner">
            <div className="home-content">
              <p className="home-name">こんにちは。<span className="highlight">カイキンウー</span>と申します。</p>
              <div className="home-title"><TypingText /></div>
              <div className="home-actions">
                <a href="/履歴書/08_カイキンウー履歴書.pdf" className="btn-home" download>履歴書</a>
                <a href="#contact" className="btn-home">Contact</a>
              </div>
              <div className="home-stats">
                <div className="stat">
                  <span className="stat-num"><AnimatedCounter target={8} duration={2000}/>+</span>
                  <span className="stat-label">Years SchoolExp.</span>
                </div>
                <div className="stat">
                  <span className="stat-num"><AnimatedCounter target={8} duration={2000}/>+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
            </div>
            <div className="home-visual">
              <div className="myphoto"><img src="/images/myphoto1.png" alt="my_photo" /></div>
              <div className="float-badge badge-1"><span className="badge-icon">🏫</span><span>日本電子専門学校</span></div>
              <div className="float-badge badge-2"><span className="badge-icon">👩‍💻</span><span>Frontend Engineer</span></div>
              <div className="float-badge badge-3"><span className="badge-icon">📍</span><span>Tokyo, Japan</span></div>
            </div>
          </div>
        </div>
      </div>

      <section className="works reveal" id="projects">
        <div className="content-wrap">
          
          <div className="works-head">
            <h2 className="works-title">
              <span className="works-title-en">WORKS</span><span className="works-title-jp">制作物</span>
            </h2>
            <div className="works-line" aria-hidden="true"></div>
          </div>

          <div className="works-slider-wrapper">
            <button className="slider-arrow arrow-prev" onClick={() => scrollSlider('prev')}><i className="fa-solid fa-chevron-left"></i></button>
            
            {/* ONLY ONE works-slider-track HERE */}
            <div className="works-slider-track" ref={trackRef}>
              {worksList.map((work, index) => (
                <article className="work-card" key={index}>
                  <div className="work-topline" aria-hidden="true"></div>
                  <div className="work-thumb" aria-hidden="true">
                    <div className="work-thumb">
                      <img src={work.image} alt={work.alt} />
                    </div>
                  </div>
                  
                  <div className="work-body">
                    <h3 className="work-name">{work.title}</h3>
                    
                    <div className="work-meta">
                      <span className="work-pill">{work.pill}</span>
                      
                      {/* Map through the roles to add the text and the | separator */}
                      {work.roles.map((role, i) => (
                        <React.Fragment key={i}>
                          <span className="work-mini">{role}</span>
                          {i < work.roles.length - 1 && <span className="work-sep">|</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Only render this div if there are tools to show */}
                    {work.tools && work.tools.length > 0 && (
                      <div className="work-language">
                        {work.tools.map((tool, i) => (
                          <span className="work-tool" key={i}>{tool}</span>
                        ))}
                      </div>
                    )}
                    
                    {work.isExternal ? (
                      
                      <a className="work-link" href={work.link} target="_blank" rel="noopener noreferrer">
                        詳しく見る <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    ) : (
                      <Link className="work-link" to={work.link}>
                        詳しく見る <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <button className="slider-arrow arrow-next" onClick={() => scrollSlider('next')}><i className="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
      </section>

      <section className="contact-cta reveal" id="contact">
        <div className="content-wrap">
          <div className="contact-cta-box">
            <h2 className="contact-cta-title">ご覧いただきありがとうございます。</h2>
            <VibratingButton 
              className="contact-cta-mail" 
              href="mailto:25aw0108@jec.ac.jp"
              triggerEvent="triggerContactVibrate"
            >
              <span className="mail-text">25aw0108@jec.ac.jp</span>
              <span className="mail-icon"><i className="fa-solid fa-arrow-trend-up"></i></span>
            </VibratingButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;