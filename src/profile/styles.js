import {StyleSheet} from 'react-native';
import Clors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
// import FontsSize from '../uttils/FontsSize';
import Colors from '../uttils/Colors';

export default StyleSheet.create({
  profileViewContainer: {
    // height: '70%',
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    // paddingTop: heightAdapter(50),
    // paddingBottom: heightAdapter(200),
    marginBottom: heightAdapter(160),
  },
  profileUserInfo: {
    width: '100%',
    height: heightAdapter(150),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // marginTop: heightAdapter(30),
  },
  profileUserInfoTxt: {
    fontSize: fontscale(24),
    color: Clors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.primaryFontFamily,
  },
  profileContainer: {
    flexDirection: 'row',
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 1,
    marginTop: heightAdapter(30),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  editProfileContainer: {
    // width: widthAdapter(200),
    // marginTop: heightAdapter(30),
    alignItems: 'flex-end',
    justifyContent: 'center',
    // height: 300,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  providersContainer: {
    width: '100%',
  },
  providersViewStyle: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
  },
  providersLabel: {
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'bold',
    fontSize: fontscale(32),
  },
  accountInforLabel: {
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'bold',
    fontSize: fontscale(35),
  },
  viewStyle: {
    width: '50%',
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
  },
  label: {
    fontSize: fontscale(22),
    fontWeight: 'bold',
  },
  value: {
    fontSize: fontscale(22),
  },
  activeStatus: {
    backgroundColor: '#5bc0de',
    padding: 3,
    borderRadius: widthAdapter(10),
    borderColor: '#5bc0de',
    borderWidth: 1,
    fontSize: fontscale(22),
    color: 'white',
    fontWeight: 'bold',
  },
  photoContainer: {
    height: heightAdapter(400),
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  photoView: {
    flexDirection: 'row',
    height: heightAdapter(300),
    // borderWidth: 1,
    // borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    height: heightAdapter(250),
    width: heightAdapter(250),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
    // shadowOpacity: 0.75,
    //     shadowRadius: 5,
    //     shadowColor: 'red',
    //     shadowOffset: { height: 0, width: 0 },
    //     overflow: 'hidden',
  },
  nameContainer: {
    flexDirection: 'row',
    height: heightAdapter(100),
    // borderWidth: 1,
    // borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstName: {
    fontSize: fontscale(30),
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.primaryAppColor,
    fontWeight: 'bold',
  },
  secondName: {
    fontSize: fontscale(30),
    fontFamily: fontFamily.primaryFontFamily,
    color: 'black',
    fontWeight: 'bold',
  },
  provider: {
    flexDirection: 'row',
    height: heightAdapter(50),
    alignItems: 'center',
    // justifyContent: 'flex-start',
    marginBottom: heightAdapter(20),
  },
  providerImage: {
    height: heightAdapter(40),
    width: heightAdapter(40),
    // borderColor: 'gray',
    // borderWidth: 1,
  },
});
