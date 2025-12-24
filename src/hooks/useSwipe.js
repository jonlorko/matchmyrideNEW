// src/hooks/useSwipe.js

import { useState } from 'react';

export const useSwipe = (onSwipeLeft, onSwipeRight) => {
  const [swipeStartX, setSwipeStartX] = useState(0);
  const [swipeCurrentX, setSwipeCurrentX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleTouchStart = (e) => {
    setSwipeStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - swipeStartX;
    setSwipeCurrentX(diff);
    if (Math.abs(diff) > 50) {
      setSwipeDirection(diff > 0 ? 'right' : 'left');
    } else {
      setSwipeDirection(null);
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    const swipeThreshold = 100;
    if (Math.abs(swipeCurrentX) > swipeThreshold) {
      if (swipeCurrentX > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }
    }
    setIsSwiping(false);
    setSwipeCurrentX(0);
    setSwipeDirection(null);
    setSwipeStartX(0);
  };

  const handleMouseDown = (e) => {
    setSwipeStartX(e.clientX);
    setIsSwiping(true);
  };

  const handleMouseMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.clientX;
    const diff = currentX - swipeStartX;
    setSwipeCurrentX(diff);
    if (Math.abs(diff) > 50) {
      setSwipeDirection(diff > 0 ? 'right' : 'left');
    } else {
      setSwipeDirection(null);
    }
  };

  const handleMouseUp = () => {
    if (!isSwiping) return;
    const swipeThreshold = 100;
    if (Math.abs(swipeCurrentX) > swipeThreshold) {
      if (swipeCurrentX > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }
    }
    setIsSwiping(false);
    setSwipeCurrentX(0);
    setSwipeDirection(null);
    setSwipeStartX(0);
  };

  return {
    swipeCurrentX,
    isSwiping,
    swipeDirection,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp
  };
};
