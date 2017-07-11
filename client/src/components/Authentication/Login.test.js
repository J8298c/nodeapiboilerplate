import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';

describe('<Login />', () => {
    it('should render the login form', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Input)).to.have.length(2);
    })
})