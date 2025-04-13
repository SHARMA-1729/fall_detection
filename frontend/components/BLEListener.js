// components/BLEListener.js
import { useEffect } from 'react';
import { BleManager } from 'react-native-ble-plx';

const BLEListener = ({ onFallDetected }) => {
  useEffect(() => {
    const manager = new BleManager();

    manager.startDeviceScan(null, null, (error, device) => {
      if (error) return;

      // Device filter (your nRF52840 name or ID)
      if (device.name === 'FallDetector') {
        device.connect().then((connectedDevice) => {
          return connectedDevice.discoverAllServicesAndCharacteristics();
        }).then((device) => {
          device.monitorCharacteristicForService(
            'SERVICE_UUID',
            'CHARACTERISTIC_UUID',
            (error, characteristic) => {
              const value = characteristic?.value; // base64 data
              if (value && atob(value) === 'FALL_DETECTED') {
                onFallDetected();
              }
            }
          );
        });
      }
    });

    return () => {
      manager.stopDeviceScan();
      manager.destroy();
    };
  }, []);

  return null;
};

export default BLEListener;
