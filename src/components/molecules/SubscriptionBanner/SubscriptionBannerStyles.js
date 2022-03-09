import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 46px;

  padding: 36px;
  background: linear-gradient(
    249.77deg,
    #0094ff -1.99%,
    #007dff 43.52%,
    #026ce8 95.86%
  );
  border-radius: 24px;
  margin-bottom: 80px;
`;

export const Text = styled.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.0025em;
  text-align: left;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const SmallText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.005em;
  text-align: left;
  color: rgba(224, 239, 255, 1);
`;

export const Col2 = styled.div`
  align-self: center;
`;
