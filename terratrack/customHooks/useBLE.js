import {useMemo, useState, useEffect} from "react";
import { NativeModules,NativeEventEmitter,PermissionsAndroid, Platform } from "react-native";



import * as ExpoDevice from "expo-device";



function useBLE(){

    

    const requestAndroid31Permission = async ()=>{
        const bluetoothScanPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            {
                title:"Scan Permission",
                message:"App requires scan permission",
                buttonPositive: "Allow",
            }
        );
        const bluetoothConnectPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            {
                title:"Connect Permission",
                message:"App requires connect permission",
                buttonPositive: "Allow",
            }
        );
        const bluetoothFineLocationPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title:"Fine Location Permission",
                message:"App requires fine location permission",
                buttonPositive: "Allow",
            }
        );

        return (
            bluetoothScanPermission === "granted" &&
            bluetoothConnectPermission === "granted" &&
            bluetoothFineLocationPermission ==="granted"
        );
    }

    const requestPermissions = async () => {
        if(Platform.OS == "android"){
            if((ExpoDevice.platformApiLevel ?? -1) < 31){
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title:"Location Permission",
                        message:"Bluetooth requires location",
                        buttonPositive:"Allow"
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            }else{
                const isAndroid31PermissionGranted = await requestAndroid31Permission();
                return isAndroid31PermissionGranted;
            }
        }
        else{
            return true;
        }
    }
    const scanForPeripherals = ()=>{

    };
    return {
        requestPermissions,
        scanForPeripherals
    };
}
export default useBLE;