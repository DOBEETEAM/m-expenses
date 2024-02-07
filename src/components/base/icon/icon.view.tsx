import React, {useMemo} from 'react';
// @packages
import {IconProps} from './icon.type';
// @types
import {Ref} from '../base.type';
// @constants
import {BUNDLE_ICON_SETS, BundleIconSetName} from './icon.constant';

const _Icon = React.forwardRef(
  ({bundle = BundleIconSetName.IONICONS, ...props}: IconProps, ref: Ref) => {
    const IconComponent = useMemo(() => {
      return BUNDLE_ICON_SETS[bundle];
    }, [bundle]);

    return <IconComponent {...props} ref={ref} />;
  },
);

export const Icon = React.memo(_Icon);
