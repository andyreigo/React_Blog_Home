import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import HouseRoundedIcon from '@material-ui/icons/HouseRounded';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Bienes Raices" icon={<HouseRoundedIcon />} />
      <BottomNavigationAction label="Inversiones" icon={<MonetizationOnRoundedIcon />} />
      <BottomNavigationAction label="Tips Financieros" icon={<AccountBalanceRoundedIcon />} />
    </BottomNavigation>
  );
}