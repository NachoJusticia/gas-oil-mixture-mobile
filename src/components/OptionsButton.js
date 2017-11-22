import React from 'react';
import {
  Text
} from 'react-native';
import TouchableItem from 'react-navigation/src/views/TouchableItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import I18n from '../i18n';

const OptionsButton = ({ onPress, iconName = 'more-vert' }) =>
  <TouchableItem
    onPress={onPress}
    borderless
    style={{
      marginRight: 8,
    }}
  >
    <Text style={{
        color: 'grey',
        paddingRight: 10,
        fontSize: 12
    }}>
      {I18n.t('options')}
    </Text>
  </TouchableItem>;

export default OptionsButton;
