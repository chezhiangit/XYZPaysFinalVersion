import {StyleSheet} from 'react-native';
import {
  widthAdapter,
  heightAdapter,
  fontscale,
} from '../../../uttils/adapterUtil';
import Colors from '../../../uttils/Colors';
// import FontsSize from '../../../uttils/FontsSize';
// import FontsWeight from '../../../uttils/FontsWeight';
import fontFamily from '../../../uttils/FontFamily';

export default StyleSheet.create({
  container: {
    // paddingTop: 20,
    flex: 1,
    backgroundColor: 'white', // 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  navItemStyle: {
    padding: widthAdapter(25),
    fontFamily: fontFamily.primaryFontFamily,
    fontSize: fontscale(15),
    // color: Colors.white,
  },
  navSectionStyle: {
    // backgroundColor: 'lightgrey',
    // width: '100%',
    flexDirection: 'row',
    borderColor: '#C2C2C2',
    borderWidth: 0.5,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    paddingLeft: widthAdapter(10),
    // justifyContent: 'center',
  },
  submenu: {
    width: '100%',
    // flexDirection: 'row',
    borderColor: '#C2C2C2',
    borderWidth: 0.5,
    backgroundColor: '#D9D9D9',
    // alignItems: 'center',
    paddingLeft: widthAdapter(75),
    paddingBottom: heightAdapter(25),
    paddingTop: heightAdapter(25),
  },
  sumenuItemStyle: {
    // padding: widthAdapter(25),
    fontFamily: fontFamily.primaryFontFamily,
    fontSize: fontscale(15),
  },
  sectionHeadingStyle: {
    paddingVertical: widthAdapter(10),
    paddingHorizontal: widthAdapter(5),
    backgroundColor: 'rgb(242,242,242)', // Colors.primaryAppColor,
    fontFamily: fontFamily.primaryFontFamily,
    fontSize: fontscale(20),
  },
  footerContainer: {
    padding: widthAdapter(20),
    backgroundColor: Colors.linkBtnColor,
  },
  sectionLine: {
    width: '100%',
    height: heightAdapter(2),
    backgroundColor: '#22caff',
  },
  imageView: {
    // paddingBottom: heightAdapter(50),
    // paddingTop: heightAdapter(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackBadge: {
    width: widthAdapter(120), //SCREEN_WIDTH,
    height: 0,
    borderTopColor: 'black',
    borderTopWidth: widthAdapter(240 / 2), //SCREEN_HEIGHT / 2,
    borderRightWidth: widthAdapter(120), // SCREEN_WIDTH,
    borderRightColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  blackBadgeClose: {
    zIndex: 0,
    // position: 'absolute',
    top: 0,
    // padding: widthAdapter(15),
    // borderWidth: 1,
    // borderColor: 'red',
    width: widthAdapter(50),
    height: widthAdapter(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandCollapseContainer: {
    // width: '80%',
    // height: '100%',
    // borderWidth: 1,
    // borderColor: 'red',
    height: 0,
    // position: 'absolute',
    // top: heightAdapter(100),
    // right: 0,
    // left: 0,
    backgroundColor: '#eee',
  },
});
