import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
// import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import {fontscale} from '../uttils/adapterUtil';
import WarningDialog from '../common/UIComponents/warningDialog';
import {postReferralUser} from '../AppStore/referralActions';

class ReferAndEarn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDlg: false,
      dlgMsg: '',
      email: '',
      name: '',
      mobileNumber: '',
      isLoading: false,
      userReferralSuccess: false,
    };
  }
  onSendMessage = () => {
    // this.props.navigation.goBack();

    if (this.state.name.trimLeft().trimRight() === '') {
      this.setState({showDlg: true, dlgMsg: 'Please enter valid Name'});
      return;
    }
    if (this.state.email.trimLeft().trimRight() === '') {
      this.setState({showDlg: true, dlgMsg: 'Please enter valid Email'});
      return;
    }

    if (this.state.mobileNumber.trimLeft().trimRight() === '') {
      this.setState({showDlg: true, dlgMsg: 'Please enter valid Mobile Number'});
      return;
    }

    this.setState({isLoading: true});
    const payload = {
      Name: this.state.name,
      Email: this.state.email,
      Phone: this.state.mobileNumber,
    };
    this.props.postReferralUser(
      payload,
      this.onPostUserdDataSuccess,
      this.onPostUserdDataFailed,
    );
  };

  onViewReferrals = () => {
    this.props.navigation.navigate('MyReferralsPage', {
      headerTitle: 'My Referrals',
    });
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    if (this.state.userReferralSuccess) {
      this.setState({showDlg: false, userReferralSuccess: false}, () =>
        this.onViewReferrals(),
      );
    } else {
      this.setState({showDlg: false});
    }
  };

  onPostUserdDataSuccess = msg => {
    console.log('post user success');
    // this.setState({isLoading: false}, () => this.props.navigation.goBack());
    // this.setState({isLoading: false});
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: msg,
      userReferralSuccess: true,
    });
  };

  onPostUserdDataFailed = errorMsg => {
    console.log('post user fails');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
          <View style={styles.scrollContainer}>
            {/* <View style={BaseStyles.emptyHView} /> */}
            <View style={BaseStyles.userInfo}>
              <Text style={styles.userInfoTxt}>
                {I18n.t('referAndEarn.userInfo')}
              </Text>
            </View>
            <TextInputComponent
              placeholder={I18n.t('referAndEarn.name') + '\u2B51'}
              madatory
              autoFocus={false}
              inputValue={this.state.name}
              onTextChange={name => this.setState({name})}
            />
            <EmailInputComponent
              placeholder={I18n.t('referAndEarn.email') + '\u2B51'}
              autoFocus={false}
              onEmailEntered={email => this.setState({email})}
              email={this.state.email}
            />
            <TextInputComponent
              placeholder={I18n.t('referAndEarn.mobileNumber') + '\u2B51'}
              autoFocus={false}
              inputValue={this.state.mobileNumber}
              onTextChange={mobileNumber => this.setState({mobileNumber})}
              phone
            />
            <View style={BaseStyles.emptyHView} />
            <PrimaryButton
              btnName={I18n.t('referAndEarn.sendBtnName')}
              onSubmit={this.onSendMessage}
            />
            <View style={BaseStyles.emptyHView} />
            <LinkBtnComponent
              onClick={this.onViewReferrals}
              btnName={I18n.t('referAndEarn.linkBtn')}
              btnTextStyle={{fontSize: fontscale(20)}}
            />
          </View>
        </KeyboardAwareScrollView>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from refer user page ....', state);
  return {
    // dashboardData: state.dashboard.dashboardData,
  };
};

const mapDispatchToProps = dispatch => ({
  postReferralUser: (payload, onSuccesscallback, onErrocallback) =>
    dispatch(postReferralUser(payload, onSuccesscallback, onErrocallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReferAndEarn);
