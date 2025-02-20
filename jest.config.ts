import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './' // diretório do seu projeto
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transforma arquivos TS/TSX com ts-jest
    '^.+\\.(js|jsx)$': 'babel-jest' // Transforma arquivos JS/JSX com babel-jest
  },
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy', // Mapeia CSS modules
    '^@/(.*)$': '<rootDir>/src/$1' // Caso esteja usando aliases no seu projeto
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'] // Configura o jest-dom
}

export default createJestConfig(customJestConfig)
