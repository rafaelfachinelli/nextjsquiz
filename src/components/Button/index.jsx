import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 10px 16px;
  transition: .3s;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .8;
  }

  &[data-status="CORRECT"] {
    background-color: ${({ theme }) => theme.colors.success};
  }
  
  &[data-status="WRONG"] {
    background-color: ${({ theme }) => theme.colors.wrong};
  }
  
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
