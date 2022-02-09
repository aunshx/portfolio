import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TagCloud from 'TagCloud'

const container = '.tagcloud';
const texts = [
    '3D', 'TagCloud', 'JavaScript',
    'CSS3', 'Animation', 'Interactive',
    'Mouse', 'Rolling', 'Sphere',
    '6KB', 'v2.x',
];
const options = {};

const Cools2 = (props) => {
    useEffect(() => 
TagCloud(container, texts, options)
, [])
  return <div></div>;
};

Cools2.propTypes = {};

export default Cools2;
