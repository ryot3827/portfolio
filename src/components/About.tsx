import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5' >
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='left'>
            私の名前は田中凌と申します。<br />
            大阪でソフトウェアエンジニアとして働いています。<br />
            好きな言語はTypeScriptです。<br/>
            また、品質管理、開発体制・エンジニア組織の構築、属人化解消の施策作りに興味あります。
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
