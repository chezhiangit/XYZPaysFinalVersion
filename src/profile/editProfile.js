import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';
import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';
import styles from './styles';
import editStyles from './editProfileStyle';
import {
  getProfileInfo,
  saveProfileInfo,
  addProfilePicture,
  getProviderInfo,
} from '../AppStore/profileActions';
import WarningDialog from '../common/UIComponents/warningDialog';
// import {displayPhoneNumber} from '../uttils/UtilityFunctions';
import SliderView from '../common/UIComponents/SliderView';
import {heightAdapter} from '../uttils/adapterUtil';
import {fontscale} from '../uttils/adapterUtil';

let ImagePicker = NativeModules.ImageCropPicker;

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxIndex: 0,
      profileInfoServiceDone: false,
      saveProfileInfoServiceDone: false,
      isLoading: false,
      showDlg: false,
      dlgMsg: '',

      RepId: 0,
      AddressLine: '',
      Mobile: 0,
      PaypalEmail: '',
      Website: '',
      State: '',
      CreatedBy: null,
      RegId: 0,
      Status: '',
      FirstName: '',
      LastName: '',
      RegistrationType: '',
      RegisteredOn: '',
      ProductAccess: '',
      City: '',
      ZipCode: '',
      LoginEmail: '',

      dataLoaded: false,
      // checBoxArray: [false, false, false, false, false],

      showPhotoSelectionView: false,

      profileImageUri: '',
      croppedBase64: '',

      checkBoxesStatus: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.profileInfoServiceDone && props.profileInfo.FirstName === '') {
      return {isLoading: true};
    } else if (!state.dataLoaded && !state.isLoading) {
      console.log('assign values from props to state variable', props);
      return {
        RepId: props.profileInfo.RepId,
        AddressLine: props.profileInfo.AddressLine,
        Mobile: props.profileInfo.Mobile,
        PaypalEmail: props.profileInfo.PaypalEmail,
        Website: props.profileInfo.Website,
        State: props.profileInfo.State,
        CreatedBy: props.profileInfo.CreatedBy,
        RegId: props.profileInfo.RegId,
        Status: props.profileInfo.Status,
        FirstName: props.profileInfo.FirstName,
        LastName: props.profileInfo.LastName,
        RegistrationType: props.profileInfo.RegistrationType,
        RegisteredOn: props.profileInfo.RegisteredOn,
        ProductAccess: props.profileInfo.ProductAccess,
        City: props.profileInfo.City,
        ZipCode:
          props.profileInfo.ZipCode === null ||
          props.profileInfo.ZipCode === undefined
            ? ''
            : props.profileInfo.ZipCode,
        LoginEmail: props.profileInfo.LoginEmail,
        profileImageUri:
          props.profileInfo.ProfilePicture !== undefined ||
          props.profileInfo.ProfilePicture !== null
            ? props.profileInfo.ProfilePicture
            : '',
        dataLoaded: true,
      };
    }
    return {};
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.setState({isLoading: true, dataLoaded: false});
      this.props.getProfileInfo(
        this.onGetProfileInfoSuccess,
        this.onGetProfileInfoFailed,
      );
      this.props.getProviderInfo(
        this.onGetProviderInfoSuccess,
        this.onGetProviderInfoFailed,
      );
    });
  }

  getSelectedProviders = () => {
    const provider = [];

    this.state.checkBoxesStatus.forEach((el, index) => {
      if (el === true) {
        provider.push({
          Value: this.props.providersInfo[index].ProviderKey,
        });
      }
    });
    return provider;
  };

  parseProvidersInfo = () => {
    let checkBoxesStatus = [];
    this.props.providersInfo.forEach((element, index) => {
      if (element.ProviderUserSelection === 'Selected') {
        checkBoxesStatus[index] = true;
      } else {
        checkBoxesStatus[index] = false;
      }
    });
    // provdersSelected.length > 0 && provdersSelected.slice(-1,);
    return checkBoxesStatus;
  };

  onGetProviderInfoSuccess = () => {
    this.setState({
      checkBoxesStatus: this.parseProvidersInfo(),
    });
  };

  onGetProviderInfoFailed = () => {};

  onGetProfileInfoSuccess = () => {
    this.setState({profileInfoServiceDone: true, isLoading: false});
  };

  onGetProfileInfoFailed = errorMsg => {
    this.setState({
      isLoading: false,
      profileInfoServiceDone: true,
      dlgMsg: errorMsg,
      showDlg: true,
    });
  };

  onSaveProfileInfoSuccess = () => {
    this.setState({isLoading: false, saveProfileInfoServiceDone: false}, () =>
      // this.props.navigation.goBack(),
      this.props.navigation.navigate('ProfilePage'),
    );
  };

  onSaveProfileInfoFailed = errorMsg => {
    this.setState({
      isLoading: false,
      saveProfileInfoServiceDone: false,
      dlgMsg: errorMsg,
      showDlg: true,
    });
  };

  onUpdate = () => {
    const payload = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      PayPalEmail: this.state.PaypalEmail,
      Mobile: this.state.Mobile,
      Address:
        this.state.AddressLine == null || this.state.AddressLine === ''
          ? ''
          : this.state.AddressLine,
      State:
        this.state.State == null || this.state.State === ''
          ? ''
          : this.state.State,
      City:
        this.state.City == null || this.state.City === ''
          ? ''
          : this.state.City,
      ZipCode:
        this.state.ZipCode == null || this.state.ZipCode === ''
          ? ''
          : this.state.ZipCode,
      WebSite:
        this.state.Website == null || this.state.Website === ''
          ? ''
          : this.state.Website,
      RepKey: this.props.profileInfo.RepKey,
      Providers: this.getSelectedProviders(),
    };
    console.log('onUpdate payload ...', payload);
    this.setState({isLoading: true, saveProfileInfoServiceDone: true}, () =>
      this.props.saveProfileInfo(
        payload,
        this.onSaveProfileInfoSuccess,
        this.onSaveProfileInfoFailed,
      ),
    );
  };

  // onCheckBoxSelected = index => {
  //   this.setState({checkBoxIndex: index});
  // };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onCheckBoxSelected = (index, value) => {
    this.setState(state => {
      const checkBoxesStatus = [...state.checkBoxesStatus];
      checkBoxesStatus[index] = !state.checkBoxesStatus[index];
      return {
        checkBoxesStatus,
      };
    });
  };

  onFirnameChanged = FirstName => {
    console.log('First name.....', FirstName);
    this.setState({FirstName});
  };

  toggleSlider = value => {
    this.setState({showPhotoSelectionView: value});
  };

  cropeImage = () => {
    this.setState({isLoading: false});
    ImagePicker.openCropper({
      path: this.state.image.uri,
      width: 50, //image.cropRect.width,
      height: 50, //image.cropRect.height,
      cropperCircleOverlay: false,
      cropperToolbarTitle: 'Move and Scale',
      freeStyleCropEnabled: true,
      enableRotationGesture: true,
      borderCornerThickness: 4,
      guidelinesThickness: 2,
      snapRadius: 3,
      initialCropWindowPaddingRatio: 0.5,
      // fixAspectRatio: true,
      mediaType: 'photo',
      showCropFrame: true,
      // smartAlbums: true,
      // compressImageQuality: 0.1,
      showsSelectedCount: true,
      showCropGuidelines: true,
      cropperChooseText: 'Save',
      includeBase64: true,
    }).then(imageCroped => {
      console.log('imageCropped', imageCroped);
      this.setState({
        profileImageUri: imageCroped.path,
        croppedBase64: imageCroped.data,
      });
      const payload = {
        FileName: imageCroped.filename,
        intArray: imageCroped.data,
        ContentType: imageCroped.mime,
      };
      this.props.addProfilePicture(payload);
    });
  };

  onTakePhoto = () => {
    console.log('onTakePhoto .....');
    this.setState({showPhotoSelectionView: false});
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      mediaType: 'photo',
      includeBase64: true,
      includeExif: true,
      cropperChooseText: 'Save',
    })
      .then(image => {
        this.setState({isLoading: true});
        console.log('image taken...', image);
        this.setState(
          {
            image: {
              uri: image.path,
              width: image.width,
              height: image.height,
              mime: image.mime,
            },
            imageBase64: {
              uri: `data:${image.mime};base64,` + image.data,
              width: image.width,
              height: image.height,
            },
          },
          () => this.cropeImage(),
        );
      })
      .catch(e => alert(e));
  };

  onPickFromGaller = () => {
    this.setState({showPhotoSelectionView: false});
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      includeExif: true,
    })
      .then(image => {
        this.setState({isLoading: true});
        // console.log('received base64 image');
        this.setState(
          {
            image: {
              uri: image.path,
              width: image.width,
              height: image.height,
              mime: image.mime,
            },
            imageBase64: {
              uri: `data:${image.mime};base64,` + image.data,
              width: image.width,
              height: image.height,
            },
            images: null,
          },
          () => this.cropeImage(),
        );
      })
      .catch(e => alert(e));
  };

  renderProviders = () => {
    const checkBoxes = this.props.providersInfo?.map((el, index) => {
      return (
        <View style={styles.provider}>
          {/* <Image
            source={{
              isStatic: true,
              uri: el.ProviderIconImage,
              method: 'GET',
              // headers: {
              //   clubId: NetTool.clubId,
              //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
              // },
            }}
            style={styles.providerImage}
            defaultSource={4}
          /> */}
          <CheckBoxComponent
            btnName={el.ProviderName}
            onClick={() => this.onCheckBoxSelected(index)}
            isSelected={this.state.checkBoxesStatus[index]}
            btnTextStyle={{fontWeight: 'bold', fontSize: fontscale(25)}}
            imageUrl={el.ProviderIconImage}
          />
        </View>
      );
    });
    return checkBoxes;
  };

  render() {
    // const {navigation} = this.props;
    console.log('this.state.FirstName ....', this.state.FirstName);
    return (
      <View style={[BaseStyles.baseContainer]}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
          <View style={BaseStyles.userInfo}>
            <Text style={BaseStyles.userInfoTxt}>
              {I18n.t('editProfile.userInfo')}
            </Text>
          </View>
          <View
            style={styles.profileViewContainer}
            // showsVerticalScrollIndicator={false}
          >
            <View style={styles.photoContainer}>
              <View style={styles.photoView}>
                <Image
                  source={{
                    isStatic: true,
                    uri: this.state.profileImageUri, //this.props.profileInfo.ProfilePicture,
                    method: 'GET',
                    // headers: {
                    //   clubId: NetTool.clubId,
                    //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
                    // },
                  }}
                  style={styles.photo}
                />
              </View>
              <TouchableOpacity
                // onPress={() => this.props.navigation.navigate('ImagePicker')}>
                onPress={() => this.setState({showPhotoSelectionView: true})}>
                <View style={editStyles.editPhotoContainer}>
                  <Text style={editStyles.choosePhoto}>
                    {I18n.t('editProfile.editPhoto')}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TextInputComponent
              placeholder={I18n.t('editProfile.firstName')}
              autoFocus={false}
              onTextChange={FirstName => this.setState({FirstName})}
              // onTextChange={this.onFirnameChanged}
              inputValue={this.state.FirstName ?? ''}
            />
            <TextInputComponent
              placeholder={I18n.t('editProfile.lastName')}
              autoFocus={false}
              onTextChange={text => this.setState({LastName: text})}
              inputValue={this.state.LastName ?? ''}
            />
            <EmailInputComponent
              placeholder={I18n.t('editProfile.email')}
              autoFocus={false}
              // onTextChange={text => this.setState({PaypalEmail: text})}
              onEmailEntered={PaypalEmail => this.setState({PaypalEmail})}
              email={this.state.PaypalEmail ?? ''}
            />
            <TextInputComponent
              placeholder={I18n.t('editProfile.mobileNumber')}
              autoFocus={false}
              onTextChange={text => this.setState({Mobile: text})}
              inputValue={this.state.Mobile ?? ''}
              phone
            />
            <TextInputComponent
              placeholder={I18n.t('editProfile.address')}
              autoFocus={false}
              onTextChange={text => this.setState({AddressLine: text})}
              inputValue={this.state.AddressLine ?? ''}
            />
            <TextInputComponent
              placeholder={I18n.t('editProfile.state')}
              autoFocus={false}
              onTextChange={text => this.setState({State: text})}
              inputValue={this.state.State ?? ''}
            />
            <TextInputComponent
              placeholder={I18n.t('editProfile.city')}
              autoFocus={false}
              onTextChange={text => this.setState({City: text})}
              inputValue={this.state.City ?? ''}
            />
            <TextInputComponent
              placeholder={I18n.t('editProfile.zipCode')}
              autoFocus={false}
              onTextChange={text => this.setState({ZipCode: text})}
              inputValue={this.state.ZipCode ?? ''}
            />
            <TextInputComponent
              placeholder={I18n.t('editProfile.website')}
              autoFocus={false}
              onTextChange={text => this.setState({Website: text})}
              inputValue={this.state.Website ?? ''}
            />
            <View style={styles.labelContainer}>
              <ReadOnlyView
                label={I18n.t('userRegistration.providers')}
                labelStyle={styles.providersLabel}
              />
            </View>
            <View style={styles.providersContainer}>
              {this.renderProviders()}
            </View>
            <View style={BaseStyles.emptyHView} />
            <PrimaryButton
              btnName={I18n.t('editProfile.updateBtnName')}
              onSubmit={this.onUpdate}
            />
            <View style={BaseStyles.emptyHView} />
          </View>
          <Footer />
        </KeyboardAwareScrollView>
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
        {this.state.showPhotoSelectionView && (
          <TouchableWithoutFeedback
            style={editStyles.transparentView}
            onPress={() => this.toggleSlider(false)}>
            <View style={editStyles.transparentView} />
          </TouchableWithoutFeedback>
        )}

        {/* <Animated.View style={{width: '100%'}}> */}
        <SliderView
          visible={this.state.showPhotoSelectionView}
          animateFrom="bottom"
          height={heightAdapter(300)}
          width="100%">
          <View style={editStyles.sliderContainer}>
            <View style={editStyles.sliderBtnContainer}>
              <Text>
                <Icon name="camera" size={fontscale(25)} color="black" />
              </Text>
              <PrimaryButton
                btnStyle={editStyles.sliderBtnStyle}
                onSubmit={this.onTakePhoto}
                btnName={I18n.t('common.cameraBtnName')}
                btnTexStyle={editStyles.sliderBtnTxtStyle}
              />
            </View>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <View style={editStyles.sliderBtnContainer}>
              <Text>
                <Icon name="image" size={fontscale(25)} color="black" />
              </Text>
              <PrimaryButton
                btnStyle={editStyles.sliderBtnStyle}
                onSubmit={this.onPickFromGaller}
                btnName={I18n.t('common.galleryBtnName')}
                btnTexStyle={editStyles.sliderBtnTxtStyle}
              />
            </View>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <View style={editStyles.sliderBtnContainer}>
              <Text>
                <Icon name="window-close" size={fontscale(25)} color="black" />
              </Text>
              <PrimaryButton
                btnStyle={editStyles.sliderBtnStyle}
                onSubmit={() => this.toggleSlider(false)}
                btnName={I18n.t('common.cancelBtnName')}
                btnTexStyle={editStyles.sliderBtnTxtStyle}
              />
            </View>
          </View>
        </SliderView>
        {/* </Animated.View> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from profile info page ... ', state);
  return {
    profileInfo: state.profileInfo.profileInfo,
    providersInfo: state.profileInfo.providersInfo,
  };
};

const mapDispatchToProps = dispatch => ({
  getProfileInfo: (onSuccesscallback, onErrorcallback) =>
    dispatch(getProfileInfo(onSuccesscallback, onErrorcallback)),
  saveProfileInfo: (payload, onSuccesscallback, onErrorcallback) =>
    dispatch(saveProfileInfo(payload, onSuccesscallback, onErrorcallback)),

  addProfilePicture: (payload, onSuccesscallback, onErrorcallback) =>
    dispatch(addProfilePicture(payload, onSuccesscallback, onErrorcallback)),

  getProviderInfo: (onSuccesscallback, onErrorcallback) =>
    dispatch(getProviderInfo(onSuccesscallback, onErrorcallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfilePage);

// export default EditProfilePage;
