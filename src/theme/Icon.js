import { BackArrow } from './svgIcons/IcBackArrow';
import { Check } from './svgIcons/IcCheck';
import {Close} from './svgIcons/IcClose';
import { Email } from './svgIcons/IcEmail';
import { EyeClose } from './svgIcons/IcEyeClose';
import { EyeOpen } from './svgIcons/IcEyeOpen';
import { Lock } from './svgIcons/IcLock';
import { Person } from './svgIcons/IcPerson';
import { Trash } from './svgIcons/IcTrash';




export const IcClose = props => <Close {...props} />;
export const IcTrash = props => <Trash {...props} />;
export const IcCheck = props => <Check {...props} />;
export const IcBackArrow = props => <BackArrow {...props} />;
export const IcEmail = props => <Email {...props} />;
export const IcEyeOpen = props => <EyeOpen {...props} />;
export const IcEyeClose = props => <EyeClose {...props} />;
export const IcLock = props => <Lock {...props} />;
export const IcPerson = props => <Person {...props} />;