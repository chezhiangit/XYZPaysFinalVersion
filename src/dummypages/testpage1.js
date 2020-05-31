import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter, fontscale} from '../uttils/adapterUtil';
import Images from '../Assets/index';
import {
  getTrendingProducts,
  getProductDetailsData,
} from '../AppStore/trendingProductsActions';
import WarningDialog from '../common/UIComponents/warningDialog';
import Colors from '../uttils/Colors';

class DummyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // trendingData: [...trending],
      productsServiceDone: false,
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
    };
    // this.show=false;
    this.translate = new Animated.Value(0);
  }

  renderTrendingCard = ({item, index}) => {
    return (
      // <TouchableWithoutFeedback
      //   onPress={() => this.onProductCardSelected(index)}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.leftViewContainer}>
            <View style={styles.productView}>
              <View style={styles.dotWithTick}>
                <Text>
                  <Icon
                    name="check-circle"
                    size={fontscale(20)}
                    color={Colors.primaryAppColor}
                  />
                </Text>
              </View>
              <Text style={styles.productNameTxt}>{item.ProductName}</Text>
            </View>
            <View style={styles.amountStatusContainer}>
              <Text style={styles.amount}>{I18n.t('trending.amount')} </Text>
              <Text style={styles.amount}>
                {I18n.t('trending.currencySymbol')}
              </Text>
              <Text style={styles.amount}>{item.ComAmount}</Text>
            </View>
            {/* <View style={styles.trendingStatusContainer}>
              <Text style={styles.statusLabel}>
                {I18n.t('trending.status')}{' '}
              </Text>
              <Text style={styles.status}>{item.ComStatus}</Text>
            </View> */}
            <View style={styles.skuContainer}>
              <Text style={styles.skuLabel}>SKU: </Text>
              <Text style={styles.skuLabel}>SKUValues</Text>
            </View>
          </View>
          <View style={styles.rightViewContainer}>
            <Image
              source={{
                isStatic: true,
                uri: item.ProductPicture,
                method: 'GET',
                // headers: {
                //   clubId: NetTool.clubId,
                //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
                // },
              }}
              style={styles.trendingImage}
            />
          </View>
        </View>
        <View style={styles.transMessageContainer}>
          <Text style={styles.transMessage}>
          Txn Message: XYies Commission for Order Confirmation, Ref Acc:8260180012110837 (Admin)
          </Text>
        </View>
      </View>
      // </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <View style={BaseStyles.baseContainer}>
        <View style={styles.trendingContainer}>
          <FlatList
            style={styles.trendingList}
            // data={this.state.trendingData}
            data={this.props.trendingProductList}
            renderItem={this.renderTrendingCard}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.totalView}>

          </View>
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = state => {
  //   console.log('state from trending page ... ', state);
  return {
    trendingProductList: [
      {
        ProductKey: '7904346e-dc87-4836-af98-e8d2455041fa',
        ProductName: 'Spectrum - TV - Installed',
        ProductPicture:
          'https://xyzpays.blob.core.windows.net/productfile/ProductPicture/213ff9d1-e78e-4743-8d31-5ee90c7b4890_xyzies logo (1).png',
        Trending: 3,
        SKU: 'TV_INSTALLED',
        ComAmount: 0.0,
        ComStatus: 'In Active',
      },
      {
        ProductKey: 'fa4eac70-5d79-4325-b2eb-3120ea13bf29',
        ProductName: 'Workflow Test ',
        ProductPicture: 'https://rep.xyzies.com/MTheme/images/Product.png',
        Trending: 2,
        SKU: 'WF_REP_TXN',
        ComAmount: 0.0,
        ComStatus: 'In Active',
      },
      {
        ProductKey: '6cda25b8-b455-48fe-b502-bfa0168565ab',
        ProductName: 'Spectrum - TV - Confirmed',
        ProductPicture:
          'https://xyzpays.blob.core.windows.net/productfile/ProductPicture/06d0a98a-e246-477b-9b37-73bd3ed6a253_download.jpg',
        Trending: 2,
        SKU: 'TV_CONFIRMED',
        ComAmount: 0.0,
        ComStatus: 'In Active',
      },
      {
        ProductKey: '9fc4d38b-e67f-4149-b71c-ac7436bc07e3',
        ProductName: 'Highest Active Dealers of the month',
        ProductPicture: 'https://rep.xyzies.com/MTheme/images/Product.png',
        Trending: 2,
        SKU: 'HAD',
        ComAmount: 0.0,
        ComStatus: 'In Active',
      },
      {
        ProductKey: 'fe1a9fd1-0396-455c-bb94-a5e671840347',
        ProductName: 'Google Account Creation',
        ProductPicture: 'https://rep.xyzies.com/MTheme/images/Product.png',
        Trending: 17,
        SKU: 'GOOGLE_ACCOUNT_CREATION',
        ComAmount: 0.0,
        ComStatus: 'In Active',
      },
      {
        ProductKey: '5d0dcdd9-a004-41fe-866e-5d93aba6ae3a',
        ProductName: 'Google Code Received',
        ProductPicture: 'https://rep.xyzies.com/MTheme/images/Product.png',
        Trending: 24,
        SKU: 'GoogleCode_Received',
        ComAmount: 0.0,
        ComStatus: 'In Active',
      },
    ],
  };
};

const mapDispatchToProps = dispatch => ({
  //   getTrendingProducts: (onSuccesscallback, onErrorcallback) =>
  //     dispatch(getTrendingProducts(onSuccesscallback, onErrorcallback)),
  //   getProductDetailsData: (ProductKey, onSuccesscallback, onErrorcallback) =>
  //     dispatch(
  //       getProductDetailsData(ProductKey, onSuccesscallback, onErrorcallback),
  //     ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DummyPage);
