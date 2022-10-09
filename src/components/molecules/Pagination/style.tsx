import styled from "styled-components";

export const PaginationWrapper = styled.div`
  .pagination-container {
    display: flex;
    list-style-type: none;
    gap: 10px;
    .pagination-item {
      height: 32px;
      color: #404b52;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 32px;
      background: #e6f6ff;
      border-radius: 4px;
      &.selected,
      &.num:hover {
        cursor: pointer;
        background: #00a3ff;
        color: white;
        font-weight: 400;
        font-size: 12px;
        border-radius: 4px;
      }
      &:hover {
        background: #00a2ff73;
      }
      &.dots {
        background-color: transparent;
        cursor: default;
        &:hover {
          background-color: transparent;
        }
      }
      .arrow {
        &::before {
          position: relative;
          /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
          content: "";
          /* By using an em scale, the arrows will size with the font */
          display: inline-block;
          width: 0.4em;
          height: 0.4em;
          border-right: 0.12em solid rgba(0, 0, 0, 0.87);
          border-top: 0.12em solid rgba(0, 0, 0, 0.87);
        }
        &.left {
          transform: rotate(-135deg) translate(-50%);
        }
        &.right {
          transform: rotate(45deg);
        }
      }
      &.disabled {
        pointer-events: none;
        .arrow::before {
          border-right: 0.12em solid rgba(0, 0, 0, 0.43);
          border-top: 0.12em solid rgba(0, 0, 0, 0.43);
        }
        &:hover {
          background-color: transparent;
          cursor: default;
        }
      }
      &.arrow {
        cursor: pointer;
        background-color: white;
        border: 1px solid #00a3ff;
        border-radius: 4px;
      }
    }
  }
`;
