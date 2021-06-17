import { ActiveTweet } from './external/nodecg-twitter-widget/activeTweet';
import { TweetDataArray } from './external/nodecg-twitter-widget/tweetDataArray';
import { CreateNodecgInstance, CreateNodecgConstructor } from 'ts-nodecg/browser';

type ReplicantMap = {
  activeTweet: ActiveTweet,
  tweetDataArray: TweetDataArray
};

type TwitterWidgetInstance = CreateNodecgInstance<
  'nodecg-twitter-widget',
  {},
  ReplicantMap,
  {},
  true
>

type TwitterWidgetConstructor = CreateNodecgConstructor<
  'nodecg-twitter-widget',
  {},
  ReplicantMap,
  {},
  true
>

export {
  TwitterWidgetInstance,
  TwitterWidgetConstructor
}