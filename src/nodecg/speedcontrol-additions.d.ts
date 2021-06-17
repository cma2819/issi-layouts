import { SpeedcontrolUserAdditionArray } from './external/speedcontrol-additions/speedcontrolUserAdditionArray';
import { SpeedcontrolPlayerArray } from './external/speedcontrol-additions/speedcontrolPlayerArray';
import { CommentatorArray } from './external/speedcontrol-additions/commentatorArray';
import { SpeedcontrolCurrentRunIndex } from './external/speedcontrol-additions/speedcontrolCurrentRunIndex';
import { CreateNodecgInstance, CreateNodecgConstructor } from 'ts-nodecg/browser';

type ReplicantMap = {
    commentatorArray: CommentatorArray,
    speedcontrolCurrentRunIndex: SpeedcontrolCurrentRunIndex,
    speedcontrolUserAdditionArray: SpeedcontrolUserAdditionArray,
    speedcontrolPlayerArray: SpeedcontrolPlayerArray,
};

type ReplicantName = (
    'commentatorArray' |
    'speedcontrolCurrentRunIndex' |
    'speedcontrolUserAdditionArray' |
    'speedcontrolPlayerArray'
);

type SpeedcontrolAdditionsInstance = CreateNodecgInstance<
  'speedcontrol-additions',
  {},
  ReplicantMap,
  {},
  true
>

type SpeedcontrolAdditionsConstructor = CreateNodecgConstructor<
  'speedcontrol-additions',
  {},
  ReplicantMap,
  {},
  true
>

export {
  ReplicantMap,
  CommentatorArray,
  SpeedcontrolCurrentRunIndex,
  SpeedcontrolUserAdditionArray,
  SpeedcontrolPlayerArray,
  ReplicantName,
  SpeedcontrolAdditionsConstructor,
  SpeedcontrolAdditionsInstance
};
