import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  HeaderTitle: {
    fontWeight: 'bold !important',
    color: 'white !important',
  },
  LinkStyle:{
    textDecoration: 'none',
    color:'black',
  },
  backDrop: {
    background: 'rgba(255,255,255,0.2) !important',
  },
  DirectionFix:{
    display:'flex !important',
    flexDirection:'row',
  },
  Logout:{
    display:'flex !important',
    flexDirection:'row !important',
    justifyContent:'space-between !important',
    width:'100% !important',
  },
}));