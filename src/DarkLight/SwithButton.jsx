import React, { useContext } from "react";
import { AppContext } from "./../App";
import { Mode } from "./../common/utils";

const SwithButton = () => {
    const { colors, mode, setMode } = useContext(AppContext);
    const activeStyle = {
        backgroundColor: colors.activeButton
    }
    const passiveStyle = {
        backgroundColor: colors.passiveButton
    }

    const defaultStyle = {
        padding: '12px',
        borderRadius: '50px',
        color: colors.text,
        cursor: 'pointer'
    }


    function getStyleByMode(tMode) {
        if (tMode === mode) {
            return activeStyle;
        } else {
            return passiveStyle
        }
    }

    function changeMode(m) {
        setMode(m);
    }

    return (
        <div style={{
            display: 'flex',
            backgroundColor: colors.passiveButton,
            borderRadius: '50px',
            marginTop: '12px'
        }}>
            {/* hard code */}
            <label onClick={() => changeMode(Mode.LIGHT)} style={{
                ...getStyleByMode(Mode.LIGHT),
                ...defaultStyle
            }}>Light</label>
            <label onClick={() => changeMode(Mode.DARK)} style={{
                ...getStyleByMode(Mode.DARK),
                ...defaultStyle
            }}>Dark</label>
        </div>
    )
}

export default SwithButton