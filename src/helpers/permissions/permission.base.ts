import {
  RESULTS,
  PermissionStatus,
  Rationale,
  check,
  request,
  Permission,
} from 'react-native-permissions';

export const checkRequestPermission: (
  permission: Permission,
  rationale?: Rationale | (() => Promise<boolean>),
) => Promise<PermissionStatus> = async (permission, rationale) => {
  let result = await check(permission);

  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log(
        `This feature is not available (on this device / in this context)`,
      );
      break;
    case RESULTS.DENIED:
      console.log(
        `The ${permission} permission has not been requested / is denied but requestable`,
      );
      break;
    case RESULTS.LIMITED:
      console.log('The permission is limited: some actions are possible');
      break;
    case RESULTS.GRANTED:
      console.log(`The ${permission} permission is granted`);
      break;
    case RESULTS.BLOCKED:
      console.log(`The ${permission} permission is denied and not requestable anymore`);
      break;
  }

  if (result === RESULTS.DENIED) {
    result = await request(permission, rationale);
  }

  if (result === RESULTS.GRANTED) {
    return result;
  }

  return result;
};
