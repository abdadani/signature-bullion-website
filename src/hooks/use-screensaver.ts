import { useEffect, useRef, useState } from 'react';

interface UseScreensaverOptions {
  idleTime?: number; // in milliseconds, default 5 minutes
  enabled?: boolean;
}

export function useScreensaver({
  idleTime = 5 * 60 * 1000, // 5 minutes default
  enabled = true,
}: UseScreensaverOptions = {}) {
  const [isScreensaverActive, setIsScreensaverActive] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const resetIdleTimer = () => {
      // Clear existing timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timer
      timeoutRef.current = setTimeout(() => {
        setIsScreensaverActive(true);
      }, idleTime);
    };

    // List of events that indicate user activity
    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'click'];

    // Add event listeners
    events.forEach((event) => {
      window.addEventListener(event, resetIdleTimer);
    });

    // Initialize timer
    resetIdleTimer();

    return () => {
      // Cleanup
      events.forEach((event) => {
        window.removeEventListener(event, resetIdleTimer);
      });
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [idleTime, enabled]);

  const exitScreensaver = () => {
    setIsScreensaverActive(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return {
    isScreensaverActive,
    exitScreensaver,
  };
}
