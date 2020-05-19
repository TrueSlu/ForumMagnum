import { registerMigration, forEachDocumentBatchInCollection } from './migrationUtils';
import Posts from '../../lib/collections/posts/collection';
import { getSetting } from '../vulcan-lib';
import moment from 'moment'

const launchDateByForum = {
  LessWrong: 'TODO', // lw-look-here
  AlignmentForum: "Don't",
  EAForum: '2014-09-10'
}
const launchDate = launchDateByForum[getSetting('forumType') as string]

export function makeLowKarmaSelector (karmaThreshold: number): MongoSelector<DbPost> {
  return {
    postedAt: {
      $gt: moment.utc(launchDate).toDate(),
      $lt: moment.utc().subtract(1, 'year').toDate()
    },
    isEvent: {$ne: true},
    isFuture: false,
    draft: false,
    baseScore: {$lt: karmaThreshold},
    status: 2, // Others are not shown
  }
}

registerMigration({
  name: "noIndexLowKarma",
  dateWritten: "2020-05-13",
  idempotent: true,
  action: async () => {
    await forEachDocumentBatchInCollection({
      collection: Posts,
      batchSize: 100,
      filter: makeLowKarmaSelector(5),
      callback: async (posts: Array<DbPost>) => {
        // eslint-disable-next-line no-console
        console.log("Migrating post batch");
        const changes = posts.map(post => ({
          updateOne: {
            filter: { _id: post._id },
            update: {$set: {noIndex: true}}
          }
        }))
        await Posts.rawCollection().bulkWrite(changes, { ordered: false });
      }
    });
  }
});
