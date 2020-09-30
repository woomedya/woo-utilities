import Orientation from 'react-native-orientation-locker';

var setStates = [];

lockByOrientation(Orientation.getInitialOrientation());

export const manageInitialOrientationState = (setState) => {
    Orientation.getAutoRotateState((AutoRotate) => {
        if (AutoRotate) {
            Orientation.getDeviceOrientation((deviceOrientation) => {
                setState(lockByOrientation(deviceOrientation));
            });
        } else {
            Orientation.getOrientation((deviceOrientation) => {
                var result = deviceOrientation == "LANDSCAPE-LEFT" || deviceOrientation == "LANDSCAPE-RIGHT" || deviceOrientation == "PORTRAIT-UPSIDEDOWN";
                setState(result);
            });
        }
    });
}

function lockByOrientation(orientation) {
    var result = orientation == "LANDSCAPE-LEFT" || orientation == "LANDSCAPE-RIGHT" || orientation == "PORTRAIT-UPSIDEDOWN";
    result == false ? Orientation.lockToPortrait() : Orientation.lockToLandscape();
    return result;
}

const onChange = (deviceOrientation) => {
    Orientation.getAutoRotateState((AutoRotate) => {
        if (AutoRotate) {
            setStates.forEach(setState => setState(lockByOrientation(deviceOrientation)));
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