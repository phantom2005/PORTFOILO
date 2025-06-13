import React, { useRef, useEffect, useState, useCallback } from 'react';
import './CertificationsSlider.css';

// Import your certificate images
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
  { id: 1, image: fiftydays, issuer: 'LEETCODE', date: 'MAY 2025', alt: '50 Days of Code Challenge', verificationUrl: '' },
  { id: 2, image: html, issuer: 'UDEMY', date: 'MAY 2025', alt: 'HTML & CSS Fundamentals', verificationUrl: '' },
  { id: 3, image: webthree, issuer: 'UDMEY', date: 'May 2025', alt: 'Web3 Development Bootcamp', verificationUrl: '' },
  { id: 4, image: fltp1, issuer: 'KIET GROUP OF INSTUTION', date: 'DEC 2023', alt: 'FLTP Day 1 Workshop', verificationUrl: '' },
  { id: 5, image: fltp2, issuer: 'KIET GROUP OF INSTUTION', date: 'JAN 2024', alt: 'FLTP Day 2 Workshop', verificationUrl: '' },
  { id: 6, image: blend, issuer: 'KIET(TECHNOCRATS) ', date: 'JAN 2024', alt: 'DevBlend Hackathon Participant', verificationUrl: '' },
  { id: 7, image: devup, issuer: 'KIET(DevUP)', date: 'DEC 2023', alt: 'Dev-Up Frontend Bootcamp', verificationUrl: '' },
  { id: 8, image: tally, issuer: 'MAGPIE-TECH', date: 'AUG 2022', alt: 'Tally.ERP 9 Certified', verificationUrl: '' },
  { id: 9, image: maybadge, issuer: 'LEETCODE', date: 'MAY 2025', alt: 'MayLeet Coding Challenge', verificationUrl: '' },
  { id: 10, image: palo, issuer: 'Palo Alto Networks', date: 'MAY 2025', alt: 'Palo Alto Network Security', verificationUrl: '' },
  { id: 11, image: js, issuer: 'UDEMY', date: 'MAY 2025', alt: 'JavaScript Algorithms and Data Structures', verificationUrl: '' },
  { id: 12, image: hwd, issuer: 'GL-BAJAJ(HACK WITH DELHI)', date: 'MAY 2024', alt: 'HWD Summit Attendee', verificationUrl: '' },
  { id: 13, image: bvest, issuer: 'BHARTIYA VIDHYAPEETH(BVP-HEX)', date: 'OCT 2024', alt: 'B-Vest Tech Fest Participant', verificationUrl: '' },
];

const CertificationsSlider = () => {
  const sliderTrackRef = useRef(null);
  const animationFrameId = useRef(null);
  const lastTime = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [startTranslateX, setStartTranslateX] = useState(0);
  const dragDistanceRef = useRef(0);

  const [autoScrollSpeed] = useState(150); // Set desired scroll speed here (pixels per second)
  const autoScrollRef = useRef(autoScrollSpeed);

  const [zoomedCert, setZoomedCert] = useState(null);

  const getOriginalContentWidth = useCallback(() => {
    if (sliderTrackRef.current) {
      const cardElements = sliderTrackRef.current.querySelectorAll('.certificationCard');
      if (cardElements.length > 0) {
        let totalWidth = 0;
        for (let i = 0; i < certificationsData.length; i++) {
          const card = cardElements[i];
          totalWidth += card.getBoundingClientRect().width + parseFloat(getComputedStyle(card).marginRight || '0');
        }
        return totalWidth;
      }
    }
    return 0;
  }, []);

  const animateScroll = useCallback((timestamp) => {
    if (!lastTime.current) lastTime.current = timestamp;
    const deltaTime = timestamp - lastTime.current;
    lastTime.current = timestamp;

    if (!isDragging && sliderTrackRef.current && !zoomedCert) {
      setCurrentTranslateX(prevX => {
        let newX = prevX - (autoScrollRef.current * (deltaTime / 1000));
        const originalWidth = getOriginalContentWidth();

        if (Math.abs(newX) >= originalWidth) {
          newX += originalWidth;
        }
        return newX;
      });
    }
    animationFrameId.current = requestAnimationFrame(animateScroll);
  }, [isDragging, zoomedCert, getOriginalContentWidth]);

  const startAutoScroll = useCallback(() => {
    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(animateScroll);
    }
  }, [animateScroll]);

  const stopAutoScroll = useCallback(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
      lastTime.current = 0;
    }
  }, []);

  useEffect(() => {
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.transform = `translateX(${currentTranslateX}px)`;
    }
    startAutoScroll();
    return () => stopAutoScroll();
  }, [currentTranslateX, startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    autoScrollRef.current = autoScrollSpeed;
  }, [autoScrollSpeed]);

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0 && e.pointerType !== 'touch') return;

    setIsDragging(true);
    setStartX(e.clientX || e.touches[0]?.clientX);
    setStartTranslateX(currentTranslateX);
    dragDistanceRef.current = 0;
    stopAutoScroll();

    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.cursor = 'grabbing';
      sliderTrackRef.current.style.transition = 'none';
    }
    e.preventDefault();
  }, [currentTranslateX, stopAutoScroll]);

  const onPointerMove = useCallback((e) => {
    if (!isDragging) return;

    const currentX = e.clientX || e.touches[0]?.clientX;
    const walk = currentX - startX;
    dragDistanceRef.current = Math.abs(walk);

    setCurrentTranslateX(startTranslateX + walk);
  }, [isDragging, startX, startTranslateX]);

  const onPointerUp = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.cursor = 'grab';
      sliderTrackRef.current.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    startAutoScroll();
  }, [isDragging, startAutoScroll]);

  useEffect(() => {
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    window.addEventListener('pointerleave', onPointerUp);

    return () => {
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('pointerleave', onPointerUp);
    };
  }, [onPointerUp]);

  const duplicatedCertifications = [
    ...certificationsData,
    ...certificationsData,
    ...certificationsData,
    ...certificationsData,
  ];

  const handleCardClick = useCallback((cert, event) => {
    const CLICK_TOLERANCE = 5;
    if (dragDistanceRef.current > CLICK_TOLERANCE) {
      event.stopPropagation();
      return;
    }

    if (!zoomedCert) {
      setZoomedCert(cert);
      stopAutoScroll();
    }
  }, [zoomedCert, stopAutoScroll]);

  const handleOverlayClick = useCallback(() => {
    setZoomedCert(null);
    startAutoScroll();
  }, [startAutoScroll]);

  return (
    <section id="certifications" className="certificationsSection">
      <h2>My Certifications</h2>
      <div className="sliderContainer">
        <div
          ref={sliderTrackRef}
          className="sliderTrack"
          style={{ transform: `translateX(${currentTranslateX}px)` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
        >
          {duplicatedCertifications.map((cert, index) => (
            <div
              key={index}
              className={`certificationCard ${zoomedCert?.id === cert.id ? 'zoomedCardHidden' : ''}`}
              onClick={(e) => handleCardClick(cert, e)}
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
              <img src={zoomedCert.image} alt={zoomedCert.alt || 'Certificate Details'} className="zoomedImage" />
            </div>
            <h3>{zoomedCert.alt || 'Certificate Details'}</h3>
            <p><strong>Issued by:</strong> {zoomedCert.issuer}</p>
            <p><strong>Date:</strong> {zoomedCert.date}</p>
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