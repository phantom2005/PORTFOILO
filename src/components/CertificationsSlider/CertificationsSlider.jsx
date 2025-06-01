import React, { useRef, useEffect, useState } from 'react';
import './CertificationsSlider.css';

import html from '../../assets2/cerificates/html-css.jpg';
import webthree from '../../assets2/cerificates/web3.jpg';
import fltp1 from '../../assets2/cerificates/fltp1day.jpg';
import fltp2 from '../../assets2/cerificates/day2fltp.jpg';
import blend from '../../assets2/cerificates/devblend.png';
import devup from '../../assets2/cerificates/dev-up bootcamp.jpg';
import tally from '../../assets2/cerificates/tally.jpg';
import fiftydays from '../../assets2/cerificates/50daysleet.png';
import maybadge from '../../assets2/cerificates/mayleet.png';
import palo from '../../assets2/cerificates/paloaulto.jpg';
import js from '../../assets2/cerificates/javascript.jpg';
import hwd from '../../assets2/cerificates/hwd.jpg'
import bvest from '../../assets2/cerificates/bvest.jpg';

const certificationsData = [
  { id: 1, image: fiftydays, issuer: '50 Days of Code', date: 'Jan 2023', alt: '50 Days of Code Challenge', verificationUrl: '' },
  { id: 2, image: html, issuer: 'The Odin Project', date: 'Mar 2023', alt: 'HTML & CSS Fundamentals', verificationUrl: '' },
  { id: 3, image: webthree, issuer: 'Alchemy University', date: 'May 2023', alt: 'Web3 Development Bootcamp', verificationUrl: '' },
  { id: 4, image: fltp1, issuer: 'FLTP', date: 'Jul 2023', alt: 'FLTP Day 1 Workshop', verificationUrl: '' },
  { id: 5, image: fltp2, issuer: 'FLTP', date: 'Sep 2023', alt: 'FLTP Day 2 Workshop', verificationUrl: '' },
  { id: 6, image: blend, issuer: 'DevBlend Hackathon', date: 'Nov 2023', alt: 'DevBlend Hackathon Participant', verificationUrl: '' },
  { id: 7, image: devup, issuer: 'Dev-Up Bootcamp', date: 'Dec 2023', alt: 'Dev-Up Frontend Bootcamp', verificationUrl: '' },
  { id: 8, image: tally, issuer: 'Tally Education', date: 'Jan 2024', alt: 'Tally.ERP 9 Certified', verificationUrl: '' },
  { id: 9, image: maybadge, issuer: 'MayLeet Challenge', date: 'May 2024', alt: 'MayLeet Coding Challenge', verificationUrl: '' },
  { id: 10, image: palo, issuer: 'Palo Alto Networks', date: 'Jun 2024', alt: 'Palo Alto Network Security', verificationUrl: '' },
  { id: 11, image: js, issuer: 'FreeCodeCamp', date: 'Jul 2024', alt: 'JavaScript Algorithms and Data Structures', verificationUrl: '' },
  { id: 12, image: hwd, issuer: 'HWD Summit', date: 'Aug 2024', alt: 'HWD Summit Attendee', verificationUrl: '' },
  { id: 13, image: bvest, issuer: 'B-Vest Tech Fest', date: 'Sep 2024', alt: 'B-Vest Tech Fest Participant', verificationUrl: '' },
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

          const speedFactor = 0.1;
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
          onMouseEnter={() => { if (!zoomedCert && sliderTrackRef.current) sliderTrackRef.current.style.animationPlayState = 'paused'; }}
          onMouseLeave={() => { if (!zoomedCert && sliderTrackRef.current) sliderTrackRef.current.style.animationPlayState = 'running'; }}
        >
          {duplicatedCertifications.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className={`certificationCard ${zoomedCert?.id === cert.id ? 'zoomedCardHidden' : ''}`}
              onClick={() => handleCardClick(cert)}
            >
              <div className="certificateImageWrapper">
                <img src={cert.image} alt={cert.alt || `Certificate from ${cert.issuer}`} className="certificateImage" />
              </div>
              <p><strong>Issued by:</strong> {cert.issuer}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="verificationLink"
                >
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
              <img src={zoomedCert.image} alt={zoomedCert.alt || `Certificate Details`} className="zoomedImage" />
            </div>
            <h3>{zoomedCert.alt || 'Certificate Details'}</h3>
            {/* Removed the 'Issued by' and 'Date' lines from the zoomed card */}
            {zoomedCert.verificationUrl && (
              <a
                href={zoomedCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="zoomedVerificationLink"
              >
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