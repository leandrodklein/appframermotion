import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
    const { scrollXProgress } = useViewportScroll()

    const headerY = useTransform(scrollXProgress, [0.188, 0.198], ['0%', '-100%']);

    return <Container style={{ y: headerY }} />
};

export default Header;