import * as React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../../common/BaseStyles';
import I18n from '../../localization/i18n';
// import Header from '../../common/UIComponents/Header';
import Footer from '../../common/UIComponents/Footer';
// import EmailInputComponent from '../../common/UIComponents/EmailInputComponent';
// import PasswordInputComponent from '../../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import WarningDialog from '../../common/UIComponents/warningDialog';
import {veifyMobileVerificationCode} from '../../AppStore/forgotPasswordActions';
import TextInputComponent from '../../common/UIComponents/TextInputComponent';

class ForgotPasswordStep3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userEmail: '',
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
      verificatioCode: '',
    };
  }

  // onEmailEntered = userEmail => {
  //   this.setState({
  //     userEmail,
  //   });
  // };

  onStepNext = () => {
    // this.props.navigation.navigate('ForgotPasswordStep4');
    this.setState({isLoading: true});
    this.props.veifyMobileVerificationCode(
      this.props.userDetails.ChangePasswordToken,
      this.props.sendMobileVerificationRes.ServiceToken,
      this.state.verificatioCode,
      this.onMobileVerificationCodeSuccess,
      this.onMobileVerificationCodeFailed,
    );
  };

  onMadeMistake = () => {
    // this.props.navigation.goBack();
    this.props.navigation.navigate('ForgotPassword');
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onMobileVerificationCodeSuccess = () => {
    console.log('veifyMobileVerificationCode success');
    this.setState({isLoading: false});
    this.props.navigation.navigate('ForgotPasswordStep4');
  };

  onMobileVerificationCodeFailed = errorMsg => {
    console.log('veifyMobileVerificationCode failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
      verificatioCode: '',
    });
    console.log(errorMsg);
  };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
          <View style={styles.forgotPwdViewContainer}>
            <View style={styles.forgotPwdUserInfo}>
              <Text style={styles.forgotPwdUserInfoTxt}>
                {I18n.t('forgotPassword.userInfo')}
              </Text>
            </View>
            <View style={styles.userInfoStepRow}>
              <Text style={styles.userInfoStep}>
                {I18n.t('forgotPassword.userInfoStep')}3
              </Text>
            </View>
            <View style={styles.forgotPwdUserStep1}>
              <Text style={styles.forgotPwdUserStep1Txt}>
                {I18n.t('forgotPassword.step3')}
              </Text>
            </View>
            <View style={BaseStyles.emptyHView} />
            <TextInputComponent
              placeholder={I18n.t('forgotPassword.verificatioCodePlaceHolder')}
              autoFocus={false}
              inputValue={this.state.verificatioCode}
              onTextChange={text => this.setState({verificatioCode: text})}
            />
            <View style={styles.forgotStepOneNextContainer}>
              <PrimaryButton
                btnName={I18n.t('forgotPassword.step3Next')}
                onSubmit={this.onStepNext}
              />

              <View style={BaseStyles.emptyHView} />
              <LinkBtnComponent
                btnName={I18n.t('forgotPassword.madeMistake')}
                onClick={this.onMadeMistake}
              />
            </View>
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
  console.log('state from ForgotPasswordStep2 ', state);
  return {
    userDetails: state.forgotPassword.userDetails,
    sendMobileVerificationRes: state.forgotPassword.sendMobileVerificationRes,
  };
};

const mapDispatchToProps = dispatch => ({
  veifyMobileVerificationCode: (
    ChangePasswordToken,
    ServiceToken,
    VerificationCode,
    onSuccessCallback,
    onErrorCallback,
  ) =>
    dispatch(
      veifyMobileVerificationCode(
        ChangePasswordToken,
        ServiceToken,
        VerificationCode,
        onSuccessCallback,
        onErrorCallback,
      ),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordStep3);
