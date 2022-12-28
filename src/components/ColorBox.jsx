import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { classes, Root } from '../styles/ColorBoxStyles';

function Colorbox({ background, name, id, paletteId, showLink }) {
    const [copied, setCopy] = useState(false);

    function changeCopyState() {
        setCopy(true);
    }

    useEffect(() => {
        setTimeout(() => setCopy(false), 1500);
    });

    return (
        // <Root className={classes.root}>
            <CopyToClipboard text={background} onCopy={changeCopyState}>
                <Root className={classes.root} style={{ background }} showLink={showLink} background={background}>
                    <div 
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} 
                        style={{ background }}
                    />
                    <div className={`${classes.copyMessage} ${copied && classes.showMessage}`} >
                        <h1 className={classes.copied}>Copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>
                                {name}
                            </span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    { showLink &&
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>MORE</span>
                        </Link>
                    }
                </Root>
            </CopyToClipboard>
        // </Root>
    );
}

export default Colorbox;