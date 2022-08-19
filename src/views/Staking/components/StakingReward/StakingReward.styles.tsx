import styled from "@emotion/styled";
import { AlertCircle } from "react-feather";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;

  width: 600px;
  height: 263px;

  /* Tints & Shades/Grey/23 */

  background: #34353b;
  /* Tints & Shades/Grey/28 */

  border: 1px solid #3e4047;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const InnerWrapper = styled.div``;

export const Title = styled.p`
  /* Body/Body LG/Regular */

  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  /* Tints & Shades/White/88 */

  color: #c5d5e0;
`;

export const InfoTextWrapper = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 6px;

  width: 552px;
  height: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  /* Font color */
  color: #9daab2;
`;

export const AlertInfoWrapper = styled(InfoTextWrapper)`
  color: #f96c6c;
`;

export const InfoText = styled.p`
  /* Body/Body SM/Regular */
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const InfoIcon = styled(AlertCircle)`
  width: 13.5px;
  height: 13.5px;
`;

export const Divider = styled.div`
  width: 552px;
  height: 1px;

  /* Tints & Shades/Grey/28 */

  background: #3e4047;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
