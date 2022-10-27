import styled from "styled-components";

export const PaginationWrapper = styled.div`
  .pagination-container {
    display: flex;
    list-style-type: none;
    align-items: center;
    gap: 10px;
    .pagination-item {
      height: 32px;
      color: #404b52;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
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
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          border-right: 2px solid #00a3ff;
          border-top: 2px solid #00a3ff;
        }
        &.left {
          transform: rotate(-135deg);
        }
        &.right {
          transform: rotate(45deg);
        }
      }
      &.disabled {
        pointer-events: none;
        .arrow::before {
          border-right: 2px solid #00a2ff76;
          border-top: 2px solid #00a2ff76;
        }
        &:hover {
          background-color: transparent;
          cursor: default;
        }
      }
      &.arrow {
        height: 28px;
        cursor: pointer;
        background-color: white;
        border: 1px solid #00a3ff;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
