import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();

  return (
    <>
      {/* INTRO SECTION */}
      <section className="about-intro reveal" id="about-intro">
        <div className="content-wrap">
          <div className="about-head">
            <h2 className="about-title">
              <span className="about-title-en">ABOUT</span>
              <span className="about-title-jp">私について</span>
            </h2>
            <div className="about-line" aria-hidden="true"></div>
          </div>

          <div className="about-grid">
            <div className="about-image">
              <img src="/images/myphoto2.png" alt="Profile Photo in Thailand" />
            </div>
            
            <div className="about-text">
              <p>ミャンマー出身。大学では情報工学科を卒業し、2023年に来日しました。</p>
              <p>現在は日本電子専門学校Webデザイン科に在籍し、デザインやフロントエンド技術について学んでいます。</p>
              <p>大学時代からものづくりに強い興味を持ち、ユーザーが楽しめる体験を形にしたいと考えるようになりました。Webデザインとフロントエンド開発は、デザインと技術の両方を活かしてユーザー体験を創り出せる分野だと感じています。</p>
              <p>将来は、見た目の美しさだけでなく、使いやすさや体験設計まで考えられるフロントエンドエンジニアになることが目標です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="about-bio" id="about-bio">
        <div className="content-wrap">
          <div className="about-head reveal">
            <h2 className="about-title">
              <span className="about-title-en">BIOGRAPHY</span>
              <span className="about-title-jp">フロントエンジニアを目指すまで</span>
            </h2>
            <div className="about-line" aria-hidden="true"></div>
          </div>

          <div className="timeline">
            <div className="timeline-item reveal-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-left">
                <div className="time-date">2015.12</div>
                <div className="time-title">西ヤンゴン工科大学に入学</div>
                <div className="time-sub">(情報技術科)</div>
              </div>
              <div className="timeline-right">
                <p>プログラミングやシステム開発とネットワークの基礎を学び、IT分野への理解を深める。</p>
              </div>
            </div>

            <div className="timeline-item reveal-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-left">
                <div className="time-date">2023.3</div>
                <div className="time-title">西ヤンゴン工科大学卒業</div>
                <div className="time-sub">(工学士・情報技術科)</div>
              </div>
              <div className="timeline-right">
                <p>大学での学びを通して、技術で人の生活を支えることに魅力を感じる。</p>
              </div>
            </div>

            <div className="timeline-item reveal-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-left">
                <div className="time-date">2023.4</div>
                <div className="time-title">中央工学校附属日本語学校に入学</div>
              </div>
              <div className="timeline-right">
                <p>将来日本でIT分野に携わることを目標に、日本語を集中的に学ぶ。</p>
              </div>
            </div>

            <div className="timeline-item reveal-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-left">
                <div className="time-date">2025.3</div>
                <div className="time-title">中央工学校附属日本語学校卒業</div>
              </div>
              <div className="timeline-right">
                <p>日本語能力とコミュニケーション力を高める。</p>
              </div>
            </div>

            <div className="timeline-item reveal-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-left">
                <div className="time-date">2025.4</div>
                <div className="time-title">日本電子専門学校に入学</div>
                <div className="time-sub">(Webデザイン科)</div>
              </div>
              <div className="timeline-right">
                <p>デザインとフロントエンド技術を学び、ユーザー体験を形にする表現力を磨いている。</p>
              </div>
            </div>

            <div className="timeline-item reveal-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-left">
                <div className="time-date">FUTURE</div>
                <div className="time-title">フロントエンジニア</div>
              </div>
              <div className="timeline-right">
                <p>これまで培ってきた情報技術の知識と、日本で学んだデザイン・表現力を活かし、ユーザーにとって使いやすく、心に残る体験を提供できるフロントエンドエンジニアを目指しています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="about-skills" id="about-skills">
        <div className="content-wrap">
          <div className="about-head reveal">
            <h2 className="about-title">
              <span className="about-title-en">SKILL</span>
              <span className="about-title-jp">今できるもの</span>
            </h2>
            <div className="about-line" aria-hidden="true"></div>
          </div>

          <div className="skills-wrapper">
            <div className="skills-column">
              <div className="skill-item reveal">
                <div className="skill-info">
                  <span className="skill-name">HTML</span>
                  <span className="skill-pct">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" data-width="90%"></div>
                </div>
              </div>
              <div className="skill-item reveal">
                <div className="skill-info">
                  <span className="skill-name">CSS</span>
                  <span className="skill-pct">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" data-width="85%"></div>
                </div>
              </div>
              <div className="skill-item reveal">
                <div className="skill-info">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-pct">80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" data-width="80%"></div>
                </div>
              </div>
            </div>

            <div className="skills-column">
              <div className="skill-item reveal">
                <div className="skill-info">
                  <span className="skill-name">React Js</span>
                  <span className="skill-pct">80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" data-width="80%"></div>
                </div>
              </div>
              <div className="skill-item reveal">
                <div className="skill-info">
                  <span className="skill-name">Illustrator</span>
                  <span className="skill-pct">60%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" data-width="60%"></div>
                </div>
              </div>
              <div className="skill-item reveal">
                <div className="skill-info">
                  <span className="skill-name">Photoshop</span>
                  <span className="skill-pct">60%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" data-width="60%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHS SECTION */}
      <section className="about-strengths" id="about-strengths">
        <div className="content-wrap">
          <div className="about-head reveal">
            <h2 className="about-title">
              <span className="about-title-en">STRENGTHS</span>
              <span className="about-title-jp">強み</span>
            </h2>
            <div className="about-line" aria-hidden="true"></div>
          </div>

          <div className="strengths-wrapper">
            <div className="strength-card reveal-card">
              <div className="strength-left">
                <span className="strength-num">01</span>
                <h3 className="strength-name">チームワーク</h3>
              </div>
              <div className="strength-right">
                <p>チームで協力しながら目標を達成することが得意です。相手の意見を尊重しながら、自分の考えも分かりやすく伝えることを大切にしています。<br />
                開発や制作では、一人で完結するのではなく、周囲と連携することでより良い成果が生まれると考えています。チーム全体の動きを意識し、自分にできることを積極的に行動に移します。</p>
              </div>
            </div>

            <div className="strength-card reveal-card">
              <div className="strength-left">
                <span className="strength-num">02</span>
                <h3 className="strength-name">コミュニケー<br />ション力</h3>
              </div>
              <div className="strength-right">
                <p>相手の立場に立って考え、分かりやすく丁寧に伝えることを心がけています。日本語学校での学びやこれまでの経験を通して、多様な価値観を尊重する姿勢を身につけました。<br />
                報告・連絡・相談を大切にし、安心して任せてもらえる存在になることを目標としています。</p>
              </div>
            </div>

            <div className="strength-card reveal-card">
              <div className="strength-left">
                <span className="strength-num">03</span>
                <h3 className="strength-name">挑戦力</h3>
              </div>
              <div className="strength-right">
                <p>新しいことを学ぶことが好きで、積極的に挑戦します。日本でIT分野に進むという目標を持ち、言語や技術の習得にも努力してきました。分からないことがあれば自ら調べ、実際に手を動かして理解を深めます。変化の多いIT業界の中でも、常に学び続ける姿勢を大切にしています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIKES SECTION */}
      <section className="about-likes" id="about-likes">
        <div className="content-wrap">
          <div className="about-head reveal">
            <h2 className="about-title">
              <span className="about-title-en">LIKES</span>
              <span className="about-title-jp">自分を表す写真</span>
            </h2>
            <div className="about-line" aria-hidden="true"></div>
          </div>

          <div className="likes-grid">
            <div className="like-item reveal-like"><img src="/images/about-img6.png" alt="White rabbit" /></div>
            <div className="like-item reveal-like"><img src="/images/about-img5.png" alt="Nature landscape" /></div>
            <div className="like-item reveal-like"><img src="/images/about-img4.png" alt="Strawberries" /></div>
            <div className="like-item reveal-like"><img src="/images/about-img3.png" alt="Passport and tickets" /></div>
            <div className="like-item reveal-like"><img src="/images/about-img2.png" alt="Food and drinks" /></div>
            <div className="like-item reveal-like"><img src="/images/about-img1.png" alt="Camera" /></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;