import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 250px;
  right: 700px;
  z-index: 5;
  border-top: 0.2em solid #767676;
  border-radius: 100%;
  width: 5rem;
  height: 5rem;
  animation: ${spin} 0.6s linear infinite;
`;

export default Loader
