import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  HeaderTitle: {
    fontWeight: 'bold !important',
    color: 'white !important',
  },
  ContainerStyle: {
    width: '100vw !important',
    minHeight: '100vh',
  },
  InnerGrid: {
    boxShadow: '2px 2px !important',
    minWidth: '40vw',
    minHeight: '45vh',
    borderRadius: '5px',
    backgroundColor: '#1976d2',
  },
  GridItem: {
    width: '60% !important',
  },
  TitleGrid:{
    marginTop: '6px !important',
    marginBottom: '6px',
  },
  ButtonGrid:{
    marginTop: '20px !important',
  },
  ButtonStyle: {
    marginLeft: '7px !important', 
    marginRight: '7px',

  },
  InputText:{
    backgroundColor: 'white',
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