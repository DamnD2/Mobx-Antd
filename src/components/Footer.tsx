import { Footer as FooterAntd } from 'antd/lib/layout/layout';
import { color } from '../interfaces/interfaces';

function Footer() {
  return (
    <FooterAntd
      style={{
        backgroundColor: color.background,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: '0 0 auto',
      }}
    >
      Ant Design ©2022 Created by DamnD2
    </FooterAntd>
  );
}

export default Footer;
