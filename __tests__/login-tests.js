import React from 'react';
import { shallow, mount } from 'enzyme';

import Login, { styles } from '../app/views/login';

/**
 * Numero de subcomponentes
 * contenido de etiquetas
 * estilos
 * tipos
 */

describe('Redering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
  let wrapper2;
  beforeEach(() => {
    wrapper2 = mount(<Login />);
  });
  it('Testing TextInput', () => {
    expect(wrapper.find('TextInput')).toHaveLength(2);
  });
  it('Testing TouchableOpacity', () => {
    expect(wrapper2.find('TouchableOpacity')).toHaveLength(1);
  });
  it('Label Text', () => {
    expect(wrapper.find('Text').contains('Email')).toBe(true);
    expect(wrapper.find('Text').contains('Password')).toBe(true);
  });
  it('Style', () => {
    expect(wrapper.find('View').prop('style')).toEqual(styles.container);
  });

  let _wrapper;
  beforeEach(() => {
    _wrapper = shallow(<Login cont="box" />);
  });
  it('Type style', () => {
    expect(_wrapper.find('View').prop('style')).toEqual(styles.box);
  });
});

describe('Interaction', () => {

});
