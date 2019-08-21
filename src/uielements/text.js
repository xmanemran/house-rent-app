import React, {Component} from 'react';
import {Text} from 'react-native';
import color from 'app/src/uielements/color';

export const size = {
  headline: 40,
  subheader: 20,
  quote: 20,
  largeBody: 14,
  body: 14,
  secondaryBody: 12,
  placeholder: 12,
  button: 10,
};

export default class extends Component {
  render() {
    const {type, children, style} = this.props;

    let styles = {color: color.body};
    switch (type) {
      case 'headline':
        styles = {
          ...styles,
          fontSize: size.headline,
          fontWeight: 'bold',
        };
        break;
      case 'subheader':
        styles = {
          ...styles,
          fontSize: size.subheader,
          fontWeight: 'bold',
        };
        break;
      case 'quote':
        styles = {
          ...styles,
          fontSize: size.quote,
          fontWeight: 'normal',
          fontStyle: 'italic',
        };
        break;
      case 'largeBody':
        styles = {
          ...styles,
          fontSize: size.largeBody,
          fontWeight: 'bold',
        };
        break;
      case 'body':
        styles = {
          ...styles,
          fontSize: size.body,
        };
        break;
      case 'secondaryBody':
        styles = {
          ...styles,
          fontSize: size.secondaryBody,
        };
        break;
      case 'placeholder':
        styles = {
          ...styles,
          fontSize: size.placeholder,
        };
        break;
      case 'button':
        styles = {
          ...styles,
          fontSize: size.button,
        };
        break;
      default:
        styles = {
          ...styles,
          fontSize: size.body,
        };
    }
    return (
      <Text {...this.props} style={[styles, style]}>
        {children}
      </Text>
    );
  }
}
