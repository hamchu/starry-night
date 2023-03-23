import styled from 'styled-components';

export const SidBarBody = styled.div`
  background-color: white;
  width: 350px;
  height: 100%;
  position: absolute;
  box-shadow: 0 0 0 1px #58585839 inset;
  top: 0;
  &.close {
    left: 0;
    transition: 500ms;
  }
  &.open {
    left: -350px;
    transition: 500ms;
  }
  z-index: 1;
  /* & .contentsArea {
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  } */
`;

export const SidBarContentsArea = styled.div`
  width: 100% - 20px;
  height: calc(100% - 387px);
  padding: 5px 10px 5px 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SidBarLine = styled.hr`
  margin: 0 0 5px 0;
`;

export const FoldBtn = styled.div`
  position: absolute;
  background-color: white;
  width: 30px;
  height: 60px;
  top: 45%;
  &.close {
    left: 350px;
    transition: 500ms;
  }
  &.open {
    left: 0px;
    transition: 500ms;
  }
  box-shadow: 0 0 0 1px #58585839 inset;
  :hover {
    cursor: pointer;
  }
  z-index: 1;
`;

export const FoldText = styled.p`
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: larger;
  line-height: 55px;
  color: black;
`;