import VibratingButton from '../components/VibratingButton';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectDetail = () => {
  useScrollAnimation();
  const { id } = useParams();
  const project = projectsData[id];

  // If URL is invalid, send back to home
  if (!project) return <Navigate to="/" />;

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      window.dispatchEvent(new Event('triggerContactVibrate'));
    }
  }, [location.hash]);

  return (
    <section className="work-detail" id="work-detail">
      <div className="content-wrap">
        <div className="works-head detail-anim">
          <h2 className="works-title">
            <span className="works-title-en">WORKS</span>
            <span className="works-title-jp">制作物</span>
          </h2>
          <div className="works-line" aria-hidden="true"></div>
        </div>

        <div className="work-detail-mockup detail-anim">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="work-detail-info">
          <div className="work-detail-header detail-anim">
            <h3 className="work-detail-title">{project.title}</h3>
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <VibratingButton 
                className="btn-outline" 
                triggerEvent="triggerContactVibrate"
              >
                サイトを見る
              </VibratingButton>
            </a>
          </div>

          <div className="work-detail-data">
            <DataRow label="要望" text={project.request} />
            <DataRow label="ターゲット" text={project.target} />
            <DataRow label="コンセプト" text={project.concept} />
            <DataRow label="UIデザイン" text={project.uiDesign} />
            <DataRow label="期限" text={project.duration} />
            <DataRow label="担当" text={project.role} />
            <DataRow label="ツール" text={project.tools} />
            <DataRow label="苦労した点" text={project.struggles} />
            <DataRow label="学んだこと" text={project.learnings} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for cleaner code
const DataRow = ({ label, text }) => (
  <div className="data-row detail-anim">
    <div className="data-label"><span className="label-pill">{label}</span></div>
    <div className="data-text"><p>{text}</p></div>
  </div>
);

export default ProjectDetail;