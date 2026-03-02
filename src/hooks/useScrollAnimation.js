import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    // 1. Standard Reveal & Skills
    const standardObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // For skill bars
          if (e.target.classList.contains('skill-bar-fill')) {
            e.target.style.width = e.target.getAttribute('data-width');
          }
          standardObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal, .skill-bar-fill').forEach(el => standardObserver.observe(el));

    // 2. Timeline Reveal
    const timelineObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          timelineObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -15% 0px", threshold: 0 });

    document.querySelectorAll('.reveal-timeline').forEach(el => timelineObserver.observe(el));

    // 3. Cards & Likes Reveal
    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal-card, .reveal-like, .detail-anim').forEach(el => cardObserver.observe(el));

    return () => {
      standardObserver.disconnect();
      timelineObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);
};