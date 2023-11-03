import {Ref as RNRef} from 'react';

export type SingleChildren = React.ReactNode | JSX.Element;
export type Children = SingleChildren | SingleChildren[];
export type Ref = RNRef<any>;
