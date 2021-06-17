import { RunDataArray } from './external/speedcontrol/runDataArray';
import { RunDataActiveRunSurrounding } from './external/speedcontrol/runDataActiveRunSurrounding';
import { Timer } from './external/speedcontrol/timer';
import { CreateNodecgInstance, CreateNodecgConstructor } from 'ts-nodecg/browser';

type ReplicantMap = {
    runDataArray: RunDataArray,
    runDataActiveRunSurrounding: RunDataActiveRunSurrounding,
    timer: Timer
};

type SpeedcontrolReplicantName = (
    'runDataArray' |
    'runDataActiveRunSurrounding' |
    'timer'
);

type SpeedcontrolInstance = CreateNodecgInstance<
  'nodecg-speedcontrol',
  {},
  ReplicantMap,
  {},
  true
>

type SpeedcontrolConstructor = CreateNodecgConstructor<
  'nodecg-speedcontrol',
  {},
  ReplicantMap,
  {},
  true
>

export {
  RunDataArray,
  RunDataActiveRunSurrounding,
  Timer,
  SpeedcontrolReplicantName,
  SpeedcontrolInstance,
  SpeedcontrolConstructor
};
