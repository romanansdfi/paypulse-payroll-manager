
import React from 'react';

/**
 * A utility function that ensures React is properly imported in components
 * This helps fix "React refers to a UMD global" errors when components
 * reference React without proper imports
 */
export const ensureReactImport = () => {
  // This function doesn't need to do anything
  // It's just a way to make sure React is imported in files that need it
  return React;
};

/**
 * Format date strings consistently throughout the application
 */
export const formatDate = (date: string | Date): string => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

