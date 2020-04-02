import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: #BC40FF;
  :visited {
    color: #BC40FF;
  }
`;

const Name = styled.div`
  font-weight: bold;
`;

const Container = styled.div`
  font-size: 13px;
  font-family: Helvetica, Arial, sans-serif
`;

function SignatureGenerator(props) {
  const { name, email, phone } = props;
  return (
    <Container>
        <Name>{name} | Sharktower</Name>
        <div>{email}   | {phone}</div>
        <div><Link href="https://www.sharktower.com/">sharktower.com</Link> | <Link href="https://twitter.com/sharktowerapp">@SharktowerApp</Link> | <Link href="https://www.linkedin.com/company/sharktower-ai/">LinkedIn</Link></div>
    </Container>
  );
}

export default SignatureGenerator;
