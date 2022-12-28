import React from 'react';
import { classes, Root } from '../styles/FooterStyles';

function Footer({ name, emoji }) {
    return (
        <Root className={classes.root}>
            {name}
            <span className={classes.emoji}>{emoji}</span>
        </Root>
    );
}

export default Footer;