import React, { useRef, useEffect, useState } from 'react';
import './CertificationsSlider.css';

    const certificationsData = [
  { id: 1, image: '\\projectpic\\jivanamirt.jpeg', issuer: 'mr', date: 'Jan 2023', alt: 'AWS Certified Cloud Practitioner', verificationUrl: '\\projectpic\\jivanamirt.jpeg' },
  { id: 2, image: '\\projectpic\\jivanamirt.jpeg', issuer: 'Google', date: 'Mar 2023', alt: 'Google Analytics Certified', verificationUrl: 'https://example.com/google' },
  { id: 3, image: '\\projectpic\\jivanamirt.jpeg', issuer: 'Scrum Alliance', date: 'May 2023', alt: 'Certified ScrumMaster (CSM)', verificationUrl: 'https://example.com/scrum' },
  { id: 4, image: '\\projectpic\\jivanamirt.jpeg', issuer: 'Udemy (Maximilian Schwarzmüller)', date: 'Jul 2023', alt: 'React - The Complete Guide', verificationUrl: 'https://example.com/react' },
  { id: 5, image: '\\projectpic\\jivanamirt.jpeg', issuer: 'IBM', date: 'Sep 2023', alt: 'Cybersecurity Fundamentals', verificationUrl: 'https://example.com/cyber' },
  { id: 6, image: '\\projectpic\\jivanamirt.jpeg', issuer: 'Coursera (Andrew Ng)', date: 'Nov 2023', alt: 'Machine Learning Specialization', verificationUrl: 'https://example.com/ml' },
  // Add more certifications here
];

const CertificationsSlider = () => {
  const sliderTrackRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [animationDuration, setAnimationDuration] = useState('0s');
  const [zoomedCert, setZoomedCert] = useState(null);

  useEffect(() => {
    const calculateDimensions = () => {
      if (sliderTrackRef.current) {
        const totalCards = certificationsData.length;
        const firstCard = sliderTrackRef.current.querySelector(`.certificationCard`);

        if (firstCard) {
          const individualCardWidth = firstCard.offsetWidth + parseFloat(getComputedStyle(firstCard).marginRight || 0) + parseFloat(getComputedStyle(firstCard).marginLeft || 0);
          const originalContentWidth = individualCardWidth * totalCards;
          setSliderWidth(originalContentWidth);

          const speedFactor = 0.05;
          const duration = originalContentWidth / speedFactor;
          setAnimationDuration(`${duration / 1000}s`);
        }
      }
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

  const duplicatedCertifications = [
    ...certificationsData,
    ...certificationsData,
    ...certificationsData,
    ...certificationsData,
  ];

  const handleCardClick = (cert) => {
    if (!zoomedCert) {
      setZoomedCert(cert);
      if (sliderTrackRef.current) {
        sliderTrackRef.current.style.animationPlayState = 'paused';
      }
    }
  };

  const handleOverlayClick = () => {
    setZoomedCert(null);
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section className="certificationsSection">
      <h2>My Certifications</h2>
      <div className="sliderContainer">
        <div
          ref={sliderTrackRef}
          className="sliderTrack"
          style={{
            '--_slider-width': `${sliderWidth}px`,
            '--_animation-duration': animationDuration,
            minWidth: certificationsData.length > 0 ? 'auto' : '100%',
          }}
          onMouseEnter={() => { if (!zoomedCert) sliderTrackRef.current.style.animationPlayState = 'paused'; }}
          onMouseLeave={() => { if (!zoomedCert) sliderTrackRef.current.style.animationPlayState = 'running'; }}
        >
          {duplicatedCertifications.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className={`certificationCard ${zoomedCert?.id === cert.id ? 'zoomedCardHidden' : ''}`}
              onClick={() => handleCardClick(cert)}
            >
              <div className="certificateImageWrapper">
                <img src={cert.image} alt={cert.alt || `Certificate: ${cert.issuer}`} className="certificateImage" />
              </div>
              <p><strong>Issued by:</strong> {cert.issuer}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              {cert.verificationUrl && (
                <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  Verify Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {zoomedCert && (
        <>
          <div className="overlay" onClick={handleOverlayClick}></div>
          <div className="zoomedCard">
            <button className="closeButton" onClick={handleOverlayClick}>&times;</button>
            <div className="zoomedImageWrapper">
              <img src={zoomedCert.image} alt={zoomedCert.alt || `Certificate: ${zoomedCert.issuer}`} className="zoomedImage" />
            </div>
            <h3>{zoomedCert.alt || 'Certificate Details'}</h3>
            <p><strong>Issued by:</strong> {zoomedCert.issuer}</p>
            <p><strong>Date:</strong> {zoomedCert.date}</p>
            {zoomedCert.verificationUrl && (
              <a href={zoomedCert.verificationUrl} target="_blank" rel="noopener noreferrer">
                Verify Credential
              </a>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default CertificationsSlider;