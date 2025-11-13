function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  let secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  console.log(`Door:${isDoorLocked}, Window:${isWindowClosed}, Alarm:${isAlarmOn}, OwnerInside:${isOwnerInside} => ${secure ? 'Secure' : 'Unsafe'}`);
}
checkSecurity(true, true, true, true);
checkSecurity(true, true, false, true);
checkSecurity(true, false, true, true);
checkSecurity(false, false, true, false);
