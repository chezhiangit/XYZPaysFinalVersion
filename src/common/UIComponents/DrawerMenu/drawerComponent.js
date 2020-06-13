import React, {Component} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';
import {connect} from 'react-redux';
import {CommonActions, DrawerActions} from '@react-navigation/native';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import I18n from '../../../localization/i18n';
import WarningDialog from '../warningDialog';
import {setIntialRoute} from '../../../AppStore/landingPageActions';
import images from '../../../Assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthAdapter,
  heightAdapter,
  fontscale,
} from '../../../uttils/adapterUtil';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const iconSize = 15;

class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
      expandCollapseData: [{Expanded: false}, {Expanded: false}],
      currentExpandIndex: -1,
    };
    this.expandedViewHeight = heightAdapter(400);
    this.expandCollapseTranslate = new Animated.Value(0);
  }

  onRouteToCommissionPage = route => {
    if (route === 'Paid') {
      return CommonActions.navigate({
        name: 'CommissionPage',
        params: {paymentStatus: 4},
      });
    } else if (route === 'Pending') {
      return CommonActions.navigate({
        name: 'CommissionPage',
        params: {paymentStatus: 1},
      });
    } else if (route === 'Approved') {
      return CommonActions.navigate({
        name: 'CommissionPage',
        params: {paymentStatus: 2},
      });
    } else if (route === 'Denied') {
      return CommonActions.navigate({
        name: 'CommissionPage',
        params: {paymentStatus: 5},
      });
    }
  };

  navigateToScreen = (route, index) => () => {
    try {
      index && this.setState({selectedIndex: index});
      if (route === 'USER_LOGOUT') {
        // this.setState({isLoading: true});
        this.setState({
          showDlg: true,
          dlgMsg: I18n.t('common.logoutMessage'),
        });
        // this.props.signOut();
        return;
      }
      if (route === 'AppLandingPage') {
        this.props.setIntialRoute();
        return;
      }

      if (
        route === 'Paid' ||
        route === 'Approved' ||
        route === 'Pending' ||
        route === 'Denied'
      ) {
        this.props.navigation.dispatch(this.onRouteToCommissionPage(route));
        return;
      }

      const navigateAction = CommonActions.navigate({
        name: route,
      });
      this.props.navigation.dispatch(navigateAction);
    } catch (e) {
      this.setState({
        showDlg: true,
        dlgMsg: I18n.t('common.errorMsg'),
      });
    }
  };

  onCancel = () => {
    this.setState({
      showDlg: false,
      dlgMsg: '',
    });
  };

  onConfirm = () => {
    this.setState({
      showDlg: false,
      dlgMsg: '',
      isLoading: true,
    });
    this.props.signOut();
  };

  expand = () => {
    this.expandCollapseTranslate.setValue(0);
    Animated.spring(this.expandCollapseTranslate, {
      toValue: 1,
      duration: 400,
      // overshootClamping: true,
      // useNativeDriver: true,
    }).start();
  };

  collapse = (callback = () => {}) => {
    Animated.timing(this.expandCollapseTranslate, {
      toValue: 0,
      duration: 400,
      easing: Easing.linear,
      // useNativeDriver: true,
    }).start(() => callback());
  };

  toggleExpandCollapse = (show, index, menuIndex) => {
    this.setState({selectedIndex: menuIndex});
    console.log(
      'this.state.expandCollapseData ....',
      this.state.expandCollapseData,
    );
    this.expandedViewHeight =
      index === 0
        ? heightAdapter(50) + fontscale(20)
        : heightAdapter(200) + fontscale(4 * 20);

    if (show && this.state.currentExpandIndex === -1) {
      this.setState(
        state => {
          const data = [...state.expandCollapseData];
          data[index].Expanded = show;
          return {
            currentExpandIndex: index,
            expandCollapseData: data,
          };
        },
        () => this.expand(),
      );
      // this.expand();
    } else if (!show && this.state.currentExpandIndex === index) {
      this.collapse(() =>
        this.setState(state => {
          const data = [...state.expandCollapseData];
          data[index].Expanded = show;
          return {
            currentExpandIndex: -1,
            expandCollapseData: data,
          };
        }),
      );
    } else if (
      show &&
      this.state.currentExpandIndex !== -1 &&
      this.state.currentExpandIndex !== index
    ) {
      this.collapse(() =>
        this.setState(
          state => {
            const data = [...state.expandCollapseData];
            data[index].Expanded = show;
            data[state.currentExpandIndex].Expanded = false;
            return {
              currentExpandIndex: index,
              expandCollapseData: data,
            };
          },
          () => this.expand(),
        ),
      );
    }
  };

  onCloseMenu = () => {
    console.log('close menu ......');
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.blackBadge} />
            {/* <TouchableWithoutFeedback
              onPress={
                () => alert('Hi')
                // this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }> */}
            <TouchableOpacity onPress={this.onCloseMenu}>
              <View style={styles.blackBadgeClose}>
                <Text
                  style={{
                    fontSize: fontscale(15),
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  {/* <Icon name="close" size={iconSize} color="white" /> */}X
                </Text>
              </View>
            </TouchableOpacity>
            {/* </TouchableWithoutFeedback> */}
            <View style={styles.imageView}>
              <Image source={images.xyziesPays} />
            </View>
            <TouchableWithoutFeedback
              onPress={this.navigateToScreen('AppLandingPage', 0)}>
              <View
                style={[
                  styles.navSectionStyle,
                  this.state.selectedIndex === 0 && {
                    backgroundColor: '#ff5722',
                  },
                ]}>
                <Text>
                  <Icon
                    name="home"
                    size={iconSize}
                    color={this.state.selectedIndex === 0 ? 'white' : 'black'}
                  />
                </Text>
                <Text
                  style={[
                    styles.navItemStyle,
                    {
                      color: this.state.selectedIndex === 0 ? 'white' : 'black',
                      fontWeight: 'bold',
                    },
                  ]}
                  // onPress={this.navigateToScreen('AppLandingPage')}
                >
                  {I18n.t('hamburgerMenu.dashboard')}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          {/* <View> */}
          <TouchableWithoutFeedback
            onPress={this.navigateToScreen('ProfilePage', 1)}>
            <View
              style={[
                styles.navSectionStyle,
                this.state.selectedIndex === 1 && {backgroundColor: '#ff5722'},
              ]}>
              <Text>
                <Icon
                  name="user"
                  size={iconSize}
                  color={this.state.selectedIndex === 1 ? 'white' : 'black'}
                />
              </Text>
              <Text
                style={[
                  styles.navItemStyle,
                  {
                    color: this.state.selectedIndex === 1 ? 'white' : 'black',
                    fontWeight: 'bold',
                  },
                ]}
                // onPress={this.navigateToScreen('ProfilePage')}
              >
                {I18n.t('hamburgerMenu.viewProfile')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              this.toggleExpandCollapse(
                !this.state.expandCollapseData[0].Expanded,
                0,
                2,
              )
            }>
            <View
              style={[
                styles.navSectionStyle,
                this.state.selectedIndex === 2 && {backgroundColor: '#ff5722'},
                {
                  // borderWidth: 1,
                  // borderColor: 'red',
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Text>
                  <Icon
                    name="cubes"
                    size={iconSize}
                    color={this.state.selectedIndex === 2 ? 'white' : 'black'}
                  />
                </Text>
                <Text
                  style={[
                    styles.navItemStyle,
                    {
                      color: this.state.selectedIndex === 2 ? 'white' : 'black',
                      fontWeight: 'bold',
                    },
                  ]}
                  // onPress={() =>
                  //   this.toggleExpandCollapse(
                  //     !this.state.expandCollapseData[0].Expanded,
                  //     0,
                  //   )
                  // }
                >
                  {I18n.t('hamburgerMenu.products')}
                </Text>
              </View>
              <View style={{paddingRight: widthAdapter(10)}}>
                <Text>
                  <Icon
                    name="caret-down"
                    size={iconSize}
                    color={this.state.selectedIndex === 2 ? 'white' : 'black'}
                  />
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.expandCollapseContainer,
              this.state.currentExpandIndex === 0 && {
                height: this.expandCollapseTranslate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, this.expandedViewHeight],
                }),
              },
            ]}>
            <View
              style={[
                styles.navSectionStyle,
                {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: widthAdapter(0),
                  borderWidth: 0,
                },
              ]}>
              <View style={styles.submenu}>
                <Text
                  style={[styles.sumenuItemStyle]}
                  onPress={this.navigateToScreen('TrendingPage')}>
                  {I18n.t('hamburgerMenu.trendingProducts')}
                </Text>
              </View>
            </View>
          </Animated.View>
          {/* </View> */}
          <TouchableWithoutFeedback
            onPress={() =>
              this.toggleExpandCollapse(
                !this.state.expandCollapseData[1].Expanded,
                1,
                3,
              )
            }>
            <View
              style={[
                styles.navSectionStyle,
                this.state.selectedIndex === 3 && {backgroundColor: '#ff5722'},
                {justifyContent: 'space-between'},
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Text>
                  <Icon
                    name="cubes"
                    size={iconSize}
                    color={this.state.selectedIndex === 3 ? 'white' : 'black'}
                  />
                </Text>
                <Text
                  style={[
                    styles.navItemStyle,
                    {
                      color: this.state.selectedIndex === 3 ? 'white' : 'black',
                      fontWeight: 'bold',
                    },
                  ]}
                  // onPress={() =>
                  //   this.toggleExpandCollapse(
                  //     !this.state.expandCollapseData[1].Expanded,
                  //     1,
                  //   )
                  // }
                >
                  {I18n.t('hamburgerMenu.commissionReports')}
                </Text>
              </View>
              <View style={{paddingRight: widthAdapter(10)}}>
                <Text>
                  <Icon
                    name="caret-down"
                    size={iconSize}
                    color={this.state.selectedIndex === 3 ? 'white' : 'black'}
                  />
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.expandCollapseContainer,
              this.state.currentExpandIndex === 1 && {
                height: this.expandCollapseTranslate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, this.expandedViewHeight],
                }),
              },
            ]}>
            <View
              style={[
                styles.navSectionStyle,
                {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: widthAdapter(0),
                  borderWidth: 0,
                },
              ]}>
              <View style={styles.submenu}>
                <Text
                  style={styles.sumenuItemStyle}
                  onPress={this.navigateToScreen('Paid')}>
                  {I18n.t('hamburgerMenu.paid')}
                </Text>
              </View>
              <View style={styles.submenu}>
                <Text
                  style={styles.sumenuItemStyle}
                  onPress={this.navigateToScreen('Approved')}>
                  {I18n.t('hamburgerMenu.approved')}
                </Text>
              </View>
              <View style={styles.submenu}>
                <Text
                  style={styles.sumenuItemStyle}
                  onPress={this.navigateToScreen('Pending')}>
                  {I18n.t('hamburgerMenu.pending')}
                </Text>
              </View>

              <View style={styles.submenu}>
                <Text
                  style={styles.sumenuItemStyle}
                  onPress={this.navigateToScreen('Denied')}>
                  {I18n.t('hamburgerMenu.denied')}
                </Text>
              </View>
            </View>
          </Animated.View>
          <TouchableWithoutFeedback
            onPress={this.navigateToScreen('PayoutHistoryPage', 4)}>
            <View
              style={[
                styles.navSectionStyle,
                this.state.selectedIndex === 4 && {backgroundColor: '#ff5722'},
              ]}>
              <Text>
                <Icon
                  name="exchange"
                  size={iconSize}
                  color={this.state.selectedIndex === 4 ? 'white' : 'black'}
                />
              </Text>
              <Text
                style={[
                  styles.navItemStyle,
                  {
                    color: this.state.selectedIndex === 4 ? 'white' : 'black',
                    fontWeight: 'bold',
                  },
                ]}
                // onPress={this.navigateToScreen('PayoutHistoryPage')}
              >
                {I18n.t('hamburgerMenu.transferMoney')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={this.navigateToScreen('ReferAndEarnPage', 5)}>
            <View
              style={[
                styles.navSectionStyle,
                this.state.selectedIndex === 5 && {backgroundColor: '#ff5722'},
              ]}>
              <Text>
                <Icon
                  name="user-plus"
                  size={iconSize}
                  color={this.state.selectedIndex === 5 ? 'white' : 'black'}
                />
              </Text>
              <Text
                style={[
                  styles.navItemStyle,
                  {
                    color: this.state.selectedIndex === 5 ? 'white' : 'black',
                    fontWeight: 'bold',
                  },
                ]}
                // onPress={this.navigateToScreen('ReferAndEarnPage')}
              >
                {I18n.t('hamburgerMenu.referAndEarn')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={this.navigateToScreen('ReferralCommissionsPage', 6)}>
            <View
              style={[
                styles.navSectionStyle,
                this.state.selectedIndex === 6 && {backgroundColor: '#ff5722'},
              ]}>
              <Text>
                <Icon
                  name="money"
                  size={iconSize}
                  color={this.state.selectedIndex === 6 ? 'white' : 'black'}
                />
              </Text>
              <Text
                style={[
                  styles.navItemStyle,
                  {
                    color: this.state.selectedIndex === 6 ? 'white' : 'black',
                    fontWeight: 'bold',
                  },
                ]}
                // onPress={this.navigateToScreen('ReferralCommissionsPage')}
              >
                {I18n.t('hamburgerMenu.referralsCommission')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={this.navigateToScreen('ContactUsPage', 7)}>
            <View
              style={[
                styles.navSectionStyle,
                this.state.selectedIndex === 7 && {backgroundColor: '#ff5722'},
              ]}>
              <Text>
                <Icon
                  name="phone"
                  size={iconSize}
                  color={this.state.selectedIndex === 7 ? 'white' : 'black'}
                />
              </Text>
              <Text
                style={[
                  styles.navItemStyle,
                  {
                    color: this.state.selectedIndex === 7 ? 'white' : 'black',
                    fontWeight: 'bold',
                  },
                ]}
                // onPress={this.navigateToScreen('ContactUsPage')}
              >
                {I18n.t('hamburgerMenu.contactUs')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={this.navigateToScreen('FAQPage', 8)}>
            <View
              style={[
                styles.navSectionStyle,
                this.state.selectedIndex === 8 && {backgroundColor: '#ff5722'},
              ]}>
              <Text>
                <Icon
                  name="question-circle"
                  size={iconSize}
                  color={this.state.selectedIndex === 8 ? 'white' : 'black'}
                />
              </Text>
              <Text
                style={[
                  styles.navItemStyle,
                  {
                    color: this.state.selectedIndex === 8 ? 'white' : 'black',
                    fontWeight: 'bold',
                  },
                ]}
                // onPress={this.navigateToScreen('FAQPage')}
              >
                {I18n.t('hamburgerMenu.FAQs')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={this.navigateToScreen('USER_LOGOUT')}>
            <View style={styles.navSectionStyle}>
              <Text>
                <Icon name="sign-out" size={iconSize} color="black" />
              </Text>
              <Text
                style={styles.navItemStyle}
                // onPress={this.navigateToScreen('USER_LOGOUT')}
              >
                {I18n.t('hamburgerMenu.signOut')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <Spinner
          visible={this.state.isLoading}
          textContent={'Signing Out...'}
        />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
          leftButtonText={I18n.t('hamburgerMenu.NoBtnTxt')}
          rightButtonText={I18n.t('hamburgerMenu.YesBtnTxt')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  initialRoute: state.landingPage.initialRoute,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch({type: 'USER_LOGOUT'}),
  setIntialRoute: () => dispatch(setIntialRoute('AppLandingPage')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerComponent);
