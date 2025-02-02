import { styled } from "styled-components"

export const SwitchThemeContainer = styled.div<{ isDark: boolean }>`
  padding: 2em;
  margin: 0 auto;
  background-color: ${({ isDark }) => (isDark ? "#202838" : "#ffe082")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s;
`

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 100px;
  height: 40px;

  input {
    display: none;
  }
`

export const Slider = styled.span<{ isDark: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ isDark }) => (isDark ? "#323E52" : "#ffecb3")};
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: ${({ isDark }) => (isDark ? '"🌙"' : '"🌞"')};
    height: 40px;
    width: 40px;
    transition: 0.4s;
    border-radius: 50%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${({ isDark }) => (isDark ? "translateX(60px)" : "none")};
  }
`

