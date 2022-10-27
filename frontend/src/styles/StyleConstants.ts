import { css } from 'styled-components';

export enum StyleConstants {
  NAV_BAR_HEIGHT = '4rem',
}

export const linkStyle = css`
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;

export const scrollbar = (type: 'vertical' | 'horizontal') => css`
  &::-webkit-scrollbar {
    visibility: hidden;
    width: ${type === 'vertical' ? '6px' : 'unset'};
    height: ${type === 'horizontal' ? '10px' : 'unset'};
  }
  &:hover {
    &::-webkit-scrollbar {
      visibility: visible;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: rgba(45, 45, 45, 1);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: rgba(67, 67, 67, 1);
    }
  }
`;

export const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const pushBtn = css`
  transition: all 0.2s ease;
  &:not([disabled]) {
    &:focus {
      transform: translateY(5px);
      box-shadow: none;
    }
  }
`;

export const tooltip = css`
  display: inline;
  position: relative;
  &:hover:after {
    display: flex;
    justify-content: center;
    background: #444;
    border-radius: 8px;
    color: #fff;
    content: attr(title);
    margin: -82px auto 0;
    font-size: 16px;
    padding: 13px;
    width: 220px;
  }
  &:hover:before {
    border: solid;
    border-color: #444 transparent;
    border-width: 12px 6px 0 6px;
    content: '';
    left: 45%;
    bottom: 30px;
    position: absolute;
  }
`;
