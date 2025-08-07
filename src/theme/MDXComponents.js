import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import {Icon} from '@iconify/react';
import DocHeading from "../components/DocHeading";

export default {
    ...MDXComponents,
    IIcon: Icon,
    DocHeading: DocHeading,
};
