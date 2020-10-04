import React from 'react';

import { Dialog, DialogContent, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const CustomDialog = (props) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog
      style={{ zIndex: 1302 }}
      fullScreen={matchesSM}
      open={props.open}
      {...props}
      onClose={props.setopen}
      PaperProps={{
        style: {
          paddingTop: matchesXS ? '1em' : '5em',
          paddingBottom: matchesXS ? '1em' : '5em',
          paddingLeft: matchesXS
            ? 0
            : matchesSM
            ? '5em'
            : matchesMD
            ? '8em'
            : '10em',
          paddingRight: matchesXS
            ? 0
            : matchesSM
            ? '5em'
            : matchesMD
            ? '8em'
            : '10em',
        },
      }}
    >
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
