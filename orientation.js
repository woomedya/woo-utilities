import Orientation from 'react-native-orientation-locker';

var setStates = [];

export const manageInitialOrientationState = (setState) => {
    Orientation.getAutoRotateState((AutoRotate) => {
        if (AutoRotate) {
            var deviceOrientation = Orientation.getInitialOrientation();
            var result = deviceOrientation == "LANDSCAPE-LEFT" || deviceOrientation == "LANDSCAPE-RIGHT" || deviceOrientation == "PORTRAIT-UPSIDEDOWN";
            result == false ? Orientation.lockToPortrait() : Orientation.lockToLandscape();
            setState(result);
        }
    });
}

const onChange = (deviceOrientation) => {
    Orientation.getAutoRotateState((AutoRotate) => {
        if (AutoRotate) {
            var result = deviceOrientation == "LANDSCAPE-LEFT" || deviceOrientation == "LANDSCAPE-RIGHT" || deviceOrientation == "PORTRAIT-UPSIDEDOWN";
            result == false ? Orientation.lockToPortrait() : Orientation.lockToLandscape();
            setStates.forEach(setState => setState(result));
        }
    });
}

export const addDeviceOrientationSetState = (setState) => {
    Orientation.addDeviceOrientationListener(onChange);
    setStates.push(setState);
}

export const removeDeviceOrientationSetState = (setState) => {
    Orientation.removeDeviceOrientationListener(onChange);
    setStates = setStates.filter(x => x != setState);
}

export const getAutoRotate = async () => {
    return await new Promise(res => {
        Orientation.getAutoRotateState((AutoRotate) => {
            res(AutoRotate);
        });
    });
}