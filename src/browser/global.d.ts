import { bundleNodecgInstance, BundleNodecgConstructor } from '../nodecg/nodecg';
import { SpeedcontrolConstructor, SpeedcontrolInstance } from '../nodecg/speedcontrol';

declare global {
  const nodecg: bundleNodecgInstance & SpeedcontrolInstance

  const NodeCG: BundleNodecgConstructor & SpeedcontrolConstructor;
}