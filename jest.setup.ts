// jest.setup.ts

import '@testing-library/jest-dom'; // Extende as asserções do Jest para o Testing Library
import React from 'react';

// Mock do next/image para evitar erro de nome de arquivo de imagem
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return React.createElement('img', props);
  },
}));
