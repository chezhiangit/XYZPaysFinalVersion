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
import {widthAdapter, heightAdapter} from '../../../uttils/adapterUtil';
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

  navigateToScreen = route => () => {
    try {
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

  toggleExpandCollapse = (show, index) => {
    console.log(
      'this.state.expandCollapseData ....',
      this.state.expandCollapseData,
    );
    this.expandedViewHeight =
      index === 0 ? heightAdapter(100) : heightAdapter(350);

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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.blackBadge} />
            <TouchableWithoutFeedback
              onPress={
                () => alert('Hi')
                // this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }>
              <Text style={styles.blackBadgeClose}>
                <Icon name="close" size={iconSize} color="white" />
              </Text>
            </TouchableWithoutFeedback>
            <View style={styles.imageView}>
              <Image source={images.xyziesPays} />
            </View>
            <View style={styles.navSectionStyle}>
              <Text>
                <Icon name="home" size={iconSize} color="black" />
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('AppLandingPage')}>
                {I18n.t('hamburgerMenu.dashboard')}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text>
                <Icon name="user" size={iconSize} color="black" />
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('ProfilePage')}>
                {I18n.t('hamburgerMenu.viewProfile')}
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() =>
                this.toggleExpandCollapse(
                  !this.state.expandCollapseData[0].Expanded,
                  0,
                )
              }>
              <View style={styles.navSectionStyle}>
                <Text>
                  <Icon name="cubes" size={iconSize} color="black" />
                </Text>
                <Text
                  style={styles.navItemStyle}
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
                  {borderWidth: 0, paddingLeft: widthAdapter(50)},
                ]}>
                <Text
                  style={[styles.navItemStyle]}
                  onPress={this.navigateToScreen('TrendingPage')}>
                  {I18n.t('hamburgerMenu.trendingProducts')}
                </Text>
              </View>
            </Animated.View>
          </View>
          <TouchableWithoutFeedback
            onPress={() =>
              this.toggleExpandCollapse(
                !this.state.expandCollapseData[1].Expanded,
                1,
              )
            }>
            <View style={styles.navSectionStyle}>
              <Text>
                <Icon name="cubes" size={iconSize} color="black" />
              </Text>
              <Text
                style={styles.navItemStyle}
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
                  paddingLeft: widthAdapter(50),
                  borderWidth: 0,
                },
              ]}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('Paid')}>
                {I18n.t('hamburgerMenu.paid')}
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('Approved')}>
                {I18n.t('hamburgerMenu.approved')}
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('Pending')}>
                {I18n.t('hamburgerMenu.pending')}
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('Denied')}>
                {I18n.t('hamburgerMenu.denied')}
              </Text>
            </View>
          </Animated.View>
          <View style={styles.navSectionStyle}>
            <Text>
              <Icon name="exchange" size={iconSize} color="black" />
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('PayoutHistoryPage')}>
              {I18n.t('hamburgerMenu.transferMoney')}
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text>
              <Icon name="user-plus" size={iconSize} color="black" />
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('ReferAndEarnPage')}>
              {I18n.t('hamburgerMenu.referAndEarn')}
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text>
              <Icon name="money" size={iconSize} color="black" />
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('ReferralCommissionsPage')}>
              {I18n.t('hamburgerMenu.referralsCommission')}
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text>
              <Icon name="phone" size={iconSize} color="black" />
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('ContactUsPage')}>
              {I18n.t('hamburgerMenu.contactUs')}
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text>
              <Icon name="question-circle" size={iconSize} color="black" />
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('FAQPage')}>
              {I18n.t('hamburgerMenu.FAQs')}
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text>
              <Icon name="sign-out" size={iconSize} color="black" />
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('USER_LOGOUT')}>
              {I18n.t('hamburgerMenu.signOut')}
            </Text>
          </View>
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
