// generateUtilities.ts

interface Utility {
  [key: string]: {
    gridColumn: string;
  };
}

const generateUtilities = (): Utility => {
  const utilities: Utility = {};

  // Generate utilities for grid-column spans
  const gridColumnSpan: { [key: string]: string } = {
    '1': 'span 1 / span 1',
    '2': 'span 2 / span 2',
    '3': 'span 3 / span 3',
    '4': 'span 4 / span 4',
    '5': 'span 5 / span 5',
    '6': 'span 6 / span 6',
    '7': 'span 7 / span 7',
    '8': 'span 8 / span 8',
    '9': 'span 9 / span 9',
    '10': 'span 10 / span 10',
    '11': 'span 11 / span 11',
    '12': 'span 12 / span 12',
  };

  Object.keys(gridColumnSpan).forEach((key) => {
    const value = gridColumnSpan[key];
    utilities[`.grid-${key}`] = {
      gridColumn: value,
    };
  });

  return utilities;
};

export default generateUtilities;
