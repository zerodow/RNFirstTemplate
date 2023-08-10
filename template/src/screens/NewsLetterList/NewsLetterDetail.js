import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import SafeViewWithBg from 'src/components/SafeViewWithBg';
import Header from 'src/components/SafeViewWithBg/Header';
import {getDetailNewsletter} from 'src/api/other';
import {AppFont} from 'src/utilities/constants';
import HTMLContent from 'src/components/HTMLContent';
import Attachment from 'src/components/Attachments';
import CustomIndicator from 'src/components/CustomIndicator';

const NewsLetterDetail = ({route}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);

  //data pass route
  const {newsLetterId} = route.params;

  const [detail, setDetail] = useState(null);

  const haveAttachments = useMemo(
    () => detail?.attactments && detail?.attactments.length !== 0,
    [detail],
  );

  useEffect(() => {
    fetchAPI();
  }, [newsLetterId]);

  const fetchAPI = async () => {
    console.log('newsLetterId', newsLetterId);
    const res = await getDetailNewsletter({
      newId: newsLetterId,
    });

    if (res) {
      setDetail({
        ...res,
      });
    }
  };

  const renderDetail = useCallback(() => {
    return (
      <View style={styles.container}>
        <HTMLContent data={detail} />
        {/* {haveAttachments ? <Attachment data={detail.attactments} /> : null} */}
      </View>
    );
  }, [detail]);

  const renderLoading = useCallback(
    () => <CustomIndicator style={{marginTop: 20}} />,
    [],
  );

  return (
    <SafeViewWithBg customHeader={() => <Header title={'detail'} />}>
      {detail ? renderDetail() : renderLoading()}
    </SafeViewWithBg>
  );
};

export default NewsLetterDetail;

const makeStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: AppFont.fontSize.s16,
      fontWeight: AppFont.fontWeight.bold,
      color: colors.primary1,
    },
    time: {
      fontSize: AppFont.fontSize.s13,
      fontWeight: AppFont.fontWeight.normal,
      color: colors.neutral4,
      textAlign: 'right',
      marginVertical: 10,
    },
  });
